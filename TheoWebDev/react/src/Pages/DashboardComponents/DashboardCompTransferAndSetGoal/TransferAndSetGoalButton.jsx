import React from 'react';
import './TransferAndSetGoalButton.css';
import { Navigate, useNavigate } from 'react-router-dom';

function TransferAndSetGoal() {
    const navigate = useNavigate();   
    return (
        <div className="transfer-and-set-goal">
            <button
                className="transfer-button"
                onClick={() => {
                    navigate('/transfer');
                }}
            >
                Transfer
            </button>
            <button
                className="set-goal-button"
                onClick={() => {
                    navigate('/setgoal');
                }}
            >
                Set Goal and Limit
            </button>
        </div>
    );
}

export default TransferAndSetGoal;