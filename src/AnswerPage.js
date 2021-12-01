import { useTheme } from '@mui/material/styles';


export function AnswerPage({username,comment}){
    const theme = useTheme();

    return(
        <div className="answer-card">
        <div className="info">
            <div><h4 className="name">{username}</h4></div>
            <div><p className="posted">posted by</p></div>
        </div>
        <div className="answer">
            {comment}
        </div>

        </div>
    )
}