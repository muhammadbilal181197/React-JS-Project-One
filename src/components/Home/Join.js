import { Box, Container, Grid, Typography, Button } from "@mui/material";
import React from "react";
import "../../Styles/Home/Join.scss"

const Join = () => {
    return (
        <Box>
            <Container className="container join" sx={{ pt: {md:10, xs:3}}} >
                <Grid container sx={{ alignItems: "center" , display:"flex" ,justifyContent:"center"  }} className="join_inner">
                <Grid item xs={12} lg={8}>
                <Box sx={{pt:{lg:7, xs:4}, pb:{lg:7}, display:"flex", alignItems:{xs:"center" , lg:"start"}, flexDirection:"column"}} >
                    <Typography variant="h2" className="join_heading font_poppins">
                    Ready to join?
                    </Typography>
                    <Typography variant="h6" className="join_tagline font_poppins" sx={{textAlign:{lg:"start" , xs:"center"}}}>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                </Grid>
                <Grid item xs={12} lg={2}>
                <Box className="btn" sx={{pl:{lg:3},pb:{xs:4, lg:0}, display:"flex" , justifyContent:{xs:"center", lg:"start"}}}>
                <Button variant="contained" className="register_btn font_poppins">Register Now</Button>
                </Box>
                </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Join;
