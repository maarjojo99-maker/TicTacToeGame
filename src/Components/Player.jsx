import { useState } from "react";
export default function Player({ onChangeName, initialName, symbol, isActive }) {

    const [playerName, setPlayerName] = useState(initialName);
    const [isediting, setIsediting] = useState(false);

    function handleEditingClick() {
        setIsediting((editing) => !editing);
        if (isediting) {
            onChangeName(symbol, playerName);
        }
    }
    function handleChange(event) {
        console.log(event);
        setPlayerName(event.target.value); // set given value as target
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isediting) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditingClick}>{isediting ? 'save' : 'edit'}</button>
        </li>
    );
} 