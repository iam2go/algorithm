// [프로그래머스] 양궁대회


const n = 10;
const info = [0, 0, 0, 0, 0, 0, 0, 0, 3, 4, 3];

function solution(n, info) {
    const opponentMaxScore = info.reduce((score, num, index)=> num ? score + (10 - index) : score, 0);
    const LENGTH = 11;
    let scoreBoard = Array(LENGTH).fill(0);
    let maxScoreDiff = 0;

    const dfs = (remaining, score, opponentScore, startIndex, board) => {
        if(startIndex >= LENGTH ){
            const diff = score - opponentScore;
            if(maxScoreDiff <= diff){
                maxScoreDiff = diff;
                scoreBoard[startIndex - 1] += remaining;
            }
            return;
        }

        if(remaining === 0){
            const diff = score - opponentScore;
            if(maxScoreDiff <= diff){
                maxScoreDiff = diff;
                scoreBoard = board;
            }
            return;
        }


        for(let index = startIndex; index < LENGTH; index++){
            const opponentShot  = info[index];
            const currentRemaining = remaining - (opponentShot + 1);
            if(currentRemaining < 0) continue;
            const currentOpponentScore = opponentShot ? opponentScore - (10 - index) : opponentScore;
            const newScoreBoard = board.slice();
            newScoreBoard.splice(index, 1, opponentShot + 1);
            dfs(currentRemaining, score + 10 - index, currentOpponentScore, index + 1, newScoreBoard);
        }
    }
    dfs(n, 0, opponentMaxScore, 0, scoreBoard);
    return maxScoreDiff > 0 ? scoreBoard : [-1];
}

console.log(solution(n, info));