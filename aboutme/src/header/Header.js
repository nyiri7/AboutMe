import {Box, IconButton, List, ListItem, ListItemText, AppBar, Container, Toolbar, Typography, Button, Drawer} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import CodeIcon from '@mui/icons-material/Code';
import { useState } from 'react';

export const navItems = ['About', 'Projects', 'Contact'];

function Header( { scrollToSection } ) {
    const [mobileOpen, setMobileOpen] = useState(false);
    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };
    const drawer = (
        <Box sx={{ width: 250, bgcolor: 'background.default', height: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 2 }}>
                <IconButton color="primary" onClick={handleDrawerToggle}>
                    <CloseIcon />
                </IconButton>
                </Box>
            <List>
            {navItems.map((item) => (
                <ListItem button key={item} onClick={() => scroll(item.toLowerCase())}>
                    <ListItemText primary={item} sx={{ textAlign: 'center', color: '#fff' }} />
                </ListItem>
            ))}
            </List>
        </Box>
    );
    const scroll =(id)=> {
        setMobileOpen(false);
        scrollToSection(id);
    }
    return (
        <>
            <AppBar position="fixed" elevation={0} sx={{ backgroundColor: 'rgba(10, 25, 47, 0.85)', backdropFilter: 'blur(10px)' }}>
                <Container maxWidth="lg">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Typography variant="h6" component="div" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: 1 }}>
                    <CodeIcon color="primary" /> About Me
                    </Typography>
                    
                    {/* Desktop Navigation */}
                    <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    {navItems.map((item) => (
                        <Button key={item} color="inherit" onClick={() => scroll(item.toLowerCase())}>
                        {item}
                        </Button>
                    ))}
                    </Box>

                    {/* Mobile Hamburger Icon */}
                    <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    edge="start"
                    onClick={handleDrawerToggle}
                    sx={{ display: { md: 'none' } }}
                    >
                    <MenuIcon />
                    </IconButton>
                </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                    variant="temporary"
                    anchor="right"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{ keepMounted: true }} // Better open performance on mobile
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    {drawer}
            </Drawer>
        </>
    );
}

export default Header;