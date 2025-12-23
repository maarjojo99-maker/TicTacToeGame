
export default function GameBoard({ onSelectSquare, board }) {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) =>
                <li key={rowIndex} className="board-row">
                    <ol className="board-row">
                        {row.map((PlayerSymbol, colIndex) =>
                            <li key={colIndex} className="board-cell">
                                <button onClick={() => 
                                onSelectSquare(rowIndex, colIndex)}
                                    disabled={PlayerSymbol !== null}>
                                    {PlayerSymbol}
                                </button>
                            </li>
                        )}
                    </ol>
                </li>)}
        </ol>
    );
}