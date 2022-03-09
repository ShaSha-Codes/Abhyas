import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Category from "../components/Category";
import Login from "../components/Login";
import Certify from "../components/Certify";
import "../assets/css/style.css";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Landing() {
  const [formType, setFormType] = React.useState(1);
  const [darkMode, setDarkMode] = React.useState(false);

  function selectForm(custom) {
    setFormType(parseInt(custom));
  }

  React.useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      document.body.classList.add("body-dark");
      setDarkMode(true);
    }
  }, []);

  return (
    <>
      <Grid
        container
        sx={{ minHeight: "100vh", paddingBottom: "4%" }}
        className="main"
      >
        <Grid item xs={12} md={6}>
          <Item
            disabled
            sx={{
              border: 0,
              boxShadow: 0,
              marginTop: "28%",
              backgroundColor: "transparent",
              padding: 0,
            }}
            className="indexpart1"
          >
            <h1>Abhyas</h1>
            <h2 sx={{ color: "#fff" }}>A place to learn and share</h2>
          </Item>
        </Grid>
        <Grid item xs={12} md={6} sx={{ padding: 0 }}>
          <Item
            sx={{
              border: 0,
              boxShadow: 0,
              backgroundColor: "transparent",
              padding: 0,
              marginTop: "10%",
            }}
            className="indexpart2"
          >
            <Category name="Student" type="1" selectForm={selectForm} />
            <Category name="Teacher" type="2" selectForm={selectForm} />
            <Category name="Certificate" type="3" selectForm={selectForm} />
            <br />
            <div className="formPart">
              {formType === 1 && <Login name="student" title="Username" />}
              {formType === 2 && <Login name="teacher" title="Teacher ID" />}
              {formType === 3 && <Certify />}
            </div>
          </Item>
        </Grid>
      </Grid>
       {/* footer */}

       <Grid container >
            <Grid item xs={12}  >
                <Item disabled sx={{border:0,boxShadow:0,backgroundColor:'transparent',padding:0}} className="indexpart1">
                <footer>
            <div className="footer-text">
                <a href="http://www.abhyas.app">Thanks for visiting abhyas.app !</a>
            </div>
            </footer>  
                </Item>
            </Grid>
        </Grid>
    </>
  );
}
