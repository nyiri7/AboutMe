import { Box, Container, Typography, Grid, Card, CardContent, CardActions, Button, Stack, Chip } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import {projectsData} from '../resources/ProjectsData';

function Projects() {
    return (
        <Box id="projects" sx={{ py: { xs: 8, md: 12 } }}>
            <Container maxWidth="lg">
            <Typography variant="h4" component="h2" sx={{ mb: { xs: 4, md: 6 }, color: '#fff' }}>
                Things I've Built
            </Typography>
            <Grid container spacing={4}>
                {projectsData.map((project, index) => (
                <Container disableGutters item xs={12} sm={6} md={4} key={index}>
                    <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column', bgcolor: 'background.paper', transition: '0.3s', '&:hover': { transform: 'translateY(-5px)' } }}>
                    <CardContent sx={{ flexGrow: 1 }}>
                        <Typography variant="h5" component="h3" gutterBottom sx={{ color: '#fff', fontWeight: 'bold' }}>
                            {project.title}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" sx={{ mb: 3, lineHeight: 1.6 }}>
                            {project.description}
                        </Typography>
                        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, justifyContent: 'start', mb: 3, mt: 2 }}>
                            {project.tags.map((tag) => (
                                <Chip key={tag} label={tag} size="small" sx={{ backgroundColor: 'rgba(144, 202, 249, 0.08)', color: '#90caf9', borderRadius: 1 }} />
                            ))}
                        </Box>
                    </CardContent>
                    <CardActions sx={{ px: 2, pb: 2 }}>
                        <Button size="small" color="primary" startIcon={<GitHubIcon />} href={project.link} target="_blank" rel="noopener noreferrer">Code</Button>
                    </CardActions>
                    </Card>
                </Container>
                ))}
            </Grid>
            </Container>
        </Box>
    );
}

export default Projects;