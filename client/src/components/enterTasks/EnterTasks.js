import { set } from 'mongoose';
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { saveTask } from '../../actions/tasks'

const EnterTasks = ({ saveTask }) => {
    const [name, setName] = useState('');
    const [user, setUser] = useState('');

    const onUser = (user) => {
        setUser(user);
    }

    const onChange = (e) => {
        setName(e.target.value);
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(!user) {
            return
        }

        saveTask(name, user);
        setName('');

        document.getElementById('task-input').focus();
    }

    return (
        <div className="justify-content-center">
            <h1 className="daily-tasks">Date goes here</h1>


            <form className="w-50 mx-auto" onSubmit={onSubmit}>

                <button type="button" className="btn btn-primary" data-bs-toggle="button" autocomplete="off" onClick={() => onUser('60cf7ecbeec8a37dc758f19c')} >Saad</button>
                <button type="button" className="btn btn-primary mx-2" data-bs-toggle="button" autocomplete="off" onClick={() => onUser('60cf7ed3eec8a37dc758f19f')}>Hassnain</button>
                <button type="button" className="btn btn-primary" data-bs-toggle="button" autocomplete="off" onClick={() => onUser('60cf7ed8eec8a37dc758f1a2')}>Saher</button>

                <div className="mb-3 mt-3">
                    <input onChange={onChange} value={name} name="name" type="text" className="form-control mb-3" id="task-input" />
                </div>

                <div className="d-grid gap-2 mt-5">
                    <button type="submit" className="btn btn-primary btn-block">Submit</button>
                </div>
            </form>


        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    saveTask
}

export default connect(mapStateToProps, mapDispatchToProps)(EnterTasks);
