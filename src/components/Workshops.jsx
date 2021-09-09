import React from 'react';
import './Workshops.css';

const Workshops = () => {
  return (
    <div className='Workshops'>
      <div className='workshops__header'>
        <h1>Hack Club IUB Workshops</h1>
        <p>
          Learn to program with this collection of community-made workshops with
          innovative tutorials and unique ideas.
        </p>
      </div>
      <div className='workshops__upcoming'>
        <h2>Upcoming Workshops & Events</h2>
      </div>
      <div className='workshops__past'>
        <h2>Past Workshops & Events</h2>
      </div>
    </div>
  );
};

export default Workshops;
