import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo,Feather,FontAwesome,AntDesign,Ionicons} from '@expo/vector-icons';

import Home from './pages/home';
import Create from './pages/create'
import Read from './pages/read';
import Update from './pages/update';
import Delete from './pages/delete';
import Login from './pages/login';

const Pilha = createStackNavigator()
const Nav = createBottomTabNavigator()

function NavBar(){
    return(
        <Nav.Navigator
            screenOptions={{
                tarBarStyle:{
                    backgroundColor:'#000',
                    borderTopColor:'transparent',
                    padding:5,
                    paddingBottom:5,
                },
                tabBarActiveTintColor:'red',
                tabBarInactiveTintColor:'purple',
            }}
        
        >
         
            <Nav.Screen
                name='Home'
                component={Home}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color}) => (
                        <FontAwesome name='home' size={size} color={color}/>
                    )
                }}
            />
             <Nav.Screen
                name='Login'
                component={Login}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color}) => (
                        <Entypo name='login' size={size} color={color}/>
                    )
                }}
            />
            <Nav.Screen
                name='Create'
                component={Create}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color}) => (
                        <Entypo name='squared-plus' size={size} color={color}/>
                    )
                }}
            />
            <Nav.Screen
                name='Read'
                component={Read}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color}) => (
                        <Ionicons name='search-circle-outline' size={size} color={color}/>
                    )
                }}
            />
            <Nav.Screen
                name='Update'
                component={Update}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color}) => (
                        <Entypo name='upload' size={size} color={color}/>
                    )
                }}
            />
            <Nav.Screen
                name='Delete'
                component={Delete}
                options={{
                    headerShown:false,
                    tabBarIcon:({size,color}) => (
                        <AntDesign name='delete' size={size} color={color}/>
                    )
                }}
            />
           
        </Nav.Navigator>
    )
}

export default function Routers() {
    return (
        <NavigationContainer>
            <Pilha.Navigator>
                <Pilha.Screen
                    name='NavBar'
                    component={NavBar}
                    options={{headerShown:false}}
                />
                <Pilha.Screen
                    name="Home"
                    component={Home}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Create"
                    component={Create}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Read"
                    component={Read}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Update"
                    component={Update}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Delete"
                    component={Delete}
                    options={{ headerShown: false }}
                />
                <Pilha.Screen
                    name="Login"
                    component={Login}
                    options={{ headerShown: false }}
                />
            </Pilha.Navigator>
        </NavigationContainer>
    )
}