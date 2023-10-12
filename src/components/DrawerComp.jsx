import React, { useState } from "react";
import {
  Drawer,
  IconButton,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";
import FitnessCenterIcon from "@mui/icons-material/FitnessCenter";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import AddTaskIcon from "@mui/icons-material/AddTask";
import LogoutIcon from "@mui/icons-material/Logout";

const listButtonIcon = [
  SportsGymnasticsIcon,
  FitnessCenterIcon,
  AccountBalanceWalletIcon,
  AddTaskIcon,
];

function DrawerComp({ links, isLoggedIn, handleLogout }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "#113946", width: "200px" },
        }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((item, index) => (
            <ListItemButton key={index} onClick={() => setOpen(false)}>
              <ListItemIcon sx={{ color: "white" }}>
                {listButtonIcon[index] &&
                  React.createElement(listButtonIcon[index])}
              </ListItemIcon>
              <ListItemText sx={{ color: "white" }}>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
        {isLoggedIn && (
          <div className="logout">
            <List>
              <ListItemButton onClick={handleLogout}>
                <ListItemIcon sx={{ color: "white" }}>
                  {" "}
                  <LogoutIcon />
                </ListItemIcon>
                <ListItemText sx={{ color: "white" }}>Logout</ListItemText>
              </ListItemButton>
            </List>
          </div>
        )}
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpen(!open)}>
        <MenuRoundedIcon style={{ color: "white" }} />
      </IconButton>
    </>
  );
}

export default DrawerComp;
