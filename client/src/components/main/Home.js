/* eslint-disable */
import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../actions/tasks';
import { getProjectTasks, getHighPriorityTasks } from '../../actions/tasks';

import TaskInput from './TaskInput';
import TaskFilters from './TaskFilters';

import FilterNone from './FilterNone';
import FilterHigh from './FilterHigh';

const Home = ({ getProjectTasks, getHighPriorityTasks, updateTask, tasks, filteredTasks, project }) => {


    useEffect(() => {
        getProjectTasks();
    }, []);

    const [hover, setHover] = useState(true);
    const [assign, setAssign] = useState(false);
    const [ranking, setRanking] = useState(false);

    const [filter, setFilter] = useState('none');


    document.addEventListener('keydown', (e) => {
        if (e.key === "Control") {
            setAssign(!assign);
        }
    });

    const updateTaskName = (e) => {
        const { id, innerText } = e.target;
        updateTask(id, { name: innerText })
        setHover(true);
    }


    const saveRank = (e) => {

        const { id, innerText } = e.target;
        let rank;

        if (innerText !== '') {
            rank = Number(innerText);
        } else {
            rank = innerText
        }

        updateTask(id, { rank })
        setHover(true);

        e.target.blur();
    }


    const pressEnter = (e) => {
        if (e.keyCode === 13) {
            e.preventDefault();
            document.getElementById(e.target.id).blur();
            document.getElementById('new-task-input').focus();
        }
    }

    const getFilter = (filter, action) => {
        setFilter(filter);
        action && action();
    }


    /* ===================================
       Filter Components
    =================================== */
    const NoFilter = (
        <FilterNone
            ranking={ranking}
            hover={hover}
            setHover={setHover}
            assign={assign}
            saveRank={saveRank}
            updateTaskName={updateTaskName}
            pressEnter={pressEnter}
            tasks={tasks}
        />
    )

    const HighPriorityFilter = (
        <FilterHigh
            ranking={ranking}
            hover={hover}
            setHover={setHover}
            assign={assign}
            saveRank={saveRank}
            updateTaskName={updateTaskName}
            pressEnter={pressEnter}
            tasks={filteredTasks}
        />
    )



    return (
        <div className="task-overview">

            {/* Task filters */}
            <TaskFilters
                setRanking={() => setRanking(!ranking)}
                setAllTasks={() => getFilter('none')}
                setHighPriority={() => getFilter('high', getHighPriorityTasks)}
            />

            {/* Task input */}
            <TaskInput project={project} />

            {
                filter === 'none' ? NoFilter : HighPriorityFilter
            }




        </div>
    )
}

const mapStateToProps = state => ({
    tasks: state.tasks.allTasks,
    filteredTasks: state.tasks.filteredTasks,
    project: state.tasks.project
})

export default connect(mapStateToProps, { getProjectTasks, updateTask, getHighPriorityTasks })(Home);
