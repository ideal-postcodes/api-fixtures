import { payload as invalidKey } from "./errors/4010";
import { payload as invalidUrl  } from "./errors/4011";
import { payload as balanceDepleted } from "./errors/4020";
import { payload as limitReached } from "./errors/4021";

export const errors = {
  invalidKey,
  invalidUrl,
  balanceDepleted,
  dailyLimitReached: limitReached,
  dailyIpRateLimitReached: limitReached,
};

