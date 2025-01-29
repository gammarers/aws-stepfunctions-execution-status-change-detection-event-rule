import { awscdk, javascript } from 'projen';
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'yicr',
  authorAddress: 'yicr@users.noreply.github.com',
  cdkVersion: '2.120.0',
  typescriptVersion: '5.7.x',
  jsiiVersion: '5.7.x',
  defaultReleaseBranch: 'main',
  name: '@gammarers/aws-step-functions-execution-status-change-detection-event-rule',
  description: 'This an AWS Step Functions execution status change detection event rule.',
  projenrcTs: true,
  repositoryUrl: 'https://github.com/gammarers/aws-step-functions-execution-status-change-detection-event-rule.git',
  deps: [
    '@gammarers/aws-cdk-errors@^1.2.10',
  ],
  releaseToNpm: false, // todo:temp
  npmAccess: javascript.NpmAccess.PUBLIC,
  minNodeVersion: '18.0.0',
  workflowNodeVersion: '22.x',
  depsUpgradeOptions: {
    workflowOptions: {
      labels: ['auto-approve', 'auto-merge'],
      schedule: javascript.UpgradeDependenciesSchedule.expressions(['11 20 * * 2']),
    },
  },
  autoApproveOptions: {
    secret: 'GITHUB_TOKEN',
    allowedUsernames: ['yicr'],
  },
});
project.synth();