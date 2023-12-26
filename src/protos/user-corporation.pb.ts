// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/user-corporation.proto
/* eslint-disable */

import type { ByteSource, PartialDeep } from "protoscript";
import * as protoscript from "protoscript";
import { JSONrequest, PBrequest } from "twirpscript";
// This is the minimum version supported by the current runtime.
// If this line fails typechecking, breaking changes have been introduced and this
// file needs to be regenerated by running `npx twirpscript`.
export { MIN_SUPPORTED_VERSION_0_0_56 } from "twirpscript";
import type { ClientConfiguration } from "twirpscript";

//========================================//
//                 Types                  //
//========================================//

export interface UsrID {
  id: string;
}

export interface UserCorporationId {
  id: string;
}

export interface GetUserCorporationsResponseDto {
  userCorporations: UserCorporationDto[];
}

export interface DeleteUserCorporationResponseDto {
  success: boolean;
}

export interface CreateUserCorporationDto {
  userId: string;
  corporationId: string;
}

export interface UserCorporationDto {
  id: string;
  userId: string;
  corporationId: string;
  createdAt: string;
  updatedAt: string;
}

//========================================//
//  UserCorporationProto Protobuf Client  //
//========================================//

export async function getUserCorporations(
  usrID: UsrID,
  config?: ClientConfiguration,
): Promise<GetUserCorporationsResponseDto> {
  const response = await PBrequest(
    "/UserCorporationProto/getUserCorporations",
    UsrID.encode(usrID),
    config,
  );
  return GetUserCorporationsResponseDto.decode(response);
}

export async function createUserCorporation(
  createUserCorporationDto: CreateUserCorporationDto,
  config?: ClientConfiguration,
): Promise<UserCorporationDto> {
  const response = await PBrequest(
    "/UserCorporationProto/createUserCorporation",
    CreateUserCorporationDto.encode(createUserCorporationDto),
    config,
  );
  return UserCorporationDto.decode(response);
}

export async function deleteUserCorporation(
  userCorporationId: UserCorporationId,
  config?: ClientConfiguration,
): Promise<DeleteUserCorporationResponseDto> {
  const response = await PBrequest(
    "/UserCorporationProto/deleteUserCorporation",
    UserCorporationId.encode(userCorporationId),
    config,
  );
  return DeleteUserCorporationResponseDto.decode(response);
}

//========================================//
//    UserCorporationProto JSON Client    //
//========================================//

export async function getUserCorporationsJSON(
  usrID: UsrID,
  config?: ClientConfiguration,
): Promise<GetUserCorporationsResponseDto> {
  const response = await JSONrequest(
    "/UserCorporationProto/getUserCorporations",
    UsrIDJSON.encode(usrID),
    config,
  );
  return GetUserCorporationsResponseDtoJSON.decode(response);
}

export async function createUserCorporationJSON(
  createUserCorporationDto: CreateUserCorporationDto,
  config?: ClientConfiguration,
): Promise<UserCorporationDto> {
  const response = await JSONrequest(
    "/UserCorporationProto/createUserCorporation",
    CreateUserCorporationDtoJSON.encode(createUserCorporationDto),
    config,
  );
  return UserCorporationDtoJSON.decode(response);
}

export async function deleteUserCorporationJSON(
  userCorporationId: UserCorporationId,
  config?: ClientConfiguration,
): Promise<DeleteUserCorporationResponseDto> {
  const response = await JSONrequest(
    "/UserCorporationProto/deleteUserCorporation",
    UserCorporationIdJSON.encode(userCorporationId),
    config,
  );
  return DeleteUserCorporationResponseDtoJSON.decode(response);
}

//========================================//
//          UserCorporationProto          //
//========================================//

export interface UserCorporationProto<Context = unknown> {
  getUserCorporations: (
    usrID: UsrID,
    context: Context,
  ) => Promise<GetUserCorporationsResponseDto> | GetUserCorporationsResponseDto;
  createUserCorporation: (
    createUserCorporationDto: CreateUserCorporationDto,
    context: Context,
  ) => Promise<UserCorporationDto> | UserCorporationDto;
  deleteUserCorporation: (
    userCorporationId: UserCorporationId,
    context: Context,
  ) =>
    | Promise<DeleteUserCorporationResponseDto>
    | DeleteUserCorporationResponseDto;
}

