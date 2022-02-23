export type AmplifyDependentResourcesAttributes = {
    "function": {
        "infohorusauthPostConfirmation": {
            "Name": "string",
            "Arn": "string",
            "LambdaExecutionRole": "string",
            "Region": "string"
        }
    },
    "auth": {
        "userPoolGroups": {
            "EndUsersGroupRole": "string",
            "AssessorsGroupRole": "string"
        },
        "infohorusauth": {
            "IdentityPoolId": "string",
            "IdentityPoolName": "string",
            "UserPoolId": "string",
            "UserPoolName": "string",
            "AppClientIDWeb": "string",
            "AppClientID": "string"
        }
    },
    "api": {
        "infohoruswebapp": {
            "GraphQLAPIIdOutput": "string",
            "GraphQLAPIEndpointOutput": "string"
        }
    },
    "storage": {
        "userDocuments": {
            "BucketName": "string",
            "Region": "string"
        }
    }
}