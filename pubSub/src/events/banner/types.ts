export type BannerEventName = "banner:dismiss" | "banner:show";

export type BannerEvents = {
  "banner:dismiss": undefined;
  "banner:show": {
    message: string;
    code: string;
  };
};

export type BannerEvent = {
  [T in BannerEventName]: {
    name: T;
    payload: BannerEvents[T];
  };
}[BannerEventName];