export function createUserCorporationProto<Context>(
  service: UserCorporationProto<Context>,
) {
  return {
    name: "UserCorporationProto",
    methods: {
      getUserCorporations: {
        name: "getUserCorporations",
        handler: service.getUserCorporations,
        input: { protobuf: UsrID, json: UsrIDJSON },
        output: {
          protobuf: GetUserCorporationsResponseDto,
          json: GetUserCorporationsResponseDtoJSON,
        },
      },
      createUserCorporation: {
        name: "createUserCorporation",
        handler: service.createUserCorporation,
        input: {
          protobuf: CreateUserCorporationDto,
          json: CreateUserCorporationDtoJSON,
        },
        output: { protobuf: UserCorporationDto, json: UserCorporationDtoJSON },
      },
      deleteUserCorporation: {
        name: "deleteUserCorporation",
        handler: service.deleteUserCorporation,
        input: { protobuf: UserCorporationId, json: UserCorporationIdJSON },
        output: {
          protobuf: DeleteUserCorporationResponseDto,
          json: DeleteUserCorporationResponseDtoJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const UsrID = {
  /**
   * Serializes UsrID to protobuf.
   */
  encode: function (msg: PartialDeep<UsrID>): Uint8Array {
    return UsrID._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UsrID from protobuf.
   */
  decode: function (bytes: ByteSource): UsrID {
    return UsrID._readMessage(
      UsrID.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UsrID with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UsrID>): UsrID {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UsrID>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (msg: UsrID, reader: protoscript.BinaryReader): UsrID {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const UserCorporationId = {
  /**
   * Serializes UserCorporationId to protobuf.
   */
  encode: function (msg: PartialDeep<UserCorporationId>): Uint8Array {
    return UserCorporationId._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UserCorporationId from protobuf.
   */
  decode: function (bytes: ByteSource): UserCorporationId {
    return UserCorporationId._readMessage(
      UserCorporationId.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UserCorporationId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UserCorporationId>): UserCorporationId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UserCorporationId>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UserCorporationId,
    reader: protoscript.BinaryReader,
  ): UserCorporationId {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const GetUserCorporationsResponseDto = {
  /**
   * Serializes GetUserCorporationsResponseDto to protobuf.
   */
  encode: function (
    msg: PartialDeep<GetUserCorporationsResponseDto>,
  ): Uint8Array {
    return GetUserCorporationsResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetUserCorporationsResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): GetUserCorporationsResponseDto {
    return GetUserCorporationsResponseDto._readMessage(
      GetUserCorporationsResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetUserCorporationsResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetUserCorporationsResponseDto>,
  ): GetUserCorporationsResponseDto {
    return {
      userCorporations: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetUserCorporationsResponseDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.userCorporations?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.userCorporations as any,
        UserCorporationDto._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetUserCorporationsResponseDto,
    reader: protoscript.BinaryReader,
  ): GetUserCorporationsResponseDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = UserCorporationDto.initialize();
          reader.readMessage(m, UserCorporationDto._readMessage);
          msg.userCorporations.push(m);
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const DeleteUserCorporationResponseDto = {
  /**
   * Serializes DeleteUserCorporationResponseDto to protobuf.
   */
  encode: function (
    msg: PartialDeep<DeleteUserCorporationResponseDto>,
  ): Uint8Array {
    return DeleteUserCorporationResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteUserCorporationResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteUserCorporationResponseDto {
    return DeleteUserCorporationResponseDto._readMessage(
      DeleteUserCorporationResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteUserCorporationResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteUserCorporationResponseDto>,
  ): DeleteUserCorporationResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteUserCorporationResponseDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.success) {
      writer.writeBool(1, msg.success);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: DeleteUserCorporationResponseDto,
    reader: protoscript.BinaryReader,
  ): DeleteUserCorporationResponseDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.success = reader.readBool();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const CreateUserCorporationDto = {
  /**
   * Serializes CreateUserCorporationDto to protobuf.
   */
  encode: function (msg: PartialDeep<CreateUserCorporationDto>): Uint8Array {
    return CreateUserCorporationDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreateUserCorporationDto from protobuf.
   */
  decode: function (bytes: ByteSource): CreateUserCorporationDto {
    return CreateUserCorporationDto._readMessage(
      CreateUserCorporationDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreateUserCorporationDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateUserCorporationDto>,
  ): CreateUserCorporationDto {
    return {
      userId: "",
      corporationId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateUserCorporationDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.userId) {
      writer.writeString(1, msg.userId);
    }
    if (msg.corporationId) {
      writer.writeString(2, msg.corporationId);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateUserCorporationDto,
    reader: protoscript.BinaryReader,
  ): CreateUserCorporationDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.userId = reader.readString();
          break;
        }
        case 2: {
          msg.corporationId = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

export const UserCorporationDto = {
  /**
   * Serializes UserCorporationDto to protobuf.
   */
  encode: function (msg: PartialDeep<UserCorporationDto>): Uint8Array {
    return UserCorporationDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UserCorporationDto from protobuf.
   */
  decode: function (bytes: ByteSource): UserCorporationDto {
    return UserCorporationDto._readMessage(
      UserCorporationDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UserCorporationDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UserCorporationDto>): UserCorporationDto {
    return {
      id: "",
      userId: "",
      corporationId: "",
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UserCorporationDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    if (msg.userId) {
      writer.writeString(2, msg.userId);
    }
    if (msg.corporationId) {
      writer.writeString(3, msg.corporationId);
    }
    if (msg.createdAt) {
      writer.writeString(4, msg.createdAt);
    }
    if (msg.updatedAt) {
      writer.writeString(5, msg.updatedAt);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UserCorporationDto,
    reader: protoscript.BinaryReader,
  ): UserCorporationDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        case 2: {
          msg.userId = reader.readString();
          break;
        }
        case 3: {
          msg.corporationId = reader.readString();
          break;
        }
        case 4: {
          msg.createdAt = reader.readString();
          break;
        }
        case 5: {
          msg.updatedAt = reader.readString();
          break;
        }
        default: {
          reader.skipField();
          break;
        }
      }
    }
    return msg;
  },
};

//========================================//
//          JSON Encode / Decode          //
//========================================//

export const UsrIDJSON = {
  /**
   * Serializes UsrID to JSON.
   */
  encode: function (msg: PartialDeep<UsrID>): string {
    return JSON.stringify(UsrIDJSON._writeMessage(msg));
  },

  /**
   * Deserializes UsrID from JSON.
   */
  decode: function (json: string): UsrID {
    return UsrIDJSON._readMessage(UsrIDJSON.initialize(), JSON.parse(json));
  },

  /**
   * Initializes UsrID with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UsrID>): UsrID {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (msg: PartialDeep<UsrID>): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: UsrID, json: any): UsrID {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};

export const UserCorporationIdJSON = {
  /**
   * Serializes UserCorporationId to JSON.
   */
  encode: function (msg: PartialDeep<UserCorporationId>): string {
    return JSON.stringify(UserCorporationIdJSON._writeMessage(msg));
  },

  /**
   * Deserializes UserCorporationId from JSON.
   */
  decode: function (json: string): UserCorporationId {
    return UserCorporationIdJSON._readMessage(
      UserCorporationIdJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UserCorporationId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UserCorporationId>): UserCorporationId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UserCorporationId>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UserCorporationId,
    json: any,
  ): UserCorporationId {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};

export const GetUserCorporationsResponseDtoJSON = {
  /**
   * Serializes GetUserCorporationsResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<GetUserCorporationsResponseDto>): string {
    return JSON.stringify(
      GetUserCorporationsResponseDtoJSON._writeMessage(msg),
    );
  },

  /**
   * Deserializes GetUserCorporationsResponseDto from JSON.
   */
  decode: function (json: string): GetUserCorporationsResponseDto {
    return GetUserCorporationsResponseDtoJSON._readMessage(
      GetUserCorporationsResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetUserCorporationsResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetUserCorporationsResponseDto>,
  ): GetUserCorporationsResponseDto {
    return {
      userCorporations: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetUserCorporationsResponseDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.userCorporations?.length) {
      json["userCorporations"] = msg.userCorporations.map(
        UserCorporationDtoJSON._writeMessage,
      );
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetUserCorporationsResponseDto,
    json: any,
  ): GetUserCorporationsResponseDto {
    const _userCorporations_ = json["userCorporations"];
    if (_userCorporations_) {
      for (const item of _userCorporations_) {
        const m = UserCorporationDtoJSON.initialize();
        UserCorporationDtoJSON._readMessage(m, item);
        msg.userCorporations.push(m);
      }
    }
    return msg;
  },
};

export const DeleteUserCorporationResponseDtoJSON = {
  /**
   * Serializes DeleteUserCorporationResponseDto to JSON.
   */
  encode: function (
    msg: PartialDeep<DeleteUserCorporationResponseDto>,
  ): string {
    return JSON.stringify(
      DeleteUserCorporationResponseDtoJSON._writeMessage(msg),
    );
  },

  /**
   * Deserializes DeleteUserCorporationResponseDto from JSON.
   */
  decode: function (json: string): DeleteUserCorporationResponseDto {
    return DeleteUserCorporationResponseDtoJSON._readMessage(
      DeleteUserCorporationResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteUserCorporationResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteUserCorporationResponseDto>,
  ): DeleteUserCorporationResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteUserCorporationResponseDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.success) {
      json["success"] = msg.success;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: DeleteUserCorporationResponseDto,
    json: any,
  ): DeleteUserCorporationResponseDto {
    const _success_ = json["success"];
    if (_success_) {
      msg.success = _success_;
    }
    return msg;
  },
};

export const CreateUserCorporationDtoJSON = {
  /**
   * Serializes CreateUserCorporationDto to JSON.
   */
  encode: function (msg: PartialDeep<CreateUserCorporationDto>): string {
    return JSON.stringify(CreateUserCorporationDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreateUserCorporationDto from JSON.
   */
  decode: function (json: string): CreateUserCorporationDto {
    return CreateUserCorporationDtoJSON._readMessage(
      CreateUserCorporationDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreateUserCorporationDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateUserCorporationDto>,
  ): CreateUserCorporationDto {
    return {
      userId: "",
      corporationId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateUserCorporationDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.userId) {
      json["userId"] = msg.userId;
    }
    if (msg.corporationId) {
      json["corporationId"] = msg.corporationId;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateUserCorporationDto,
    json: any,
  ): CreateUserCorporationDto {
    const _userId_ = json["userId"];
    if (_userId_) {
      msg.userId = _userId_;
    }
    const _corporationId_ = json["corporationId"];
    if (_corporationId_) {
      msg.corporationId = _corporationId_;
    }
    return msg;
  },
};

export const UserCorporationDtoJSON = {
  /**
   * Serializes UserCorporationDto to JSON.
   */
  encode: function (msg: PartialDeep<UserCorporationDto>): string {
    return JSON.stringify(UserCorporationDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes UserCorporationDto from JSON.
   */
  decode: function (json: string): UserCorporationDto {
    return UserCorporationDtoJSON._readMessage(
      UserCorporationDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UserCorporationDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UserCorporationDto>): UserCorporationDto {
    return {
      id: "",
      userId: "",
      corporationId: "",
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UserCorporationDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.userId) {
      json["userId"] = msg.userId;
    }
    if (msg.corporationId) {
      json["corporationId"] = msg.corporationId;
    }
    if (msg.createdAt) {
      json["createdAt"] = msg.createdAt;
    }
    if (msg.updatedAt) {
      json["updatedAt"] = msg.updatedAt;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UserCorporationDto,
    json: any,
  ): UserCorporationDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _userId_ = json["userId"];
    if (_userId_) {
      msg.userId = _userId_;
    }
    const _corporationId_ = json["corporationId"];
    if (_corporationId_) {
      msg.corporationId = _corporationId_;
    }
    const _createdAt_ = json["createdAt"];
    if (_createdAt_) {
      msg.createdAt = _createdAt_;
    }
    const _updatedAt_ = json["updatedAt"];
    if (_updatedAt_) {
      msg.updatedAt = _updatedAt_;
    }
    return msg;
  },
};
