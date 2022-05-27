import React from 'react';
// import {View, Image, StyleSheet} from 'react-native';

import {Container, Logo, Button, Text} from '../styles/styles';
import logo from '../assets/logo.png';

export function Welcome() {
    return (
        <Container>
            <Logo source={logo} />
            <Button>
                <Text>
                    Iniciar
                </Text>
            </Button>
        </Container>
    );
}

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         alignItems: 'center',
//         justifyContent: 'center',
//         backgroundColor: '#93D871'
//     },    
//     image: {
//         width: 220,
//         height: 250,
//     },
// });