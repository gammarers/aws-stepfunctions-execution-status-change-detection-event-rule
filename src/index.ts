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

export interface StepFunctionsExecutionStatusChangeDetectionEventRuleProps extends events.RuleProps {
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
            // if (props.targetStates) {
            //  return {
            //    status: ['FAILED', 'TIMED_OUT'],
            //  };
            // }
            return { status: ['FAILED', 'TIMED_OUT'] };
          })(),
        };
      })(),
    });
  }
}