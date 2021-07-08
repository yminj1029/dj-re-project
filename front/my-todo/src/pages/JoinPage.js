import React from 'react';
import AuthForm from '../components/auth/AuthForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const JoinPage = () => {
  return (
    <AuthTemplate>
      <AuthForm type="join"></AuthForm>
    </AuthTemplate>
  );
};

export default JoinPage;
