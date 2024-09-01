import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";
import { JsonFilter } from "../../util/JsonFilter";

export type TripWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
  tripInfo?: JsonFilter;
};
