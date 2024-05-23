"use client";

import { useQuery } from "@tanstack/react-query";
import { useSearchParams } from "next/navigation";

import { Card } from "./card";
import { IProduct } from "@/types";
import { getReq } from "@/utils/api-handler";
import { getFilteredProducts } from "@/utils/common";

export const Products = ({ children }: { children: React.ReactNode }) => {
  const searchParams = useSearchParams();
  const category = searchParams.get("category") || "";
  const price = searchParams.get("price");
  const sort = searchParams.get("sort") || "";

  const {
    data: products,
    isPending,
    error,
    isError,
  } = useQuery({
    queryKey: ["products"],
    queryFn: () => getReq("products"),
  });

  if (isPending)
    return (
      <div className="w-full">
        <p>Loading...</p>
      </div>
    );
  if (isError) throw new Error(error.message);

  const filteredProducts = getFilteredProducts(products, {
    category,
    price,
    sort,
  });

  return (
    <div className="w-full">
      {children}
      <div className="grid grid-cols-4 gap-4">
        {filteredProducts.map((product: IProduct) => (
          <Card key={product.id} {...product} />
        ))}
      </div>
      {!filteredProducts.length && (
        <div className="flex justify-center h-full items-center">
          No result found!
        </div>
      )}
    </div>
  );
};
