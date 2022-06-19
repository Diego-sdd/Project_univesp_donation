import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';

import Container from './pages/NavigationTab';

//Login
import Home from './pages/Home';
import Login from './pages/Login';

//Register
import Register from './pages/Register';
import RegisterAddress from './pages/Register/Address';

//Profile
import Profile from './pages/Map/Profile';

export type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Register: undefined;
  RegisterAddress: undefined;
  Container: undefined;
  Profile: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}

const Routes = (props: any) => {
  const {authReducer} = props;
  const [tokenLogin, setTokenLogin] = useState(true);

  useEffect(() => {
    if (authReducer) {
      setTokenLogin(true);
    } else {
      setTokenLogin(false);
    }
  }, [authReducer]);
  return (
    <NavigationContainer>
      {!tokenLogin ? (
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            cardStyle: {
              backgroundColor: '#f0f0f5',
            },
          }}
          >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="RegisterAddress" component={RegisterAddress} />
        </Stack.Navigator>
      ) : (
        <>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyle: {
                backgroundColor: '#f0f0f5',
              },
            }}>
            <Stack.Screen name="Container" component={Container} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

const mapStateToProps = (state: any) => {
  return {
    authReducer: state.authReducer?.token,
  };
};

// Map Dispatch To Props (Dispatch Actions To Reducers. Reducers Then Modify The Data And Assign It To Your Props)
const mapDispatchToProps = () => {
  // Action
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Routes);
