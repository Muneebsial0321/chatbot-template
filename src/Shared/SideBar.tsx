import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, ListItemButton, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { SideBarRoutes } from "../Routes/SideBar.routes";
import { Link } from "react-router-dom";
import { green } from "@mui/material/colors";

interface SidebarMenuItemProps {
    active?: boolean;
    style?: React.CSSProperties;
    onClick?: () => void;
    icon?: React.ReactNode;
    children?: React.ReactNode;
}
const Sidebar = ({ children }: { children?: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);

    return (
        <>
            <div className="flex">
                <ProSidebar className="bg-primary-darker" collapsed={isCollapsed}>
                    <Menu className="bg-primary-darker h-[100vh] border-2 border-primary-ligher ">

                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlinedIcon className="text-white" /> : undefined}
                            style={{
                                margin: " ",
                            }}
                        >
                            {!isCollapsed && (
                                <Box
                                    display="flex"
                                    justifyContent="space-between"
                                    alignItems="center"
                                >
                                    <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                        <MenuOutlinedIcon className="text-white" />
                                    </IconButton>
                                </Box>
                            )}
                        </MenuItem>
                        {/* 
                        <Box paddingLeft={isCollapsed ? undefined : "0%"}>
                            <MenuItem
                                active={selected === "Dashboard"}
                                style={{ color: colors.grey[100] }}
                                onClick={() => setSelected("Dashboard")}
                                icon={<HomeFilled className="text-white" />}
                            >
                                <Typography className="text-white">Dashboard</Typography>
                            </MenuItem>
                        </Box> */}
                        {SideBarRoutes.map((e, i) => (
                            <SideBarMenuItem
                                key={i}
                                title={e.name}
                                link={e.path}
                                Icon={e.icon}
                            />
                        ))}
                    </Menu>
                </ProSidebar>
                <div className="w-full h-full">{children}</div>
            </div>
        </>
    );
};

interface SidebarMenuItemProps {
    onClick?: () => void;
    Icon?: React.ReactNode;
    children?: React.ReactNode;
    title: string,
    link: string,
}


const SideBarMenuItem: React.FC<SidebarMenuItemProps> = ({ Icon, title, link }) => {
    return <ListItemButton className="p-0!">
        <Link to={link} className="text-white pl-7 flex items-center w-full h-[3rem] hover:bg-black! transition-all duration-300">
            {/* icon */}
            {Icon}
            <p className="ml-[24px]">
                {title}
            </p>
        </Link>

    </ListItemButton>
}
export default Sidebar;
