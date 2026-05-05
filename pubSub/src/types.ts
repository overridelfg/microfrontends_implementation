import type { CartEvents, CartEvent, CartEventName } from "./events/cart/types";
import type {
  BannerEvents,
  BannerEvent,
  BannerEventName,
} from "./events/banner/types";
import type {
  ProductsEvents,
  ProductsEvent,
  ProductsEventName,
} from "./events/products/types";

export type EventName = CartEventName | BannerEventName | ProductsEventName;

export type EventMap = CartEvents & BannerEvents & ProductsEvents;

export type EventPayload<T extends EventName> = EventMap[T];
export type EventHandler<T extends EventName> = (
  payload: EventPayload<T>,
) => void;

export type PubSubEvent = CartEvent | BannerEvent | ProductsEvent;
