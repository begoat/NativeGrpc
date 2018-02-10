// package: ExchangePackage
// file: Exchange.proto

import * as Exchange_pb from "./Exchange_pb";
export class Exchange {
  static serviceName = "ExchangePackage.Exchange";
}
export namespace Exchange {
  export class request_exchange {
    static readonly methodName = "request_exchange";
    static readonly service = Exchange;
    static readonly requestStream = false;
    static readonly responseStream = false;
    static readonly requestType = Exchange_pb.ExchangeRequest;
    static readonly responseType = Exchange_pb.ExchangeReply;
  }
}
