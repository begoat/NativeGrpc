// package: ExchangePackage
// file: Exchange.proto

import * as jspb from "google-protobuf";

export class ExchangeRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeRequest): ExchangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeRequest;
  static deserializeBinaryFromReader(message: ExchangeRequest, reader: jspb.BinaryReader): ExchangeRequest;
}

export namespace ExchangeRequest {
  export type AsObject = {
    identity: string,
    data: string,
  }
}

export class ExchangeReply extends jspb.Message {
  getStatus(): number;
  setStatus(value: number): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ExchangeReply.AsObject;
  static toObject(includeInstance: boolean, msg: ExchangeReply): ExchangeReply.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ExchangeReply, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ExchangeReply;
  static deserializeBinaryFromReader(message: ExchangeReply, reader: jspb.BinaryReader): ExchangeReply;
}

export namespace ExchangeReply {
  export type AsObject = {
    status: number,
    data: string,
  }
}

