import { Categories } from "./categories";
import { PriceFilter } from "./price-filter";

export const Filters = () => {
  return (
    <div className="w-80 space-y-10 flex flex-col">
      <div className="flex flex-col space-y-3 w-full">
        <h3 className="uppercase text-lg font-semibold">Category</h3>
        <div className="flex flex-col">
          <Categories />
        </div>
      </div>

      <div className="flex flex-col space-y-3 w-full">
        <h3 className="uppercase text-lg font-semibold">Price Range</h3>
        <div className="flex flex-col">
          <PriceFilter />
        </div>
      </div>
    </div>
  );
};
