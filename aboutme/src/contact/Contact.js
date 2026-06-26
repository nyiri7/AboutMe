import { Box, Container, Typography, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

function Contact(){
    return(
        <Box id="contact" sx={{ py: { xs: 10, md: 15 }, bgcolor: 'background.paper', textAlign: 'center' }}>
            <Container maxWidth="sm">
            <Typography variant="h4" component="h2" sx={{ mb: 2, color: '#fff' }}>
                Get In Touch
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 4, fontSize: '1.1rem' }}>
                Whether you want to discuss a software architecture solution, automation strategy, or a potential Fullstack / Backend Developer role, my inbox is open. I am currently actively looking for my next opportunity!
            </Typography>
            <Box direction="row" spacing={3} justifyContent="center" sx={{ mb: 4 }}>
                <IconButton color="primary" href="https://github.com/nyiri7" target="_blank" sx={{ transform: 'scale(1.2)' }}>
                <GitHubIcon fontSize="large" />
                </IconButton>
                <IconButton color="primary" href="https://www.linkedin.com/in/nyíri-levente-842079263/" target="_blank" sx={{ transform: 'scale(1.2)' }}>
                <LinkedInIcon fontSize="large" />
                </IconButton>
                <IconButton color="primary" href="mailto:nyiri.levente14@gmail.com" sx={{ transform: 'scale(1.2)' }}>
                <EmailIcon fontSize="large" />
                </IconButton>
            </Box>
            </Container>
        </Box>
    )
}
export default Contact;