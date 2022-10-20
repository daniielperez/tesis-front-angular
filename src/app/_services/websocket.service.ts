import { Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

import { Stomp } from "@stomp/stompjs";
import * as SockJS from "sockjs-client";

@Injectable()
export class WebSocketService {
  constructor() {}
  public stompClient;

  connect() {
    const serverUrl = environment.app_url_websocket;
    let socket = new SockJS(serverUrl);
    let stompClient = Stomp.over(socket);

    return stompClient;
  }

  disconnect(stompClient: any) {
    if (stompClient != null) {
      stompClient.disconnect();
    }
  }
}
