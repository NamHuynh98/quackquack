import {
  getDenApi,
  claimTaoApi,
  buyFancyEgg,
  gentlyStrokeReGenesisEgg,
} from "./api";

enum CatCategory {
  page = "page",
  pages_gang = "pages_gang",
  footballer = "footballer",
  crossbreed = "crossbreed",
}

interface ZenDen {
  can_claim_tao: boolean;
  user_id: string;
  zen_mode_expires_at: string;
  regenesis_egg_status: {
    next_pet_timestamp: string;
  };
  zen_status: {
    zen_count: number;
  };
  egg_shop: {
    id: string;
    cat_category: CatCategory;
    current_price: number;
    current_price_x10: number;
    current_price_x100: number;
  }[];
}

getDenApi()
  .then((res) => {
    const zen_den: ZenDen = res?.data?.zen_den;
    // if(zen_den.zen_status.zen_count)
  })
  .catch((err) => console.log(err));
