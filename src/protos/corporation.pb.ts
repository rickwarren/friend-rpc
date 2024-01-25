// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.
// Source: src/protos/corporation.proto
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

export interface EmptyId {}

export interface CorporationId {
  id: string;
}

export interface CorporationNameDto {
  name: string;
}

export interface GetCorporationsResponseDto {
  corporations: CorporationDto[];
}

export interface DeleteCorporationResponseDto {
  success: boolean;
}

export interface CreateCorporationDto {
  name: string;
  logo: string;
  website: string;
}

export interface UpdateCorporationDto {
  id: string;
  name: string;
  logo: string;
  website: string;
  createdAt: string;
  updatedAt: string;
}

export interface CorporationDto {
  id: string;
  name: string;
  logo: string;
  website: string;
  createdAt: string;
  updatedAt: string;
}

//========================================//
//    CorporationProto Protobuf Client    //
//========================================//

export async function getCorporations(
  emptyId: EmptyId,
  config?: ClientConfiguration,
): Promise<GetCorporationsResponseDto> {
  const response = await PBrequest(
    "/CorporationProto/getCorporations",
    EmptyId.encode(emptyId),
    config,
  );
  return GetCorporationsResponseDto.decode(response);
}

export async function getCorporation(
  corporationId: CorporationId,
  config?: ClientConfiguration,
): Promise<CorporationDto> {
  const response = await PBrequest(
    "/CorporationProto/getCorporation",
    CorporationId.encode(corporationId),
    config,
  );
  return CorporationDto.decode(response);
}

export async function getCorporationByName(
  corporationNameDto: CorporationNameDto,
  config?: ClientConfiguration,
): Promise<CorporationDto> {
  const response = await PBrequest(
    "/CorporationProto/getCorporationByName",
    CorporationNameDto.encode(corporationNameDto),
    config,
  );
  return CorporationDto.decode(response);
}

export async function createCorporation(
  createCorporationDto: CreateCorporationDto,
  config?: ClientConfiguration,
): Promise<CorporationDto> {
  const response = await PBrequest(
    "/CorporationProto/createCorporation",
    CreateCorporationDto.encode(createCorporationDto),
    config,
  );
  return CorporationDto.decode(response);
}

export async function updateCorporation(
  updateCorporationDto: UpdateCorporationDto,
  config?: ClientConfiguration,
): Promise<CorporationDto> {
  const response = await PBrequest(
    "/CorporationProto/updateCorporation",
    UpdateCorporationDto.encode(updateCorporationDto),
    config,
  );
  return CorporationDto.decode(response);
}

export async function deleteCorporation(
  corporationId: CorporationId,
  config?: ClientConfiguration,
): Promise<DeleteCorporationResponseDto> {
  const response = await PBrequest(
    "/CorporationProto/deleteCorporation",
    CorporationId.encode(corporationId),
    config,
  );
  return DeleteCorporationResponseDto.decode(response);
}

//========================================//
//      CorporationProto JSON Client      //
//========================================//

export async function getCorporationsJSON(
  emptyId: EmptyId,
  config?: ClientConfiguration,
): Promise<GetCorporationsResponseDto> {
  const response = await JSONrequest(
    "/CorporationProto/getCorporations",
    EmptyIdJSON.encode(emptyId),
    config,
  );
  return GetCorporationsResponseDtoJSON.decode(response);
}

export async function getCorporationJSON(
  corporationId: CorporationId,
  config?: ClientConfiguration,
): Promise<CorporationDto> {
  const response = await JSONrequest(
    "/CorporationProto/getCorporation",
    CorporationIdJSON.encode(corporationId),
    config,
  );
  return CorporationDtoJSON.decode(response);
}

export async function getCorporationByNameJSON(
  corporationNameDto: CorporationNameDto,
  config?: ClientConfiguration,
): Promise<CorporationDto> {
  const response = await JSONrequest(
    "/CorporationProto/getCorporationByName",
    CorporationNameDtoJSON.encode(corporationNameDto),
    config,
  );
  return CorporationDtoJSON.decode(response);
}

