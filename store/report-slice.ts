import { IReport, Report } from "@models/report"
import { ISocialData } from "@models/socialdata";
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from ".";
import ReportState from "./report-state";

type ReportsJson = {
    social: ISocialData[],
    reports: IReport[]
}

type Extra = {
    starred: {
        id: string
    }[],
    featured: string
}

const reportsJson: ReportsJson = require("@data/reports.json")
const extra: Extra = require("@data/extra.json")

const initialReportState: ReportState = {
    // read from .json files
    reports: reportsJson.reports.map(r => {
        // additional data for reports
        r.starred_time = !!(r?.id) && extra?.starred.map(s => s.id).includes(r.id) ? new Date("2022-01-01").getTime() : null;
        r.socialData = reportsJson.social.find(sd => !!(r?.id) && sd.id == r.id)
        r.featured = !!(r?.id) && extra.featured == r.id;
        return r;
    })
}

function getIReportById(state: RootState, action: PayloadAction<string>): IReport {
    return state.reports.filter((r: IReport) => r.id == action.payload)[0]
}

const reportSlice = createSlice({
    name: 'reports',
    initialState: initialReportState,
    reducers: {
        setReportVisited: (state: RootState, action: PayloadAction<string>) => {
            getIReportById(state, action).visited_time = Date.now();
        },
        toggleReportStarred: (state: RootState, action: PayloadAction<string>) => {
            var r = getIReportById(state, action);
            r.starred_time = !r.starred_time ? Date.now() : null;
        }
    }
})

export const {
    setReportVisited,
    toggleReportStarred
} = reportSlice.actions;

function sortByDate(a: Report, b: Report, date: (r: Report) => number | null): number {
    var dateA = date(a);
    var dateB = date(b);
    return (dateB??0) - (dateA??0)
}

export default reportSlice;

export const getAllReports = (state: RootState) => state.globalState.reports?.map((r: IReport) => new Report(r));

export const getStarredReports = (state: RootState) => getAllReports(state)?.filter((r: Report) => !!r.starred_time)
    .sort((a: Report, b: Report) => sortByDate(a, b, r => r.starred_time));

export const getVisitedReports = (state: RootState) => getAllReports(state)?.filter((r: Report) => !!r.visited_time)
    .sort((a: Report, b: Report) => sortByDate(a, b, r => r.visited_time));

export const getFeaturedReport = (state: RootState) => getAllReports(state)?.filter((r: Report)=> r.featured)[0];

export const getReportsById = (state: RootState, ids: string[]) => getAllReports(state)?.filter((r: Report) => !!r.id && ids.includes(r.id));
export const getReportById = (state: RootState, id: string) => getReportsById(state, [id])[0];
