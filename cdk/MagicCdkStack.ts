import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda'
import * as apigateway from 'aws-cdk-lib/aws-apigateway';


export class MagicCdkStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);
        const lambdaFunc = this.wizardAPILambda();
        this.lambdaAPIGateway(lambdaFunc);
    }

    private wizardAPILambda(): lambda.Function {
        return new lambda.Function(this, 'WizardAPILambda', {
            code: lambda.Code.fromAsset('lambda'),
            runtime: lambda.Runtime.NODEJS_LATEST,
            handler: 'lambda_handler.handler',
            timeout: cdk.Duration.seconds(5),
            environment: {
                MTG_WIZARD_API_URL: 'https://api.magicthegathering.io/v1/cards?subtypes=Wizard'
            }
        });
    }

    private lambdaAPIGateway(lambdaFunc: lambda.Function): void {
        const api = new apigateway.LambdaRestApi(this, 'WizardsAPIGateway', {
            handler: lambdaFunc,
            proxy: false
        });

        const wizards = api.root.addResource('wizards');
        wizards.addMethod('GET');
    }
}