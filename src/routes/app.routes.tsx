import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { View, Text } from 'react-native';

import { Home } from '../screens/Home';
import { Progress } from '../screens/Progress';
import { QRCamera } from '../screens/QRCamera';
import { Workouts } from '../screens/Workouts';
import { Profile } from '../screens/Profile';

import HomeIcon from '../assets/home_icon.svg';
import ProgressIcon from '../assets/progress_icon.svg';
import QRIcon from '../assets/qr_icon.svg';
import WorkoutsIcon from '../assets/halter_icon.svg';
import ProfileIcon from '../assets/profile_icon.svg';

const { Navigator, Screen } = createBottomTabNavigator();

export const AppRoutes = () => (
  <Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        backgroundColor: '#2176FF',
        borderRadius: 20,
        bottom: 25,
        marginHorizontal: 24,
        elevation: 0,
        height: 70,
        position: 'absolute',
      },
    }}
  >
    <Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ marginLeft: 16 }}>
            <HomeIcon />
          </View>
        ),
      }}
    />
    <Screen
      name="Progress"
      component={Progress}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ marginRight: 16 }}>
            <ProgressIcon />
          </View>
        ),
      }}
    />
    <Screen
      name="QRCamera"
      component={QRCamera}
      options={{
        tabBarIcon: ({ focused }) => (
          <View
            style={{
              width: 90,
              height: 90,
              backgroundColor: '#00378F',
              borderRadius: 45,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <QRIcon />
          </View>
        ),
      }}
    />
    <Screen
      name="Workouts"
      component={Workouts}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ marginLeft: 16 }}>
            <WorkoutsIcon />
          </View>
        ),
      }}
    />
    <Screen
      name="Profile"
      component={Profile}
      options={{
        tabBarIcon: ({ focused }) => (
          <View style={{ marginRight: 16 }}>
            <ProfileIcon />
          </View>
        ),
      }}
    />
  </Navigator>
);
