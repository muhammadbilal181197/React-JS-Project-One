import React from "react";
import course from "../../images/coursera.svg";
import udemy from "../../images/udemy.svg";
import fedex from "../../images/fedex.svg";
import education from "../../images/education.svg";
import elecom from "../../images/elecom.svg";
import indeed from "../../images/indeed.svg";
import { Box, Container, Grid, Typography } from "@mui/material";
import "../../Styles/Home/Companies.scss";

const Companies = () => {
    return (
        <Box sx={{display:{xs:"none" , lg:"block"}}}>
            <Container className="container Companies" sx={{ pt: 12, pb: 10 }}>
                <Box align="center"  sx={{ pb: 6 }}>
                    <Typography variant="h2" className=" text_primary font_poppins" sx={{ textAlign: "center" }}>
                    Trusted by over 800+ companies
                    </Typography>
                </Box>
                <Grid container sx={{display:"flex" , alignItems:"center"}} >
                    <Grid item xs={2}>
                        <img src={course} alt=""></img>
                    </Grid>
                    <Grid item xs={2} sx={{pl:3.5}}>
                        <img src={udemy}  alt=""></img>
                    </Grid>
                    <Grid item xs={2} sx={{pl:3.5}}>
                        <img src={fedex} alt=""></img>
                    </Grid>
                    <Grid item xs={2}>
                        <img src={education} alt=""></img>
                    </Grid>
                    <Grid item xs={2}>
                        <img src={elecom} alt=""></img>
                    </Grid>
                    <Grid item xs={2}>
                        <img src={indeed} alt=""></img>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Companies;
