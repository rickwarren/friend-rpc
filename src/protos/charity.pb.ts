// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/charity.proto
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

export interface Empty {}

export interface CharityId {
  id: string;
}

export interface CharityNameDto {
  name: string;
}

export interface GetCharitiesResponseDto {
  charities: CharityDto[];
}

export interface DeleteCharityResponseDto {
  success: boolean;
}

export interface CreateCharityDto {
  name: string;
  logo: string;
  website: string;
}

export interface UpdateCharityDto {
  id: string;
  name: string;
  logo: string;
  website: string;
  createdAt: string;
  updatedAt: string;
}

export interface CharityDto {
  id: string;
  name: string;
  logo: string;
  website: string;
  createdAt: string;
  updatedAt: string;
}

//========================================//
//      CharityProto Protobuf Client      //
//========================================//

export async function getCharities(
  empty: Empty,
  config?: ClientConfiguration,
): Promise<GetCharitiesResponseDto> {
  const response = await PBrequest(
    "/CharityProto/getCharities",
    Empty.encode(empty),
    config,
  );
  return GetCharitiesResponseDto.decode(response);
}

export async function getCharity(
  charityId: CharityId,
  config?: ClientConfiguration,
): Promise<CharityDto> {
  const response = await PBrequest(
    "/CharityProto/getCharity",
    CharityId.encode(charityId),
    config,
  );
  return CharityDto.decode(response);
}

export async function getCharityByName(
  charityNameDto: CharityNameDto,
  config?: ClientConfiguration,
): Promise<CharityDto> {
  const response = await PBrequest(
    "/CharityProto/getCharityByName",
    CharityNameDto.encode(charityNameDto),
    config,
  );
  return CharityDto.decode(response);
}

export async function createCharity(
  createCharityDto: CreateCharityDto,
  config?: ClientConfiguration,
): Promise<CharityDto> {
  const response = await PBrequest(
    "/CharityProto/createCharity",
    CreateCharityDto.encode(createCharityDto),
    config,
  );
  return CharityDto.decode(response);
}

export async function updateCharity(
  updateCharityDto: UpdateCharityDto,
  config?: ClientConfiguration,
): Promise<CharityDto> {
  const response = await PBrequest(
    "/CharityProto/updateCharity",
    UpdateCharityDto.encode(updateCharityDto),
    config,
  );
  return CharityDto.decode(response);
}

export async function deleteCharity(
  charityId: CharityId,
  config?: ClientConfiguration,
): Promise<DeleteCharityResponseDto> {
  const response = await PBrequest(
    "/CharityProto/deleteCharity",
    CharityId.encode(charityId),
    config,
  );
  return DeleteCharityResponseDto.decode(response);
}

//========================================//
//        CharityProto JSON Client        //
//========================================//

export async function getCharitiesJSON(
  empty: Empty,
  config?: ClientConfiguration,
): Promise<GetCharitiesResponseDto> {
  const response = await JSONrequest(
    "/CharityProto/getCharities",
    EmptyJSON.encode(empty),
    config,
  );
  return GetCharitiesResponseDtoJSON.decode(response);
}

export async function getCharityJSON(
  charityId: CharityId,
  config?: ClientConfiguration,
): Promise<CharityDto> {
  const response = await JSONrequest(
    "/CharityProto/getCharity",
    CharityIdJSON.encode(charityId),
    config,
  );
  return CharityDtoJSON.decode(response);
}

export async function getCharityByNameJSON(
  charityNameDto: CharityNameDto,
  config?: ClientConfiguration,
): Promise<CharityDto> {
  const response = await JSONrequest(
    "/CharityProto/getCharityByName",
    CharityNameDtoJSON.encode(charityNameDto),
    config,
  );
  return CharityDtoJSON.decode(response);
}

export async function createCharityJSON(
  createCharityDto: CreateCharityDto,
  config?: ClientConfiguration,
): Promise<CharityDto> {
  const response = await JSONrequest(
    "/CharityProto/createCharity",
    CreateCharityDtoJSON.encode(createCharityDto),
    config,
  );
  return CharityDtoJSON.decode(response);
}

