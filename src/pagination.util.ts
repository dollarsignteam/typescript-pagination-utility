import { PageAndLimitInput, TakeAndSkip, TotalPageInput } from "./types";

export class PaginationUtility {
  static getTakeAndSkip({ page, limit = 20 }: PageAndLimitInput): TakeAndSkip {
    if (page < 0) page = 1;
    const skip = (page - 1) * Math.abs(limit);
    return { skip, take: limit };
  }

  static getTotalPages({ total, limit = 20 }: TotalPageInput): number {
    if (total < 1) {
      return 0;
    }
    return Math.ceil(total / limit);
  }
}
