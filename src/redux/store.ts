import { configureStore } from '@reduxjs/toolkit'
import assideReducer from '../redux/assideSlice'
import taskResucer from '../redux/taskSlice'

export function makeStore() {
  return configureStore({
    reducer: {
      aside: assideReducer,
      task: taskResucer
    }
  })
}
const store = makeStore()

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
