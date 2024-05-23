import Image from "next/image";
import { Container } from "../ui/container";
import { SearchBar } from "../search-bar";

export const MiddleNav = () => {
  return (
    <div className="bg-primary">
      <Container className="py-5 flex justify-between space-x-24">
        <Image src="/images/Logo.svg" alt="logo" width="254" height="48" />

        {/* Search */}
        <SearchBar />

        {/* Right Icons */}
        <div className="flex space-x-2">
          <Image
            src="/images/icons/shopping-cart.svg"
            height={32}
            width={32}
            alt="cart"
          />
          <Image
            src="/images/icons/heart.svg"
            height={32}
            width={32}
            alt="cart"
          />
          <Image
            src="/images/icons/user.svg"
            height={32}
            width={32}
            alt="cart"
          />
        </div>
      </Container>
    </div>
  );
};
