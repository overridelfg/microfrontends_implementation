import { Producer } from "./Producer";
import { Consumer } from "./Consumer";
import type {
  EventName,
  EventPayload,
  EventHandler,
  PubSubEvent,
} from "./types";

class EventBus {
  private channel: BroadcastChannel;
  private consumer: Consumer;
  private producer: Producer;

  constructor() {
    this.channel = new BroadcastChannel("mfe:event-bus");
    this.consumer = new Consumer();
    this.producer = new Producer(this.channel, (event) =>
      this.consumer.notify(event),
    );

    this.channel.onmessage = (event: MessageEvent<PubSubEvent>) => {
      this.consumer.notify(event.data);
    };
  }

  emit<T extends EventName>(name: T, payload: EventPayload<T>): void {
    this.producer.emit(name, payload);
  }

  on<T extends EventName>(name: T, handler: EventHandler<T>): () => void {
    return this.consumer.on(name, handler);
  }

  off<T extends EventName>(name: T, handler: EventHandler<T>): void {
    this.consumer.off(name, handler);
  }

  destroy(): void {
    this.channel.close();
    this.consumer.clear();
  }
}

export const eventBus = new EventBus();
