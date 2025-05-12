import { Handler } from "@netlify/functions";
import jwt from "jsonwebtoken";

const handler: Handler = async (event, context) => {
  interface AdminregisterInput {
    username: string;
    password: string;
  }

  const { body } = event;

  const input: AdminregisterInput = JSON.parse(body!).input.admin;

  const accessToken = jwt.sign(
    {
      "https://hasura.io/jwt/claims": {
        "x-hasura-default-role": "admin",
        "x-hasura-allowed-roles": ["admin"],
        "x-hasura-user-id": "123456789",
      },
    },
    "mygreatjwtsecret"
  );

  return {
    statusCode: 200,
    body: JSON.stringify({ accessToken: accessToken }),
  };
};

export { handler };
