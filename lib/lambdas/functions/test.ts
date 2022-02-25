import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { FunctionMessage } from "../common/testlib/constants";
/* eslint-disable import/extensions, import/no-absolute-path */
import { Test1Message, Test2Message } from "/opt/nodejs/test-layer";
  
export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

  // Test message of imports
  const message = {
    "localMessage": FunctionMessage,
    "layerMessage1": Test1Message,
    "layerMessage2": Test2Message
  }

  return {
    statusCode: 200,
    body: JSON.stringify(message)
  }
}