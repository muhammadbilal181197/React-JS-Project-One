import { Box, Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Button } from "@mui/material";
import React from "react";
import "../../Styles/Home/Students.scss";
import boy1 from "../../images/boy1-img.svg";
import boy2 from "../../images/boy2-img.svg";
import girl1 from "../../images/girl1-img.svg";
import girl2 from "../../images/girl2-img.svg";

const Students = () => {
    const [Show, setShow] = React.useState(false)
    return (
        <Box className="Student">
            <Container className="container" sx={{ pt: { md: 10, xs: 3 } }}>
                <Box className="student">
                    <Typography variant="h2" className="student_tag text_primary font_poppins">
                        Meet Our Successfull Students
                    </Typography>
                    <Typography variant="h6" className="student_inner text_secondary font_poppins" sx={{ pt: { md: 3, xs: 0 } }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                <Grid container className="student_content" spacing={3} sx={{ pt: 5 }}>
                    <Grid item xs={12} sm={6} md={6} lg={3} className="std_card">
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" className="img" image={boy1} alt="boy-img" />
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "start" } }}>
                                    <Typography gutterBottom variant="h5" component="div" className="student_name font_poppins">
                                        Awlad Hossain
                                    </Typography>
                                    <Typography variant="body2" className=" text_secondary font_poppins">
                                        UIUX Designer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={3} className="std_card">
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" className="img" image={girl1} alt="boy-img" />
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "start" } }}>
                                    <Typography gutterBottom variant="h5" component="div" className="student_name font_poppins">
                                        Jannatul Islam
                                    </Typography>
                                    <Typography variant="body2" className=" text_secondary font_poppins">
                                        Motion Design
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" className="img" image={boy2} alt="boy-img" />
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "start" } }}>
                                    <Typography gutterBottom variant="h5" component="div" className="student_name font_poppins">
                                        Imran Hossain
                                    </Typography>
                                    <Typography variant="body2" className=" text_secondary font_poppins">
                                        Graphic Designer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                    <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" className="img" image={girl2} alt="boy-img" />
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "start" } }}>
                                    <Typography gutterBottom variant="h5" component="div" className="student_name font_poppins">
                                        Nishi Akter
                                    </Typography>
                                    <Typography variant="body2" className=" text_secondary font_poppins">
                                        Web Developer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>

                <Grid container className="student_content2 " spacing={3} sx={{ pt: 5 }}>
                    <Grid item xs={12} sm={6} md={6} lg={3} className="std_card2">
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" className="img" image={girl1} alt="boy-img" />
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "start" } }}>
                                    <Typography gutterBottom variant="h5" component="div" className="student_name font_poppins">
                                        Jannatul Islam
                                    </Typography>
                                    <Typography variant="body2" className=" text_secondary font_poppins">
                                        Motion Design
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>

                   {Show ? ( <Grid item xs={12} sm={6} md={6} lg={3}>
                        <Card className="card">
                            <CardActionArea>
                                <CardMedia component="img" className="img" image={boy1} alt="boy-img" />
                                <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: { xs: "center", sm: "start" } }}>
                                    <Typography gutterBottom variant="h5" component="div" className="student_name font_poppins">
                                        Awlad Hossain
                                    </Typography>
                                    <Typography variant="body2" className=" text_secondary font_poppins">
                                        UIUX Designer
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>) : null }
                </Grid>
                <Box className="btn" align="center" sx={{ mt: 4 }}>
                    <Button variant="contained" className="view_btn btn1 btn_primary font_poppins">
                        View All
                    </Button>
                    <Button variant="contained" onClick={()=>setShow(!Show)} className="view_btn btn2 btn_primary font_poppins">
                        {Show === true ? "View Less" : "View All"}
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Students;
