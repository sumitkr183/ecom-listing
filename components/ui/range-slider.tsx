"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { debounceFn } from "@/utils/common";

export const RangeSlider = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsPrice = searchParams.get("price") || 100;

  const handlePriceFilter = (price: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("price", price);

    router.push(`?${params.toString()}`);
  };

  const debounce = debounceFn((e: React.ChangeEvent<HTMLInputElement>) => {
    handlePriceFilter(e.target.value);
  }, 500);

  return (
    <div>
      <p>${paramsPrice}</p>
      <input
        type="range"
        defaultValue={paramsPrice}
        min={1}
        max={1000}
        onChange={(e) => debounce(e)}
        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
      />
    </div>
  );
};
