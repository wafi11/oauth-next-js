import Container from "../utils/Container";
import Brand from "./Brand";
import SearchInput from "./SearchInput";
import UserMenu from "./UserMenu";
import getCurrentUser from "../../app/libs/auth/route";
// import { useEffect, useState } from "react";

const Navbar = async () => {
  const currentUser = await getCurrentUser();
  // console.log(currentUser);
  return (
    <div className={`bg-white w-full z-10 shadow-sm dark:bg-medium fixed`}>
      <div className=" py-4 ">
        <Container>
          <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
            <Brand />
            <SearchInput />
            <UserMenu currentUser={currentUser} />
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
