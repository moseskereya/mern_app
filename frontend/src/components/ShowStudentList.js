import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import BookCard from './BookCard';

function ShowBookList() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/students')
      .then((res) => {
        setStudents(res.data);
      })
      .catch((err) => {
        console.log('Error from ShowBookList');
      });
  }, []);

  const studentlist =
    students.length === 0
          ?
     <div>
        <p>Loading....</p>
      </div>
      : students.map((student, s) => <BookCard student={student} key={s} />);

  return (
    <div className='ShowBookList'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-12'>
            <br />
            <h2 className='display-4 text-center'>Student List</h2>
          </div>

          <div className='col-md-11'>
            <Link
              to='/create-student'
              className='btn btn-outline-warning float-right'
            >
              + Add New Book
            </Link>
            <br />
            <br />
            <hr />
          </div>
        </div>
        <div className='list'>{studentlist}</div>
      </div>
    </div>
  );
}

export default ShowBookList;