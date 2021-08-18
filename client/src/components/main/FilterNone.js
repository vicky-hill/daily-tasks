import React from 'react';

import TaskStatus from './TaskStatus';
import TaskPriority from './TaskPriority';
import TaskOptions from './TaskOptions';
import TaskAssign from './TaskAssign';

const FilterNone = ({ ranking, hover, setHover, assign, tasks, saveRank, updateTaskName, pressEnter }) => {
    return (
        <ul style={{ listStyle: `${ranking ? 'none' : 'disc'}` }}>

            {
                tasks.map((task, i) => (
                    <li style={{ transform: `translateX(${ranking ? '-20px' : '0'})` }} key={i}>
                        <div className={`task ${!hover || ranking ? 'disabled' : ''}`}>

                            {/* Rank input */}
                            <span
                                id={task._id}
                                onBlur={saveRank}
                                contentEditable="true"
                                onFocus={() => setHover(false)}
                                className={`rank-input ${ranking ? 'show' : ''}`}
                                suppressContentEditableWarning={true}
                            >{task.rank}</span>

                            {/* Task name input */}
                            <span
                                id={task._id}
                                onBlur={updateTaskName}
                                onFocus={() => setHover(false)}
                                onKeyDown={pressEnter}
                                className="task-input"
                                contentEditable="true"
                                suppressContentEditableWarning={true}
                            >{task.name}</span>

                            {/* Options panel hidden */}
                            <span className={`options-invisible ${assign ? 'hide' : ''}`}>
                                <TaskOptions
                                    task={task}
                                />
                            </span>

                            {/* Assign panel hidden */}
                            <span className={`options-invisible ${!assign ? 'hide' : ''}`}>
                                <TaskAssign
                                    task={task}
                                />
                            </span>

                            {/* Options visible */}
                            <span className="options-visible">

                                {/* Status */}
                                <TaskStatus
                                    task={task}
                                />

                                {/* Priority Badge */}
                                <TaskPriority text={task.priority} />
                            </span>

                        </div>
                    </li>

                ))
            }

        </ul>
    )
}

export default FilterNone;
