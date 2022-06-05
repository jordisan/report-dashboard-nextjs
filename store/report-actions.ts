import reportSlice from './report-slice'
import { AnyAction } from '@reduxjs/toolkit'
import { ThunkAction } from '@reduxjs/toolkit'
import {RootState} from './index'
import { Report } from 'models/report'

export const reportActions = reportSlice.actions
