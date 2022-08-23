import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import img from "../../images/boy-icon.svg";
import "../../Styles/Home/Institute.scss";

const Institute = () => {
    return (
        <Box>
            <Container className="container" sx={{ pt: 12 }}>
                <Grid container sx={{ alignItems: "center" }} className="institute_box">
                    <Grid item xs={6} className="boy-img">
                        <img src={img} alt="boy-icon" />
                    </Grid>
                    <Grid item xs={6} sx={{ pl: 2 }}>
                        <Box className="institute_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                            <Typography variant="h2" className="text_primary font_poppins ">
                                Explore The elearning Institute
                            </Typography>
                            <Typography variant="h6" className=" font_poppins text_secondary institute_tagline" sx={{ py: 3.5 }}>
                                There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If
                                you are going to use a passage of Lorem Ipsum, you need to be sure.
                                <br />
                                <br />
                                Anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined.
                            </Typography>

                            <Box sx={{ display: "flex", pb: 3.5 }} className="rating">
                                <Box>
                                    <Typography variant="h2" className="text_primary  font_poppins">
                                        3.2K+
                                    </Typography>
                                    <Typography variant="h6" className="rating_title">
                                        Online Course
                                    </Typography>
                                </Box>
                                <Box sx={{ px: 6 }}>
                                    <Typography variant="h2" className="text_primary font_poppins">
                                        600+
                                    </Typography>
                                    <Typography variant="h6" className="rating_title">
                                        Expert member
                                    </Typography>
                                </Box>
                                <Box>
                                    <Typography variant="h2" className="text_primary font_poppins">
                                        1k+
                                    </Typography>
                                    <Typography variant="h6" className="rating_title">
                                        Rating & Review
                                    </Typography>
                                </Box>
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
