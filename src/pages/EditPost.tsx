import React, {useState, useEffect} from 'react';
import {View, Image, Text} from 'react-native';


import {Header} from '../components/Header';
import {Main, SafeAreaView, PageTitle, MainHeader, UserIcon, UserName, DivButton, MainButton, MainButtonText,MainContent, LabelInput, TextInputForm, TextAreaInputForm} from '../styles/styles';
import {ButtonAlign, ButtonForm, ButtonFormText} from '../styles/styles';
import logo from '../assets/icon.png';

import api from '../services/api';


export function EditPost(props: any) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const id = props.route.params.postId;
    console.log(id);

    useEffect(() => {
        api.get(`/posts/${id}`).then(response => {
            setTitle(response.data.title);
            setContent(response.data.body);
            console.log(response)
        })
        // console.log(posts)
    }, []);

    function handleEdit() {
        props.navigation.navigate('RequestStatus', {
            title: 'Seu post foi editado com sucesso!',
            icon: 'edit'
        });
    }
    

    return (
        <SafeAreaView>
            <Header />
            <PageTitle>Editar Post</PageTitle>
            <Main>
                <MainHeader>
                    <UserIcon source={logo} />
                    <UserName>BLOGPOSTS</UserName>
                    <DivButton>
                        <MainButton>
                            <MainButtonText>+</MainButtonText>
                        </MainButton>
                    </DivButton>
                </MainHeader>
                <MainContent>
                    <View>
                        <LabelInput>Título do Post</LabelInput>
                        <TextInputForm value={title} onChangeText={setTitle} placeholder="Digite o título..."/>
                    </View>
                    <View>
                        <LabelInput>Conteúdo</LabelInput>
                        <TextAreaInputForm value={content} onChangeText={setContent} multiline={true} placeholder="Digite aqui..."/>
                    </View>
                </MainContent>
                
                <ButtonAlign>
                    <ButtonForm onPress={handleEdit}>
                        <ButtonFormText>Editar</ButtonFormText>
                    </ButtonForm>
                </ButtonAlign>
            </Main>
        </SafeAreaView>
    );
}