import React, { useEffect } from 'react';
import Task from '../dailyTasks/Task';
import { connect } from 'react-redux';
import { getAllTasks } from '../../actions/tasks';
import { getUser } from '../../actions/auth';
import moment from 'moment';

const ViewTasks = ({ getAllTasks, tasks, taskDate, loading, id, getUser }) => {

    useEffect(() => {
        getUser();
        // setTimeout(() => {
        getAllTasks();
        // }, 500)
    }, [])

    const date = `${moment(taskDate).format('dddd')}, ${moment(taskDate).format("MMMM DD")}`


    return (

        <div className="justify-content-center">
            <h1 className="daily-tasks">{date}</h1>

            {
                id === '60cf7e9dad140e7dbd26d6ab' && (
                    <div className="w-50 mx-auto">
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#saad" type="button" role="tab" aria-controls="home" aria-selected="true">Saad</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#hassnain" type="button" role="tab" aria-controls="profile" aria-selected="false">Hassnain</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#saher" type="button" role="tab" aria-controls="contact" aria-selected="false">Saher</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#usama" type="button" role="tab" aria-controls="contact" aria-selected="false">Usama</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#hafeez" type="button" role="tab" aria-controls="contact" aria-selected="false">Hafeez</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#anmol" type="button" role="tab" aria-controls="contact" aria-selected="false">Anmol</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#shivam" type="button" role="tab" aria-controls="contact" aria-selected="false">Shivam</button>
                            </li>
                        </ul>


                        <div className="mt-5 tab-content" id="myTabContent">

                            {/* Saad */}
                            <div className="tab-pane fade show active" id="saad" role="tabpanel" aria-labelledby="home-tab">

                                {

                                    tasks
                                        .filter(task => task.user === '60cf7ecbeec8a37dc758f19c')
                                        .map(task => (
                                            <Task view key={task._id} task={task} />
                                        ))

                                }

                            </div>

                            {/* Hassnain */}
                            <div className="tab-pane fade" id="hassnain" role="tabpanel" aria-labelledby="profile-tab">

                                {

                                    tasks
                                        .filter(task => task.user === '60cf7ed3eec8a37dc758f19f')
                                        .map(task => (
                                            <Task view key={task._id} task={task} />
                                        ))

                                }

                            </div>

                            {/* Saher */}
                            <div className="tab-pane fade" id="saher" role="tabpanel" aria-labelledby="contact-tab">

                                {

                                    tasks
                                        .filter(task => task.user === '60cf7ed8eec8a37dc758f1a2')
                                        .map(task => (
                                            <Task view key={task._id} task={task} />
                                        ))

                                }

                            </div>

                            {/* Anmol */}
                            <div className="tab-pane fade" id="hassnain" role="tabpanel" aria-labelledby="profile-tab">

                                {

                                    tasks
                                        .filter(task => task.user === '60cf7ed3eec8a37dc758f19f')
                                        .map(task => (
                                            <Task view key={task._id} task={task} />
                                        ))

                                }

                            </div>

                            {/* Shivam */}
                            <div className="tab-pane fade" id="saher" role="tabpanel" aria-labelledby="contact-tab">

                                {

                                    tasks
                                        .filter(task => task.user === '60cf7ed8eec8a37dc758f1a2')
                                        .map(task => (
                                            <Task view key={task._id} task={task} />
                                        ))

                                }

                            </div>
                        </div>



                    </div>

                )
            }



        </div>
    )
}

const mapStateToProps = (state) => ({
    tasks: state.tasks.allTasks,
    loading: state.tasks.loading,
    taskDate: state.tasks.date,
    id: state.auth.id
})

const mapDispatchToProps = {
    getAllTasks,
    getUser
}


export default connect(mapStateToProps, mapDispatchToProps)(ViewTasks);
