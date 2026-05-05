// event-bus/src/Consumer.ts
import type {
  EventName,
  EventPayload,
  EventHandler,
  PubSubEvent,
} from "./types";

export class Consumer {
  private handlers: Map<EventName, Set<EventHandler<any>>> = new Map();

  on<T extends EventName>(name: T, handler: EventHandler<T>): () => void {
    if (!this.handlers.has(name)) {
      this.handlers.set(name, new Set());
    }
    this.handlers.get(name)!.add(handler);

    return () => this.off(name, handler);
  }

  off<T extends EventName>(name: T, handler: EventHandler<T>): void {
    this.handlers.get(name)?.delete(handler);
  }

  notify(event: PubSubEvent): void {
    this.handlers
      .get(event.name as EventName)
      ?.forEach((handler) => handler(event.payload));
  }

  clear(): void {
    this.handlers.clear();
  }
}
