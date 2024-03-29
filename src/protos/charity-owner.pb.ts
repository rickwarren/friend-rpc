// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/charity-owner.proto
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

export interface CharityID {
  id: string;
}

export interface GetCharityOwnersResponseDto {
  charityOwners: CharityOwnerDto[];
}

export interface DeleteCharityOwnerResponseDto {
  success: boolean;
}

export interface CreateCharityOwnerDto {
  userId: string;
  charityId: string;
}

export interface CharityOwnerDto {
  id: string;
  userId: string;
  charityId: string;
  createdAt: string;
  updatedAt: string;
}

//========================================//
//   CharityOwnerProto Protobuf Client    //
//========================================//

export async function getCharityOwners(
  charityID: CharityID,
  config?: ClientConfiguration,
): Promise<GetCharityOwnersResponseDto> {
  const response = await PBrequest(
    "/CharityOwnerProto/getCharityOwners",
    CharityID.encode(charityID),
    config,
  );
  return GetCharityOwnersResponseDto.decode(response);
}

export async function createCharityOwner(
  createCharityOwnerDto: CreateCharityOwnerDto,
  config?: ClientConfiguration,
): Promise<CharityOwnerDto> {
  const response = await PBrequest(
    "/CharityOwnerProto/createCharityOwner",
    CreateCharityOwnerDto.encode(createCharityOwnerDto),
    config,
  );
  return CharityOwnerDto.decode(response);
}

export async function deleteCharityOwner(
  charityID: CharityID,
  config?: ClientConfiguration,
): Promise<DeleteCharityOwnerResponseDto> {
  const response = await PBrequest(
    "/CharityOwnerProto/deleteCharityOwner",
    CharityID.encode(charityID),
    config,
  );
  return DeleteCharityOwnerResponseDto.decode(response);
}

//========================================//
//     CharityOwnerProto JSON Client      //
//========================================//

export async function getCharityOwnersJSON(
  charityID: CharityID,
  config?: ClientConfiguration,
): Promise<GetCharityOwnersResponseDto> {
  const response = await JSONrequest(
    "/CharityOwnerProto/getCharityOwners",
    CharityIDJSON.encode(charityID),
    config,
  );
  return GetCharityOwnersResponseDtoJSON.decode(response);
}

export async function createCharityOwnerJSON(
  createCharityOwnerDto: CreateCharityOwnerDto,
  config?: ClientConfiguration,
): Promise<CharityOwnerDto> {
  const response = await JSONrequest(
    "/CharityOwnerProto/createCharityOwner",
    CreateCharityOwnerDtoJSON.encode(createCharityOwnerDto),
    config,
  );
  return CharityOwnerDtoJSON.decode(response);
}

export async function deleteCharityOwnerJSON(
  charityID: CharityID,
  config?: ClientConfiguration,
): Promise<DeleteCharityOwnerResponseDto> {
  const response = await JSONrequest(
    "/CharityOwnerProto/deleteCharityOwner",
    CharityIDJSON.encode(charityID),
    config,
  );
  return DeleteCharityOwnerResponseDtoJSON.decode(response);
}

//========================================//
//           CharityOwnerProto            //
//========================================//

export interface CharityOwnerProto<Context = unknown> {
  getCharityOwners: (
    charityID: CharityID,
    context: Context,
  ) => Promise<GetCharityOwnersResponseDto> | GetCharityOwnersResponseDto;
  createCharityOwner: (
    createCharityOwnerDto: CreateCharityOwnerDto,
    context: Context,
  ) => Promise<CharityOwnerDto> | CharityOwnerDto;
  deleteCharityOwner: (
    charityID: CharityID,
    context: Context,
  ) => Promise<DeleteCharityOwnerResponseDto> | DeleteCharityOwnerResponseDto;
}

