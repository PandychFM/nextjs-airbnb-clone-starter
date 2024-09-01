import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { InputJsonValue } from "../../types";

export type TripCreateInput = {
  listing?: ListingWhereUniqueInput | null;
  tripInfo: InputJsonValue;
};
