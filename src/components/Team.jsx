import React from 'react';
import './Team.css';
import TeamCard from './TeamCard';

const Team = () => {
  return (
    <div className='team' id='Team'>
      <div className='team__title'>
        <h1>Meet Our Team</h1>
        <p>Passionate students are driving the success of the program.</p>
      </div>
      <div className='teamCards'>
        <TeamCard
          name='Sharjeel Yunus'
          clas='Computer Science'
          img='https://firebasestorage.googleapis.com/v0/b/hackclubiub-a9a23.appspot.com/o/Team%2022%2Fsharjeel.jpg?alt=media&token=c088f7ca-8c97-44a0-b53a-82e124428d4b'
          role='Leader'
          web='https://www.sharjeelyunus.me/'
          github='https://github.com/sharjeelyunus'
          linkedIn='https://www.linkedin.com/in/sharjeel-yunus/'
        />
      </div>
    </div>
  );
};

export default Team;
