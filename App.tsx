import { SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import Home from './pages/Home';

const App = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Home />
      </ScrollView>
    </SafeAreaView>
  );
};

export default App;
