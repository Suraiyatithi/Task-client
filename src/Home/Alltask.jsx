import React, { useEffect, useState } from 'react';
import Task from './Task';


const Alltask = () => {
    const[tasks,settasks]=useState([]);
   
    useEffect(() => {
        fetch('https://task-server-suraiyatithi.vercel.app/tasks')
            .then(res => res.json())
            .then(data => settasks(data));
    }, [])
   
    
    return (
        <div>
            <div>
           <div className="mt-5">
            <div className="text-center">
                <p className='text-success '>___________________________________________</p>
                <h2>SEE ALL TASK</h2>
                <p className='text-success'>___________________________________________</p>
                <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 p-4 ">
                    {
                        tasks.map(task=><Task key={task._id} task={task}></Task>)
                    }
                </div>
            </div>
           </div>
        </div>  
        </div>
    );
};

export default Alltask;