import { StringFilter } from "../../util/StringFilter";
import { ListingWhereUniqueInput } from "../listing/ListingWhereUniqueInput";

export type WishlistWhereInput = {
  id?: StringFilter;
  listing?: ListingWhereUniqueInput;
};
