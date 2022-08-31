import { Box, Container, Typography, Grid, Button } from "@mui/material";
import React from "react";
import "../../Styles/Home/Courses.scss";
import fundamental from "../../images/ux-icon.svg";
import ai from "../../images/ai-icon.svg";
import code from "../../images/code-icon.svg";
import full from "../../images/fullstack-icon.svg";
import motion from "../../images/motion-icon.svg";
import photo from "../../images/photo.png";



const Courses = () => {
    const [Show, setShow] =React.useState(false)
    return (
        <Box className="Cources">
            <Container className="container" sx={{ pt: {md:10, xs:3} }}>
                <Box align="center" className="courses" sx={{ pb: 3 }}>
                    <Typography variant="h2" className="courses_tag text_primary font_poppins" sx={{ textAlign: "center" }}>
                        Discover Our Popular Courses
                    </Typography>
                    <Typography variant="h6" className="cources_inner text_secondary font_poppins" sx={{ textAlign: "center", pt:{md:1, xs:0} }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                <Grid container spacing={3} className="main_container" sx={{ pt:{md: 4, }, display: "flex", justifyContent: "center" }}>
                   
                        <Grid item xs={12} sm={20} md={10} lg={6} className="cardP" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ borderRadius: "5px" }} className="cardimg"> 
                                <img src={fundamental} alt="ux-ui-icon" className="cardimg"></img>
                            </Box>
                            <Box className="box_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: { lg: 2, xs: 1.2 }, py:{xs:1.3, sm:0} }}>
                                <Typography variant="h2" className="box_heading font_poppins">
                                Fundamental Of UI/UX Design
                                </Typography>
                                <Typography variant="h6" className="text_secondary font_poppins" sx={{ py: { lg: 2, xs: 1.2 } }}>
                                Some quick example text to build on the card title and make up the bulk of the card.
                                </Typography>
                                <Typography variant="h6" className="box_price font_poppins">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={20} md={10} lg={6} className="cardP" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ borderRadius: "5px" }} className="cardimg"> 
                                <img src={code} alt="ux-ui-icon" className="cardimg"></img>
                            </Box>
                            <Box className="box_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: { lg: 2, xs: 1.2 } , py:{xs:1.3, sm:0} }}>
                                <Typography variant="h2" className="box_heading font_poppins">
                                Javascript Basic to advanced
                                </Typography>
                                <Typography variant="h6" className="text_secondary font_poppins" sx={{ py: { lg: 2, xs: 1.2 } }}>
                                Some quick example text to build on the card title and make up the bulk of the card.
                                </Typography>
                                <Typography variant="h6" className="box_price font_poppins">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={20} md={10} lg={6} className="cardP" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ borderRadius: "5px" }} className="cardimg"> 
                                <img src={full} alt="ux-ui-icon" className="cardimg"></img>
                            </Box>
                            <Box className="box_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: { lg: 2, xs: 1.2 }, py:{xs:1.3, sm:0} }}>
                                <Typography variant="h2" className="box_heading font_poppins">
                                Fullstack Web Development
                                </Typography>
                                <Typography variant="h6" className="text_secondary font_poppins" sx={{ py: { lg: 2, xs: 1.2 } }}>
                                Some quick example text to build on the card title and make up the bulk of the card.
                                </Typography>
                                <Typography variant="h6" className="box_price font_poppins">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={20} md={10} lg={6} className="cardP hide_card" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ borderRadius: "5px" }} className="cardimg"> 
                                <img src={ai} alt="ux-ui-icon" className="cardimg"></img>
                            </Box>
                            <Box className="box_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: { lg: 2, xs: 1.2 } , py:{xs:1.3, sm:0}}}>
                                <Typography variant="h6" className="text_secondary font_poppins" sx={{ py: { lg: 2, xs: 1.2 } }}>
                                Some quick example text to build on the card title and make up the bulk of the card.
                                </Typography>
                                <Typography variant="h6" className="box_price font_poppins">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={20} md={10} lg={6} className="cardP hide_card" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ borderRadius: "5px" }} className="cardimg"> 
                                <img src={photo} alt="ux-ui-icon" className="cardimg"></img>
                            </Box>
                            <Box className="box_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: { lg: 2, xs: 1.2 }, py:{xs:1.3, sm:0} }}>
                                <Typography variant="h2" className="box_heading font_poppins">
                                Photography Basic Rules
                                </Typography>
                                <Typography variant="h6" className="text_secondary font_poppins" sx={{ py: { lg: 2, xs: 1.2 } }}>
                                Some quick example text to build on the card title and make up the bulk of the card.
                                </Typography>
                                <Typography variant="h6" className="box_price font_poppins">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={20} md={10} lg={6} className="cardP hide_card" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ borderRadius: "5px" }} className="cardimg"> 
                                <img src={motion} alt="ux-ui-icon" className="cardimg"></img>
                            </Box>
                            <Box className="box_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: { lg: 2, xs: 1.2 }, py:{xs:1.3, sm:0} }}>
                                <Typography variant="h6" className="text_secondary font_poppins" sx={{ py: { lg: 2, xs: 1.2 } }}>
                                Some quick example text to build on the card title and make up the bulk of the card.
                                </Typography>
                                <Typography variant="h6" className="box_price font_poppins">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Grid>

                        
                    
                </Grid>
               {Show? ( <Grid container spacing={3} className="main_container2" sx={{ pt: 4, display: "flex", justifyContent: "center" }}>

                <Grid item xs={12} sm={20} md={10} lg={6} className="cardP hide_card2" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ borderRadius: "5px" }} className="cardimg"> 
                                <img src={ai} alt="ux-ui-icon" className="cardimg"></img>
                            </Box>
                            <Box className="box_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: { lg: 2, xs: 1.2 }, py:{xs:1.3, sm:0} }}>
                                <Typography variant="h6" className="text_secondary font_poppins" sx={{ py: { lg: 2, xs: 1.2 } }}>
                                Some quick example text to build on the card title and make up the bulk of the card.
                                </Typography>
                                <Typography variant="h6" className="box_price font_poppins">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={20} md={10} lg={6} className="cardP hide_card2" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ borderRadius: "5px" }} className="cardimg"> 
                                <img src={photo} alt="ux-ui-icon" className="cardimg"></img>
                            </Box>
                            <Box className="box_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: { lg: 2, xs: 1.2 } , py:{xs:1.3, sm:0}}}>
                                <Typography variant="h2" className="box_heading font_poppins">
                                Photography Basic Rules
                                </Typography>
                                <Typography variant="h6" className="text_secondary font_poppins" sx={{ py: { lg: 2, xs: 1.2 } }}>
                                Some quick example text to build on the card title and make up the bulk of the card.
                                </Typography>
                                <Typography variant="h6" className="box_price font_poppins">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Grid>

                        <Grid item xs={12} sm={20} md={10} lg={6} className="cardP hide_card2" sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ borderRadius: "5px" }} className="cardimg"> 
                                <img src={motion} alt="ux-ui-icon" className="cardimg"></img>
                            </Box>
                            <Box className="box_inner" sx={{ display: "flex", justifyContent: "center", flexDirection: "column", pl: { lg: 2, xs: 1.2 }, py:{xs:1.3, sm:0} }}>
                                <Typography variant="h6" className="text_secondary font_poppins" sx={{ py: { lg: 2, xs: 1.2 } }}>
                                Some quick example text to build on the card title and make up the bulk of the card.
                                </Typography>
                                <Typography variant="h6" className="box_price font_poppins">
                                    Price : 20$
                                </Typography>
                            </Box>
                        </Grid>
                </Grid> ): null}
                <Box className="cources_btn"  sx={{ display: "flex", justifyContent: "center", pt: 4 }}>
                    <Button variant="contained" className="see_btn btn1 btn_primary font_poppins">
                        See More Courses
                    </Button>
                    <Button variant="contained" onClick={()=>setShow(!Show)} className="see_btn btn2 btn_primary font_poppins">
                        {Show === true ? "View Less" : "View All"}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Courses;
