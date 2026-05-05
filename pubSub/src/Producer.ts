// event-bus/src/Producer.ts
import type { EventName, EventPayload, PubSubEvent } from "./types";

export class Producer {
  private channel: BroadcastChannel;
  private onEmit: (event: PubSubEvent) => void;

  constructor(channel: BroadcastChannel, onEmit: (event: PubSubEvent) => void) {
    this.channel = channel;
    this.onEmit = onEmit;
  }

  emit<T extends EventName>(name: T, payload: EventPayload<T>): void {
    const event = { name, payload } as PubSubEvent;
    this.onEmit(event);
    this.channel.postMessage(event);
  }
}
