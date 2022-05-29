import React from 'react';

import { Feather } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 

import {Header} from '../components/Header';

import {SafeAreaView, AlignTextCenter, Main, ContainerText, AlignCenter, ButtonForm, ButtonFormText} from '../styles/styles';
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
                        <AlignTextCenter>
                            {props.route.params.lib == 'Feather' ?  (
                                <Feather name={props.route.params.icon} size={26} color="black" />
                            ) : (
                                <FontAwesome name={props.route.params.icon} size={26} color="black" />                            
                            )}
                        </AlignTextCenter>
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