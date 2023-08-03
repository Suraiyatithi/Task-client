import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import img1 from '../assets/7273247_3610726.jpg'

const Addtask = () => {
    
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch('https://task-server-suraiyatithi.vercel.app/tasks', {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            title: 'Success!',
            text: 'Class Added Successfully',
            icon: 'success',
            confirmButtonText: 'Cool',
          });
        }
        console.log(result);
      });
    console.log(data);
  };

    return (
        <div>
               <div>
      {/* <div style={{backgroundImage:`url(${bg})`}}></div> */}
      <div className='mt-4'>
      <p className='text-success text-center'>__________________________________________________________</p>
        <h3 className="  mb-3 text-dark text-center ">FEEL FREE TO ADD TASK</h3>
        <p className='text-success text-center'>__________________________________________________________</p>
        <div className="row row-cols-sm-1 row-cols-lg-2 ">
          <div className="col p-4">
            <form onSubmit={handleSubmit(onSubmit)}>
              {errors.exampleRequired && <span>This field is required</span>}
              <div className="mt-12">
                <input
                  className="p-2 m-2 w-100 rounded shadow-lg border"
                  {...register('taskTitle')}
                  placeholder="Task Tittle"
                  defaultValue=""
                />
              </div>
              <div className="mt-12">
                <textarea
                  className="p-2 m-2 w-100 rounded shadow-lg border"
                  {...register('taskDescription', { required: true })}
                  placeholder="Task Description"
                  defaultValue=""
                />
              </div>
              <div className="mt-12">
              <textarea
  className="p-2 m-2 w-100 rounded shadow-lg border"
  {...register('Details')}
  placeholder="Details"
  defaultValue=""
/>

              </div>
              <div className="mt-12">
                <input
                  className="p-2 m-2 w-100 rounded shadow-lg border"
                  {...register('time')}
                  placeholder="Time"
                  defaultValue=""
                />
              </div>
              <div className="mt-12">
                <input
                  className="p-2 m-2 w-100 rounded shadow-lg border"
                  {...register('status')}
                  placeholder="Status"
                  defaultValue=""
                />
              </div>

              <div className="">
                <input
                
                  className="btn w-100 bg-success ms-2 ps-5 pe-5 pt-2 pb-2 mb-12 text-white"
                  value="Add Task"
                  type="submit"
                />
              </div>
            </form>
          </div>
          <div className="col ">
            <img className='img-fluid w-75' src={img1}></img>
          </div>
        </div>
      </div>
    </div> 
        </div>
    );
};

export default Addtask;