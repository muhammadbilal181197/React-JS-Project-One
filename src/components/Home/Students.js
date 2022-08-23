import { Box, Container, Typography, Grid, Card, CardActionArea, CardMedia, CardContent, Button } from "@mui/material";
import React from "react";
import "../../Styles/Home/Students.scss";
import boy1 from "../../images/boy1-img.svg";
import boy2 from "../../images/boy2-img.svg";
import girl1 from "../../images/girl1-img.svg";
import girl2 from "../../images/girl2-img.svg";

const student = [
    { key: "e1", studentImg: boy1, studentName: "Awlad Hossain", studentStack: "UIUX Designer" },
    { key: "e2", studentImg: girl1, studentName: "Jannatul Islam", studentStack: "Motion Design" },
    { key: "e1", studentImg: boy2, studentName: "Imran Hossain", studentStack: "Graphic Designer" },
    { key: "e1", studentImg: girl2, studentName: "Nishi Akter", studentStack: "Web Developer" },
];

const Students = () => {
    return (
        <Box>
            <Container className="container" sx={{ pt: 12 }}>
                <Box className="student">
                    <Typography variant="h2" className="student_tag text_primary font_poppins">
                        Meet Our Successfull Students
                    </Typography>
                    <Typography variant="h6" className="student_inner text_secondary font_poppins" sx={{ pt: 3 }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                <Grid container className="student_content" spacing={3} sx={{ pt: 5 }}>
                    {student.map((value) => (
                        <Grid item xs={3}>
                            <Card className="card">
                                <CardActionArea>
                                    <CardMedia component="img" className="img" image={value.studentImg} alt="boy-img" />
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="div" className="student_name font_poppins">
                                            {value.studentName}
                                        </Typography>
                                        <Typography variant="body2" className=" text_secondary font_poppins">
                                            {value.studentStack}
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <Box className="btn" align="center" sx={{ my: 5 }}>
                    <Button variant="contained" className="view_btn btn_primary font_poppins">
                        View All
                    </Button>
                </Box>
            </Container>
        </Box>
    );
};

export default Students;

