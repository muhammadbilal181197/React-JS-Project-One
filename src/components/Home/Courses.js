import { Box, Container, Typography, Grid } from "@mui/material";
import React from "react";
import "../../Styles/Home/Courses.scss";
import fundamental from "../../images/ux-icon.svg";
import ai from "../../images/ai-icon.svg";
import code from "../../images/code-icon.svg";
import full from "../../images/fullstack-icon.svg";
import motion from "../../images/motion-icon.svg";
import photo from "../../images/photo.png";

const card = [
    { key: "e1", cardImage: fundamental, cardTitle: "Fundamental Of UI/UX Design", cardTagling: "Some quick example text to build on the card title and make up the bulk of the card.", cardPrice: "Price : 20$" },
    {
        key: "e2",
        cardImage: code,
        cardTitle: "Javascript Basic to advanced",
        cardTagling: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
    {
        key: "e3",
        cardImage: full,
        cardTitle: "Fullstack Web Development",
        cardTagling: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
    {
        key: "e4",
        cardImage: ai,
        cardTagling: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
    {
        key: "e5",
        cardImage: photo,
        cardTitle: "Photography Basic Rules",
        cardTagling: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
    {
        key: "e6",
        cardImage: motion,
        cardTagling: "Some quick example text to build on the card title and make up the bulk of the card.",
        cardPrice: "Price : 20$",
    },
];

const Courses = () => {
    return (
        <Box>
            <Container className="container" sx={{ pt: 12 }}>
                <Box align="center" className="courses" sx={{ pb: 3 }}>
                    <Typography variant="h2" className="courses_tag text_primary font_poppins" sx={{ textAlign: "center" }}>
                        Discover Our Popular Courses
                    </Typography>
                    <Typography variant="h6" className="cources_inner text_secondary font_poppins" sx={{ textAlign: "center", pt: 1 }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                <Grid container spacing={3} sx={{ pt: 4, display: "flex" }}>
                    {card.map((value) => (
                        <Grid item xs={6} sx={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
                            <Box sx={{ borderRadius: "5px" }}>
                                <img src={value.cardImage} alt="ux-ui-icon"></img>
                            </Box>
                            <Box className="box_inner" sx={{ pl: 2, display: "flex", justifyContent: "center", flexDirection: "column" }}>
                                <Typography variant="h2" className="box_heading font_poppins">
                                    {value.cardTitle}
                                </Typography>
                                <Typography variant="h6" className="text_secondary font_poppins" sx={{ py: 2 }}>
                                    {value.cardTagling}
                                </Typography>
                                <Typography variant="h6" className="box_price font_poppins">
                                    {value.cardPrice}
                                </Typography>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Courses;
