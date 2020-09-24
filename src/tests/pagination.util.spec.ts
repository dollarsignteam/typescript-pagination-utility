import { PaginationUtility } from "../pagination.util";
import { TakeAndSkip } from "../types";

describe("Pagination Utility", () => {
  describe("getTakeAndSkip method", () => {
    test("get skip and take", () => {
      const expected: TakeAndSkip = { skip: 0, take: 10 };
      const actual = PaginationUtility.getTakeAndSkip({ page: 1, limit: 10 });
      expect(actual).toEqual(expected);
    });

    test("get skip and take when no `limit` param given", () => {
      const expected: TakeAndSkip = { skip: 0, take: 20 };
      const actual = PaginationUtility.getTakeAndSkip({ page: 1 });
      expect(actual).toEqual(expected);
    });

    test("get proper skip and take", () => {
      const expected: TakeAndSkip = { skip: 40, take: 10 };
      const actual = PaginationUtility.getTakeAndSkip({ page: 5, limit: 10 });
      expect(actual).toEqual(expected);
    });

    test("get skip and take when given page is less than 0", () => {
      const expected: TakeAndSkip = { skip: 0, take: 50 };
      const actual = PaginationUtility.getTakeAndSkip({ page: -4, limit: 50 });
      expect(actual).toEqual(expected);
    });
  });

  describe("getTotalPages method", () => {
    test("get total pages", () => {
      const expected: number = 100;
      const actual = PaginationUtility.getTotalPages({
        total: 1000,
        limit: 10,
      });
      expect(actual).toEqual(expected);
    });

    test("get total pages when total items is 0", () => {
      const expected: number = 0;
      const actual = PaginationUtility.getTotalPages({
        total: 0,
        limit: 50,
      });
      expect(actual).toEqual(expected);
    });

    test("get total pages when limit is not provided", () => {
      const expected: number = 50;
      const actual = PaginationUtility.getTotalPages({
        total: 1000,
      });
      expect(actual).toEqual(expected);
    });

    test("get total pages when total items is less than 1 [0 to -Infinity]", () => {
      const expected: number = 0;
      const actual = PaginationUtility.getTotalPages({
        total: 0,
        limit: 140,
      });
      expect(actual).toEqual(expected);
    });
  });
});
