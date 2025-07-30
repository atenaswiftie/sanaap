import type {
  QueryKey,
  UseInfiniteQueryResult,
  UseInfiniteQueryOptions as UseRQInfiniteQueryOptions,
} from "@tanstack/react-query";
import type { AxiosError } from "axios";

export type UseInfiniteQueryOptions<K> = Omit<
  UseRQInfiniteQueryOptions<K, AxiosError>,
  | "queryKey"
  | "queryFn"
  | "select"
  | "getNextPageParam"
  | "getPreviousPageParam"
>;

export type UseInfiniteQueryParams<K> = {
  queryKey: QueryKey;
  queryFn: (page: number) => Promise<K>;
  options?: UseInfiniteQueryOptions<K>;
};

export type ResultType<K> = UseInfiniteQueryResult<K> & {
  derivedData: NonNullable<UseInfiniteQueryResult<K>["data"]>;
};
