import { Box, Container, Typography, Accordion, AccordionSummary, AccordionDetails, Grid } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {React} from "react";
import "../../Styles/Home/Questions.scss";

const question = [
    {
        heading: "What other services are you compatible with?",
        describe:
            " There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
    },
    {
        heading: "I have a technical i need resolved, who do i email?",
        describe:
            " There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
    },
    {
        heading: "What other services are you compatible with?",
        describe:
            " There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
    },
    {
        heading: "What other services are you compatible with?",
        describe:
            " There are many variations of passages of available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the generators on the.",
    },
];

const Questions = () => {
    return (
        <Box>
            <Container className="container Questions" sx={{ pt: 12 }}>
                <Box align="center" className="feedback_box" sx={{ pb: 6 }}>
                    <Typography variant="h2" className=" text_primary font_poppins" sx={{ textAlign: "center" }}>
                        Frequently Asked Questions
                    </Typography>
                    <Typography variant="h6" className="questions_inner text_secondary font_poppins" sx={{ textAlign: "center", pt: 1 }}>
                        It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    </Typography>
                </Box>
                <Grid sx={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center", gap: 3 }}>
                    {question.map((value)=>(
                    <Grid item xs={8}>
                        <Accordion className="accordion">
                            <AccordionSummary  className="accordionsummary" sx={{ pl: 3}} expandIcon={<ExpandMoreIcon />} aria-controls="panel1a-content" id="panel1a-header">
                                <Typography className="accordion_heading font_poppins">{value.heading}</Typography>
                            </AccordionSummary>
                            <AccordionDetails className="accordiondetails">
                                <Typography className="text_secondary font_poppins">
                                    {value.describe}
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
    );
};

export default Questions;
