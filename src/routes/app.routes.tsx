/* eslint-disable @typescript-eslint/no-explicit-any */
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { getFocusedRouteNameFromRoute } from '@react-navigation/native';

import { Dimensions, Platform, View } from 'react-native';
import { Home } from '../screens/Home';
import { Progress } from '../screens/Progress';
import { QRCamera } from '../screens/QRCamera';
import { MyWorkouts } from '../screens/MyWorkouts';
import { AvailableClasses } from '../screens/MyWorkouts/screens/AvailableClasses';
import { ExercisesList } from '../screens/MyWorkouts/screens/ExercisesList';
import { Workout } from '../screens/MyWorkouts/screens/Workout';
import { Profile } from '../screens/Profile';
import { Configurations } from '../screens/Configurations';
import { Favorites } from '../screens/Configurations/Favorites';
import { AccountInfos } from '../screens/Configurations/AccountInfos';
import { MyAccount } from '../screens/Configurations/MyAccount';
import { EditProfile } from '../screens/Configurations/EditProfile';
import { Privacy } from '../screens/Configurations/Privacy';
import { NotificationsConfig } from '../screens/Configurations/NotificationsConfig';
import { Security } from '../screens/Configurations/Security';
import { ChangePassword } from '../screens/Configurations/ChangePassword';
import { PrivacyPolicy } from '../screens/Configurations/Privacy/PrivacyPolicy';
import { TermsAndConditions } from '../screens/Configurations/Privacy/TermsAndConditions';
import { Payments } from '../screens/Configurations/Payments';
import { CameraScreen } from '../screens/Progress/screens/Camera';

import HomeIcon from '../assets/home_icon.svg';
import ProgressIcon from '../assets/progress_icon.svg';
import QRIcon from '../assets/qr_icon.svg';
import WorkoutsIcon from '../assets/halter_icon.svg';
import ProfileIcon from '../assets/profile_icon.svg';
import { ScheduleClass } from '../screens/MyWorkouts/screens/ScheduleClass';
import { Notifications } from '../screens/Notifications';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const ConfigStack = () => (
  <>
    <Stack.Screen name="Configurations" component={Configurations} />
    <Stack.Screen name="Favorites" component={Favorites} />
    <Stack.Screen name="AccountInfos" component={AccountInfos} />
    <Stack.Screen name="MyAccount" component={MyAccount} />
    <Stack.Screen name="EditProfile" component={EditProfile} />
    <Stack.Screen name="Privacy" component={Privacy} />
    <Stack.Screen name="NotificationsConfig" component={NotificationsConfig} />
    <Stack.Screen name="Security" component={Security} />
    <Stack.Screen name="ChangePassword" component={ChangePassword} />
    <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
    <Stack.Screen name="TermsAndConditions" component={TermsAndConditions} />
    <Stack.Screen name="Payments" component={Payments} />
  </>
);

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: {
        marginTop: 32,
      },
      headerShown: false,
    }}
  >
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Notifications" component={Notifications} />
    {ConfigStack()}
  </Stack.Navigator>
);

const ProgressStack = () => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: {
        marginTop: 32,
      },
      headerShown: false,
    }}
  >
    <Stack.Screen name="Progress" component={Progress} />
    <Stack.Screen name="Camera" component={CameraScreen} />
    {ConfigStack()}
  </Stack.Navigator>
);

const QRCameraStack = () => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: {
        marginTop: 32,
      },
      headerShown: false,
    }}
  >
    <Stack.Screen name="QRCamera" component={QRCamera} />
    {ConfigStack()}
  </Stack.Navigator>
);

const MyWorkoutsStack = ({ route }) => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: {
        marginTop: 32,
      },
      headerShown: false,
    }}
  >
    <Stack.Screen
      name="MyWorkouts"
      initialParams={{ screen: route.params.screen }}
      component={MyWorkouts}
    />
    <Stack.Screen name="AvailableClasses" component={AvailableClasses} />
    <Stack.Screen name="ExercisesList" component={ExercisesList} />
    <Stack.Screen name="Workout" component={Workout} />
    <Stack.Screen name="ScheduleClass" component={ScheduleClass} />
    {ConfigStack()}
  </Stack.Navigator>
);

const ProfileStack = () => (
  <Stack.Navigator
    screenOptions={{
      contentStyle: {
        marginTop: 32,
      },
      headerShown: false,
    }}
  >
    <Stack.Screen name="Profile" component={Profile} />
    {ConfigStack()}
  </Stack.Navigator>
);

export const AppRoutes = () => {
  const { height } = Dimensions.get('screen');

  function getTabBarStyle(route: any) {
    const screen = getFocusedRouteNameFromRoute(route);
    if (
      screen === 'ExercisesList' ||
      screen === 'EditProfile' ||
      screen === 'Workout' ||
      screen === 'ChangePassword' ||
      screen === 'Camera'
    ) {
      return 'none';
    }

    return 'flex';
  }

  return (
    <Tab.Navigator
      screenOptions={(route: any) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          display: getTabBarStyle(route.route),
          borderTopWidth: 0,
          backgroundColor: '#2176FF',
          borderRadius: 20,
          marginHorizontal: 24,
          position: 'absolute',
          bottom: 25,
          elevation: 0,
          height: height > 700 ? 70 : 60,
          paddingTop: 0,
        },
      })}
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ marginLeft: 16 }}>
              <HomeIcon />
            </View>
          ),
          tabBarHideOnKeyboard: true,
        }}
      />
      <Tab.Screen
        name="ProgressStack"
        component={ProgressStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ marginRight: 16 }}>
              <ProgressIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="QRCameraStack"
        component={QRCameraStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                width: height > 700 ? 90 : 80,
                height: height > 700 ? 90 : 80,
                backgroundColor: '#00378F',
                borderRadius: 999,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <QRIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="MyWorkoutsStack"
        component={MyWorkoutsStack}
        initialParams={{ screen: 'WorkoutsPlans' }}
        options={{
          unmountOnBlur: true,
          tabBarIcon: ({ focused }) => (
            <View style={{ marginLeft: 16 }}>
              <WorkoutsIcon />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={ProfileStack}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ marginRight: 16 }}>
              <ProfileIcon />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};