export async function updateCharityJSON(
  updateCharityDto: UpdateCharityDto,
  config?: ClientConfiguration,
): Promise<CharityDto> {
  const response = await JSONrequest(
    "/CharityProto/updateCharity",
    UpdateCharityDtoJSON.encode(updateCharityDto),
    config,
  );
  return CharityDtoJSON.decode(response);
}

export async function deleteCharityJSON(
  charityId: CharityId,
  config?: ClientConfiguration,
): Promise<DeleteCharityResponseDto> {
  const response = await JSONrequest(
    "/CharityProto/deleteCharity",
    CharityIdJSON.encode(charityId),
    config,
  );
  return DeleteCharityResponseDtoJSON.decode(response);
}

//========================================//
//              CharityProto              //
//========================================//

export interface CharityProto<Context = unknown> {
  getCharities: (
    empty: Empty,
    context: Context,
  ) => Promise<GetCharitiesResponseDto> | GetCharitiesResponseDto;
  getCharity: (
    charityId: CharityId,
    context: Context,
  ) => Promise<CharityDto> | CharityDto;
  getCharityByName: (
    charityNameDto: CharityNameDto,
    context: Context,
  ) => Promise<CharityDto> | CharityDto;
  createCharity: (
    createCharityDto: CreateCharityDto,
    context: Context,
  ) => Promise<CharityDto> | CharityDto;
  updateCharity: (
    updateCharityDto: UpdateCharityDto,
    context: Context,
  ) => Promise<CharityDto> | CharityDto;
  deleteCharity: (
    charityId: CharityId,
    context: Context,
  ) => Promise<DeleteCharityResponseDto> | DeleteCharityResponseDto;
}

