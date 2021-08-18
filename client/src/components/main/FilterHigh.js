import React from 'react';

import TaskStatus from './TaskStatus';
import TaskPriority from './TaskPriority';
import TaskOptions from './TaskOptions';
import TaskAssign from './TaskAssign';

const FilterHigh = ({ ranking, hover, setHover, assign, tasks, saveRank, updateTaskName, pressEnter }) => {
    return (

        <>
            {/* ========================================
            Pending tasks
        ==========================================*/}
            <ul style={{ listStyle: "none" }}>

                {
                    tasks
                        .filter(function (task) {
                            if (task.status === 'done' || task.rank === null) {
                                return false
                            }
                            return true
                        })
                        .sort(function (a, b) {
                            return a.rank - b.rank;
                        })
                        .map((task, i) => (
                            <li style={{ transform: "translateX('-20px')" }} key={i}>
                                <div className={`task ${!hover ? 'disabled' : ''}`}>

                                    {/* Rank input */}
                                    <span
                                        id={task._id}
                                        onBlur={saveRank}
                                        contentEditable="true"
                                        onFocus={() => setHover(false)}
                                        className={`rank-input show`}
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


            {/* ========================================
            Resolved tasks
        ==========================================*/}

            <h2 className="mt-10 mb-3">Resolved High Priority Tasks</h2>
            
            <ul style={{ listStyle: "none" }}>

                {
                    tasks
                        .filter(function (task) {
                            if (task.status !== 'done' || task.rank === null) {
                                return false
                            }
                            return true
                        })
                        .sort(function (a, b) {
                            return a.rank - b.rank;
                        })
                        .map((task, i) => (
                            <li style={{ transform: "translateX('-20px')" }} key={i}>
                                <div className={`task ${!hover ? 'disabled' : ''}`}>

                                    {/* Rank input */}
                                    <span
                                        id={task._id}
                                        onBlur={saveRank}
                                        contentEditable="true"
                                        onFocus={() => setHover(false)}
                                        className={`rank-input show`}
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
        </>
    )
}

export default FilterHigh;
