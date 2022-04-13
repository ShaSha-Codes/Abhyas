import React from "react";
import NavBar from "../components/NavBar";
import AssignmentIcon from "@mui/icons-material/Assignment";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import CardActions from "@mui/material/CardActions";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import TextField from '@mui/material/TextField';
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
export default function AssignmentContent() {

      const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const [openForm, setOpenForm] = React.useState(false);
    const handleClickOpenForm = () => {
        setOpenForm(true);
    };

    const handleCloseForm = () => {
        setOpenForm(false);
    };

    function AssignmentPageMaker(){
        const styler = {
            height: "300px",
            width: "50%",
            background: "rgb(229,228,249)",
            background:
              "linear-gradient(90deg, rgba(247,247,252,1) 0%, rgba(255,255,255,1) 35%, rgba(253,255,255,1) 100%)",
            boxShadow: "0 3px 10px rgb(0 0 0 / 0.2)" ,
            borderRadius: "12px",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop:"4%",
          };
        return(
            <div>
                <div>
                <h1 className="assignment-title"><AssignmentIcon/> Assignment Name</h1>
                </div>
                <div>
                <Card variant="outlined"  sx={styler}>
                <CardContent>
            
            <Typography
              sx={{
                position: "relative",
                left: "10px",
                maxHeight: "200px",
                overflow: "hidden",
              }}
            >
              Hello Students pls submit XYZ assignment by tuesday and present it to the teacher
            </Typography>
            <Button 
            sx={{marginTop:"1%"}}
            variant="contained" onClick={handleClickOpen}>Access Notes</Button>
          </CardContent>
          <div style={{ position: "relative", bottom: "-100px" }}>
            <CardActions sx={{ position: "relative", marginBottom: -500 }}>
              <Button
                sx={{ marginLeft: "auto", marginRight: "auto" }}
                variant="outlined"
                size="large"
                onClick={handleClickOpenForm}
              >
                Submit
              </Button>
            </CardActions>
          </div>
        </Card>


        <Dialog
        open={open}
        TransitionComponent={Transition}    
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{"Notes"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
           <img src="https://th.bing.com/th/id/OIP.hsYDh7xxweITCX_R0cdpvAHaJ4?pid=ImgDet&rs=1"/>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>

        {/* Form Dialog */}


        <Dialog open={openForm} onClose={handleCloseForm}>
        <DialogTitle>Submission</DialogTitle>
        <DialogContent>
          <label className="label">Upload File:</label>
          <br/>
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="file"
              name="upload"
            //   onChange={handleForm}
              inputProps={{ accept: ".mp4, .mov, .wmv, .avi, .avchd, .mkv" }}
            />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseForm}>Cancel</Button>
          <Button onClick={handleCloseForm}>Submit</Button>
        </DialogActions>
      </Dialog>
        
                 </div>
            </div>
        );
    }
   
   return (<div>
        <NavBar/>
        {AssignmentPageMaker()}
        </div>)
}