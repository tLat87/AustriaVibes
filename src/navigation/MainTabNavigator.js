import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ScreenScreen from '../assets/svg/ScreenScreen';
import ScreenHome from '../assets/svg/ScreenHome';
import MapScreen from '../screens/MapScreen';
import ExploreStoriesScreen from '../screens/ExploreStoriesScreen';
import ScreenSecond from '../assets/svg/ScreenSecond';
import ScreenThird from '../assets/svg/ScreenThird';
import QuizScreen from '../screens/QuizScreen';
import ScreenForth from '../assets/svg/ScreenForth';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const MainTabNavigator = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                // headerShown: false,
                headerTitle: '',
                headerStyle: {
                    backgroundColor: '#F9F6F1',
                },
                tabBarStyle: {
                    position: 'absolute',
                    bottom: 40,
                    left: 20,
                    right: 20,
                    width: '90%',
                    marginLeft: '5%',
                    backgroundColor: '#E30321',
                    borderRadius: 22,
                    paddingHorizontal: 1,
                    borderWidth: 3,
                    borderColor: '#282828',
                    paddingTop: 20,
                    shadowOffset: { width: 0, height: 10 },
                    shadowOpacity: 0.3,
                    shadowRadius: 10,
                },
                headerShadowVisible: false,
            })}
        >
            <Tab.Screen
                name="Home"
                component={HomeScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <ScreenHome/>
                    ),
                }}
            />
            <Tab.Screen
                name="MapScreen"
                component={MapScreen}
                options={{
                    tabBarLabel: '',
                    headerShown: false,
                    headerTitle: '',
                    tabBarIcon: ({ focused }) => (
                        <ScreenScreen fill={focused ? '#AC1430' : '#FFFFFF'}/>
                    ),
                }}
            />
            <Tab.Screen
                name="ExploreStoriesScreen"
                component={ExploreStoriesScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <ScreenSecond fill={focused ? '#AC1430' : '#FFFFFF'}/>
                    ),
                }}
            />
            <Tab.Screen
                name="QuizScreen"
                component={QuizScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <ScreenThird fill={focused ? '#AC1430' : '#FFFFFF'}/>
                    ),
                }}
            />
            <Tab.Screen
                name="ProfileScreen"
                component={ProfileScreen}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: ({ focused }) => (
                        <ScreenForth fill={focused ? '#AC1430' : '#FFFFFF'}/>
                    ),
                }}
            />

        </Tab.Navigator>
    );
};

export default MainTabNavigator;
