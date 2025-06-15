import { ListItemButton } from "@mui/material";
import { Link } from "react-router-dom";

interface SidebarMenuItemProps {
    onClick?: () => void;
    Icon?: React.ReactNode;
    children?: React.ReactNode;
    title: string,
    link: string,
}

export const SideBarMenuItem: React.FC<SidebarMenuItemProps> = ({ Icon, title, link }) => {
    return <ListItemButton className="p-0!">
        <Link to={link} className="text-white pl-6.5 flex items-center w-full h-[3rem] hover:bg-black! transition-all duration-300">
            {/* icon */}
            {Icon}
            <p className="ml-[27px]">
                {title}
            </p>
        </Link>

    </ListItemButton>
}