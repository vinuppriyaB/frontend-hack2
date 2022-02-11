import React from 'react';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

export const NoResult = ({question,setQuestion}) => {
    return (
        <div className="no-result" style={{ height:"300px"}}>
        <div><SearchOutlinedIcon style={{ fontSize: 130 }}/></div>
        <h5>We couldn't find anything for "{ question }"</h5>   
        <p>Try different or less specific keywords.</p>
        
        
        </div>
    )
}


