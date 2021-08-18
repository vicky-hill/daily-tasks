/* eslint-disable */
import React from 'react';
import Option from './Option'
import { connect } from 'react-redux';
import { updateTask } from '../../actions/tasks';

const Task = ({ task, wide, updateTask, view }) => {

    const update = (field) => {
        if (view) {
            return
        }
        updateTask(task._id, { [field]: !task[field] });
    }

    const viewOptions = (
        <>
            {
                task.done ? <Option type="check" checked={true} /> :
                    task.inProgress ? <Option type="times" checked={true} /> :
                    task.blocked ? <Option type="minus" checked={true} /> : null
            }

        </>
    )

    const checkOptions = (
        <>
            <Option type="check" checked={task.done} onClick={() => update('done')} />
            <Option type="times" checked={task.inProgress} onClick={() => update('inProgress')} />
            <Option type="minus" checked={task.blocked} onClick={() => update('blocked')} />
        </>
    )

    return (
        <div className="row mb-2">

            <div className={`col col-${wide ? 2 : 4} d-flex align-items-center offset-${wide ? 4 : 3}`}>
                <div className="card border-0">
                    <div className="card-body">
                        {task.name}
                    </div>
                </div>
            </div>

            <div className={`col col-${wide ? 3 : 4} d-flex align-items-center`}>
                <div className="card-body options">

                    {
                        view ? viewOptions : checkOptions
                    }


                </div>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    updateTask
}


export default connect(mapStateToProps, mapDispatchToProps)(Task);
