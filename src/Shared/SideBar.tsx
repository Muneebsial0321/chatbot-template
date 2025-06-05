import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography } from "@mui/material";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { HomeFilled } from "@mui/icons-material";


const tokens = () => ({
    grey: {
        100: "#e0e0e0",
        200: "#c2c2c2",
        300: "#a3a3a3",
        400: "#858585",
        500: "#666666",
        600: "#525252",
        700: "#3d3d3d",
        800: "#292929",
        900: "#141414",
    },
    primary: {
        100: "#d0d1d5",
        200: "#a1a4ab",
        300: "#727681",
        400: "#1F2A40",
        500: "#141b2d",
        600: "#101624",
        700: "#0c101b",
        800: "#080b12",
        900: "#040509",
    },
    greenAccent: {
        100: "#dbf5ee",
        200: "#b7ebde",
        300: "#94e2cd",
        400: "#70d8bd",
        500: "#4cceac",
        600: "#3da58a",
        700: "#2e7c67",
        800: "#1e5245",
        900: "#0f2922",
    },
    redAccent: {
        100: "#f8dcdb",
        200: "#f1b9b7",
        300: "#e99592",
        400: "#e2726e",
        500: "#db4f4a",
        600: "#af3f3b",
        700: "#832f2c",
        800: "#58201e",
        900: "#2c100f",
    },
    blueAccent: {
        100: "#e1e2fe",
        200: "#c3c6fd",
        300: "#a4a9fc",
        400: "#868dfb",
        500: "#6870fa",
        600: "#535ac8",
        700: "#3e4396",
        800: "#2a2d64",
        900: "#151632",
    },


})


const Sidebar = ({ children }: { children?: React.ReactNode }) => {
    const colors = tokens();
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

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
                        color: colors.grey[100],
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

                <Box paddingLeft={isCollapsed ? undefined : "0%"}>
                    <MenuItem
                        active={selected === "Dashboard"}
                        style={{ color: colors.grey[100] }}
                        onClick={() => setSelected("Dashboard")}
                        icon={<HomeFilled className="text-black" />}
                    >
                        <Typography className="text-black">Dashboard</Typography>
                    </MenuItem>
                </Box>
            </Menu>
        </ProSidebar>
        <div>{children}</div>
        </div>
        </>
    );
};

export default Sidebar;
