import { Children } from "react";

function YellowBorder({children}){

    const YellowBoarderStyle={
        border:"2px solid yellow",
        borderRadius:"12px",
        padding: '8px 16px'
    }
    return (
        <div style={YellowBoarderStyle}>
            {children}
        </div>
    )
}

export default YellowBorder;