import React from 'react';
import GameCircle from './GameCircle';

const GameBoard = () => {
    return(
        <>
            <div>
                <GameCircle id={1}>
                    Red
                </GameCircle>
                <GameCircle id={2}>
                    Green
                </GameCircle>
                <GameCircle id={3}>
                    Blue
                </GameCircle>
                <GameCircle id={4}>
                    Yellow
                </GameCircle>
                <GameCircle id={5}>
                    Black
                </GameCircle>
            </div>
        </>
    );
}

export default GameBoard;