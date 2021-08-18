import React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../actions/tasks';

const TaskOptions = ({ task, updateTask }) => {

    const { priority, status, _id } = task;

    const update = (field, value) => {
        if(value === priority || value === status) {
            return  updateTask(_id, { [field]: "" });
        }

        updateTask(_id, {[field]: value})
    }


    return (
        <div className="options">
            <div className="status-options">

                {/* done */}
                <span
                    className={`done ${status !== 'done' ? 'faded' : ''}`}
                    onClick={() => update('status', 'done')}
                >✔︎</span>

                {/* inprogress */}
                <span 
                    className={`inprogress ${status !== 'inprogress' ? 'faded' : ''}`}
                    onClick={() => update('status', 'inprogress')}
                >✗</span>
            </div>

            <div className="priority-options">

                {/* Low */}
                <span 
                    className={`badge ${priority !== 'low' ? 'faded' : ''}`}
                    onClick={() => update('priority', 'low')}
                >Low</span>

                {/* Medium */}
                <span 
                    className={`badge ${priority !== 'medium' ? 'faded' : ''}`}
                    onClick={() => update('priority', 'medium')}
                >Medium</span>

                {/* High */}
                <span 
                    className={`badge ${priority !== 'high' ? 'faded' : ''}`}
                    onClick={() => update('priority', 'high')}
                >High</span>
            </div>

        </div>
    )
}

export default connect(null, { updateTask })(TaskOptions);
