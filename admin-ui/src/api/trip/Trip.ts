import { Listing } from "../listing/Listing";
import { JsonValue } from "type-fest";

export type Trip = {
  createdAt: Date;
  id: string;
  listing?: Listing | null;
  tripInfo: JsonValue;
  updatedAt: Date;
};
