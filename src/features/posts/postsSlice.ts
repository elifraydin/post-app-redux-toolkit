import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { postObject } from "../../types/interfaces"

const initialState: postObject[] = [
    {
        id: "1", title: "Title 1", content: "content 1"
    },
    {
        id: "2", title: "Title 2", content: "content 2"
    }
]

export const postsSlice = createSlice({
    name: "posts",
    initialState,

    reducers: {
        postAdd: {
            reducer(state,action: PayloadAction<postObject>){
                state.push(action.payload)
            },
            prepare(title,content){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content
                    }
                }
            }
        }
        
    }

})

export default postsSlice.reducer

export const { postAdd } = postsSlice.actions
