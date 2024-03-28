import Container from "../utils/Container";
import Brand from "./Brand";
import SearchInput from "./SearchInput";
import ThemeButton from "./ThemeButton";
import UserMenu from "./UserMenu";
import Categories from "../categories";
import getCurrentUser from "../../app/libs/auth/route";

const Navbar = async () => {
  const currentUser = await getCurrentUser();
  console.log(currentUser);
  return (
    <div className="fixed w-full z-10 shadow-sm bg-white dark:bg-medium">
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
