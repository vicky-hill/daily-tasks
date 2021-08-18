import React from 'react';

const TaskFilters = ({ setRanking, setAllTasks, setHighPriority }) => {
    return (
        <div>
            <button className="btn btn-outline-primary mb-5" onClick={ setAllTasks }>All tasks</button>
            <button className="btn btn-outline-primary mb-5" onClick={ setRanking }>Set Priorities</button>
            <button className="btn btn-outline-primary mb-5" onClick={ setHighPriority }>High Priority</button>
        </div>
    )
}

export default TaskFilters;
