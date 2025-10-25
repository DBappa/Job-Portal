import { IconRocket, IconSettings } from "@tabler/icons-react"
import { IconBell } from "@tabler/icons-react"
import { Avatar } from "@mantine/core"

const Header = () => {
    return (
        <div className="w-full bg-black h-28 text-white flex justify-between px-6
        items-center">
            <div className="flex gap-3 items-center">
                <IconRocket stroke={1.5} className="h-10 w-10"/>
               <div className="text-3xl font-semibold">iJobs</div>
            </div>
            <div className="flex gap-3">
                <a href="">Find Job</a>
                <a href="">Find Talent</a>
                <a href="">Upload Jobs</a>
                <a href="">About Us</a>
            </div>
            <div className="flex gap-3 items-center">
                <IconBell stroke={2} />
                <div className="flex items-center gap-2">
                    <div>Bappa</div>
                    <Avatar src="avatar.png" alt="it's me" />
                </div>
                <IconSettings stroke={2} />
            </div>
        </div>
    )
}

export default Header