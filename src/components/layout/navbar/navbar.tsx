import { JSX } from 'react';
import { Link } from "react-router-dom";
import { AppBar, IconButton, Typography, Stack, Toolbar, Box } from "@mui/material";
import ShopIcon from '@mui/icons-material/Shop';
import SearchIcon from '@mui/icons-material/Search';
import PhoneIcon from '@mui/icons-material/Phone';
import styles from '../navbar/style/navbar.module.css';
import { direction } from './direction';

const Navbar = (): JSX.Element => {
  return (
    <AppBar
      position="absolute"
      sx={{
        backgroundColor: "rgba(0, 51, 102, 0.9)", // Xanh đậm với độ mờ
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
            <Link key={index} to={dir.href} style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
              {dir.title}
            </Link>
          ))}
        </Stack>

        {/* Icons */}
        <Box>
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton color="inherit">
            <ShopIcon />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;