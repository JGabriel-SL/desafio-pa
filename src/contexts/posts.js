import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const PostsContext = createContext({})

function PostsProvider({children}) {
    const [posts, setPosts] = useState([]);
    const [myPosts, setMyPosts] = useState([]);
    const [favPosts, setFavPosts] = useState([]);
    const [max, setMax] = useState(10);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getPosts();
        return () => {
            setPosts([]);
          };
    }, []);

    useEffect(() => {
        if(max > 10 && max <= 100) {
            getMorePosts()
        }
    }, [max])
    
    function getPosts() {
        api.get('/posts').then(response => {
            setPosts(response.data.slice(0, max));
        })
    }
    
    async function getMorePosts() {
        setLoading(true);
        await api.get('/posts').then(response => {
            const newPosts = response.data.slice(posts.length, max);
            setPosts([...posts, ...newPosts]);
        })
        setLoading(false);
    }

    return (
        <PostsContext.Provider value={{posts, setPosts, myPosts, setMyPosts, favPosts, setFavPosts, max, setMax, loading}}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostsProvider;