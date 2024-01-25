import { createServer } from "http";
import { createTwirpServer } from "twirpscript";
import { friendListProtoHandler } from "./services/friend-list.service.ts";
import { friendRequestProtoHandler } from "./services/friend-request.service.ts";
import { corporationProtoHandler } from "./services/corporation.service.ts";
import { userCharityProtoHandler } from "./services/user-charity.service.ts";
import { charityProtoHandler } from "./services/charity.service.ts";
import { userCorporationProtoHandler } from "./services/user-corporation.service.ts";
import { charityOwnerProtoHandler } from "./services/charity-owner.service.ts";
import { corporationOwnerProtoHandler } from "./services/corporation-owner.service.ts";

const PORT = 8082;

const app = createTwirpServer([
  friendListProtoHandler, 
  friendRequestProtoHandler,
  charityProtoHandler,
  corporationProtoHandler,
  userCharityProtoHandler,
  userCorporationProtoHandler,
  charityOwnerProtoHandler,
  corporationOwnerProtoHandler,
]);

app.use(async (req, _ctx, next) => {
  if (req.method === "OPTIONS") {
    return {
      statusCode: 204,
      headers: {
        "access-control-allow-origin": "*",
        "access-control-request-method": "*",
        "access-control-allow-methods": "*",
        "access-control-allow-headers": "*",
        "content-type": "application/json",
      },
      body: "",
    };
  }

  const { statusCode, headers, body } = await next();
  return {
    statusCode,
    body,
    headers: {
      "access-control-allow-origin": "*",
      ...headers,
    },
  };
});

createServer(app).listen(PORT, () =>
  console.log(`Server listening on port ${PORT}`),
);