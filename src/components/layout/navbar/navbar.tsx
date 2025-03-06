import { JSX } from 'react';
import { Link } from "react-router-dom";
import { AppBar, IconButton, Typography, Stack, Toolbar, Box } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from '../navbar/style/navbar.module.css';
import { direction } from './direction';
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));


const Navbar = (): JSX.Element => {
  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "rgba(0, 102, 66, 0.9)", // Xanh đậm với độ mờ
        backdropFilter: "blur(8px)",
        width: "100%",
        top: 0,
        zIndex: 10,
        padding: "10px 0",
      }}
    >
      <Toolbar className={styles.toolBar} sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* Hotline */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <PhoneIcon sx={{ marginRight: 1 }} />
          <Typography variant="body1">HOTLINE: 0899489929</Typography>
        </Box>

        {/* Menu */}
        <Stack direction="row" spacing={3} className={styles.directionStyle}>
          {direction.map((dir, index) => (
            <Link key={index} to={dir.href} style={{ color: "white", textDecoration: "none", fontWeight: "bold", textAlign: 'center' }}>
              {dir.title}
            </Link>
          ))}
        </Stack>

        {/* Icons */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          {/* Ô tìm kiếm */}
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Tìm kiếm..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>

          {/* Icon Giỏ Hàng */}
          <IconButton color="inherit">
            <ShoppingCartIcon />
          </IconButton>
        </Box>

      </Toolbar>
    </AppBar>
  );
};

export default Navbar;