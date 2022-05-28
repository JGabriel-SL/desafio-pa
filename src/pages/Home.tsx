import React, {useEffect, useState, useContext} from 'react';
import {Header} from '../components/Header';

import { Feather } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

import {Content, Main, UserIcon, UserName, MainHeader, MainButton, MainButtonText, TextInput, ContentButton,  SafeAreaView, DivButton, HeaderButtonText} from '../styles/styles';
import {MainContent, MainContentTitle, MainContentText, ScrollView} from '../styles/styles';
import logo from '../assets/icon.png';

import api from '../services/api';
import { PostsContext } from '../contexts/posts';
import { useNavigation } from '@react-navigation/core';

export function Home(props: any) {
    // const [posts, setPosts] = useState([])
    const [search, setSearch] = useState('')

    const navigation = useNavigation();

    const {posts, setPosts, favPosts, setFavPosts} = useContext(PostsContext);
     
    function handleEditPost(id: any) {
        navigation.navigate('EditPost', {postId: id, type: 'any'});
    }

    async function handleDeletePost(id: any) {
        try {
            await api.get(`/posts/${id}`).then(response => {
                console.log(response.status);
    
            })
            navigation.navigate('RequestStatus', {
                title: 'O post foi deletado com sucesso!',
                icon: 'trash-2',
                lib: 'Feather',
                status: 200
            })
        } catch (error) {
            navigation.navigate('RequestStatus', {
                title: 'Não foi possível deletar o post!',
                icon: 'trash-2',
                status: error
            })
        }
    }

    

    async function handleSavePost(id: any) {
        if (favPosts.indexOf(id) == -1) {
            await api.get(`/posts/${id}`).then(response => {
                setFavPosts([...favPosts, response.data.id]);
            })
            navigation.navigate('RequestStatus', {
                title: 'Esse post foi salvo com sucesso!',
                icon: 'star',
                lib: 'FontAwesome'
            })
        } else {
            let newFavPosts = favPosts.filter(post => {
                return post !== id;
            })
            setFavPosts(newFavPosts)
            navigation.navigate('RequestStatus', {
                title: 'Esse post foi removido dos salvos com sucesso!',
                icon: 'star',
                lib: 'Feather'
            })
        }
        console.log(favPosts)
    }

    const searching = async () => {
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
                                    <MainButton onPress={() => handleSavePost(post.id)}>
                                        <MainButtonText>
                                            {favPosts.indexOf(post.id) == -1 ? (
                                                <Feather name="star" size={30} color="black" />
                                            ) : (
                                                <FontAwesome name="star" size={30} color="black" />
                                            )
                                            }
                                        </MainButtonText>
                                    </MainButton>
                                    <MainButton onPress={() => handleEditPost(post.id)}>
                                        <MainButtonText>
                                            <Feather name="edit" size={30} color="black" />
                                        </MainButtonText>
                                    </MainButton>
                                    <MainButton onPress={() => handleDeletePost(post.id)}>
                                        <MainButtonText>
                                            <Feather name="trash-2" size={30} color="black" />
                                        </MainButtonText>
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