import React from "react";
import { useTheme } from "@mui/material/style";
import { Button } from "@mui/material";

const CustomButton = ({
  type = "primary",
  size = "medium",
  onClick,
  children,
}) => {
  const theme = useTheme();
  const styles = {
    primary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.primary.contrastText,
      border: "none",
      boxShadow: "0px 4px 10px 0px #FC842D80",
    },
    secondary: {
      backgroundColor: "#FFFFFF",
      color: theme.palette.primary.main,
      border: "2px solid #FC842D ",
    },
    common: {
      width: "182px",
      height: " 44px",
      borderRadius: "30px 0px 0px 0px",
      fontFamily: theme.typography.fontFamily,
      fontSize: "16px",
      cursor: "pointer",
      transition: "0.3s ease-in-out",
      "&:hoover": {
        backgroundColor:
          type === "primary" ? theme.palette.primary.dark : "#FFF5F0",
      },
    },
  };
  return (
    <Button>
      size={size}
      onClick= {onClick}
      style=
      {{
        ...styles.common,
        ...styles[type],
      }}
      {children}
    </Button>
  );
};

export default CustomButton;
