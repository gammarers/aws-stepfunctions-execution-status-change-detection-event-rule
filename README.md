# AWS Step Functions Execution Status Change Detection Event Rule

[![GitHub](https://img.shields.io/github/license/gammarers/aws-stepfunctions-execution-status-change-detection-event-rule?style=flat-square)](https://github.com/gammarers/aws-stepfunctions-execution-status-change-detection-event-rule/blob/main/LICENSE)
[![npm (scoped)](https://img.shields.io/npm/v/@gammarers/aws-stepfunctions-execution-status-change-detection-event-rule?style=flat-square)](https://www.npmjs.com/package/@gammarers/aws-stepfunctions-execution-status-change-detection-event-rule)
[![GitHub Workflow Status (branch)](https://img.shields.io/github/actions/workflow/status/gammarers/aws-stepfunctions-execution-status-change-detection-event-rule/release.yml?branch=main&label=release&style=flat-square)](https://github.com/gammarers/aws-stepfunctions-execution-status-change-detection-event-rule/actions/workflows/release.yml)
[![GitHub release (latest SemVer)](https://img.shields.io/github/v/release/gammarers/aws-stepfunctions-execution-status-change-detection-event-rule?sort=semver&style=flat-square)](https://github.com/gammarers/aws-stepfunctions-execution-status-change-detection-event-rule/releases)

[![View on Construct Hub](https://constructs.dev/badge?package=@gammarers/aws-stepfunctions-execution-status-change-detection-event-rule)](https://constructs.dev/packages/@gammarers/aws-stepfunctions-execution-status-change-detection-event-rule)

This an AWS Step Functions execution status change detection event rule.
default catch status is fail or timeout.

## Install

### TypeScript

#### install by npm

```shell
npm install @gammarers/aws-stepfunctions-execution-status-change-detection-event-rule
```

#### install by yarn

```shell
yarn add @gammarers/aws-stepfunctions-execution-status-change-detection-event-rule
```

## Example

### Code

```typescript
import { StepFunctionsExecutionStatusChangeDetectionEventRule } from '@gammarers/aws-stepfunctions-execution-status-change-detection-event-rule';

declare const handler: lambda.Function;

new StepFunctionsExecutionStatusChangeDetectionEventRule(stack, 'StepFunctionsExecutionStatusChangeDetectionEventRule', {
  targets: [
    new targets.LambdaFunction(handler),
  ],
});
```

# License

This project is licensed under the Apache-2.0 License.
