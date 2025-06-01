import * as cdk from 'aws-cdk-lib';
import { MagicCdkStack } from './MagicCdkStack';

const app = new cdk.App();
new MagicCdkStack(app, 'MagicCdkStack', {});