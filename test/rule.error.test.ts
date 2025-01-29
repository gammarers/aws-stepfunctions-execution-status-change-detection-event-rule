import { InvalidInternalDefinitionParameterError } from '@gammarers/aws-cdk-errors';
import { App, Stack } from 'aws-cdk-lib';
import { StepFunctionsExecutionStatusChangeDetectionEventRule } from '../src';

describe('Error Rule Check', () => {

  const app = new App();
  const stack = new Stack(app, 'TestingStack');

  it('Should Error', () => {
    expect(() => {
      new StepFunctionsExecutionStatusChangeDetectionEventRule(stack, 'StepFunctionsExecutionStatusChangeDetectionEventRule', {
        eventPattern: {
          source: ['aws.states'],
          detailType: ['Step Functions Execution Status Change'],
        },
      });
    }).toThrow(InvalidInternalDefinitionParameterError);
  });

});
