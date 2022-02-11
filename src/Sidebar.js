import React from 'react'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
import "./Sidebar.css";
const sidebardata=[
    {
        title:"HOME",
        pushto:"",
        
    },
    {
        title:"PUBLIC",
        pushto:"",
        subtitle:[
            {
                name:"Question",
                icon:<PublicOutlinedIcon/> ,
            },
            {
                name:"Tags",
                icon:" ",
                css:{
                    paddingLeft:"0px"
                }
            },
            {
                name:"User",
                icon:" ",
                css:{
                    paddingLeft:"0px"
                }
            },
            
        ]
        
    },
    {
        title:"COLLECTIVES",
        pushto:"",
        subtitle:[
            {
                name:"Explore Collectives",
                icon:<StarsOutlinedIcon/>,
            }
        ]
        
    },
    {
        title:"FIND A JOB",
        pushto:"",
        subtitle:[
            {
                name:"Jobs",
                icon:" ",
                css:{
                    paddingLeft:"0px"
                }
            },
            {
                name:"companies",
                icon:" ",
                css:{
                    paddingLeft:"0px"
                }
            },
        ]
        
    },
    {
        title:"TEAMS",
        pushto:"",
        subtitle:[
            {
                name:"Create Free Team",
                icon:<WorkOutlinedIcon/> ,
                css:{
                    paddingLeft:"0px"
                }
            }
        ]
        
    }
]
export const Sidebar = () => {
    return (
        <div className="side_bar" > 
        <div class="sidebar_empty"></div>
        <div className="sidebar_content">
            {sidebardata.map((d,index)=>{
                return (

                    <div className="sidebarRow" >
                    <div className="sidebarRow_title"><p>{d.title}</p></div>
                    <div>{d.subtitle? d.subtitle.map((s,index)=>{
                        return <div className="sidebarRow_subtitle"style={s.css}><p>{s.icon} {s.name}</p></div>
                    }):""}</div>

                    </div>


                ) 
            })}
            </div>  
        </div>
    )
}


