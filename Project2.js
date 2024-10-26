// rnfe
import { Text, SafeAreaView, ScrollView } from 'react-native';
import React from 'react';
import FlatCards from './components/FlatCards';
import ElevatedCards from './components/ElevatedCards';
import FancyCard from './components/FancyCard';
import ActionCard from './components/ActionCard';
import ContactList from './components/ContactList';

const Project2 = () => {
  return (
    <SafeAreaView>
        <ScrollView>
          <Text>Project2</Text>
          <FlatCards />
          <ElevatedCards />
          <FancyCard />
          <ContactList />
          <ActionCard />
        </ScrollView>
    </SafeAreaView>
  );
};

export default Project2;

// mkdir components/FlatCards.js