export function createCharityProto<Context>(service: CharityProto<Context>) {
  return {
    name: "CharityProto",
    methods: {
      getCharities: {
        name: "getCharities",
        handler: service.getCharities,
        input: { protobuf: Empty, json: EmptyJSON },
        output: {
          protobuf: GetCharitiesResponseDto,
          json: GetCharitiesResponseDtoJSON,
        },
      },
      getCharity: {
        name: "getCharity",
        handler: service.getCharity,
        input: { protobuf: CharityId, json: CharityIdJSON },
        output: { protobuf: CharityDto, json: CharityDtoJSON },
      },
      getCharityByName: {
        name: "getCharityByName",
        handler: service.getCharityByName,
        input: { protobuf: CharityNameDto, json: CharityNameDtoJSON },
        output: { protobuf: CharityDto, json: CharityDtoJSON },
      },
      createCharity: {
        name: "createCharity",
        handler: service.createCharity,
        input: { protobuf: CreateCharityDto, json: CreateCharityDtoJSON },
        output: { protobuf: CharityDto, json: CharityDtoJSON },
      },
      updateCharity: {
        name: "updateCharity",
        handler: service.updateCharity,
        input: { protobuf: UpdateCharityDto, json: UpdateCharityDtoJSON },
        output: { protobuf: CharityDto, json: CharityDtoJSON },
      },
      deleteCharity: {
        name: "deleteCharity",
        handler: service.deleteCharity,
        input: { protobuf: CharityId, json: CharityIdJSON },
        output: {
          protobuf: DeleteCharityResponseDto,
          json: DeleteCharityResponseDtoJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const Empty = {
  /**
   * Serializes Empty to protobuf.
   */
  encode: function (_msg?: PartialDeep<Empty>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes Empty from protobuf.
   */
  decode: function (_bytes?: ByteSource): Empty {
    return {};
  },

  /**
   * Initializes Empty with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Empty>): Empty {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<Empty>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: Empty,
    _reader: protoscript.BinaryReader,
  ): Empty {
    return _msg;
  },
};

export const CharityId = {
  /**
   * Serializes CharityId to protobuf.
   */
  encode: function (msg: PartialDeep<CharityId>): Uint8Array {
    return CharityId._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CharityId from protobuf.
   */
  decode: function (bytes: ByteSource): CharityId {
    return CharityId._readMessage(
      CharityId.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CharityId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CharityId>): CharityId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CharityId>,
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
    msg: CharityId,
    reader: protoscript.BinaryReader,
  ): CharityId {
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

export const CharityNameDto = {
  /**
   * Serializes CharityNameDto to protobuf.
   */
  encode: function (msg: PartialDeep<CharityNameDto>): Uint8Array {
    return CharityNameDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CharityNameDto from protobuf.
   */
  decode: function (bytes: ByteSource): CharityNameDto {
    return CharityNameDto._readMessage(
      CharityNameDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CharityNameDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CharityNameDto>): CharityNameDto {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CharityNameDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CharityNameDto,
    reader: protoscript.BinaryReader,
  ): CharityNameDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
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

export const GetCharitiesResponseDto = {
  /**
   * Serializes GetCharitiesResponseDto to protobuf.
   */
  encode: function (msg: PartialDeep<GetCharitiesResponseDto>): Uint8Array {
    return GetCharitiesResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetCharitiesResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): GetCharitiesResponseDto {
    return GetCharitiesResponseDto._readMessage(
      GetCharitiesResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetCharitiesResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetCharitiesResponseDto>,
  ): GetCharitiesResponseDto {
    return {
      charities: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetCharitiesResponseDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.charities?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.charities as any,
        CharityDto._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetCharitiesResponseDto,
    reader: protoscript.BinaryReader,
  ): GetCharitiesResponseDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = CharityDto.initialize();
          reader.readMessage(m, CharityDto._readMessage);
          msg.charities.push(m);
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

export const DeleteCharityResponseDto = {
  /**
   * Serializes DeleteCharityResponseDto to protobuf.
   */
  encode: function (msg: PartialDeep<DeleteCharityResponseDto>): Uint8Array {
    return DeleteCharityResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteCharityResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteCharityResponseDto {
    return DeleteCharityResponseDto._readMessage(
      DeleteCharityResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteCharityResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteCharityResponseDto>,
  ): DeleteCharityResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteCharityResponseDto>,
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
    msg: DeleteCharityResponseDto,
    reader: protoscript.BinaryReader,
  ): DeleteCharityResponseDto {
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

export const CreateCharityDto = {
  /**
   * Serializes CreateCharityDto to protobuf.
   */
  encode: function (msg: PartialDeep<CreateCharityDto>): Uint8Array {
    return CreateCharityDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreateCharityDto from protobuf.
   */
  decode: function (bytes: ByteSource): CreateCharityDto {
    return CreateCharityDto._readMessage(
      CreateCharityDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreateCharityDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CreateCharityDto>): CreateCharityDto {
    return {
      name: "",
      logo: "",
      website: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateCharityDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.name) {
      writer.writeString(1, msg.name);
    }
    if (msg.logo) {
      writer.writeString(2, msg.logo);
    }
    if (msg.website) {
      writer.writeString(3, msg.website);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CreateCharityDto,
    reader: protoscript.BinaryReader,
  ): CreateCharityDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.name = reader.readString();
          break;
        }
        case 2: {
          msg.logo = reader.readString();
          break;
        }
        case 3: {
          msg.website = reader.readString();
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

export const UpdateCharityDto = {
  /**
   * Serializes UpdateCharityDto to protobuf.
   */
  encode: function (msg: PartialDeep<UpdateCharityDto>): Uint8Array {
    return UpdateCharityDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UpdateCharityDto from protobuf.
   */
  decode: function (bytes: ByteSource): UpdateCharityDto {
    return UpdateCharityDto._readMessage(
      UpdateCharityDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UpdateCharityDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UpdateCharityDto>): UpdateCharityDto {
    return {
      id: "",
      name: "",
      logo: "",
      website: "",
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateCharityDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    if (msg.name) {
      writer.writeString(2, msg.name);
    }
    if (msg.logo) {
      writer.writeString(3, msg.logo);
    }
    if (msg.website) {
      writer.writeString(4, msg.website);
    }
    if (msg.createdAt) {
      writer.writeString(5, msg.createdAt);
    }
    if (msg.updatedAt) {
      writer.writeString(6, msg.updatedAt);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: UpdateCharityDto,
    reader: protoscript.BinaryReader,
  ): UpdateCharityDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        case 2: {
          msg.name = reader.readString();
          break;
        }
        case 3: {
          msg.logo = reader.readString();
          break;
        }
        case 4: {
          msg.website = reader.readString();
          break;
        }
        case 5: {
          msg.createdAt = reader.readString();
          break;
        }
        case 6: {
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

export const CharityDto = {
  /**
   * Serializes CharityDto to protobuf.
   */
  encode: function (msg: PartialDeep<CharityDto>): Uint8Array {
    return CharityDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CharityDto from protobuf.
   */
  decode: function (bytes: ByteSource): CharityDto {
    return CharityDto._readMessage(
      CharityDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CharityDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CharityDto>): CharityDto {
    return {
      id: "",
      name: "",
      logo: "",
      website: "",
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CharityDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.id) {
      writer.writeString(1, msg.id);
    }
    if (msg.name) {
      writer.writeString(2, msg.name);
    }
    if (msg.logo) {
      writer.writeString(3, msg.logo);
    }
    if (msg.website) {
      writer.writeString(4, msg.website);
    }
    if (msg.createdAt) {
      writer.writeString(5, msg.createdAt);
    }
    if (msg.updatedAt) {
      writer.writeString(6, msg.updatedAt);
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: CharityDto,
    reader: protoscript.BinaryReader,
  ): CharityDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          msg.id = reader.readString();
          break;
        }
        case 2: {
          msg.name = reader.readString();
          break;
        }
        case 3: {
          msg.logo = reader.readString();
          break;
        }
        case 4: {
          msg.website = reader.readString();
          break;
        }
        case 5: {
          msg.createdAt = reader.readString();
          break;
        }
        case 6: {
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

export const EmptyJSON = {
  /**
   * Serializes Empty to JSON.
   */
  encode: function (_msg?: PartialDeep<Empty>): string {
    return "{}";
  },

  /**
   * Deserializes Empty from JSON.
   */
  decode: function (_json?: string): Empty {
    return {};
  },

  /**
   * Initializes Empty with all fields set to their default value.
   */
  initialize: function (msg?: Partial<Empty>): Empty {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (_msg: PartialDeep<Empty>): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (msg: Empty, _json: any): Empty {
    return msg;
  },
};

export const CharityIdJSON = {
  /**
   * Serializes CharityId to JSON.
   */
  encode: function (msg: PartialDeep<CharityId>): string {
    return JSON.stringify(CharityIdJSON._writeMessage(msg));
  },

  /**
   * Deserializes CharityId from JSON.
   */
  decode: function (json: string): CharityId {
    return CharityIdJSON._readMessage(
      CharityIdJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CharityId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CharityId>): CharityId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CharityId>,
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
  _readMessage: function (msg: CharityId, json: any): CharityId {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};

export const CharityNameDtoJSON = {
  /**
   * Serializes CharityNameDto to JSON.
   */
  encode: function (msg: PartialDeep<CharityNameDto>): string {
    return JSON.stringify(CharityNameDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CharityNameDto from JSON.
   */
  decode: function (json: string): CharityNameDto {
    return CharityNameDtoJSON._readMessage(
      CharityNameDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CharityNameDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CharityNameDto>): CharityNameDto {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CharityNameDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CharityNameDto, json: any): CharityNameDto {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};

export const GetCharitiesResponseDtoJSON = {
  /**
   * Serializes GetCharitiesResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<GetCharitiesResponseDto>): string {
    return JSON.stringify(GetCharitiesResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetCharitiesResponseDto from JSON.
   */
  decode: function (json: string): GetCharitiesResponseDto {
    return GetCharitiesResponseDtoJSON._readMessage(
      GetCharitiesResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetCharitiesResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetCharitiesResponseDto>,
  ): GetCharitiesResponseDto {
    return {
      charities: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetCharitiesResponseDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.charities?.length) {
      json["charities"] = msg.charities.map(CharityDtoJSON._writeMessage);
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetCharitiesResponseDto,
    json: any,
  ): GetCharitiesResponseDto {
    const _charities_ = json["charities"];
    if (_charities_) {
      for (const item of _charities_) {
        const m = CharityDtoJSON.initialize();
        CharityDtoJSON._readMessage(m, item);
        msg.charities.push(m);
      }
    }
    return msg;
  },
};

export const DeleteCharityResponseDtoJSON = {
  /**
   * Serializes DeleteCharityResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<DeleteCharityResponseDto>): string {
    return JSON.stringify(DeleteCharityResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeleteCharityResponseDto from JSON.
   */
  decode: function (json: string): DeleteCharityResponseDto {
    return DeleteCharityResponseDtoJSON._readMessage(
      DeleteCharityResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteCharityResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteCharityResponseDto>,
  ): DeleteCharityResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteCharityResponseDto>,
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
    msg: DeleteCharityResponseDto,
    json: any,
  ): DeleteCharityResponseDto {
    const _success_ = json["success"];
    if (_success_) {
      msg.success = _success_;
    }
    return msg;
  },
};

export const CreateCharityDtoJSON = {
  /**
   * Serializes CreateCharityDto to JSON.
   */
  encode: function (msg: PartialDeep<CreateCharityDto>): string {
    return JSON.stringify(CreateCharityDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreateCharityDto from JSON.
   */
  decode: function (json: string): CreateCharityDto {
    return CreateCharityDtoJSON._readMessage(
      CreateCharityDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreateCharityDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CreateCharityDto>): CreateCharityDto {
    return {
      name: "",
      logo: "",
      website: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CreateCharityDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.logo) {
      json["logo"] = msg.logo;
    }
    if (msg.website) {
      json["website"] = msg.website;
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (msg: CreateCharityDto, json: any): CreateCharityDto {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _logo_ = json["logo"];
    if (_logo_) {
      msg.logo = _logo_;
    }
    const _website_ = json["website"];
    if (_website_) {
      msg.website = _website_;
    }
    return msg;
  },
};

export const UpdateCharityDtoJSON = {
  /**
   * Serializes UpdateCharityDto to JSON.
   */
  encode: function (msg: PartialDeep<UpdateCharityDto>): string {
    return JSON.stringify(UpdateCharityDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes UpdateCharityDto from JSON.
   */
  decode: function (json: string): UpdateCharityDto {
    return UpdateCharityDtoJSON._readMessage(
      UpdateCharityDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UpdateCharityDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<UpdateCharityDto>): UpdateCharityDto {
    return {
      id: "",
      name: "",
      logo: "",
      website: "",
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<UpdateCharityDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.logo) {
      json["logo"] = msg.logo;
    }
    if (msg.website) {
      json["website"] = msg.website;
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
  _readMessage: function (msg: UpdateCharityDto, json: any): UpdateCharityDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _logo_ = json["logo"];
    if (_logo_) {
      msg.logo = _logo_;
    }
    const _website_ = json["website"];
    if (_website_) {
      msg.website = _website_;
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

export const CharityDtoJSON = {
  /**
   * Serializes CharityDto to JSON.
   */
  encode: function (msg: PartialDeep<CharityDto>): string {
    return JSON.stringify(CharityDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CharityDto from JSON.
   */
  decode: function (json: string): CharityDto {
    return CharityDtoJSON._readMessage(
      CharityDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CharityDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CharityDto>): CharityDto {
    return {
      id: "",
      name: "",
      logo: "",
      website: "",
      createdAt: "",
      updatedAt: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CharityDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.id) {
      json["id"] = msg.id;
    }
    if (msg.name) {
      json["name"] = msg.name;
    }
    if (msg.logo) {
      json["logo"] = msg.logo;
    }
    if (msg.website) {
      json["website"] = msg.website;
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
  _readMessage: function (msg: CharityDto, json: any): CharityDto {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    const _logo_ = json["logo"];
    if (_logo_) {
      msg.logo = _logo_;
    }
    const _website_ = json["website"];
    if (_website_) {
      msg.website = _website_;
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
