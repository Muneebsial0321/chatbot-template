import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton} from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { SideBarRoutes } from "../Routes/SideBar.routes";
import { useGetConversations } from "../hooks/Home";
import { SideBarMenuItem } from "./SideBarMenuItem";
import { SideBarConversationItem } from "./SideBarConversationItem";


const Sidebar = ({ children }: { children?: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const { data: Conversations, isLoading: isConversationLoading } = useGetConversations()
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

                        {/* conversation item   */}
                        {Conversations && Conversations?.map((e, i) => (
                            <SideBarConversationItem
                                key={i}
                                title={e.title}
                                link={e.id.toString()}
                            />
                        ))}
                    </Menu>
                </ProSidebar>
                <div className="w-full h-full">{children}</div>
            </div>
        </>
    );
};

export default Sidebar;
