"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const Sorting = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsSort = searchParams.get("sort") || "";

  const handleFilters = (sort: string) => {
    if (!sort) return;
    const params = new URLSearchParams(searchParams);
    params.set("sort", sort);

    router.push(`?${params.toString()}`);
  };

  return (
    <div className="flex justify-end items-center mb-5 space-x-4">
      <p>Sort by:</p>
      <select
        onChange={(e) => handleFilters(e.target.value)}
        className="border-[1px] p-2"
        value={paramsSort}
      >
        <option value="">-- Select Filter -- </option>
        <option value="PRICE_LOW">Price (Low-High)</option>
        <option value="PRICE_HIGH">Price (High-Low)</option>
        <option value="RATING_ASC">Rating Ascending</option>
        <option value="RATING_DESC">Rating Descending</option>
      </select>
    </div>
  );
};
