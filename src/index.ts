import { InvalidInternalDefinitionParameterError } from '@gammarers/aws-cdk-errors';
import * as events from 'aws-cdk-lib/aws-events';
import { Construct } from 'constructs';

/**
 * @TODO: Not yet supported Omit
 * https://github.com/aws/jsii/issues/4468
 * type omitKeys = 'eventPattern';
 * export interface CodePipelineStateChangeDetectionEventRuleProps extends Omit<events.RuleProps, 'eventPattern'> {}
 */

// RUNNING | SUCCEEDED | FAILED | TIMED_OUT | ABORTED | PENDING_REDRIVE

export enum TargetStatus {
  RUNNING = 'RUNNING',
  SUCCEEDED = 'SUCCEEDED',
  FAILED = 'FAILED',
  TIMED_OUT = 'TIMED_OUT',
  ABORTED = 'ABORTED',
  PENDING_REDRIVE = 'PENDING_REDRIVE',
}

export interface StepFunctionsExecutionStatusChangeDetectionEventRuleProps extends events.RuleProps {
  readonly targetStatuses?: TargetStatus[];
}

export class StepFunctionsExecutionStatusChangeDetectionEventRule extends events.Rule {
  constructor(scope: Construct, id: string, props: StepFunctionsExecutionStatusChangeDetectionEventRuleProps) {
    super(scope, id, {
      ...props,
      eventPattern: ((): events.EventPattern => {
        if (props.eventPattern) {
          throw new InvalidInternalDefinitionParameterError('eventPattern');
        }
        return {
          source: ['aws.states'],
          detailType: ['Step Functions Execution Status Change'],
          detail: (() => {
            // if (props.targetStateMachineArn) {
            if (props.targetStatuses) {
              return { status: props.targetStatuses };
            }
            return { status: ['FAILED', 'TIMED_OUT'] };
          })(),
        };
      })(),
    });
  }
}