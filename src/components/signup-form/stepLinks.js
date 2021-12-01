import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSignupForm } from './signupContext';

function isEmpty(obj) {
  return Object.keys(obj).length === 0;
}

export default function StepLinks() {
  const { profile, social } = useSignupForm();
  const isProfileDone = !isEmpty(profile);
  const isSocialDone = !isEmpty(social);

  return (
    <div className='step-links'>
      <NavLink to='/multi-step-form' exact>
        {isProfileDone ? '🔴' : '⚪'}Profile <span />
      </NavLink>
      {isProfileDone ? (
        <NavLink to='/multi-step-form/social'>
          {isSocialDone ? '🔴' : '⚪'}Social <span />
        </NavLink>
      ) : (
        <a>
          Social <span />
        </a>
      )}
      {isProfileDone && isSocialDone ? (
        <NavLink to='/multi-step-form/review' style={{ float: 'right' }}>
          Review <span />
        </NavLink>
      ) : (
        <a style={{ float: 'right' }}>
          Review <span />
        </a>
      )}
    </div>
  );
}
