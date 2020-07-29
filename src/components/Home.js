import React, { useState, useEffect } from 'react';
import "./Home.css"
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccessibleForwardIcon from '@material-ui/icons/AccessibleForward';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import profilepic from '../images/Profile.jpg';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import InstagramIcon from '@material-ui/icons/Instagram';
import Sidebarimage from '../images/sidebarimage.jpg'
import Slider from './Carousal/Slider'



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        visibility: 'visible'
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,

        },
    },
    appBar: {
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
            marginLeft: drawerWidth,
            height: 0
        },

    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundImage: "url(" + Sidebarimage + ")",
        backgroundSize: "cover",
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),

    },

    content: {

        [theme.breakpoints.down('xs')]: {
            marginTop: 54
        },
    },
}));

function Home(props) {

    const { window } = props;
    const classes = useStyles();
    const theme = useTheme();
    const [mobileOpen, setMobileOpen] = React.useState(false);



    const handleDrawerToggle = () => {

        setMobileOpen(!mobileOpen);

    };

    const drawer = (
        <div >

            <Divider />
            <div className="profilepicdiv">
                <img className="profilepic" src={profilepic} alt="Avatar" />
            </div>

            <div className="profilediv">
                <p className="name"> VIKAS PERI</p>
            </div>

            <div className="profilediv">
                <MailOutlineIcon style={{ fontSize: 18, marginTop: 1 }}></MailOutlineIcon>
                <a className="mailtext" style={{ textDecoration: "none" }} href="mailto: vikasreddy1696@gmail.com" >vikasreddy1696@gmail.com</a>
            </div>

            <div className="profilediv">
                <a className="mailtext" href="https://www.linkedin.com/in/vikasreddyperi/" ><LinkedInIcon style={{ textDecoration: "none", fontSize: 40, marginTop: 10 }}></LinkedInIcon></a>
            </div>

            <div className="profilediv">
                <a className="mailtext" href="https://github.com/s3732508" ><GitHubIcon style={{ textDecoration: "none", fontSize: 37, marginTop: 10 }}></GitHubIcon></a>
            </div>


            <div className="profilediv">
                <a className="mailtext" href="https://www.instagram.com/vikas_pvr/" ><InstagramIcon style={{ textDecoration: "none", fontSize: 37, marginTop: 10 }}></InstagramIcon></a>
            </div>

        </div >
    );

    const container = window !== undefined ? () => window().document.body : undefined;


    return (
        <div style={{ height: '100%', }} className={classes.root}>


            <AppBar position="fixed" className={classes.appBar}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        className={classes.menuButton}
                    >
                        <MenuIcon />
                    </IconButton>

                </Toolbar>
            </AppBar>
            <nav className={classes.drawer} aria-label="mailbox folders">
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Hidden smUp implementation="css">
                    <Drawer
                        container={container}
                        variant="temporary"
                        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                        open={mobileOpen}
                        onClose={handleDrawerToggle}
                        classes={{
                            paper: classes.drawerPaper,
                        }}

                        ModalProps={{
                            keepMounted: true, // Better open performance on mobile.
                        }}
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
                <Hidden xsDown implementation="css">
                    <Drawer
                        classes={{
                            paper: classes.drawerPaper,
                        }}
                        variant="permanent"
                        open
                    >
                        {drawer}
                    </Drawer>
                </Hidden>
            </nav>
            <main style={{ padding: 0 }} className={classes.content}>

                <Slider />


               

            </main>
        </div>



    );
}

export default Home