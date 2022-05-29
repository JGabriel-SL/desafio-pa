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
import { FlatList } from 'react-native-gesture-handler';

import Loading from '../components/Loading';
import { ActivityIndicator, View } from 'react-native';

export function Home(props: any) {
    const [visible, setVisible] = useState(false);
    const [search, setSearch] = useState('');

    const navigation = useNavigation();

    const {posts, setPosts, favPosts, setFavPosts, max, setMax, loading} = useContext(PostsContext);

    async function load() {
        if (loading) return;

        if(max < 100) {
            setMax(max + 10);
        }
    }
    
    function handleEditPost(id: any) {
        navigation.navigate('EditPost', {postId: id, type: 'any'});
    }

    async function handleDeletePost(id: any) {
        try {
            setVisible(true)
            await api.get(`/posts/${id}`).then(response => {
                console.log(response.status);
    
            })
            setVisible(false)
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
        setVisible(true)
        if (favPosts.indexOf(id) == -1) {
            // api.get(`/posts/${id}`).then(response => {
            //     setFavPosts([...favPosts, response.data.id]);
            // })
            await setFavPosts([...favPosts, id])
            setVisible(false)
            navigation.navigate('RequestStatus', {
                title: 'Esse post foi salvo com sucesso!',
                icon: 'star',
                lib: 'FontAwesome'
            })
        } else {
            let newFavPosts = favPosts.filter(post => {
                return post !== id;
            })
            await setFavPosts(newFavPosts)
            setVisible(false)

            navigation.navigate('RequestStatus', {
                title: 'Esse post foi removido dos salvos com sucesso!',
                icon: 'star',
                lib: 'Feather'
            })
        }
    }

    const searching = async () => {
        await api.get('/posts').then(response => {
            setPosts(response.data.filter(post => {
                return post.title.startsWith(search.toLowerCase())
            }))
        })
    }

    return (
            <SafeAreaView>
                <Loading visible={visible}/>
                <Header />
                <Content>
                    <TextInput placeholder="Pesquise aqui..." value={search} onChangeText={setSearch}/>
                    <ContentButton onPress={searching}>
                        <HeaderButtonText>Buscar</HeaderButtonText>
                    </ContentButton>
                </Content>
                <FlatList 
                data={posts}
                keyExtractor={ item => String(item.id)}
                renderItem={ ({item}) => <ListItem post={item} handleSavePost={handleSavePost} handleEditPost={handleEditPost} handleDeletePost={handleDeletePost} favPosts={favPosts} /> }
                onEndReached={load}
                onEndReachedThreshold={0.1}
                ListFooterComponent={<FooterList Load={loading} />}
                />
                
            </SafeAreaView>
    )
}

function FooterList({ Load }) {
    if (!Load) return null;
    return (
        <View style={{padding: 10}}>
            <ActivityIndicator size={25}/>
        </View>
    )
}

function ListItem({ post, handleSavePost, handleEditPost, handleDeletePost, favPosts } : any) {
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
}