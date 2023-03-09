import React, {Component, useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleCheck, faPen, faTrash
} from '@fortawesome/free-solid-svg-icons';
import './App.css';




function App(){
    

    // Tasks state

    const[toDo, setToDO] = useState([
        {"id" :2, "title": "Task 2", "status": false},
        {"id" :1, "title": "Task 1", "status": false},
    ]);

    //Temp State

    const [newTask, setnewTask] = useState('');
    const [updateTask, setupdateTask] = useState('');

    //add Task

    const addTask=()=>{
        if(newTask) {
            let num =toDo.length + 1;
            let newEntry = {id: num, title: newTask, status:false};
            setToDO([...toDo, newEntry]);
            setnewTask('');
            
        }

    }

    //delete Task

    const deleteTask=()=>{

    }

    // Mark Task as done or completed

    const markDone=()=>{

    }

    //Cancel update

    const cancelUpdate=()=>{

    }

    // Change Task for update

    const changeTask=()=>{

    }
    
    //update task

    const updatesTask=()=>{

    }
    

    return(
        <div className='tc' >
            <h1>To Do List App(ReactJS)</h1>
             <br></br> 

             {/* update task */}

             <div className='row'>
                    <div className='col'>
                        <input
                          className='form-control form-control-lg'/>
                    </div>

                    <div className='col-auto'>
                        <button
                        className='btn btn-lg btn-success mr-20'>
                            Update
                        </button>

                        <button
                        className='btn btn-lg btn-warning mr-20'>
                            Cancel
                        </button>
                    </div>
                </div>
                <br/>


            {/* Add task  */}
                <div className='row'>
                    <div className='col'>
                        <input
                         value={newTask}
                         onChange={(e) => setnewTask(e.target.value)}
                          className='form-control form-control-lg'/>
                    </div>

                    <div className='col-auto'>
                        <button
                        onClick={addTask}
                        className='btn btn-lg btn-success'>
                            Add Task
                        </button>
                    </div>
                </div>
                <br/>


             {/* {Display Todos} */}

             {toDo && toDo.length ? '' : "No Tasks..."}

            {toDo && toDo
            
            .sort((a, b) =>a.id > b.id ? 2 : -2)
            
            .map((task, index )=>{

                return(

        
                    <React.Fragment key={task.id}>
                        <div className='taskBg'>
                            <div className={task.status ? 'done' : ''}>
                            <span className='taskNumber'>{index + 1}</span>
                            <span className='taskText'>{task.title}</span>
                            </div>
                            <div className='iconswrap'>
                                <span title='Completed / Not Completed'>
                                    <FontAwesomeIcon icon={faCircleCheck}/>
                                </span>
                                <span title='Edit'>
                                    <FontAwesomeIcon icon={faPen}/>   
                                </span>
                                <span title='delete'>
                                    <FontAwesomeIcon icon={faTrash}/>   
                                </span>
                            </div>
                        </div>
                           
                    </React.Fragment>
                )




            })
            
            };

             
        
        </div>
    );
}



export default App;