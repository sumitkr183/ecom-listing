import { IProduct } from "@/types";
import { SORT_LIST } from "./constants";

export function getFilteredProducts(
  products = [],
  params: { category: string; price: string | null; sort: string }
) {
  if (!products.length) return [];

  let result: IProduct[] = products;

  if (params.category) {
    result = result.filter(
      (product: IProduct) => product.category === params.category
    );
  }

  if (SORT_LIST.includes(params.sort)) {
    result = result.sort((a, b) => {
      if (params.sort === "PRICE_HIGH") return b.price - a.price;
      if (params.sort === "PRICE_LOW") return a.price - b.price;
      if (params.sort === "RATING_ASC") return b.rating.rate - a.rating.rate;
      return a.rating.rate - b.rating.rate;
    });
  }

  if (params.price !== null) {
    result = result.filter(
      (product: IProduct) => product.price > +(params.price as string)
    );
  }

  return result;
}

export const debounceFn = (callback: Function, delay: number) => {
  let timeoutId: ReturnType<typeof setTimeout>;

  return function (this: any, ...args: any[]) {
    if (timeoutId) clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, args), delay);
  };
};
