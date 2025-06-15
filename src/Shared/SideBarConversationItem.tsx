import { KeyboardOptionKey, MoreVertOutlined } from "@mui/icons-material"
import { IconButton, ListItemButton, Menu } from "@mui/material"
import { useState } from "react"
import { MenuItem } from "react-pro-sidebar"
import { Link } from "react-router-dom"

interface SidebarConversationItemProps {
    title: string,
    link: string,
}
export const SideBarConversationItem: React.FC<SidebarConversationItemProps> = ({ title, link }) => {
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const isOpen = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <ListItemButton className="p-0! hover:bg-black!">
            <Link to={"/?id=" + link} className="text-white pl-6.5 flex items-center w-full h-[3rem]">
                {/* icon */}
                <p className="ml-[51px]">{title}</p>
            </Link>

            <IconButton
                onClick={handleClick}
                className="hover:bg-accent transition-all duration-300">
                <MoreVertOutlined className="text-primary-light_text" />
            </IconButton>
            <Menu
                anchorEl={anchorEl}
                open={isOpen}
                onClose={handleClose}
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                transformOrigin={{ vertical: "top", horizontal: "right" }}
              
                PaperProps={{ className: "bg-primary text-primary-light_text p-0 shadow-lg rounded-md" }}
            >
                <MenuItem
                className="hover:text-accent transition-all duration-300" onClick={handleClose}>
                    Profile
                </MenuItem>
                <MenuItem className="hover:text-accent transition-all duration-300" onClick={handleClose}>
                    My account
                </MenuItem>
                <MenuItem className="hover:text-accent transition-all duration-300" onClick={handleClose}>
                    Logout
                </MenuItem>
            </Menu>

        </ListItemButton>
    )
}
