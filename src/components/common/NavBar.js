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
                Pro Edu
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
            <Grid item xs={4} sx={{display:"flex", justifyContent:"center"}}>
                    <Button variant="outlined" className="font_poppins register_btn" sx={{display:{xs:"block" , sm:"none"} }}>Register</Button>
                    </Grid>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box className="header" sx={{mt:2}} >
            <AppBar component="nav" sx={{boxShadow:"none", backgroundColor:"white", color:"black"}}>
        <Container className="container">
                <Toolbar className="navbar" style={{padding:0}}>
                   
                   <Grid item xs={2}>
                    <Typography className="font_poppins brand_name" variant="h6"  component="div" sx={{ flexGrow: 1, display: { xs: "block" }}}>
                        Pro Edu
                    </Typography>
                    </Grid>
                    <Grid item xs={6} sx={{mx:"auto" }}>
                    <Box  className="nav" sx={{ display: { xs: "none", md: "block" }}}>
                        {navItems.map((item) => (
                            <Button key={item} className="font_poppins nav-items"  sx={{px:{md:2, lg:3}  }}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    </Grid>
                    <Grid item xs={4}>
                    <Button variant="outlined" className="font_poppins register_btn" sx={{display:{xs:"none", sm:"block"}}}>Register</Button>
                    </Grid>
                    <IconButton  color="inherit" aria-label="open drawer" edge="start" onClick={handleDrawerToggle} sx={{ml:2,  display: { md: "none" } }}>
                        <MenuIcon />
                    </IconButton>
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
                        display: { xs: "block", md: "none"},
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

