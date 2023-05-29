import Board from "./Components/Board"
import { SCORES} from "./constants"
import { switchPlayer } from "./utils"


export const minimax = (
    board: Board,
    player: number
): [number, number | null] => {
    // initialize the multiplier to adjust scores based on the player's perspective

    const multiplier = SCORES[String(player)];
    let thisScore;
    let maxScore = -1;
    let bestMove = null;
    //check i the game is over and return the score and move if so 
    const winner = board.getWinner();
    if (winner !== null) {
        return [SCORES[winner], 0];
    } else {
        //loop through each empty square on the board
        for (const square of board.getEmptySquares()) {
            //create a copy of the board and make a move for the current player 
            let copy: Board = board.clone()
            copy.makeMove(square, player);

            //recursively call minimax on the resulting board state
            // switching the player and multiplying the resulting score by the multiplier
            thisScore = multiplier * minimax(copy, switchPlayer(player))[0]

            // update the maxScore abd bestMove variable if the current move  produces a higher score than previous move

            if (thisScore >= maxScore) {
                maxScore = thisScore;
                bestMove = square
            }

        }
        return [multiplier * maxScore, bestMove]
    }
}