import Image from "next/image";
import { Container } from "../ui/container";

export const Navbar = () => {
  return (
    <nav className="bg-white py-4 border-b-[1px] border-black/10">
      <Container>
        <div className="flex justify-between items-center">
          <div className="flex space-x-4">
            <Image
              src="/images/category.svg"
              alt="category"
              width={154}
              height={48}
            />
            <Image
              src="/images/track-order.svg"
              alt="track-order"
              width={107}
              height={24}
            />
            <Image
              src="/images/compare.svg"
              alt="compare"
              width={89}
              height={24}
            />
            <Image
              src="/images/customer-support.svg"
              alt="customer-support"
              width={150}
              height={24}
            />
            <Image
              src="/images/need-help.svg"
              alt="need-help"
              width={99}
              height={24}
            />
          </div>
          <div>
            <Image
              src="/images/call-now.svg"
              alt="category"
              width={182}
              height={28}
            />
          </div>
        </div>
      </Container>
    </nav>
  );
};
