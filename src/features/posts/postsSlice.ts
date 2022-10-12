import { createSlice, PayloadAction} from "@reduxjs/toolkit";
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
        postAdd: (state, action) => {
            state.push(action.payload)
        },
    }

})

export default postsSlice.reducer

export const { postAdd } = postsSlice.actions
