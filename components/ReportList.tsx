import { Report } from '@models/report';
import ReportListItem from './ReportListItem';
import ReportSummary from './ReportSummary';

import styles from './report.module.scss'

export enum ItemFormat {
  summary,
  minimal
}


type Props = {
  reports: Report[],
  title: string,
  format?: ItemFormat,
  showStarredTime?: boolean,
  showVisitedTime?: boolean
}

const ReportList = ({ reports, title, format, showStarredTime, showVisitedTime }: Props) => {
  const reportFormat: ItemFormat = format ?? ItemFormat.minimal
  return (
    <section className={styles.report_list + " " + 
     (reportFormat == ItemFormat.summary ? styles.report_list_summary : styles.report_list_minimal)}>
      <h2>{title}</h2>
      <ol>
        {reports.map((report) => (
          <li key={report.id}>
            { reportFormat == ItemFormat.summary ? 
              <ReportSummary report={report} /> : 
              <ReportListItem report={report} showStarredTime={showStarredTime} showVisitedTime={showVisitedTime} /> 
            }
          </li>
        ))}
      </ol>
    </section>
  )
}

export default ReportList
