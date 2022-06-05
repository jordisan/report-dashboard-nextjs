import {configureStore, EnhancedStore} from '@reduxjs/toolkit';
import reportSlice from './report-slice'

const store: EnhancedStore<any, any, [any]> = configureStore(
    {
        reducer: {globalState: reportSlice.reducer}
    }
)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store;