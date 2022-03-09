import { createSlice } from '@reduxjs/toolkit'

type asideprops = {
  asideIsVisible: boolean
  isEdition: boolean
  idEdition: string
  screenAside: 'delete' | 'create' | 'update' | 'information' | 'show' | null
}

export const AsideInitial: asideprops = {
  asideIsVisible: false,
  isEdition: false,
  idEdition: '',
  screenAside: null
}

export const assideSlice = createSlice({
  name: 'aside',
  initialState: { valueAside: AsideInitial },
  reducers: {
    updateVisible: (state, action) => {
      state.valueAside.asideIsVisible = !state.valueAside.asideIsVisible
    },
    updateScreenEdition: (state, action) => {
      state.valueAside.isEdition = action.payload
    },
    updateScreenAside: (state, action) => {
      state.valueAside.screenAside = action.payload
    },

    screen: (state, action) => {
      state.valueAside.asideIsVisible = action.payload.asideIsVisible
      state.valueAside.idEdition = action.payload.idEdition
      state.valueAside.screenAside = action.payload.screenAside
    },
    screenAndVisible: (state, action) => {
      state.valueAside.asideIsVisible = action.payload.asideIsVisible
      state.valueAside.screenAside = action.payload.screenAside
    }
  }
})

export const { updateVisible, screen, screenAndVisible } = assideSlice.actions

export default assideSlice.reducer
