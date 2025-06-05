import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, ListItemButton, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { SideBarRoutes } from "../Routes/SideBar.routes";
import { Link } from "react-router-dom";

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
                <ProSidebar className="" collapsed={isCollapsed}>
                    <Menu className="bg-white h-[100vh] border-2 border-[#dedede] ">

                        <MenuItem
                            onClick={() => setIsCollapsed(!isCollapsed)}
                            icon={isCollapsed ? <MenuOutlinedIcon className="text-black" /> : undefined}
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
                                        <MenuOutlinedIcon className="text-black" />
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
                                icon={<HomeFilled className="text-black" />}
                            >
                                <Typography className="text-black">Dashboard</Typography>
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
                <div>{children}</div>
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
        <MenuItem
            icon={Icon}
            component={<Link to={link} />}
        >
            <Typography className="text-black">{title}</Typography>
        </MenuItem>
    </ListItemButton>
}
export default Sidebar;
