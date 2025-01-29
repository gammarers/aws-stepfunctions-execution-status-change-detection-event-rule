import { App, Stack } from 'aws-cdk-lib';
import { Template, Match } from 'aws-cdk-lib/assertions';
import * as events from 'aws-cdk-lib/aws-events';
import { StepFunctionsExecutionStatusChangeDetectionEventRule } from '../src';

describe('Default Rule Check', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  const rule = new StepFunctionsExecutionStatusChangeDetectionEventRule(stack, 'StepFunctionsExecutionStatusChangeDetectionEventRule', {
    // ruleName: 'step-function-execution-status-change-detection-event-rule',
  });

  it('Is Rule', async () => {
    expect(rule).toBeInstanceOf(events.Rule);
  });

  const template = Template.fromStack(stack);

  it('Should match event rule.', async () => {
    template.hasResourceProperties('AWS::Events::Rule', Match.objectEquals({
      State: 'ENABLED',
      EventPattern: Match.objectEquals({
        'source': [
          'aws.states',
        ],
        'detail-type': [
          'Step Functions Execution Status Change',
        ],
        'detail': {
          status: ['FAILED', 'TIMED_OUT'],
        },
      }),
    }));
  });

  it('Should match snapshot.', async () => {
    expect(template.toJSON()).toMatchSnapshot();
  });

});
