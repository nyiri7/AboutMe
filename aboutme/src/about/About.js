import { Box, Container, Typography, Grid, Chip, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function About() {
    return (
        <Box id="about" sx={{ py: { xs: 8, md: 12 }, bgcolor: 'background.paper' }}>
            <Container maxWidth="lg">
                <Typography variant="h4" component="h2" sx={{ mb: { xs: 4, md: 6 }, color: '#fff' }}>
                    About Me
                </Typography>
                <Grid container spacing={3}>
                    <Container disableGutters item xs={12}>
                        <Typography variant="body1" color="textSecondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            I currently work as an IT Developer and am pursuing my Computer Science MSc at the University of Miskolc. Throughout my studies and professional journey, I've proven to be a fast learner with strong problem-solving and communication skills, which I truly enjoy applying in team-oriented environments.
                        </Typography>
                        <Typography variant="body1" color="textSecondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                            My primary focus lies in developing manufacturing and financial web applications, optimizing corporate processes, and handling SAP integration and automation. I frequently collaborate in international settings, making English my go-to language for daily meetings and professional communication. Previously, as an Engineer Intern at MOL Group, I contributed to the Polyol project, which was the largest investment in the company's history.
                        </Typography>
                    </Container>
                    
                    <Container disableGutters item xs={12}>
                        <Typography variant="h6" sx={{ mb: 2, color: '#fff', textAlign: 'center' }}>
                            Core Technologies
                        </Typography>

                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'center', mb: 3 }}>
                            {["React", "Angular", "Python", "C# .NET", "Java", "C"].map((tech) => (
                                <Chip key={tech} label={tech} variant="outlined" color="primary" sx={{ borderRadius: 1 }} />
                            ))}
                        </Box>

                        <Accordion>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Backend</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" color="textSecondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    I have experience developing REST APIs with C# .NET and Python.
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'start', mb: 3, mt: 2 }}>
                                    {["ASP.NET Core Web API", "FastAPI", "Flask", "Entity Framework"].map((tech) => (
                                        <Chip key={tech} label={tech} variant="outlined" color="primary" sx={{ borderRadius: 1 }} />
                                    ))}
                                </Box>
                            </AccordionDetails>
                        </Accordion>

                        <Accordion sx={{ mt: 1 }}>
                            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                                <Typography>Frontend</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="body1" color="textSecondary" paragraph sx={{ fontSize: '1.1rem', lineHeight: 1.8 }}>
                                    For the frontend, I usually use Angular 2 and Bootstrap, but I am currently learning React.
                                </Typography>
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'start', mb: 3, mt: 2 }}>
                                    {["Bootstrap", "Material UI", "TypeScript", "JavaScript"].map((tech) => (
                                        <Chip key={tech} label={tech} variant="outlined" color="primary" sx={{ borderRadius: 1 }} />
                                    ))}
                                </Box>
                            </AccordionDetails>
                        </Accordion>
                    </Container>
                </Grid>
            </Container>
        </Box>
    );
}

export default About;