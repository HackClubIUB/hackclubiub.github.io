import React from 'react';
import Faq from 'react-faq-component';
import './Faqs.css';

const data = {
  title: 'Frequently Asked Questions',
  rows: [
    {
      title: 'Who can become a member?',
      content:
        'The clubs is open to any student, ranging from novice developers who are just starting, to advanced developers who want to further their skills.',
    },
    {
      title: 'How frequently do events and workshops occur?',
      content:
        'We hold workshops and showcases at IUB & we would recommend you to join our community by becoming a member to get updates.',
    },
    {
      title: 'What should I carry when attending a workshop?',
      content:
        'We recommend you carry with you a notebook, pen and a laptop because more often than not we make our hands dirty with code. Most importantly, carry along a healthy dose of curiosity and enthusiasm.',
    },
    {
      title: 'Who should I reach out to if I have any questions?',
      content:
        "If you have any questions or comments, please don't hesitate to contact us. You can find an email at the end of the page. We would be happy to stay engaged via email even after the event.",
    },
  ],
};

const styles = {
  bgColor: 'transparrent',
  titleTextColor: 'white',
  rowTitleColor: 'white',
  rowContentColor: 'white',
  arrowColor: 'white',
};

const config = {
  animate: true,
  tabFocus: true,
};

const Faqs = () => {
  return (
    <div className='faqs' id='Faqs'>
      <div>
        <Faq data={data} styles={styles} config={config} />
      </div>
    </div>
  );
};

export default Faqs;
