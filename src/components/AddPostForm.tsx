import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../store/store';
import { postAdd } from '../features/posts/postsSlice'


const AddPostForm = () => {

    const posts = useAppSelector(state => state.posts)
    const users = useAppSelector(state => state.users)

    const dispatch = useAppDispatch();

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [userId, setUserId] = useState('1')

    // const onTitleChanged=()=>{
    //     dispatch(add(title))
    //     setTitle("")//input değeri boşalt
    // }



    const onSavePostClicked = () => {
        if (title && content) {
            dispatch(postAdd(title, content, userId))
        }
        setTitle("")
        setContent("")
    }


    const canSave = Boolean(title) && Boolean(content) && Boolean(userId)


    const changeAuthorName = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const value = e.target.value
        setUserId(value);
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

                <label htmlFor='postAuthor'>Author:</label>
                <select id="postAuthor" value={userId} onChange={changeAuthorName}>
                {users.map((user) => (
                        <option className="" key={user.id} value={user.id}>
                            {user.name}
                        </option>
                    ))}
                </select>

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
                    disabled={!canSave}
                    className="bg-slate-500"
                >Save Post</button>
            </form>

        </div>
    )
}

export default AddPostForm
