import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {Provider} from "react-redux";
import {PersistGate} from "redux-persist/integration/react";
import {persistor, store} from "./src/redux/store";
import WelcomeScreen from "./src/navigation/WelcomeScreen";
import MainTabNavigator from "./src/navigation/MainTabNavigator";
import BackgroundMusic from "./src/component/BackgroundMusic";
import SetNicknameScreen from "./src/screens/SetNicknameScreen";
import MoreInfoScreen from "./src/screens/MoreInfoScreen";
import QuizProccesScreen from "./src/screens/QuizProccesScreen";
import MoreStoryCardScreen from "./src/screens/MoreStoryCardScreen";

const Stack = createStackNavigator();

const Left = () => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => navigation.goBack()}>
        </TouchableOpacity>
    )
}

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <NavigationContainer>
                    {/*<BackgroundMusic />*/}
                    <Stack.Navigator screenOptions={{ headerLeft: Left, headerStyle: { backgroundColor: '#360013' },
                        headerTitleStyle: {
                            color: 'white',
                            fontWeight: 'bold',
                            fontSize: 24,
                        },
                    }}>
                        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="SetNicknameScreen" component={SetNicknameScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MainTab" component={MainTabNavigator} options={{ headerShown: false }} />

                        <Stack.Screen name="MoreInfoScreen" component={MoreInfoScreen} options={{ headerShown: false }} />

                        <Stack.Screen name="QuizProccesScreen" component={QuizProccesScreen} options={{ headerShown: false }} />
                        <Stack.Screen name="MoreStoryCardScreen" component={MoreStoryCardScreen} options={{ headerShown: false }} />

                    </Stack.Navigator>
                </NavigationContainer>
          </PersistGate>
         </Provider>
    );
}
