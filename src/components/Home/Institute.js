import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../images/boy-icon.svg";
import boy from "../../images/boyfull.svg";
import "../../Styles/Home/Institute.scss";

const Institute = () => {
    return (
        <Box className="Institute">
            <Container className="container" sx={{ pt: {md:10, xs:3} }}>
                <Grid container sx={{ alignItems: "center" }} className="institute_box">
                    <Grid item xs={12} lg={5} className="boy-img">
                        <img className="boy1" src={img} alt="boy-icon" />
                        <img className="boy2" src={boy} alt="boy-icon" />
                    </Grid>
                    <Grid item xs={12} lg={7} sx={{ pl: { lg: 16.5 }, px: { xs: 3 , sm:4 }, py:{lg:8 , xs:4}  }}>
                        <Box className="institute_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <Typography variant="h2" className="text_primary font_poppins ">
                                Explore The elearning Institute
                            </Typography>
                            <Typography variant="h6" className=" font_poppins text_secondary institute_tagline" sx={{ py:{md:3.5, xs:0.5 }}}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If
                                you are going to use a passage of Lorem Ipsum, you need to be sure.{" "}
                            </Typography>
                            
                            <br />
                            <Typography variant="h6" className=" font_poppins text_secondary institute_tagline" sx={{ pb: 3.5, display:{xs:"none" , lg:"block"} }}>
                                Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.
                            </Typography>
                            <Box sx={{ display: "flex", pb: 3.5 }} className="rating">
                                <Grid container>
                                    <Grid item xs={4} md={4} sx={{mr:{xs:4, lg:0}, mb:{xs:2,lg:0}}}>
                                        <Box>
                                            <Typography variant="h2" className="text_primary  font_poppins">
                                                3.2K+
                                            </Typography>
                                            <Typography variant="h6" className="rating_title">
                                                Online Course
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={4} md={4}>
                                        <Box sx={{}}>
                                            <Typography variant="h2" className="text_primary font_poppins">
                                                600+
                                            </Typography>
                                            <Typography variant="h6" className="rating_title">
                                                Expert member
                                            </Typography>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={5} md={4}>
                                        <Box>
                                            <Typography variant="h2" className="text_primary font_poppins">
                                                1k+
                                            </Typography>
                                            <Typography variant="h6" className="rating_title">
                                                Rating & Review
                                            </Typography>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                            <Box className="btn">
                                <Button variant="contained" className="read_btn btn_primary font_poppins">
                                    Read More
                                </Button>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Institute;
