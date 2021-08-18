import React from 'react';

const TaskStatus = ({ task: { status } }) => {
    if (status !== 'done' && status !== 'inprogress') return null

    return <span className={`status ${status === 'done' ? 'done' : status === 'inprogress' ? 'inprogress' : ''}`}>
        {
            status === "done" ? '✔︎ resolved' : status === "inprogress" ? '✗ in progress' : ''
        }
    </span>
}

export default TaskStatus;
