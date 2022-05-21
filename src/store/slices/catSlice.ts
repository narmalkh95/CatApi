import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { AppThunk } from '../store'
import catService from "../../services/http/catService";

export interface ICat {
    id: string,
    url: string,
}

export interface ICategory {
    name: string,
    id: number
}

export interface ICatSliceData {
    isLoading: number,
    categoriesList: {
        data: ICategory[],
        selectedCategoryId?: number
    },
    listData: {
        data: ICat[],
        page: number,
        limit: number
    }
}

const initialState: ICatSliceData = {
    isLoading: 0,
    categoriesList: {
        data: [],
    },
    listData: {
        data: [],
        page: 1,
        limit: 10
    }
}

export const catSlice = createSlice({
    name: 'cat',
    initialState,
    reducers: {
        setCategories: (
            state: Draft<typeof initialState>,
            action: PayloadAction<ICategory[]>,
        ) => {
            state.categoriesList.data = action.payload
        },

        setCatListData: (
            state: Draft<typeof initialState>,
            action: PayloadAction<ICat[]>,
        ) => {
            state.listData.data = [...state.listData.data, ...action.payload]
            state.listData.page = state.listData.page + 1;
        },

        setSelectedCategoryId: (
            state: Draft<typeof initialState>,
            action: PayloadAction<number>,
        ) => {
            state.listData = initialState.listData;
            state.categoriesList.selectedCategoryId = action.payload
        },

        setIsLoading: (
            state: Draft<typeof initialState>,
            action: PayloadAction<boolean>,
        ) => {
            state.isLoading = action.payload ? state.isLoading + 1 : state.isLoading - 1
        },

        resetState: () => initialState,
    },
})

export const {
    setCategories,
    setCatListData,
    setSelectedCategoryId,
    setIsLoading,
    resetState,
} = catSlice.actions

export default catSlice.reducer

export const getCatsListAction = (): AppThunk => async (dispatch, getState) => {
    dispatch(setIsLoading(true))

    try {
        const {listData, categoriesList: {selectedCategoryId}} = getState().cat;
        const {limit, page} = listData;

        const catList = await catService.getCatsList(limit, page, selectedCategoryId);

        if (catList?.length) {
            dispatch(setCatListData(catList))
        }
    } catch (e) {
        //Handle err here maybe
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const getCategoriesListAction = (): AppThunk => async (dispatch) => {
    dispatch(setIsLoading(true))

    try {
        const categoriesArr = await catService.getCategoriesList();

        if (categoriesArr?.length) {
            dispatch(setCategories(categoriesArr))
        }
    } catch (e) {
       //Handle err here maybe
    } finally {
        dispatch(setIsLoading(false))
    }
}

export const setSelectedCategoryIdAction = (id: number): AppThunk => async (dispatch) => {
    dispatch(setSelectedCategoryId(id))
    dispatch(getCatsListAction())
}
