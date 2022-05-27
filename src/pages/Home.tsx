import React, {useEffect, useState, useContext} from 'react';
import {Header} from '../components/Header';

import {Content, Main, UserIcon, UserName, MainHeader, MainButton, MainButtonText, TextInput, ContentButton,  SafeAreaView, DivButton, HeaderButtonText} from '../styles/styles';
import {MainContent, MainContentTitle, MainContentText, ScrollView} from '../styles/styles';
import logo from '../assets/icon.png';

import api from '../services/api';
import { PostsContext } from '../contexts/posts';
import { useNavigation } from '@react-navigation/core';

export function Home(props: any) {
    // const [posts, setPosts] = useState([])
    const [search, setSearch] = useState()

    const navigation = useNavigation();

    const [posts] = useContext(PostsContext);
 

    console.log(posts[0]);
    
    function handleEditPost(id: any) {
        navigation.navigate('EditPost', {postId: id});
    }

    function handleDeletePost(id: any) {
        navigation.navigate('RequestStatus', {
            title: 'O post foi deletado com sucesso!',
            icon: 'trash'
        })
    }

    function handleSavePost() {
        navigation.navigate('RequestStatus', {
            title: 'Esse post foi salvo com sucesso!',
            icon: 'trash'
        })
    }

    const searching = async () => {
        console.log(search)
        await api.get('/posts').then(response => {
            setPosts(response.data.filter(post => {
                return post.title.startsWith(search.toLowerCase())
            }))
        })
    }

    return (
        <ScrollView>
            <SafeAreaView>
                <Header />
                <Content>
                    <TextInput placeholder="Pesquise aqui..." value={search} onChangeText={setSearch}/>
                    <ContentButton onPress={searching}>
                        <HeaderButtonText>Buscar</HeaderButtonText>
                    </ContentButton>
                </Content>
                {posts.map((post) => {
                    return (
                        <Main key={post.id}>
                            <MainHeader>
                                <UserIcon source={logo} />
                                <UserName>BLOGPOSTS</UserName>
                                <DivButton>
                                    <MainButton onPress={handleSavePost}>
                                        <MainButtonText>+</MainButtonText>
                                    </MainButton>
                                    <MainButton onPress={() => handleEditPost(post.id)}>
                                        <MainButtonText>+</MainButtonText>
                                    </MainButton>
                                    <MainButton onPress={handleDeletePost}>
                                        <MainButtonText>+</MainButtonText>
                                    </MainButton>
                                </DivButton>
                            </MainHeader>
                            <MainContent>
                                <MainContentTitle>{post.title}</MainContentTitle>
                                <MainContentText>{post.body}</MainContentText>
                            </MainContent>
                        </Main>
                    )
                })}
                
            </SafeAreaView>
        </ScrollView>
    )
}