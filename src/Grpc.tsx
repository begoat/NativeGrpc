import { grpc } from 'grpc-web-client';
import { ExchangeRequest } from './protos/Exchange_pb';
import { Exchange } from './protos/Exchange_pb_service';

export function test() {
    const exchangeRequest = new ExchangeRequest();
    exchangeRequest.setIdentity('test1');
    exchangeRequest.setData('123');
    grpc.unary(Exchange.request_exchange, {request: exchangeRequest, host: '192.168.11.3:50051', onEnd: res => {
        console.log(res);
    }});
}