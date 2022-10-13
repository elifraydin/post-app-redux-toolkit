import React from 'react'
import { useAppDispatch, useAppSelector } from '../store/store';
import PostAuthor from './PostAuthor';
import TimeAgo from './TimeAgo';

const PostList = () => {

    const posts = useAppSelector(state => state.posts)

    //postları zamana göre küçükten büyüğe sırala
    const orderedPosts = posts.slice().sort((a, b) => b.date.localeCompare(a.date))


    const renderedPosts = orderedPosts.map((post) => (
        <article key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.content.substring(0, 5)}</p>
            <p className='postCredit'>
                <PostAuthor userId={post.userId}/>
                <TimeAgo timestamp={post.date}/>

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
