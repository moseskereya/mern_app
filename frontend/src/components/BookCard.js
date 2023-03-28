import React from 'react';
import '../App.css';

const BookCard = (props) => {
  const student = props.student;

  return (
    <div className='card-container m-3'>
      <img
        src='https://images.pexels.com/photos/1261820/pexels-photo-1261820.jpeg?auto=compress&cs=tinysrgb&w=1600'
        alt='Books'
              height={200}
              width={200}
      />
      <div className='desc'>
        <h3>{student.firstname}</h3>
        <p>{student.lastname}</p>
      </div>
    </div>
  );
};

export default BookCard;