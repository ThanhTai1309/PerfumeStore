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
        <Link key={index} to={dir.href} className={styles.link}>
          {dir.title}
        </Link>
      )),
    []
  );

  return (
    <>
      <AppBar className={styles["app-bar"]} style={{ backgroundColor: "#006642" }}>
        <Toolbar className={styles.toolbar}>
          {/* Menu Icon cho Mobile */}
          <Box className={styles["menu-icon-box"]}>
            <IconButton edge="start" color="inherit" onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Hotline */}
          <Box className={styles.hotline}>
            <PhoneIcon className={styles["hotline-icon"]} />
            <Link to={SHOP_PHONE_HREF} className={styles.link}>
              {SHOP_PHONE}
            </Link>
          </Box>

          {/* Menu Links */}
          <Stack direction="row" spacing={3} className={styles["menu-links"]}>
            {renderDirectionLinks()}
          </Stack>

          {/* Icons */}
          <Box className={styles["icon-box"]}>
            <Search className={styles["search-box"]}>
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
        <List className={styles["drawer-list"]}>
          {navDirection.map((dir, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={handleClose}>
                <Link to={dir.href} className={styles["drawer-link"]}>
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