export async function createCorporationJSON(
  createCorporationDto: CreateCorporationDto,
  config?: ClientConfiguration,
): Promise<CorporationDto> {
  const response = await JSONrequest(
    "/CorporationProto/createCorporation",
    CreateCorporationDtoJSON.encode(createCorporationDto),
    config,
  );
  return CorporationDtoJSON.decode(response);
}

export async function updateCorporationJSON(
  updateCorporationDto: UpdateCorporationDto,
  config?: ClientConfiguration,
): Promise<CorporationDto> {
  const response = await JSONrequest(
    "/CorporationProto/updateCorporation",
    UpdateCorporationDtoJSON.encode(updateCorporationDto),
    config,
  );
  return CorporationDtoJSON.decode(response);
}

export async function deleteCorporationJSON(
  corporationId: CorporationId,
  config?: ClientConfiguration,
): Promise<DeleteCorporationResponseDto> {
  const response = await JSONrequest(
    "/CorporationProto/deleteCorporation",
    CorporationIdJSON.encode(corporationId),
    config,
  );
  return DeleteCorporationResponseDtoJSON.decode(response);
}

//========================================//
//            CorporationProto            //
//========================================//

export interface CorporationProto<Context = unknown> {
  getCorporations: (
    emptyId: EmptyId,
    context: Context,
  ) => Promise<GetCorporationsResponseDto> | GetCorporationsResponseDto;
  getCorporation: (
    corporationId: CorporationId,
    context: Context,
  ) => Promise<CorporationDto> | CorporationDto;
  getCorporationByName: (
    corporationNameDto: CorporationNameDto,
    context: Context,
  ) => Promise<CorporationDto> | CorporationDto;
  createCorporation: (
    createCorporationDto: CreateCorporationDto,
    context: Context,
  ) => Promise<CorporationDto> | CorporationDto;
  updateCorporation: (
    updateCorporationDto: UpdateCorporationDto,
    context: Context,
  ) => Promise<CorporationDto> | CorporationDto;
  deleteCorporation: (
    corporationId: CorporationId,
    context: Context,
  ) => Promise<DeleteCorporationResponseDto> | DeleteCorporationResponseDto;
}

export function createCorporationProto<Context>(
  service: CorporationProto<Context>,
) {
  return {
    name: "CorporationProto",
    methods: {
      getCorporations: {
        name: "getCorporations",
        handler: service.getCorporations,
        input: { protobuf: EmptyId, json: EmptyIdJSON },
        output: {
          protobuf: GetCorporationsResponseDto,
          json: GetCorporationsResponseDtoJSON,
        },
      },
      getCorporation: {
        name: "getCorporation",
        handler: service.getCorporation,
        input: { protobuf: CorporationId, json: CorporationIdJSON },
        output: { protobuf: CorporationDto, json: CorporationDtoJSON },
      },
      getCorporationByName: {
        name: "getCorporationByName",
        handler: service.getCorporationByName,
        input: { protobuf: CorporationNameDto, json: CorporationNameDtoJSON },
        output: { protobuf: CorporationDto, json: CorporationDtoJSON },
      },
      createCorporation: {
        name: "createCorporation",
        handler: service.createCorporation,
        input: {
          protobuf: CreateCorporationDto,
          json: CreateCorporationDtoJSON,
        },
        output: { protobuf: CorporationDto, json: CorporationDtoJSON },
      },
      updateCorporation: {
        name: "updateCorporation",
        handler: service.updateCorporation,
        input: {
          protobuf: UpdateCorporationDto,
          json: UpdateCorporationDtoJSON,
        },
        output: { protobuf: CorporationDto, json: CorporationDtoJSON },
      },
      deleteCorporation: {
        name: "deleteCorporation",
        handler: service.deleteCorporation,
        input: { protobuf: CorporationId, json: CorporationIdJSON },
        output: {
          protobuf: DeleteCorporationResponseDto,
          json: DeleteCorporationResponseDtoJSON,
        },
      },
    },
  } as const;
}

//========================================//
//        Protobuf Encode / Decode        //
//========================================//

