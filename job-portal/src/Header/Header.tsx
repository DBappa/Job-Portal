import { IconAnchor, IconSettings } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { Avatar, Button, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";
import { Link } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((state: any) => state.user);

  return (
    <div
      className="w-full bg-mine-shaft-950 h-28 text-white flex justify-between px-6
        items-center font-['poppins']"
    >
      <Link to="/" className="flex gap-2 items-center text-bright-sun-400">
        <IconAnchor stroke={2.5} className="h-8 w-8" />
        <div className="text-3xl font-semibold">JobHook</div>
      </Link>
      {NavLinks()}
      <div className="flex gap-3 items-center">
        {user ? (
          <ProfileMenu />
        ) : (
          <Link to="/login">
            <Button color="bright-sun.4" variant="subtle">
              Login
            </Button>
          </Link>
        )}
        {/* <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div> */}
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <Indicator color="bright-sun.4" size={8} offset={7} processing>
            <IconBell stroke={1.5} />
          </Indicator>
        </div>
      </div>
    </div>
  );
};

export default Header;
