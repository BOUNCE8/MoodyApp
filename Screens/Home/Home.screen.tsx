import React from 'react';
import { Dashboard, Login, SignUp } from '../index';
import { NavigationContainer } from '@react-navigation/native';
import { HomeProps } from '../../Interfaces';
import { loginConnector } from '../../Utilities/Login.utlilities';
import { Stack } from '../../Utilities/Home.utilities';
import changemyname from '../changeMyName/changemyname.screen';

const Home: React.FC<HomeProps> = ({ userName, isLoggedIn }) => {
  console.log(isLoggedIn, userName);
  if (isLoggedIn) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Dashboard"
            component={Dashboard}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="AddMood" component={changemyname} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default loginConnector(Home);
