import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Dimensions, Platform, View } from 'react-native';
import { Home } from '../screens/Home';
import { Progress } from '../screens/Progress';
import { QRCamera } from '../screens/QRCamera';
import { Workouts } from '../screens/Workouts';
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

import HomeIcon from '../assets/home_icon.svg';
import ProgressIcon from '../assets/progress_icon.svg';
import QRIcon from '../assets/qr_icon.svg';
import WorkoutsIcon from '../assets/halter_icon.svg';
import ProfileIcon from '../assets/profile_icon.svg';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      animation: 'slide_from_right',
      contentStyle: {
        marginTop: 24,
      },
    }}
  >
    <Stack.Screen name="Home" component={Home} />
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
  </Stack.Navigator>
);

export const AppRoutes = () => {
  const { height } = Dimensions.get('screen');

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: '#2176FF',
          borderRadius: 20,
          marginHorizontal: 24,
          position: 'absolute',
          bottom: 25,
          elevation: 0,
          height: height > 700 ? 70 : 60,
          paddingTop: Platform.OS === 'ios' ? 24 : 0,
        },
      }}
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
      <Tab.Screen
        name="QRCamera"
        component={QRCamera}
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
      <Tab.Screen
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
    </Tab.Navigator>
  );
};
