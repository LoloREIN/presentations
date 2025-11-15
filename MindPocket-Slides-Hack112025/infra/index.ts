import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";

const config = new pulumi.Config();
const projectName = "mindpocket-slides";
const environment = pulumi.getStack();

// GitHub repository configuration
const repository = "https://github.com/LoloREIN/presentations"; // Actualiza con tu repo
const branch = "main";

// Create IAM role for Amplify
const amplifyRole = new aws.iam.Role(`${projectName}-amplify-role`, {
    assumeRolePolicy: JSON.stringify({
        Version: "2012-10-17",
        Statement: [{
            Action: "sts:AssumeRole",
            Effect: "Allow",
            Principal: {
                Service: "amplify.amazonaws.com"
            }
        }]
    }),
    tags: {
        Name: `${projectName}-amplify-role`,
        Environment: environment,
        Project: projectName
    }
});

// Attach policies to Amplify role
new aws.iam.RolePolicyAttachment(`${projectName}-amplify-policy`, {
    role: amplifyRole.name,
    policyArn: "arn:aws:iam::aws:policy/AdministratorAccess-Amplify"
});

// Create Amplify App
const amplifyApp = new aws.amplify.App(`${projectName}-app`, {
    name: projectName,
    repository: repository,
    iamServiceRoleArn: amplifyRole.arn,
    buildSpec: `version: 1
frontend:
  phases:
    preBuild:
      commands:
        - cd MindPocket-Slides-Hack112025
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: MindPocket-Slides-Hack112025/dist
    files:
      - '**/*'
  cache:
    paths:
      - MindPocket-Slides-Hack112025/node_modules/**/*
`,
    customRules: [{
        source: "/<*>",
        status: "404",
        target: "/index.html",
    }],
    environmentVariables: {
        "_LIVE_UPDATES": JSON.stringify([{
            pkg: "node",
            type: "nvm",
            version: "18"
        }])
    },
    tags: {
        Name: projectName,
        Environment: environment,
        Project: projectName
    }
});

// Create branch
const amplifyBranch = new aws.amplify.Branch(`${projectName}-branch`, {
    appId: amplifyApp.id,
    branchName: branch,
    enableAutoBuild: true,
    framework: "React",
    stage: environment === "production" ? "PRODUCTION" : "DEVELOPMENT",
    tags: {
        Name: `${projectName}-${branch}`,
        Environment: environment
    }
});

// Export outputs
export const amplifyAppId = amplifyApp.id;
export const amplifyAppArn = amplifyApp.arn;
export const amplifyDefaultDomain = amplifyApp.defaultDomain;
export const amplifyBranchName = amplifyBranch.branchName;
export const appUrl = pulumi.interpolate`https://${branch}.${amplifyApp.defaultDomain}`;
