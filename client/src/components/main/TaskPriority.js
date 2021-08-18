import React from 'react';

const TaskPriority = ({ text }) => {
    if (text === '') return null

    return <span className="main badge">{text}</span>
}

export default TaskPriority;