export const EmptyId = {
  /**
   * Serializes EmptyId to protobuf.
   */
  encode: function (_msg?: PartialDeep<EmptyId>): Uint8Array {
    return new Uint8Array();
  },

  /**
   * Deserializes EmptyId from protobuf.
   */
  decode: function (_bytes?: ByteSource): EmptyId {
    return {};
  },

  /**
   * Initializes EmptyId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<EmptyId>): EmptyId {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<EmptyId>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    _msg: EmptyId,
    _reader: protoscript.BinaryReader,
  ): EmptyId {
    return _msg;
  },
};

export const CorporationId = {
  /**
   * Serializes CorporationId to protobuf.
   */
  encode: function (msg: PartialDeep<CorporationId>): Uint8Array {
    return CorporationId._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CorporationId from protobuf.
   */
  decode: function (bytes: ByteSource): CorporationId {
    return CorporationId._readMessage(
      CorporationId.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CorporationId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CorporationId>): CorporationId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CorporationId>,
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
    msg: CorporationId,
    reader: protoscript.BinaryReader,
  ): CorporationId {
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

export const CorporationNameDto = {
  /**
   * Serializes CorporationNameDto to protobuf.
   */
  encode: function (msg: PartialDeep<CorporationNameDto>): Uint8Array {
    return CorporationNameDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CorporationNameDto from protobuf.
   */
  decode: function (bytes: ByteSource): CorporationNameDto {
    return CorporationNameDto._readMessage(
      CorporationNameDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CorporationNameDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CorporationNameDto>): CorporationNameDto {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CorporationNameDto>,
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
    msg: CorporationNameDto,
    reader: protoscript.BinaryReader,
  ): CorporationNameDto {
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

export const GetCorporationsResponseDto = {
  /**
   * Serializes GetCorporationsResponseDto to protobuf.
   */
  encode: function (msg: PartialDeep<GetCorporationsResponseDto>): Uint8Array {
    return GetCorporationsResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes GetCorporationsResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): GetCorporationsResponseDto {
    return GetCorporationsResponseDto._readMessage(
      GetCorporationsResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes GetCorporationsResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetCorporationsResponseDto>,
  ): GetCorporationsResponseDto {
    return {
      corporations: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetCorporationsResponseDto>,
    writer: protoscript.BinaryWriter,
  ): protoscript.BinaryWriter {
    if (msg.corporations?.length) {
      writer.writeRepeatedMessage(
        1,
        msg.corporations as any,
        CorporationDto._writeMessage,
      );
    }
    return writer;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetCorporationsResponseDto,
    reader: protoscript.BinaryReader,
  ): GetCorporationsResponseDto {
    while (reader.nextField()) {
      const field = reader.getFieldNumber();
      switch (field) {
        case 1: {
          const m = CorporationDto.initialize();
          reader.readMessage(m, CorporationDto._readMessage);
          msg.corporations.push(m);
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

export const DeleteCorporationResponseDto = {
  /**
   * Serializes DeleteCorporationResponseDto to protobuf.
   */
  encode: function (
    msg: PartialDeep<DeleteCorporationResponseDto>,
  ): Uint8Array {
    return DeleteCorporationResponseDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes DeleteCorporationResponseDto from protobuf.
   */
  decode: function (bytes: ByteSource): DeleteCorporationResponseDto {
    return DeleteCorporationResponseDto._readMessage(
      DeleteCorporationResponseDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes DeleteCorporationResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteCorporationResponseDto>,
  ): DeleteCorporationResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteCorporationResponseDto>,
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
    msg: DeleteCorporationResponseDto,
    reader: protoscript.BinaryReader,
  ): DeleteCorporationResponseDto {
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

export const CreateCorporationDto = {
  /**
   * Serializes CreateCorporationDto to protobuf.
   */
  encode: function (msg: PartialDeep<CreateCorporationDto>): Uint8Array {
    return CreateCorporationDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CreateCorporationDto from protobuf.
   */
  decode: function (bytes: ByteSource): CreateCorporationDto {
    return CreateCorporationDto._readMessage(
      CreateCorporationDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CreateCorporationDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateCorporationDto>,
  ): CreateCorporationDto {
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
    msg: PartialDeep<CreateCorporationDto>,
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
    msg: CreateCorporationDto,
    reader: protoscript.BinaryReader,
  ): CreateCorporationDto {
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

export const UpdateCorporationDto = {
  /**
   * Serializes UpdateCorporationDto to protobuf.
   */
  encode: function (msg: PartialDeep<UpdateCorporationDto>): Uint8Array {
    return UpdateCorporationDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes UpdateCorporationDto from protobuf.
   */
  decode: function (bytes: ByteSource): UpdateCorporationDto {
    return UpdateCorporationDto._readMessage(
      UpdateCorporationDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes UpdateCorporationDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpdateCorporationDto>,
  ): UpdateCorporationDto {
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
    msg: PartialDeep<UpdateCorporationDto>,
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
    msg: UpdateCorporationDto,
    reader: protoscript.BinaryReader,
  ): UpdateCorporationDto {
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

export const CorporationDto = {
  /**
   * Serializes CorporationDto to protobuf.
   */
  encode: function (msg: PartialDeep<CorporationDto>): Uint8Array {
    return CorporationDto._writeMessage(
      msg,
      new protoscript.BinaryWriter(),
    ).getResultBuffer();
  },

  /**
   * Deserializes CorporationDto from protobuf.
   */
  decode: function (bytes: ByteSource): CorporationDto {
    return CorporationDto._readMessage(
      CorporationDto.initialize(),
      new protoscript.BinaryReader(bytes),
    );
  },

  /**
   * Initializes CorporationDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CorporationDto>): CorporationDto {
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
    msg: PartialDeep<CorporationDto>,
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
    msg: CorporationDto,
    reader: protoscript.BinaryReader,
  ): CorporationDto {
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

export const EmptyIdJSON = {
  /**
   * Serializes EmptyId to JSON.
   */
  encode: function (_msg?: PartialDeep<EmptyId>): string {
    return "{}";
  },

  /**
   * Deserializes EmptyId from JSON.
   */
  decode: function (_json?: string): EmptyId {
    return {};
  },

  /**
   * Initializes EmptyId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<EmptyId>): EmptyId {
    return {
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    _msg: PartialDeep<EmptyId>,
  ): Record<string, unknown> {
    return {};
  },

  /**
   * @private
   */
  _readMessage: function (msg: EmptyId, _json: any): EmptyId {
    return msg;
  },
};

export const CorporationIdJSON = {
  /**
   * Serializes CorporationId to JSON.
   */
  encode: function (msg: PartialDeep<CorporationId>): string {
    return JSON.stringify(CorporationIdJSON._writeMessage(msg));
  },

  /**
   * Deserializes CorporationId from JSON.
   */
  decode: function (json: string): CorporationId {
    return CorporationIdJSON._readMessage(
      CorporationIdJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CorporationId with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CorporationId>): CorporationId {
    return {
      id: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CorporationId>,
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
  _readMessage: function (msg: CorporationId, json: any): CorporationId {
    const _id_ = json["id"];
    if (_id_) {
      msg.id = _id_;
    }
    return msg;
  },
};

export const CorporationNameDtoJSON = {
  /**
   * Serializes CorporationNameDto to JSON.
   */
  encode: function (msg: PartialDeep<CorporationNameDto>): string {
    return JSON.stringify(CorporationNameDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CorporationNameDto from JSON.
   */
  decode: function (json: string): CorporationNameDto {
    return CorporationNameDtoJSON._readMessage(
      CorporationNameDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CorporationNameDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CorporationNameDto>): CorporationNameDto {
    return {
      name: "",
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<CorporationNameDto>,
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
  _readMessage: function (
    msg: CorporationNameDto,
    json: any,
  ): CorporationNameDto {
    const _name_ = json["name"];
    if (_name_) {
      msg.name = _name_;
    }
    return msg;
  },
};

export const GetCorporationsResponseDtoJSON = {
  /**
   * Serializes GetCorporationsResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<GetCorporationsResponseDto>): string {
    return JSON.stringify(GetCorporationsResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes GetCorporationsResponseDto from JSON.
   */
  decode: function (json: string): GetCorporationsResponseDto {
    return GetCorporationsResponseDtoJSON._readMessage(
      GetCorporationsResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes GetCorporationsResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<GetCorporationsResponseDto>,
  ): GetCorporationsResponseDto {
    return {
      corporations: [],
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<GetCorporationsResponseDto>,
  ): Record<string, unknown> {
    const json: Record<string, unknown> = {};
    if (msg.corporations?.length) {
      json["corporations"] = msg.corporations.map(
        CorporationDtoJSON._writeMessage,
      );
    }
    return json;
  },

  /**
   * @private
   */
  _readMessage: function (
    msg: GetCorporationsResponseDto,
    json: any,
  ): GetCorporationsResponseDto {
    const _corporations_ = json["corporations"];
    if (_corporations_) {
      for (const item of _corporations_) {
        const m = CorporationDtoJSON.initialize();
        CorporationDtoJSON._readMessage(m, item);
        msg.corporations.push(m);
      }
    }
    return msg;
  },
};

export const DeleteCorporationResponseDtoJSON = {
  /**
   * Serializes DeleteCorporationResponseDto to JSON.
   */
  encode: function (msg: PartialDeep<DeleteCorporationResponseDto>): string {
    return JSON.stringify(DeleteCorporationResponseDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes DeleteCorporationResponseDto from JSON.
   */
  decode: function (json: string): DeleteCorporationResponseDto {
    return DeleteCorporationResponseDtoJSON._readMessage(
      DeleteCorporationResponseDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes DeleteCorporationResponseDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<DeleteCorporationResponseDto>,
  ): DeleteCorporationResponseDto {
    return {
      success: false,
      ...msg,
    };
  },

  /**
   * @private
   */
  _writeMessage: function (
    msg: PartialDeep<DeleteCorporationResponseDto>,
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
    msg: DeleteCorporationResponseDto,
    json: any,
  ): DeleteCorporationResponseDto {
    const _success_ = json["success"];
    if (_success_) {
      msg.success = _success_;
    }
    return msg;
  },
};

export const CreateCorporationDtoJSON = {
  /**
   * Serializes CreateCorporationDto to JSON.
   */
  encode: function (msg: PartialDeep<CreateCorporationDto>): string {
    return JSON.stringify(CreateCorporationDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CreateCorporationDto from JSON.
   */
  decode: function (json: string): CreateCorporationDto {
    return CreateCorporationDtoJSON._readMessage(
      CreateCorporationDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CreateCorporationDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<CreateCorporationDto>,
  ): CreateCorporationDto {
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
    msg: PartialDeep<CreateCorporationDto>,
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
  _readMessage: function (
    msg: CreateCorporationDto,
    json: any,
  ): CreateCorporationDto {
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

export const UpdateCorporationDtoJSON = {
  /**
   * Serializes UpdateCorporationDto to JSON.
   */
  encode: function (msg: PartialDeep<UpdateCorporationDto>): string {
    return JSON.stringify(UpdateCorporationDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes UpdateCorporationDto from JSON.
   */
  decode: function (json: string): UpdateCorporationDto {
    return UpdateCorporationDtoJSON._readMessage(
      UpdateCorporationDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes UpdateCorporationDto with all fields set to their default value.
   */
  initialize: function (
    msg?: Partial<UpdateCorporationDto>,
  ): UpdateCorporationDto {
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
    msg: PartialDeep<UpdateCorporationDto>,
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
  _readMessage: function (
    msg: UpdateCorporationDto,
    json: any,
  ): UpdateCorporationDto {
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

export const CorporationDtoJSON = {
  /**
   * Serializes CorporationDto to JSON.
   */
  encode: function (msg: PartialDeep<CorporationDto>): string {
    return JSON.stringify(CorporationDtoJSON._writeMessage(msg));
  },

  /**
   * Deserializes CorporationDto from JSON.
   */
  decode: function (json: string): CorporationDto {
    return CorporationDtoJSON._readMessage(
      CorporationDtoJSON.initialize(),
      JSON.parse(json),
    );
  },

  /**
   * Initializes CorporationDto with all fields set to their default value.
   */
  initialize: function (msg?: Partial<CorporationDto>): CorporationDto {
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
    msg: PartialDeep<CorporationDto>,
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
  _readMessage: function (msg: CorporationDto, json: any): CorporationDto {
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
