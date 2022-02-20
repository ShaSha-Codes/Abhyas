import React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import TeacherClass from "../pages/TeacherClass"

const drawerWidth = 240;

export default function Sidebar(props) {

  const [visibility,setVisibility]=React.useState({videos:true,assignments:true,students:true})

  function toggler(text){
    setVisibility(prevVisility=>{
      const data={}
      for(let key in visibility){
        data[key]=false
      }
      data[text.toLowerCase()]=true
      return data
    })
    
    
    
  }
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      {/* TODO: Make a copy of the below drawer with one 'temporary' for mobile devices */}
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "block" },
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
        }}
      >
        <Toolbar /> {/* So just for spacing? */}
        <Box sx={{ overflow: "auto" }}>
          <List>
            {["Videos", "Assignments", "Quizzes", "Notes"].map((text, index) => (
              <ListItem button key={text} onClick={(event)=>{toggler(text)}}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Divider />
          <List>
            {["Students"].map((text, index) => (
              <ListItem button key={text} onClick={(event)=>{toggler(text)}}>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <TeacherClass visibility={visibility}/>
      </Box>
      
    </Box>
  );
}
