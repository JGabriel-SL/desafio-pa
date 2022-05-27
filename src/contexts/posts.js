import React, { createContext, useEffect, useState } from 'react';
import api from '../services/api';

export const PostsContext = createContext({})

function PostsProvider({children}) {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts();
        return () => {
            setPosts([]); // This worked for me
          };
    }, []);

    function getPosts() {
        api.get('/posts').then(response => {
            setPosts(response.data);
        })
    }

    return (
        <PostsContext.Provider value={[posts, setPosts]}>
            {children}
        </PostsContext.Provider>
    )
}

export default PostsProvider;