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
    const newArr = [...state.arr];
    const index = state.arr.indexOf(newData);
    if (index !== -1) {
        newArr.splice(index, 1);
    } else {
        newArr.push(newData);
    }
    localStorage.setItem("favorite", JSON.stringify(newArr));
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
        // replaces array entirely (for initial app persist data load)
        setFavoriteBulk: (
            state: FavoriteSliceType,
            action: PayloadAction<FavoriteSliceType>
        ) => {
            return {
                ...state,
                arr: action.payload,
            };
        },
    },
};

const favoriteSlice = createSlice(favoriteOptions);
export const { setFavorite, setFavoriteBulk } = favoriteSlice.actions;
export default favoriteSlice.reducer;
