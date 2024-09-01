import { Listing } from "../listing/Listing";

export type Wishlist = {
  createdAt: Date;
  id: string;
  listing?: Listing | null;
  updatedAt: Date;
};
