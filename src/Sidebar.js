import React from 'react'
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';

import WorkOutlinedIcon from '@mui/icons-material/WorkOutlined';
import StarsOutlinedIcon from '@mui/icons-material/StarsOutlined';
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
            },
            {
                name:"User",
                icon:" ",
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
            },
            {
                name:"companies",
                icon:" ",
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
                    paddingLeft:"15px"
                }
            }
        ]
        
    }
]
export const Sidebar = () => {
    return (
        <div className="side-bar"> 
            {sidebardata.map((d,index)=>{
                return (
                    <div>
                    <div>{d.title}</div>
                    <div>{d.subtitle? d.subtitle.map((s,index)=>{
                        return <div style={s.css}>{s.icon} {s.name}</div>
                    }):""}</div>
                    </div>

                ) 
            })}
            
        </div>
    )
}


