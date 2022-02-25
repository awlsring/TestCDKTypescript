import { Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Architecture, Code, LayerVersion, Runtime } from 'aws-cdk-lib/aws-lambda';
import path = require('path');
// import * as sqs from 'aws-cdk-lib/aws-sqs';
export class TestCdkTypescriptStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const testLayer = new LayerVersion(this, 'calc-layer', {
      compatibleRuntimes: [
        Runtime.NODEJS_12_X,
        Runtime.NODEJS_14_X,
      ],
      code: Code.fromAsset(path.join(__dirname, "/lambdas/layers/test-layer")),
      description: 'TestLayer',
    });
    new NodejsFunction(this, 'MyFunction', {
      entry: path.join(__dirname, "/lambdas/functions/test.ts"),
      handler: 'lambdaHandler',
      functionName: "Test-Typescript",
      architecture: Architecture.ARM_64,
      layers: [testLayer]
    });

  }
}
