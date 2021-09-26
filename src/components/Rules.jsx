import React from 'react';
import Faq from 'react-faq-component';
import './Rules.css';

const data = {
  title: '',
  rows: [
    {
      title: 'Respect Everyone!',
      content:
        'We expect all the members of Hack Club IUB to respect each other. Bullying, swear words and any kind of disrespect will not be tolerated. It is important to respect the integrity of the club and the institution.',
    },
    {
      title: 'Diversity and differences',
      content:
        'Hack Club IUB welcomes every student despite their racial, sexual and cultural backgrounds. We expect all the members to treat everyone the same!',
    },
    {
      title: 'Spam',
      content:
        "We hate spam. Please refrain from sending any kind of spam messages on our communication platforms. Promotion is okay - unless you don't promote something which involves money!",
    },
    {
      title: 'Inactivity',
      content:
        'We expect all the members to have fun at Hack Club IUB! We do not restrict sarcasm, memes and any content that can make the other members smile!',
    },
    {
      title: 'Fun and happiness',
      content:
        "We wish to maintain an active community and we don't have a space for Sleeper cells. Our rule allows the moderators to remove any memeber who is found to be inactive for more than a week.",
    },
    {
      title: 'Language barriers',
      content:
        "No, we don't do that here. You can talk on any language of your convinience (provided that other members understand).",
    },
    {
      title: 'MLH - Code of Conduct',
      content:
        'By being a part of our club, you agree to follow MLH Code of conduct. MLH Code of Conduct - https://static.mlh.io/docs/mlh-code-of-conduct.pdf',
    },
    {
      title: 'Hack Club - Code of Conduct',
      content:
        "By being a part of our club, you agree to follow Hack Club's Code of conduct. Hack Club Code of Conduct - https://hackclub.com/conduct/",
    },
    {
      title: 'More rules?',
      content:
        "Please use your common sense and make sure you don't make anyone unhappy! Help us maintain a healthy community.",
    },
    {
      title: 'I need help. Someone broke the rule!',
      content:
        "Please don't hesitate to reach out Team Hack Club. We will set things right for you.",
    },
  ],
};

const styles = {
  bgColor: 'transparrent',
  titleTextColor: '#e42d42',
  rowTitleColor: '#e42d42',
  rowTitleTextSize: '1.5em',
  rowContentColor: 'white',
  arrowColor: 'white',
};

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
      <div>
        <Faq data={data} styles={styles} />
      </div>
    </div>
  );
};

export default Rules;
