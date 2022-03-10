import { configureStore } from '@reduxjs/toolkit'
import assideReducer from '../redux/assideSlice'
import taskResucer from '../redux/taskSlice'
import { combineReducers } from 'redux'
import storage from 'redux-persist/lib/storage'
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

const reducers = combineReducers({
  aside: assideReducer,
  task: taskResucer
})
const persistConfig = {
  key: 'rootTask',
  version: 1,
  whitelist: ['task'],
  storage
}

const persistedReducer = persistReducer(persistConfig, reducers)

export function makeStore() {
  return configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
        }
      })
  })
}
const store = makeStore()

export type AppState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
