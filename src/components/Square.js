import React from 'react';

const Square=({ value, onClick, isWinningSquare })=>{

    return (
        <button type="button" className="square" onClick={ onClick } style={{background:isWinningSquare?'red':'white'}}>
            { value }
        </button>
    )
};
export default Square;