import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { postObject } from "../../types/interfaces"
import {sub} from "date-fns"

const initialState: postObject[] = [
    {
        id: "1", title: "Title 1", content: "content 1",userId:"",
        date: sub(new Date(),{minutes:10}).toISOString()
    },
    {
        id: "2", title: "Title 2", content: "content 2",userId:"2",
        date: sub(new Date(),{minutes:10}).toISOString()
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
            prepare(title,content,userId){
                return{
                    payload:{
                        id:nanoid(),
                        title,
                        content,
                        date:new Date().toISOString(),
                        userId
                    }
                }
            }
        }
        
    }

})

export default postsSlice.reducer

export const { postAdd } = postsSlice.actions
