import React from 'react'

const onClick = (id) => {
    alert("On click: " + id);
}

const GameCircle = ({ id,children }) => {
    return(
        <>
            <h1 onClick={() => onClick(id)}>{children}</h1>
        </>
    )
}

export default GameCircle;