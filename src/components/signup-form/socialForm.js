import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';

export default function SocialForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const history = useHistory();

  function onSubmit(data) {
    history.push('/review');
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <h2>How can we find you on social?</h2>
      <input
        type='text'
        name='twitter'
        placeholder="What's your twitter?"
        {...register('twitter', { required: true })}
      />
      <p>{errors.twitter && 'Twitter is required'}</p>
      <input
        type='text'
        name='facebook'
        placeholder="What's your facebook?"
        {...register('facebook', { required: true })}
      />
      <p>{errors.facebook && 'Facebook is required'}</p>
      <input type='submit' value='Next' {...register} />
    </form>
  );
}
