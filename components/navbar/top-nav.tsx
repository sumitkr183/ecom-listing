import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

import { SOCIAL_IMAGES } from "@/utils/constants";
import { Container } from "../ui/container";

export const TopNav = () => {
  return (
    <div className="bg-primary border-b-[1px] border-light">
      <Container className="flex justify-between items-center py-3">
        <p className="text-light text-sm">
          Welcome to Clicon online eCommerce store.
        </p>
        <div className="flex items-center space-x-5">
          <div className="flex items-center space-x-2">
            <span className="text-light text-sm">Follow us:</span>
            {SOCIAL_IMAGES.map((image) => (
              <Image
                key={image.url}
                src={`/images/icons/${image.url}`}
                alt={image.name}
                width={16}
                height={16}
              />
            ))}
          </div>
          <div className="flex items-center space-x-2">
            <span className="flex text-xs text-light items-end">
              Eng <IoIosArrowDown />
            </span>
            <span className="flex text-xs text-light items-end">
              USD <IoIosArrowDown />
            </span>
          </div>
        </div>
      </Container>
    </div>
  );
};
