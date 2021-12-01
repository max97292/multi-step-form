import { AnimatePresence } from 'framer-motion';
import React from 'react';
import { Switch, Route, useLocation } from 'react-router-dom';
import ProfileForm from './profileForm';
import Review from './review';
import { SignupFormProvider } from './signupContext';
import SocialForm from './socialForm';
import StepLinks from './stepLinks';

export default function SignupForm() {
  const location = useLocation();

  return (
    <SignupFormProvider>
      <div className='signup-form'>
        <StepLinks />

        <AnimatePresence>
          <Switch location={location} key={location.pathname}>
            <Route exact path='/multi-step-form' component={ProfileForm} />
            <Route
              exact
              path='/multi-step-form/social'
              component={SocialForm}
            />
            <Route exact path='/multi-step-form/review' component={Review} />
          </Switch>
        </AnimatePresence>
      </div>
    </SignupFormProvider>
  );
}
