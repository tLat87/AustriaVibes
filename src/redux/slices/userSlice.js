import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    nickname: '',
    avatar: null,
};

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setNickname: (state, action) => {
            state.nickname = action.payload.nickname;
            state.avatar = action.payload.avatar;
        },
    },
});

export const { setNickname } = userSlice.actions;
export default userSlice.reducer;
