"use client";

import { useQuery } from "@tanstack/react-query";
import { getReq } from "@/utils/api-handler";
import { useRouter, useSearchParams } from "next/navigation";

export const Categories = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const paramsCategory = searchParams.get("category");

  const {
    data: categories,
    isPending,
    error,
    isError,
  } = useQuery({
    queryKey: ["categories"],
    queryFn: () => getReq("products/categories"),
  });

  const handleFilters = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("category", category);

    router.push(`?${params.toString()}`);
  };

  if (isPending) return <p>Loading...</p>;
  if (isError) throw new Error(error.message);

  return (
    <div>
      {categories.map((category: string, index: number) => (
        <div key={index} onClick={() => handleFilters(category)}>
          <input
            id={category}
            type="radio"
            name="category"
            defaultChecked={paramsCategory === category}
          />{" "}
          <label
            htmlFor={category}
            className="text-md capitalize cursor-pointer"
          >
            {category}
          </label>
        </div>
      ))}
    </div>
  );
};