export function createCharityOwnerProto<Context>(
  service: CharityOwnerProto<Context>,
) {
  return {
    name: "CharityOwnerProto",
    methods: {
      getCharityOwners: {
        name: "getCharityOwners",
        handler: service.getCharityOwners,
        input: { protobuf: CharityID, json: CharityIDJSON },
        output: {
          protobuf: GetCharityOwnersResponseDto,
          json: GetCharityOwnersResponseDtoJSON,
        },
      },
      createCharityOwner: {
        name: "createCharityOwner",
        handler: service.createCharityOwner,
        input: {
          protobuf: CreateCharityOwnerDto,
          json: CreateCharityOwnerDtoJSON,
        },
        output: { protobuf: CharityOwnerDto, json: CharityOwnerDtoJSON },
      },
      deleteCharityOwner: {
        name: "deleteCharityOwner",
        handler: service.deleteCharityOwner,
        input: { protobuf: CharityID, json: CharityIDJSON },
        output: {
          protobuf: DeleteCharityOwnerResponseDto,
          json: DeleteCharityOwnerResponseDtoJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const CharityID = {
  /**
   * Serializes CharityID to protobuf.
   */
  encode: function (msg: PartialDeep<CharityID>): Uint8Array {
    return CharityID._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CharityID from protobuf.
   */
  decode: function (bytes: ByteSource): CharityID {
    return CharityID._readMessage(
      CharityID.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CharityID with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CharityID>): CharityID {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CharityID>,
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
    msg: CharityID,
    reader: protoscript.BinaryReader,
  ): CharityID {
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

export const GetCharityOwnersResponseDto = {
  /**
   * Serializes GetCharityOwnersResponseDto to protobuf.
   */
  encode: function (msg: PartialDeep<GetCharityOwnersResponseDto>): Uint8Array {
    return GetCharityOwnersResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetCharityOwnersResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): GetCharityOwnersResponseDto {
    return GetCharityOwnersResponseDto._readMessage(
      GetCharityOwnersResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetCharityOwnersResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetCharityOwnersResponseDto>,
  ): GetCharityOwnersResponseDto {
    return {
      charityOwners: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetCharityOwnersResponseDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.charityOwners?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.charityOwners as any,
        CharityOwnerDto._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetCharityOwnersResponseDto,
    reader: protoscript.BinaryReader,
  ): GetCharityOwnersResponseDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = CharityOwnerDto.initialize();
          reader.readMessage(m, CharityOwnerDto._readMessage);
          msg.charityOwners.push(m);
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

export const DeleteCharityOwnerResponseDto = {
  /**
   * Serializes DeleteCharityOwnerResponseDto to protobuf.
   */
  encode: function (
    msg: PartialDeep<DeleteCharityOwnerResponseDto>,
  ): Uint8Array {
    return DeleteCharityOwnerResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteCharityOwnerResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteCharityOwnerResponseDto {
    return DeleteCharityOwnerResponseDto._readMessage(
      DeleteCharityOwnerResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteCharityOwnerResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteCharityOwnerResponseDto>,
  ): DeleteCharityOwnerResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteCharityOwnerResponseDto>,
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
    msg: DeleteCharityOwnerResponseDto,
    reader: protoscript.BinaryReader,
  ): DeleteCharityOwnerResponseDto {
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

export const CreateCharityOwnerDto = {
  /**
   * Serializes CreateCharityOwnerDto to protobuf.
   */
  encode: function (msg: PartialDeep<CreateCharityOwnerDto>): Uint8Array {
    return CreateCharityOwnerDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreateCharityOwnerDto from protobuf.
   */
  decode: function (bytes: ByteSource): CreateCharityOwnerDto {
    return CreateCharityOwnerDto._readMessage(
      CreateCharityOwnerDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreateCharityOwnerDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateCharityOwnerDto>,
  ): CreateCharityOwnerDto {
    return {
      userId: "",
      charityId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateCharityOwnerDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.userId) {
      writer.writeString(1, msg.userId);
    }
    if (msg.charityId) {
      writer.writeString(2, msg.charityId);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateCharityOwnerDto,
    reader: protoscript.BinaryReader,
  ): CreateCharityOwnerDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.userId = reader.readString();
          break;
        }
        case 2: {
          msg.charityId = reader.readString();
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

export const CharityOwnerDto = {
  /**
   * Serializes CharityOwnerDto to protobuf.
   */
  encode: function (msg: PartialDeep<CharityOwnerDto>): Uint8Array {
    return CharityOwnerDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CharityOwnerDto from protobuf.
   */
  decode: function (bytes: ByteSource): CharityOwnerDto {
    return CharityOwnerDto._readMessage(
      CharityOwnerDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CharityOwnerDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CharityOwnerDto>): CharityOwnerDto {
    return {
      id: "",
      userId: "",
      charityId: "",
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CharityOwnerDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    if (msg.userId) {
      writer.writeString(2, msg.userId);
    }
    if (msg.charityId) {
      writer.writeString(3, msg.charityId);
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
    msg: CharityOwnerDto,
    reader: protoscript.BinaryReader,
  ): CharityOwnerDto {
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
          msg.charityId = reader.readString();
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

export const CharityIDJSON = {
  /**
   * Serializes CharityID to JSON.
   */
  encode: function (msg: PartialDeep<CharityID>): string {
    return JSON.stringify(CharityIDJSON._writeMessage(msg));
  },

  /**
   * Deserializes CharityID from JSON.
   */
  decode: function (json: string): CharityID {
    return CharityIDJSON._readMessage(
      CharityIDJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CharityID with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CharityID>): CharityID {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CharityID>,
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
  _readMessage: function (msg: CharityID, json: any): CharityID {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};

export const GetCharityOwnersResponseDtoJSON = {
  /**
   * Serializes GetCharityOwnersResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<GetCharityOwnersResponseDto>): string {
    return JSON.stringify(GetCharityOwnersResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetCharityOwnersResponseDto from JSON.
   */
  decode: function (json: string): GetCharityOwnersResponseDto {
    return GetCharityOwnersResponseDtoJSON._readMessage(
      GetCharityOwnersResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetCharityOwnersResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetCharityOwnersResponseDto>,
  ): GetCharityOwnersResponseDto {
    return {
      charityOwners: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetCharityOwnersResponseDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.charityOwners?.length) {
      json["charityOwners"] = msg.charityOwners.map(
        CharityOwnerDtoJSON._writeMessage,
      );
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetCharityOwnersResponseDto,
    json: any,
  ): GetCharityOwnersResponseDto {
    const _charityOwners_ = json["charityOwners"];
    if (_charityOwners_) {
      for (const item of _charityOwners_) {
        const m = CharityOwnerDtoJSON.initialize();
        CharityOwnerDtoJSON._readMessage(m, item);
        msg.charityOwners.push(m);
      }
    }
    return msg;
  },
};

export const DeleteCharityOwnerResponseDtoJSON = {
  /**
   * Serializes DeleteCharityOwnerResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<DeleteCharityOwnerResponseDto>): string {
    return JSON.stringify(DeleteCharityOwnerResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeleteCharityOwnerResponseDto from JSON.
   */
  decode: function (json: string): DeleteCharityOwnerResponseDto {
    return DeleteCharityOwnerResponseDtoJSON._readMessage(
      DeleteCharityOwnerResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteCharityOwnerResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteCharityOwnerResponseDto>,
  ): DeleteCharityOwnerResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteCharityOwnerResponseDto>,
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
    msg: DeleteCharityOwnerResponseDto,
    json: any,
  ): DeleteCharityOwnerResponseDto {
    const _success_ = json["success"];
    if (_success_) {
      msg.success = _success_;
    }
    return msg;
  },
};

export const CreateCharityOwnerDtoJSON = {
  /**
   * Serializes CreateCharityOwnerDto to JSON.
   */
  encode: function (msg: PartialDeep<CreateCharityOwnerDto>): string {
    return JSON.stringify(CreateCharityOwnerDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreateCharityOwnerDto from JSON.
   */
  decode: function (json: string): CreateCharityOwnerDto {
    return CreateCharityOwnerDtoJSON._readMessage(
      CreateCharityOwnerDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreateCharityOwnerDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateCharityOwnerDto>,
  ): CreateCharityOwnerDto {
    return {
      userId: "",
      charityId: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateCharityOwnerDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.userId) {
      json["userId"] = msg.userId;
    }
    if (msg.charityId) {
      json["charityId"] = msg.charityId;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateCharityOwnerDto,
    json: any,
  ): CreateCharityOwnerDto {
    const _userId_ = json["userId"];
    if (_userId_) {
      msg.userId = _userId_;
    }
    const _charityId_ = json["charityId"];
    if (_charityId_) {
      msg.charityId = _charityId_;
    }
    return msg;
  },
};

export const CharityOwnerDtoJSON = {
  /**
   * Serializes CharityOwnerDto to JSON.
   */
  encode: function (msg: PartialDeep<CharityOwnerDto>): string {
    return JSON.stringify(CharityOwnerDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CharityOwnerDto from JSON.
   */
  decode: function (json: string): CharityOwnerDto {
    return CharityOwnerDtoJSON._readMessage(
      CharityOwnerDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CharityOwnerDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CharityOwnerDto>): CharityOwnerDto {
    return {
      id: "",
      userId: "",
      charityId: "",
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CharityOwnerDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.userId) {
      json["userId"] = msg.userId;
    }
    if (msg.charityId) {
      json["charityId"] = msg.charityId;
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
  _readMessage: function (msg: CharityOwnerDto, json: any): CharityOwnerDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _userId_ = json["userId"];
    if (_userId_) {
      msg.userId = _userId_;
    }
    const _charityId_ = json["charityId"];
    if (_charityId_) {
      msg.charityId = _charityId_;
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
