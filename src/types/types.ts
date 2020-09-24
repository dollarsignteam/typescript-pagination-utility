export type Paginated<T> = {
  items: T[];
  totalPages?: number;
  totalItems?: number;
};

export type TotalPageInput = {
  total: number;
  limit?: number;
};

export type TakeAndSkip = {
  take: number;
  skip: number;
};

export type PageAndLimitInput = {
  page: number;
  limit?: number;
};
