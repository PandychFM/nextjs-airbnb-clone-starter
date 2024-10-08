import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { WishlistService } from "./wishlist.service";
import { WishlistControllerBase } from "./base/wishlist.controller.base";

@swagger.ApiTags("wishlists")
@common.Controller("wishlists")
export class WishlistController extends WishlistControllerBase {
  constructor(protected readonly service: WishlistService) {
    super(service);
  }
}
