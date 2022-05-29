import React from 'react';

import {HeaderContent, HeaderLogo, LogoImage, LogoText, DivButton, HeaderButton, HeaderButtonText, HeaderLink, HeaderLinkText} from '../styles/styles';
import logo from '../assets/icon.png';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/stack.routes';

import { Entypo } from '@expo/vector-icons'; 

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Header() {
  const navigation = useNavigation<homeScreenProp>();
  
  function handleStart() {
      navigation.navigate("CreatePost");
  }

  function handleMyPosts() {
      navigation.navigate("MyPosts");
  }

  function handleHome() {
      navigation.navigate("Home");
  }

  return (
    <HeaderContent>
        <HeaderLogo onPress={handleHome} >
            <LogoImage source={logo} />
            <LogoText>BLOGPOSTS</LogoText>
        </HeaderLogo>
        <DivButton>
            <HeaderLink onPress={handleMyPosts}>
                <HeaderLinkText>Meus posts</HeaderLinkText>
            </HeaderLink>
            <HeaderButton onPress={handleStart}>
                <HeaderButtonText><Entypo name="plus" size={24} color="white" /></HeaderButtonText>
            </HeaderButton>
        </DivButton>
    </HeaderContent>
  )
}
