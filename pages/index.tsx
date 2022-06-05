import { Report } from 'models/report'
import { getAllReports, getFeaturedReport } from '@store/report-slice'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import Link from 'next/link'
import ReportDashboard from '../components/ReportDashboard'

const IndexPage = () => {
  const dispatch = useAppDispatch();
  const allReports: Report[] = useAppSelector(getAllReports);
  const featuredReport: Report | null = useAppSelector(getFeaturedReport);

  return(
    <>
      <ReportDashboard />
    </>
  );
}

export default IndexPage
