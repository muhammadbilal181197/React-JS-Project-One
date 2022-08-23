import * as React from "react";
import { AppBar, Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemText, IconButton, Toolbar, Typography, Button, Grid, Container } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../Styles/Common/NavBar.scss";

// const drawerWidth = 500;
const navItems = ["Home", "Courses", "Deals", "Success", "About", "Register"];

function NavBar(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton sx={{ textAlign: "center" }}>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: "flex" }}>
            <AppBar component="nav" sx={{boxShadow:"none", backgroundColor:"white", color:"black"}}>
        <Container className="container">
                <Toolbar className="navbar" style={{padding:0}}>
                    <IconButton  color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ ml: 'auto', display: { sm: "none" } }}>
                        <MenuIcon />
                    </IconButton>
                   <Grid item xs={2}>
                    <Typography className="font_poppins brand_name" variant="h6"  component="div" sx={{ flexGrow: 1, display: { xs: "none", sm: "block" }}}>
                        Pro Edu
                    </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{mx:"auto" }}>
                    <Box  className="nav" sx={{ display: { xs: "none", sm: "block" }}}>
                        {navItems.map((item) => (
                            <Button key={item} className="font_poppins nav-items" sx={{ px:3}}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    </Grid>
                    <Grid item xs={4}>
                    <Button variant="outlined" className="font_poppins register_btn">Register</Button>
                    </Grid>
                </Toolbar>
                </Container>
            </AppBar>
            <Box component="nav">
                <Drawer
                    anchor="top"
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, 
                    }}
                    sx={{
                        display: { xs: "block", sm: "none" },
                        "& .MuiDrawer-paper": {
                            boxSizing: "border-box",
                            width: 'auto',
                            height: '100vh'
                            
                        },
                    }}
                >
                    {drawer}
                </Drawer>
            </Box>
        
        </Box>
    );
}



export default NavBar;

