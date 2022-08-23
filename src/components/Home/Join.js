import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import "../../Styles/Home/Join.scss"

const Join = () => {
    return (
        <Box>
            <Container className="container join" sx={{ pt: 12}} >
                <Grid container sx={{ alignItems: "center" , display:"flex" ,justifyContent:"center"  }} className="join_inner">
                <Grid item xs={8}>
                <Box sx={{py:7}}>
                    <Typography variant="h2" className="join_heading font_poppins">
                    Ready to join?
                    </Typography>
                    <Typography variant="h6" className="join_tagline font_poppins ">
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                </Grid>
                <Grid item xs={2}>
                <Box className="btn" sx={{pl:3}}>
                <Button variant="contained" className="register_btn font_poppins">Register Now</Button>
                </Box>
                </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Join;
