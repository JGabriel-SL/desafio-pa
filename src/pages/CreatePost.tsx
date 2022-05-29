import { useNavigation } from '@react-navigation/native';
import React, { useContext, useState } from 'react';
import {View, Modal, Alert, Pressable , Text ,ScrollView, StyleSheet} from 'react-native';

// import { ScrollView } from 'react-native-gesture-handler';

import api from '../services/api';

import {Header} from '../components/Header';
import {Main, SafeAreaView, PageTitle, TextInputForm, TextAreaInputForm, ButtonForm, ButtonFormText, ButtonAlign, LabelInput, SafeAreaViewScroll} from '../styles/styles';
import { PostsContext } from '../contexts/posts';

export function CreatePost() {
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    const navigation = useNavigation();

    const {myPosts, setMyPosts} = useContext(PostsContext);


    function handlePost() {
        try {
            if(postBody !== '' && postTitle !== '') {
                api.post('/posts', {title: postTitle, body: postBody }).then(response => {
                    setMyPosts([ ...myPosts, {
                        title: response.data.title,
                        body: response.data.body,
                        id: myPosts.length + 1
                    }])
                })
                navigation.navigate('RequestStatus', {
                    title: 'Seu post foi criado com sucesso!',
                    icon: 'plus-square',
                    lib: 'Feather',
                    mehandle: true
                });
            } else {
                setModalVisible(true);
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <SafeAreaViewScroll
            keyboardShouldPersistTaps='handled'
        >
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
                    <TextAreaInputForm  multiline={false} placeholder="Digite aqui..." onChangeText={setPostBody}/>
                </View>
                <ButtonAlign>
                    <ButtonForm onPress={handlePost}>
                        <ButtonFormText>Postar</ButtonFormText>
                    </ButtonForm>
                </ButtonAlign>
            </Main>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("O modal foi fechado");
                    setModalVisible(!modalVisible);
                }}
                >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Por favor, preencha o post com título e o conteúdo!</Text>
                        <ButtonAlign>
                            <ButtonForm
                            onPress={() => setModalVisible(!modalVisible)}
                            >
                                <ButtonFormText>Certo!</ButtonFormText>
                            </ButtonForm>
                        </ButtonAlign>
                    </View>
                </View>
            </Modal>
        </SafeAreaViewScroll>
    );
}

const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      margin: 20,
      backgroundColor: "white",
      borderRadius: 20,
      padding: 35,
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    buttonOpen: {
      backgroundColor: "#F194FF",
    },
    buttonClose: {
      backgroundColor: "#2196F3",
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 15,
      textAlign: "center"
    }
  });