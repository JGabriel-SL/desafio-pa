import React, {useState, useContext} from 'react';

import {Header} from '../components/Header';
import { Feather } from '@expo/vector-icons'; 

import {Main, UserIcon, UserName, MainHeader, MainButton, MainButtonText,  SafeAreaView, DivButton} from '../styles/styles';
import {MainContent, MainContentTitle, MainContentText, ScrollView} from '../styles/styles';

import logo from '../assets/icon.png';
import api from '../services/api';

import { PostsContext } from '../contexts/posts';
import { useNavigation } from '@react-navigation/core';

export function MyPosts(props: any) {
    const navigation = useNavigation();

    const {myPosts, setMyPosts} = useContext(PostsContext);

    function handleEditPost(id: any) {
        navigation.navigate('EditPost', {postId: id, type: 'me'});
    }

    async function handleDeletePost(id: any) {
        try {
            let newMyPosts = myPosts.filter(post => {
                return post.id !== id;
            })
            setMyPosts(newMyPosts);
            navigation.navigate('RequestStatus', {
                title: 'O post foi deletado com sucesso!',
                icon: 'trash-2',
                lib: 'Feather',
            })
        } catch (error) {
            navigation.navigate('RequestStatus', {
                title: 'Não foi possível deletar o post!',
                icon: 'trash-2',
                status: error
            })
        }
    }

    return (
        <ScrollView>
            <SafeAreaView>
                <Header />
                {myPosts.map((post, key) => {
                    return (
                        <Main key={post.id}>
                            <MainHeader>
                                <UserIcon source={logo} />
                                <UserName>You</UserName>
                                <DivButton>
                                    <MainButton onPress={() => handleEditPost(key)}>
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