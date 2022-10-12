import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store';
import { postAdd } from '../features/posts/postsSlice'
import { nanoid } from '@reduxjs/toolkit'; //ramdom id

const AddPostForm = () => {

    const posts = useAppSelector(state => state.posts)
    const dispatch = useAppDispatch();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    // const onTitleChanged=()=>{
    //     dispatch(add(title))
    //     setTitle("")//input değeri boşalt
    // }



    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(
                postAdd(
                    {
                        id: nanoid(),
                        title,
                        content
                    }
                )
            )
        }
        setTitle("")
        setContent("")
    }



    return (
        <div>
            <form className='flex flex-col w-56 items-center'>
                <label htmlFor="postTitle">Post Title:</label>
                <input
                    type="text"
                    id="postTitle"
                    name="postTitle"
                    value={title}
                    onChange={(e) => setTitle(e.currentTarget.value)}
                    className=" bg-slate-200"
                />

                <label htmlFor="postContent">Content:</label>
                <textarea
                    id="postContent"
                    name="postContent"
                    value={content}
                    onChange={(e) => setContent(e.currentTarget.value)}
                />
                <button
                    type="button"
                    onClick={onSavePostClicked}
                >Save Post</button>
            </form>

        </div>
    )
}

export default AddPostForm
