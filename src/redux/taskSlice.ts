import { createSlice } from '@reduxjs/toolkit'

export const taskFake = [
  {
    id: 1,
    titleTask: 'Academia',
    isPending: false
  },
  {
    id: 2,
    titleTask: 'Lavar o Carro',
    isPending: true
  },
  {
    id: 3,
    titleTask: 'Learning Radix-ui for assiccibility projects',
    isPending: false
  },
  {
    id: 4,
    titleTask: 'Jantar com a filha',
    isPending: true
  }
]

export const taskSlice = createSlice({
  name: 'tasks',
  initialState: { value: taskFake },
  reducers: {
    addTask: (state, action) => {
      state.value.push(action.payload)
    },
    updateTask: (state, action) => {
      state.value.map((task) => {
        if (task.id === action.payload.id) {
          task.titleTask = action.payload.titleTask
        }
      })
    },
    checkTask: (state, action) => {
      state.value.map((task) => {
        if (task.id === action.payload.id) {
          task.isPending = !task.isPending
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
