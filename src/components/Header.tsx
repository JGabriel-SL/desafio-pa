import React from 'react'

import {HeaderContent, LogoImage, LogoText, DivButton, HeaderButton, HeaderButtonText } from '../styles/styles';
import logo from '../assets/icon.png';

import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../routes/stack.routes';

type homeScreenProp = StackNavigationProp<RootStackParamList, 'Home'>;

export function Header() {
  const navigation = useNavigation<homeScreenProp>();
  
  function handleStart() {
      navigation.navigate("CreatePost");
  }
  return (
    <HeaderContent>
        <LogoImage source={logo} />
        <LogoText>BLOGPOSTS</LogoText>
        <DivButton>
            <HeaderButton onPress={handleStart}>
                <HeaderButtonText>+</HeaderButtonText>
            </HeaderButton>
        </DivButton>
    </HeaderContent>
  )
}
