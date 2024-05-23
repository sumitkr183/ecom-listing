import { MiddleNav } from "@/components/navbar/middle-nav";
import { TopNav } from "@/components/navbar/top-nav";
import { Navbar } from "@/components/navbar";
import { Container } from "@/components/ui/container";
import { Filters } from "@/components/filters";
import { Products } from "@/components/products";
import { Sorting } from "@/components/filters/sorting";
import { Suspense } from "react";

const HomePage = () => {
  return (
    <>
      <TopNav />
      <MiddleNav />
      <Navbar />

      <Container className="flex space-x-8 my-10">
        <Filters />
        <Products>
          <Suspense>
            <Sorting />
          </Suspense>
        </Products>
      </Container>
    </>
  );
};

export default HomePage;
