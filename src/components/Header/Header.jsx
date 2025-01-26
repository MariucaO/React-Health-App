import React from "react";
import Logo from "../../components/Header/Logo";

const Header = () => {
  return (
    <header style={styles.header}>
      <Logo />
      <nav style={styles.nav}>
        <a href="#login" style={styles.link}>
          Login
        </a>
        <a href="#register" style={styles.link}>
          Register
        </a>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    width: "704px",
    height: "44px",
    top: "20px",
    left: "32px",
    display: "flex",  // Align logo and nav horizontally
    justifyContent: "space-between",  // Space between logo and nav
    alignItems: "center",  // Center items vertically
    opacity: 1,  // Make sure the header is visible
  },
  nav: {
    display: "flex",  // Arrange links in a row
    gap: "20px",  // Add space between the links
  },
  link: {
    textDecoration: "none",  // Remove underline from links
    color: "#000",  // Minimal black color for links (you can customize it)
    fontSize: "14px",  // Adjust font size for minimal look
  },
};

export default Header;
