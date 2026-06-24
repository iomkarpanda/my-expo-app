import { ApolloProvider } from '@apollo/client/react';
import { useState } from 'react';
import "../global.css"
import { client } from '@/lib/apollo_client';
import LoginScreen from './login';
import SignupScreen from './signup';

export default function RootLayout() {
  const [screen, setScreen] = useState<'login' | 'signup'>('login');

  return (
    <ApolloProvider client={client}>
      {screen === 'login' ? (
        <LoginScreen onNavigateSignup={() => setScreen('signup')} />
      ) : (
        <SignupScreen onNavigateLogin={() => setScreen('login')} />
      )}
    </ApolloProvider>
  );
}
