import React, { useState } from "react";
import {
  TextField,
  Button,
  Card,
  CardContent,
  MenuItem,
  Grid,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { NavLink } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <AppBar position="fixed">
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleDrawerOpen}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" style={{ flexGrow: 1 }}>
            Institución Educativa Del Norte
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={open} onClose={handleDrawerClose}>
        <div className="drawer-header">
          <IconButton onClick={handleDrawerClose}>
            <CloseIcon />
          </IconButton>
        </div>
        <List>
          <ListItem button onClick={handleDrawerClose}>
            <NavLink to="/" exact activeClassName="active">
              <ListItemText primary="Home" />
            </NavLink>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <NavLink to="/pagar" activeClassName="active">
              <ListItemText primary="Pagar" />
            </NavLink>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <NavLink to="/historial" activeClassName="active">
              <ListItemText primary="Historial de pagos" />
            </NavLink>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <NavLink to="/contacto" activeClassName="active">
              <ListItemText primary="Contacto" />
            </NavLink>
          </ListItem>
          <ListItem button onClick={handleDrawerClose}>
            <NavLink to="/cerrar-sesion" activeClassName="active">
              <ListItemText primary="Cerrar Sesión" />
            </NavLink>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}
