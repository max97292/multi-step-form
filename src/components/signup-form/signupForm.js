import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ProfileForm from './profileForm';
import Review from './review';
import SocialForm from './socialForm';
import StepLinks from './stepLinks';

export default function SignupForm() {
  return (
    <div className='signup-form'>
      <StepLinks />
      <Switch>
        <Route exact path='/' component={ProfileForm} />
        <Route exact path='/social' component={SocialForm} />
        <Route exact path='/review' component={Review} />
      </Switch>
    </div>
  );
}
