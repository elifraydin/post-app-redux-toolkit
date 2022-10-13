import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
import { userObject } from "../../types/interfaces"

const initialState: userObject[] = [
    {
        id: "1", name:"elif"
    },
    {
        id: "2", name:"aydın"
    },
    {
        id: "3", name:"rumeysa"
    }
]

export const usersSlice = createSlice({
    name: "users",
    initialState,

    reducers: {

    }

})

//export const selectAllUsers =(state)=>state.users;
export default usersSlice.reducer


