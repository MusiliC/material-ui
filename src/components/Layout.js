import { makeStyles } from '@material-ui/core'
import React from 'react'
import  Drawer  from '@material-ui/core/Drawer';
import  Typography  from '@material-ui/core/Typography';
import  List  from '@material-ui/core/List';
import  ListItem  from '@material-ui/core/ListItem';
import  ListItemIcon  from '@material-ui/core/ListItemIcon';
import  ListItemText  from '@material-ui/core/ListItemText';
import { AddCircleOutlineOutlined, SubjectOutlined } from '@material-ui/icons';
import { useHistory, useLocation } from 'react-router-dom';
import  AppBar  from '@material-ui/core/AppBar';
import  Toolbar  from '@material-ui/core/Toolbar';
import  Avatar  from '@material-ui/core/Avatar';


const drawerWidth = 240

const useStyles = makeStyles((theme) => {

    return{
        
        page: {
        backgroundColor: '#f9f9f9',
        width: '100%',
        padding: theme.spacing(3)
    },

    drawer: {
        width: drawerWidth,
    },
    drawerPaper: {
        width: drawerWidth,
    }, 
    root: {
        display: 'flex'
    }, 
    active: {
        backgroundColor: '#f4f4'
    },
    
    title:{
        padding: theme.spacing(2)
    },

    app: {
        width: `calc(100% - ${drawerWidth}px)`
    },
    toolbar: theme.mixins.toolbar,
    date:{
        flexGrow: 1
    },
    avatar:{
        marginLeft: theme.spacing(2)
    }

    }
    })


export default function Layout({ children}) {

    const classes = useStyles();
    const history = useHistory();
    const location = useLocation();

    const menuItems =[

        {
            text: 'My Notes',
            icon: < SubjectOutlined color="secondary" />,
            path: '/'
        },
            {
            text: 'Create Note',
            icon: < AddCircleOutlineOutlined color="secondary" />,
            path: '/create'
        }
    ]

    return (
        
        <div className= {classes.root}>

        {/* appBar */}

        <AppBar
        className={classes.app}
        elevation={0}
        >
            <Toolbar>
                <Typography variant='h6' className={classes.date}>
                   { Date().toString()}
                </Typography>
                <Typography variant='h6'>
                    Musili
                </Typography>
                <Avatar src="/doly.jpg" className={classes.avatar}/>
            </Toolbar>
        </AppBar>

            <Drawer
            className={classes.drawer}
                variant="permanent"
                anchor="left"
                classes={{ paper: classes.drawerPaper }}
            >
                <div >
                    <Typography variant="h5">
                        Musili Notes
                    </Typography>
                </div>

                {/* list/ links */}

                <List>
                    { menuItems.map((item) => {
                        return(
                            <ListItem
                            button
                            key={item.text}
                            onClick={() => {
                                history.push(item.path)
                            }}
                            className={location.pathname === item.path ? classes.active : null}
                            >
                            <ListItemIcon>{item.icon}</ListItemIcon>
                            <ListItemText primary={item.text}/>

                            </ListItem>
                        )
                    })}
                </List>

            </Drawer>
            
            <div className={classes.page}>

            <div className={classes.toolbar}></div>
                {children}
            </div>
        </div>
    )
}