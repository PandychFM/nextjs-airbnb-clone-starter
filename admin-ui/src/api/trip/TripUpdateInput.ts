import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TripUpdateInput = {
  listing?: ListingWhereUniqueInput | null;
  tripInfo?: InputJsonValue;
};
