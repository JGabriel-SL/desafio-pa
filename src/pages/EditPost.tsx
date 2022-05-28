import React, {useState, useEffect, useContext} from 'react';
import {View, Image, Text} from 'react-native';

import { Feather } from '@expo/vector-icons'; 

import {Header} from '../components/Header';
import {Main, SafeAreaView, PageTitle, MainHeader, UserIcon, UserName, DivButton, MainButton, MainButtonText,MainContent, LabelInput, TextInputForm, TextAreaInputForm} from '../styles/styles';
import {ButtonAlign, ButtonForm, ButtonFormText} from '../styles/styles';
import logo from '../assets/icon.png';

import api from '../services/api';
import { PostsContext } from '../contexts/posts';


export function EditPost(props: any) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const {myPosts, setMyPosts} = useContext(PostsContext);

    const id = props.route.params.postId;
    const type = props.route.params.type;

    useEffect(() => {
        if (type == 'any') {
            api.get(`/posts/${id}`).then(response => {
                setTitle(response.data.title);
                setContent(response.data.body);
            })
        } else if (type == 'me') {
            setTitle(myPosts[id].title)
            setContent(myPosts[id].body)
        }
        
    }, []);

    function handleEdit() {
        if (type == 'any') {
            api.put(`/posts/${id}`, {title: title, body: content }).then(response => {
                console.log(response)
            })
        } else if (type == 'me') {
            let posts = myPosts.filter(t => t.id != id)
            setMyPosts([...posts, {
                title: title,
                body: content,
                id: id
            }])

        }
        props.navigation.navigate('RequestStatus', {
            title: 'Seu post foi editado com sucesso!',
            icon: 'edit',
            lib: 'Feather'
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
                        <MainButtonText>
                            <Feather name="edit" size={30} color="black" />
                        </MainButtonText>
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