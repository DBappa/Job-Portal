import { IconAnchor, IconSettings } from "@tabler/icons-react";
import { IconBell } from "@tabler/icons-react";
import { Avatar, Indicator } from "@mantine/core";
import NavLinks from "./NavLinks";

const Header = () => {
  return (
    <div
      className="w-full bg-mine-shaft-950 h-28 text-white flex justify-between px-6
        items-center"
    >
      <div className="flex gap-2 items-center text-bright-sun-400">
        <IconAnchor stroke={2.5} className="h-8 w-8" />
        <div className="text-3xl font-semibold">JobHook</div>
      </div>
      {NavLinks()}
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-2">
          <div>Bappa</div>
          <Avatar src="avatar.png" alt="it's me" />
        </div>
        <div className="bg-mine-shaft-900 p-1.5 rounded-full">
          <IconSettings stroke={1.5} />
        </div>
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
