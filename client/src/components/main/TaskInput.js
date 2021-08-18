import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';
import { saveTask } from '../../actions/tasks';

const TaskInput = ({ project, saveTask }) => {
    const newTaskInput = useRef(null);

    useEffect(() => {
        newTaskInput.current.focus();
    }, [])

    const [task, setTask] = useState('');

    const onChange = (e) => {
        setTask(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        if(task !== '') {
            saveTask(task, project);
            setTask(''); 
        }
    }

    return (

            

            <form onSubmit={onSubmit}>
                <input
                    id="new-task-input"
                    onBlur={onSubmit}
                    onChange={onChange}
                    ref={newTaskInput}
                    type="text"
                    className="add-task"
                    value={task}
                    autoComplete="off"
                />
            </form>

    )
}

export default connect(null, { saveTask })(TaskInput);
