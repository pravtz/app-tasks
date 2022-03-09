import { createSlice } from '@reduxjs/toolkit'

export type taskTypesInitil = {
  id: string
  titleTask: string
  isPending: boolean
  descriptionTask: string
}
export const taskFake: taskTypesInitil[] = []

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: { value: taskFake },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload)
    },
    updateTask: (state, action) => {
      state.value.map((task) => {
        if (task.id == action.payload.id) {
          task.titleTask = action.payload.titleTask
          task.descriptionTask = action.payload.descriptionTask
        }
      })
    },
    checkTask: (state, action) => {
      state.value.map((task) => {
        if (task.id === action.payload.id) {
          task.isPending = action.payload.isPending
        }
      })
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((task) => task.id !== action.payload.id)
    }
  }
})

export const { addTask, updateTask, checkTask, deleteTask } = taskSlice.actions

export default taskSlice.reducer
