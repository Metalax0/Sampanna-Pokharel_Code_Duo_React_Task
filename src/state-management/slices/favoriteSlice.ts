import {
    createSlice,
    CreateSliceOptions,
    PayloadAction,
} from "@reduxjs/toolkit";

export interface FavoriteSliceType {
    arr: string[];
}

const initialState: FavoriteSliceType = {
    arr: [],
};

// handles logic for when to add and when to remove from favorites list
export const handleFavoriteAddRemove = (
    state: FavoriteSliceType,
    newData: string
) => {
    console.log("test");
    const newArr = [...state.arr];
    const index = state.arr.indexOf(newData);
    if (index !== -1) {
        newArr.splice(index, 1);
    } else {
        newArr.push(newData);
    }
    return newArr;
};

const favoriteOptions: CreateSliceOptions = {
    name: "favorite",
    initialState,
    reducers: {
        setFavorite: (
            state: FavoriteSliceType,
            action: PayloadAction<string>
        ) => {
            return {
                ...state,
                arr: handleFavoriteAddRemove(state, action.payload),
            };
        },
    },
};

const favoriteSlice = createSlice(favoriteOptions);
export const { setFavorite } = favoriteSlice.actions;
export default favoriteSlice.reducer;
