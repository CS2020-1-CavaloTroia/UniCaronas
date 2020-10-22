import React, {useEffect} from 'react';
import {useSelector} from 'react-redux';
import {StatusBar, View, TouchableOpacity} from 'react-native';

import {navigationRef} from '~/services/navigation';

//import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import colors from '~/styles/colors';

import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

//MaterialCommunityIcons.loadFont();

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

//Driver
import DriverDrawer from './components/driver/Drawer';
import DriverMap from './screens/Driver/Map';

//Passenger
import PassengerDrawer from './components/passenger/Drawer';
import PassengerMap from './screens/Passenger/Map';

//GLOBAL SCREENS
import SignIn from '~/screens/SignIn';

export default function Routes() {
  const showDrawer = false;
  const userType = 'driver'; //possible values: "driver" || "passenger"

  // Redux (auth) global variables
  const token = useSelector((state) => state.auth.token);

  return (
    <>
      <StatusBar backgroundColor={colors.statusBarColor} />
      <NavigationContainer ref={navigationRef}>
        {/* If the user is not authenticated -> show the Signin screen */}
        {!token && (
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="SignIn" component={SignIn} />
          </Stack.Navigator>
        )}

        {/* If the user type == DRIVER -> show the options for driver */}
        {token && userType === 'driver' && (
          <Drawer.Navigator
            drawerStyle={{width: !showDrawer ? null : 350}}
            initialRouteName="Map"
            drawerContent={(props) => (
              <DriverDrawer
                activeItemIndex={props.state.index}
                navigation={props.navigation}
              />
            )}>
            <Stack.Screen name="Map" component={DriverMap} />
          </Drawer.Navigator>
        )}

        {/* If the user type == PASSENGER -> show the options for passenger */}
        {token && userType === 'passenger' && (
          <Drawer.Navigator
            drawerStyle={{width: !showDrawer ? null : 350}}
            initialRouteName="Map"
            drawerContent={(props) => (
              <PassengerDrawer
                activeItemIndex={props.state.index}
                navigation={props.navigation}
              />
            )}>
            <Stack.Screen name="Map" component={PassengerMap} />
          </Drawer.Navigator>
        )}
      </NavigationContainer>
    </>
  );
}
