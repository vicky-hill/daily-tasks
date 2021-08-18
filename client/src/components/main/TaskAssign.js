import React from 'react';
import { connect } from 'react-redux';
import { updateTask } from '../../actions/tasks';

const TaskAssign = ({ task, updateTask }) => {

    const { user, time, _id } = task;

    const update = (field, value) => {
        if(value === user) {
            return  updateTask(_id, { [field]: "" });
        }

        if(value) {
            return  updateTask(_id, { [field]: value });
        }

        updateTask(_id, { [field]: !task[field] });
    }

    return (
        <div className="options">
            <div className="status-options">

                {/* users */}
                <span
                    className={`done`}
                    onClick={() => update('done')}
                >Hassnain</span>

                <span
                    className={`done`}
                    onClick={() => update('done')}
                >Saad</span>

                <span
                    className={`done`}
                    onClick={() => update('done')}
                >Saher</span>

                {/* time */}
                <span 
                    className={`inprogress`}
                    onClick={() => update('inProgress')}
                >time</span>
            </div>

        </div>
    )
}

export default connect(null, { updateTask })(TaskAssign);
