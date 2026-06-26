import {Box,Typography,Container, Button} from '@mui/material';


function Welcome({ scrollToSection}){

    return(
        <Box sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', pt: { xs: 10, md: 0 } }}>
            <Container maxWidth="lg">
            <Typography variant="overline" color="primary" sx={{ fontSize: { xs: '0.8rem', md: '1rem' }, letterSpacing: 2 }}>
                Hi, my name is
            </Typography>
            <Typography variant="h2" component="h1" sx={{ mt: 1, mb: 2, color: '#fff', fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' } }}>
                Levente Nyíri.
            </Typography>
            <Typography variant="h2" component="h2" sx={{ mb: 3, color: '#8892b0', fontSize: { xs: '2rem', sm: '3rem', md: '4rem' } }}>
                IT Developer & Systems Engineer
            </Typography>
            <Typography variant="body1" color="textSecondary" sx={{ mb: 5, maxWidth: '600px', lineHeight: 1.6, fontSize: { xs: '1rem', md: '1.1rem' } }}>
                I build robust full-stack applications and automate complex enterprise workflows to optimize manufacturing and business processes. Drawing on my experience as an IT Developer in multinational environments, I focus on delivering high-performance software solutions.
            </Typography>
            <Button variant="outlined" color="primary" size="large" onClick={() => scrollToSection('projects')} sx={{ px: 4, py: 1.5 }}>
                View My Work
            </Button>
            </Container>
        </Box>
    )
}

export default Welcome;
