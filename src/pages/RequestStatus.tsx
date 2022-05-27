import React from 'react';
import {View, Text} from 'react-native';

import {Header} from '../components/Header';

import {SafeAreaView, AlignTextCenter, Main, ContainerText, AlignCenter, TextInputForm, TextAreaInputForm, ButtonAlign, ButtonForm, ButtonFormText} from '../styles/styles';
import logo from '../assets/logo.png';

export function RequestStatus(props: any) {
    
    function handleConclude() {
        props.navigation.navigate('Home');
    }

    return (
        <SafeAreaView
            scrollEnabled={false}
            keyboardShouldPersistTaps='handled'
        >
            <Header />
            <Main>
                <AlignCenter>
                    <ContainerText>
                        <AlignTextCenter>{props.route.params.icon}</AlignTextCenter>
                        <AlignTextCenter>{props.route.params.title}</AlignTextCenter>
                    </ContainerText>
                    

                    <ButtonForm onPress={handleConclude}>
                        <ButtonFormText>Certo!</ButtonFormText>
                    </ButtonForm>
                </AlignCenter>
            </Main>
        </SafeAreaView>
    );
}