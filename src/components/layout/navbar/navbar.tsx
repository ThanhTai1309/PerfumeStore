import { JSX, useState, memo, useCallback } from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  IconButton,
  Stack,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { navDirection } from "./constants/direction";
import { Search, SearchIconWrapper, StyledInputBase } from "./components";
import { DEFAULT_BOOLEAN_FALSE } from "../../../illumination";
import { NAVBAR_SEARCH_PLACEHOLDER, SHOP_PHONE, SHOP_PHONE_HREF } from "./constants";
import styles from "./style/navbar.module.css";

const Navbar = memo((): JSX.Element => {
  const [open, setOpen] = useState<boolean>(DEFAULT_BOOLEAN_FALSE);

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  const renderDirectionLinks = useCallback(
    () =>
      navDirection.map((dir, index) => (
        <Link
          key={index}
          to={dir.href}
          className={styles.direction}
        >
          {dir.title}
        </Link>
      )),
    []
  );

  return (
    <>
      <AppBar
        position="absolute"
        sx={{
          backgroundColor: "rgba(0, 102, 66, 0.7)",
          backdropFilter: "blur(16px)",
          width: "100%",
          top: 0,
          zIndex: 10,
          padding: "16px 0",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Menu Icon cho Mobile */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton edge="start" color="inherit" onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Hotline */}
          <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
            <PhoneIcon sx={{ marginRight: 1 }} />
            <Link
              to={SHOP_PHONE_HREF}
              style={{ color: "white", textDecoration: "none" }}
            >
              {SHOP_PHONE}</Link>
          </Box>

          {/* Menu Links */}
          <Stack direction="row" spacing={3} sx={{ display: { xs: "none", md: "flex" } }}>
            {renderDirectionLinks()}
          </Stack>

          {/* Icons */}
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Search sx={{ display: { xs: "none", sm: "block" } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder={NAVBAR_SEARCH_PLACEHOLDER}
                inputProps={{ "aria-label": "search" }}
              />
            </Search>

            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      <Drawer anchor="left" open={open} onClose={handleClose}>
        <List sx={{ width: 250 }}>
          {navDirection.map((dir, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={handleClose}>
                <Link to={dir.href} style={{ color: "black", textDecoration: "none", width: "100%" }}>
                  <ListItemText primary={dir.title} />
                </Link>
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
});

export default Navbar;
