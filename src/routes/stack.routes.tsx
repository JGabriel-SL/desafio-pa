import React from 'react';
import { createStackNavigator } from '@react-navigation/stack'

import { Home } from '../pages/Home';
import { CreatePost } from '../pages/CreatePost';
import { EditPost } from '../pages/EditPost';
import { RequestStatus } from '../pages/RequestStatus';
import { MyPosts } from '../pages/MyPosts';

export type RootStackParamList = {
    CreatePost: undefined;
    Home: undefined;
};

const stackRoutes = createStackNavigator<RootStackParamList>();

const AppRoutes: React.FC = () => (
    <stackRoutes.Navigator
        screenOptions={{
            headerShown: false,
            gestureEnabled: true,
            gestureDirection: "horizontal",
            cardStyle: {
                backgroundColor: "#fff"
            }
        }}
    >
        {/* <stackRoutes.Screen 
            name="Welcome"
            component={Welcome}
        /> */}

        <stackRoutes.Screen
            name="Home"
            component={Home}
        />

        <stackRoutes.Screen 
            name="CreatePost"
            component={CreatePost}
        />

        <stackRoutes.Screen 
            name="EditPost"
            component={EditPost}
        />

        <stackRoutes.Screen 
            name="RequestStatus"
            component={RequestStatus}
        />

        <stackRoutes.Screen 
            name="MyPosts"
            component={MyPosts}
        />

    </stackRoutes.Navigator>
)

export default AppRoutes;