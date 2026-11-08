import { configureStore } from '@reduxjs/toolkit'
import helloReducer from './helloReducer'
import counterReducer from './counterReducer'
import addReducer from './addReducer'
import todosReducer from './todosReducer'

// A factory instead of one module-level store: with server rendering, a single shared
// store would be reused across every visitor's request. Each <ReduxExamples> makes its own.
export const makeStore = () =>
  configureStore({
    reducer: {
      helloReducer,
      counterReducer,
      addReducer,
      todosReducer,
    },
  })

export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
