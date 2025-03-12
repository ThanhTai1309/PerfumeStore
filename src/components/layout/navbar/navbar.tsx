import { useState, memo, useCallback, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  IconButton,
  Stack,
  Toolbar,
  Box,
  Drawer,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import PhoneIcon from "@mui/icons-material/Phone";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { styled } from "@mui/material/styles";
import { navDirection } from "./constants/direction";
import { Search, SearchIconWrapper, StyledInputBase } from "./components";
import { NAVBAR_SEARCH_PLACEHOLDER, SHOP_PHONE, SHOP_PHONE_HREF } from "./constants";
import { AppBar } from "../..";

// Tạo component styled để dễ dàng responsive
const MenuLinks = styled(Stack)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  gap: theme.spacing(3),
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const Navbar = memo(() => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleOpen = useCallback(() => setOpen(true), []);
  const handleClose = useCallback(() => setOpen(false), []);

  // Memoized menu links để tránh re-render
  const directionLinks = useMemo(
    () =>
      navDirection.map((dir, index) => (
        <Link key={index} to={dir.href} style={{ textDecoration: "none", color: "inherit" }}>
          {dir.title}
        </Link>
      )),
    []
  );

  return (
    <>
      <AppBar sx={{ bgcolor: "rgba(0, 102, 66, 0.5)", backdropFilter: "blur(16px)" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Nút mở menu drawer trên mobile */}
          <Box sx={{ display: { xs: "block", md: "none" } }}>
            <IconButton edge="start" color="inherit" onClick={handleOpen}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Hotline */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <PhoneIcon />
            <Link to={SHOP_PHONE_HREF} style={{ textDecoration: "none", color: "inherit" }}>
              {SHOP_PHONE}
            </Link>
          </Box>

          {/* Menu Links - chỉ hiển thị trên màn hình lớn */}
          <MenuLinks>{directionLinks}</MenuLinks>

          {/* Icons */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            {/* Ô tìm kiếm */}
            <Search sx={{ display: { xs: "none", md: "flex" } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase placeholder={NAVBAR_SEARCH_PLACEHOLDER} inputProps={{ "aria-label": "search" }} />
            </Search>

            {/* Giỏ hàng */}
            <IconButton color="inherit">
              <ShoppingCartIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>

      {/* Menu Drawer cho mobile */}
      <Drawer anchor="left" open={open} onClose={handleClose}>
        <List sx={{ width: 250 }}>
          {navDirection.map((dir, index) => (
            <ListItem key={index} disablePadding>
              <ListItemButton onClick={handleClose}>
                <Link to={dir.href} style={{ textDecoration: "none", color: "inherit", width: "100%" }}>
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

Navbar.displayName = "Navbar";

export default Navbar;
