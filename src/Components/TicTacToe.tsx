import React, { useState } from 'react'
import styled from "styled-components"
import { DIMENSIONS, PLAYER_X, PLAYER_O, SQUARE_DIMS } from '../constants'
import { getRandomInt } from '../utils'

const emptyGrid = new Array(DIMENSIONS ** 2).fill(null)

const TicTacToe = () => {
    const [grid, setGrid] = useState(emptyGrid)
    const [players, setPlayers] = useState<Record<string, number | null >>({
        human: null
        ai: null
    });

    const move = (index: number, player: number | null) => {
        if (player !== null) {
            
            setGrid((grid) => {
                const gridCopy = grid.concat()
                gridCopy[index] = player;
                return gridCopy
            })
        }
   
    }
          const aiMove = () => {
            let index = getRandomInt(0, 8);
            while (grid[index]) {
                index = getRandomInt(0, 8)
            }
            move(index, players.ai)
        }
    const humanMove = (index: number) => {
        if (!grid[index]) {
            move(index, players.human)
            aiMove();
         }
    }
    
    return (
        <Container dims={DIMENSIONS}>
          {grid.map((value, index) => {
            const isActive = value !== null;
     
            return (
              <Square key={index} onClick={() => humanMove(index)}>
                {isActive && <Marker>{value === PLAYER_X ? "X" : "O"}</Marker>}
              </Square>
            );
          })}
        </Container>
      );
    }
     
    const Container = styled.div<{ dims: number }>`
      display: flex;
      justify-content: center;
      width: ${({ dims }) => `${dims * (SQUARE_DIMS + 5)}px`};
      flex-flow: wrap;
      position: relative;
    `;
     
    const Square = styled.div`
      display: flex;
      justify-content: center;
      align-items: center;
      width: ${SQUARE_DIMS}px;
      height: ${SQUARE_DIMS}px;
      border: 1px solid black;
     
      &:hover {
        cursor: pointer;
      }
    `;
     
    const Marker = styled.p`
      font-size: 68px;
    `;
export default TicTacToe