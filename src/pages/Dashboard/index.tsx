import React from 'react';
import { View, Button } from 'react-native';

import { useAuth } from '../../hooks/AuthContext';

const Dashboard: React.FC = () => {
  const { SignOut } = useAuth();
  return (
    <View style={{ flex: 1, justifyContent: 'center' }}>
      <Button title="sair" onPress={SignOut} />
    </View>
  );
};

export default Dashboard;
