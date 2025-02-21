import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, Box, Link } from "@mui/material";
import { useTheme } from "@mui/material";
import logo from "../../assets/images/logo.svg";

const Header = () => {
  const theme = useTheme(); // this is a hook
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  // window.innerWidth is the initial window witdth

  // detect screen size changes with useEffect
  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isMobile = screenWidth <= 600;
  const isTablet = screenWidth > 600 && screenWidth <= 1024;

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: theme.palette.background.default,
        height: isMobile ? "60px" : isTablet ? "70px" : "80px",
        padding: isMobile ? "10px" : "20px",
        display: "flex",
        justifyContent: isMobile ? 'center' : 'flex-start',
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: isMobile ? 'center' : 'flex-start',
          alignItems: 'center',
          width: "100%",
        }}
      >
        <Box
          component="img"
          src={logo}
          alt="Logo"
          sx={{
            width: isMobile ? "100px" : isTablet ? "140px" : "167px",
            height: isMobile ? "35px" : isTablet ? "50px" : "60px",
          }}
        />
        {/* links */}
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            alignItems: 'center', 
            marginLeft:  isTablet? 'auto' : isMobile ? '0' : '20px',
            justifyContent: isMobile?  "center" : 'flex-start',
            width: isMobile? '100%' : 'auto',  
           
          }}
        >
          <Link
            href="/login"
            underline="none"
            sx={{
              color: theme.palette.secondary.main,
              fontSize: isMobile ? "12px" : isTablet ? "14px" : "16px",
              fontWeight: "700",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            LOG IN
          </Link>
          <Link
            href="/register"
            underline="none"
            sx={{
              color: theme.palette.secondary.main,
              fontSize: isMobile ? "12px" : isTablet ? "14px" : "16px",
              fontWeight: "700",
              transition: "color 0.3s ease-in-out",
              "&:hover": {
                color: theme.palette.primary.main,
              },
            }}
          >
            REGISTRATION
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
