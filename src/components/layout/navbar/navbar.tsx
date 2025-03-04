import { JSX } from 'react';
import ShopIcon from '@mui/icons-material/Shop';
import { Link } from "react-router-dom";

import {
  AppBar,
  IconButton,
  Typography,
  Stack,
  Toolbar,
  Box,
} from "@mui/material"
import { SHOP_NAME } from './constants';
import styles from '../navbar/style/navbar.module.css'
import { direction } from './direction';

const Navbar = (): JSX.Element => {
  return (
    <AppBar
      sx={{
        backgroundColor: 'green'
      }}
    >
      <Toolbar className={styles.toolBar}>
        <Typography variant='h6' component='div'>
          {SHOP_NAME}
        </Typography>
        <IconButton size='large' edge='start' color='inherit' arial-label='logo'>
          <ShopIcon />
        </IconButton>

        <Stack direction="row" spacing={2} className={styles.directionStyle}>
          {direction.map((dir, index) => (
            <Link key={index} to={dir.href} style={{ color: "inherit", textDecoration: "none" }}>
              {dir.title}
            </Link>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
