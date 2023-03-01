import React, { FC } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen } from './screens';

const { Navigator, Screen } = createStackNavigator();

const App: FC = () => {
    return (
        <NavigationContainer>
            <Navigator initialRouteName="home">
                <Screen name="home" component={HomeScreen} options={{ headerShown: false }} />
            </Navigator>
        </NavigationContainer>
    );
};

export default App;
