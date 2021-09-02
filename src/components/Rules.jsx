import React from 'react';
import './Rules.css';

const Rules = () => {
  return (
    <div className='rules' id='Rules'>
      <div className='rules__desc'>
        <h1>Club Rules</h1>
        <p>
          Hack Club IUB is a safe space for all students despite differences. We
          are a healthy community and we don't have space for any kind of abuse!
          By being a member of Hack Club IUB, you accept all the stated rules.
          Incase any issue, please contact Team Hack Club IUB.
        </p>
      </div>
      <div className='club__rules'>
        <div className='club__rule'>
          <h2>Respect Everyone!</h2>
          <p>
            We expect all the members of Hack Club IUB to respect each other.
            Bullying, swear words and any kind of disrespect will not be
            tolerated. It is important to respect the integrity of the club and
            the institution.
          </p>
        </div>
        <div className='club__rule'>
          <h2>Diversity and differences</h2>
          <p>
            Hack Club IUB welcomes every student despite their racial, sexual
            and cultural backgrounds. We expect all the members to treat
            everyone the same!
          </p>
        </div>
        <div className='club__rule'>
          <h2>Spam</h2>
          <p>
            We hate spam. Please refrain from sending any kind of spam messages
            on our communication platforms. Promotion is okay - unless you don't
            promote something which involves money!
          </p>
        </div>
        <div className='club__rule'>
          <h2>Inactivity</h2>
          <p>
            We wish to maintain an active community and we don't have a space
            for Sleeper cells. Our rule allows the moderators to remove any
            memeber who is found to be inactive for more than a week.
          </p>
        </div>
        <div className='club__rule'>
          <h2>Fun and happiness</h2>
          <p>
            We expect all the members to have fun at Hack Club IUB! We do not
            restrict sarcasm, memes and any content that can make the other
            members smile!
          </p>
        </div>
        <div className='club__rule'>
          <h2>Language barriers</h2>
          <p>
            No, we don't do that here. You can talk on any language of your
            convinience (provided that other members understand).
          </p>
        </div>
        <div className='club__rule'>
          <h2>MLH - Code of Conduct</h2>
          <p>
            By being a part of our club, you agree to follow MLH Code of
            conduct. MLH Code of Conduct -
            https://static.mlh.io/docs/mlh-code-of-conduct.pdf
          </p>
        </div>
        <div className='club__rule'>
          <h2>Hack Club - Code of Conduct</h2>
          <p>
            By being a part of our club, you agree to follow Hack Club's Code of
            conduct. Hack Club Code of Conduct - https://hackclub.com/conduct/
          </p>
        </div>
        <div className='club__rule'>
          <h2>More rules?</h2>
          <p>
            Please use your common sense and make sure you don't make anyone
            unhappy! Help us maintain a healthy community.
          </p>
        </div>
        <div className='club__rule'>
          <h2>I need help. Someone broke the rule!</h2>
          <p>
            Please don't hesitate to reach out Team Hack Club. We will set
            things right for you.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Rules;
