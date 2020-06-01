import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { withAuthenticator, AmplifySignOut } from "@aws-amplify/ui-react";
import { API, graphqlOperation } from 'aws-amplify'

function App() {
  return (
    <div>x
      <AmplifySignOut />
      My App
    </div>
  );
}

export default withAuthenticator(App);
