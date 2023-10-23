import React, { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AppNavigator } from '../navigation/app.navigator';
import { ApolloProvider } from '@apollo/client';
import { client } from '../services/graphql.service';
import { StatusBar } from '../components';

export const App = (): React.ReactElement => {
  useEffect(() => {}, []);

  return (
    <ApolloProvider client={client}>
      <SafeAreaProvider>
        <StatusBar />
        <AppNavigator />
      </SafeAreaProvider>
    </ApolloProvider>
  );
};

export default App;
