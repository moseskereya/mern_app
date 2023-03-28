import React, { useState } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';

const CreateStudent = (props) => {
  // Define the state with useState hook
  const navigate = useNavigate();
  const [student, setStudent] = useState({
    firstname: '',
    lastname: '',
  });

  const onChange = (e) => {
    setStudent({ ...student, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post('http://localhost:8082/api/students', student)
      .then((res) => {
        setStudent({
          firstname: '',
          lastname: ''
        });

        // Push to /
        navigate('/');
      })
      .catch((err) => {
        console.log('Error in Creating new Student!');
      });
    };
    
  return (
    <div className='CreateBook'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-8 m-auto'>
            <br />
            <Link to='/' className='btn btn-outline-warning float-left'>
             Show student list
            </Link>
          </div>
          <div className='col-md-8 m-auto'>
            <h1 className='display-4 text-center'>Add student</h1>
            <p className='lead text-center'>Create new student</p>

            <form noValidate onSubmit={onSubmit}>
              <div className='form-group'>
                <input
                  type='text'
                  placeholder='First Name'
                  name='firstname'
                  className='form-control'
                  value={student.firstname}
                  onChange={onChange}
                />
              </div>
              <br />

              <div className='form-group'>
                <input
                  type='text'
                  placeholder='Lastname'
                  name='lastname'
                  className='form-control'
                  value={student.lastname}
                  onChange={onChange}
                />
              </div>
              <input
                type='submit'
                className='btn btn-outline-warning btn-block mt-4'
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CreateStudent