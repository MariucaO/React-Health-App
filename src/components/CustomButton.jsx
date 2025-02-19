import React from "react";
import { useTheme } from "@mui/material/styles";
import { Button } from "@mui/material";

const CustomButton = ({
  type = "primary",
  size = "small",
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
      borderRadius: "30px 30px 30px 30px",
      fontFamily: theme.typography.fontFamily,
      fontSize: "12px",
      cursor: "pointer",
    },
  };
  return (
    <Button
      size={size}
      onClick= {onClick}
      style=
      {{
        ...styles.common,
        ...styles[type],
      }}
    >
    {children}
    </Button>
  );
};

export default CustomButton;
