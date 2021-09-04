import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUsers,
  faTrophy,
  faHeart,
  faCode,
  faWindowRestore,
  faUserSecret,
} from '@fortawesome/free-solid-svg-icons';
import './Home.css';

const Home = () => {
  return (
    <div className='home' id='Home'>
      <div className='home__about'>
        <h1>Welcome to Hack Club IUB!</h1>
        <p>
          Hack Club IUB is the coding community of The Islamia University of
          Bahawalpur. We are a chapter of hackclub.com. Hacker, technologist,
          entrepreneur, coder, geek, pro or noob - Hack Club IUB welcomes you to
          be a part of our fam. We encourage students to take part in various
          competitive and collaborative coding events that take place across the
          world. We maintain a active community where we discuss healthy topics
          and grow together.
        </p>
      </div>
      <div className='home__panels'>
        <div className='panel'>
          <h4>
            <FontAwesomeIcon icon={faUsers} /> Vision & Mission
          </h4>
          <p>
            Our mission is to enable students to take part in competitive and
            collaborative coding activities. Our vision is to maintain a healthy
            community for coders at IUB.
          </p>
        </div>
        <div className='panel'>
          <h4>
            <FontAwesomeIcon icon={faTrophy} /> Projects & achievements
          </h4>
          <p>
            We take part in domestic and international events. All the
            achievements and information about the projects done by Hack
            Clubbers are posted in{' '}
            <a href='/' className='panel__link'>
              projects & achievements page
            </a>
            .
          </p>
        </div>
        <div className='panel'>
          <h4>
            <FontAwesomeIcon icon={faHeart} /> Safe
          </h4>
          <p>
            We always make sure that our community is a safe space for all kinds
            of audiences. We have a set of rules that we expect all our members
            to follow. The rules are listed{' '}
            <a href='#Rules' className='panel__link'>
              here
            </a>
            .
          </p>
        </div>
      </div>
      <div className='home__panels'>
        <div className='panel'>
          <h4>
            <FontAwesomeIcon icon={faCode} /> Perfect Coding Environment
          </h4>
          <p>
            We provide a perfect coding enviromnemt to learn and grow at your
            comfort zone. And maintain an active community of coders.
          </p>
        </div>
        <div className='panel'>
          <h4>
            <FontAwesomeIcon icon={faWindowRestore} /> Regular Workshops
          </h4>
          <p>
            We conduct regular workshops on recent tech to give students a
            knowledge about what going on.
          </p>
        </div>
        <div className='panel'>
          <h4>
            <FontAwesomeIcon icon={faUserSecret} /> Guidance and Mentorship
          </h4>
          <p>
            We have mentors with us who are ready to guide you always! Reach out
            to us for any help.
          </p>
        </div>
      </div>
      <a href='/' className='redbutton homered'>
        <FontAwesomeIcon icon={faUsers} />
        Join Us
      </a>
    </div>
  );
};

export default Home;
