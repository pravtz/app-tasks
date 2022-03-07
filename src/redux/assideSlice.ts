import { createSlice } from '@reduxjs/toolkit'

export const AsideInitial = {
  asideIsVisible: false,
  isEdition: false
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
    }
  }
})

export const { updateVisible, updateScreenEdition } = assideSlice.actions

export default assideSlice.reducer
