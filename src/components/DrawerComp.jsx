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

function DrawerComp({ links }) {
  const [open, setOpen] = useState(false);
  return (
    <>
      {" "}
      <Drawer
        PaperProps={{
          sx: { backgroundColor: "#132043", width: "200px" },
        }}
        anchor="left"
        open={open}
        onClose={() => setOpen(false)}
      >
        <List>
          {links.map((item, index) => (
            <ListItemButton key={index} onClick={() => setOpen(false)}>
              <ListItemIcon>
                <ListItemText sx={{ color: "white" }}>{item}</ListItemText>
              </ListItemIcon>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton sx={{ marginLeft: "auto" }} onClick={() => setOpen(!open)}>
        <MenuRoundedIcon style={{ color: "white" }} />
      </IconButton>
    </>

    // </Box>
  );
}

export default DrawerComp;
