import { GraphQLClient } from "graphql-request";
import { Handler } from "@netlify/functions";
import jwt from "jsonwebtoken";
import { getSdk } from "../common/sdk";
import crypto from "crypto";

const handler: Handler = async (event, context) => {
  interface AdminregisterInput {
    username: string;
    password: string;
  }

  try {
    const { body, headers } = event;
    console.log('headers', headers);
    
    if (
      !headers["x-pizzastack-secret-key"] ||
      headers["x-pizzastack-secret-key"] !== "mypizzastacksecretkey"
    ) {
      return {
        statusCode: 403,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: "x-pizzastack-secret-key is missing or invalid",
        }),
      };
    }

    const input: AdminregisterInput = JSON.parse(body!).input.admin;

    const sdk = getSdk(new GraphQLClient("http://localhost:8080/v1/graphql"));

    const passwordHash = crypto
      .pbkdf2Sync(input.password, "mygreatsaltsecret", 1000, 64, "sha512")
      .toString("hex");

    // const data = await sdk.InsertAdmin(input)
    const data = await sdk.InsertAdmin({
      username: input.username,
      password: passwordHash,
    });

    console.log("data", data);

    const accessToken = jwt.sign(
      {
        "https://hasura.io/jwt/claims": {
          "x-hasura-default-role": "admin",
          "x-hasura-allowed-roles": ["admin"],
          // 'x-hasura-user-id': data.insert_admin?.returning[0].id,
          "x-hasura-user-id": data.insert_admin_one?.id,
        },
      },
      "mygreatjwtsecret"
    );

    return {
      statusCode: 200,
      body: JSON.stringify({ accessToken }),
    };
  } catch (error: any) {
    // Вивід у консоль детальної помилки
    console.error("GraphQL Error:", error?.response?.errors ?? error);

    const message = error?.response?.errors?.[0]?.message || "Unknown error";

    return {
      statusCode: 400, // або 409, якщо хочеш позначити конфлікт
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message }),
    };
  }
};

export { handler };
