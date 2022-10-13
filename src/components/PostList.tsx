import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/store';
import PostAuthor from './PostAuthor';


const PostList = () => {

    const posts = useAppSelector(state => state.posts)

    const renderedPosts = posts.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 5)}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId}/>
            </p>
        </article>
    ))

    return (
        <div>
            <h2>Posts</h2>
            {renderedPosts}
        </div>
    )
}

export default PostList
