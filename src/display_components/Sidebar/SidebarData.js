import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import GitHubIcon from '@mui/icons-material/GitHub';
import CircleNotificationsIcon from '@mui/icons-material/CircleNotifications';
import SpeedIcon from '@mui/icons-material/Speed';
import PhotoSizeSelectActualIcon from '@mui/icons-material/PhotoSizeSelectActual';


export const SidebarData = [
    {
        title:"Home",
        icon: <HomeIcon/>, //imported Icon component from material ui
        link:"/home" // Link to route
    },
    {
        title:"GitHub",
        icon: <GitHubIcon/>,
        link:"/github"
    },
    {
        title:"Notifications",
        icon: <CircleNotificationsIcon/>,
        link:"/notifications"
    },
    {
        title:"Testimonial",
        icon: <SpeedIcon/>,
        link:"/testimonial"
    },
    {
        title:"Images",
        icon: <PhotoSizeSelectActualIcon/>,
        link:"/images"
    },

/* Passing SideBarData  Component to Sidebar Component with the use of map function extracting every object and getting in to different list */
]
