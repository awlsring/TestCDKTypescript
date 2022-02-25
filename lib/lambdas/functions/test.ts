import { APIGatewayProxyEvent, APIGatewayProxyResult } from "aws-lambda";
import { FunctionMessage } from "../common/testlib/constants";
/* eslint-disable import/extensions, import/no-absolute-path */
import { Test1Message } from "/opt/nodejs/test1";
/* eslint-disable import/extensions, import/no-absolute-path */
import { Test2Message } from "/opt/nodejs/test2";
  
export const lambdaHandler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {

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