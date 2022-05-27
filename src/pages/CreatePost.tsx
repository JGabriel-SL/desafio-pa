import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {View, Image, Text} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import api from '../services/api';

import {Header} from '../components/Header';
import {Main, SafeAreaView, PageTitle, TextInputForm, TextAreaInputForm, ButtonForm, ButtonFormText, ButtonAlign, LabelInput} from '../styles/styles';
import { PostsContext } from '../contexts/posts';

export function CreatePost() {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const navigation = useNavigation();

    const [posts, setPosts] = useContext(PostsContext);


    function handlePost() {
        try {
            api.post('/posts', {title: postTitle, body: postBody }).then(response => {
                console.log(response.data.title);
                console.log(posts)
                // console.log(++posts.length);
                setPosts(response.data)
            })
            // navigation.navigate('RequestStatus', {
            //     title: 'Seu post foi criado com sucesso!',
            //     icon: 'created'
            // });
        } catch (error) {
            console.log('Deu ruim')
        }
    }

    return (
        <SafeAreaView
                scrollEnabled={false}
                keyboardShouldPersistTaps='handled'>
            <Header />
            <PageTitle>Criar Post</PageTitle>
            <Main>
                <ScrollView
                  scrollEnabled={false}
                  keyboardShouldPersistTaps='handled'
                >
                    <LabelInput>Título do Post</LabelInput>
                    <TextInputForm placeholder="Digite o título..." onChangeText={setPostTitle}/>
                </ScrollView>
                <View>
                    <LabelInput>Conteúdo</LabelInput>
                    <TextAreaInputForm  multiline={true} placeholder="Digite aqui..." onChangeText={setPostBody}/>
                </View>

                <ButtonAlign>
                    <ButtonForm onPress={handlePost}>
                        <ButtonFormText>Postar</ButtonFormText>
                    </ButtonForm>
                </ButtonAlign>
            </Main>
        </SafeAreaView>
    );
}