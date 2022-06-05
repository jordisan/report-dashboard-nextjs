import Link from 'next/link'

import ReportStarred from './ReportStarred'
import { Report } from '@models/report'

import styles from './report.module.scss'

type Props = {
  report: Report,
  showStarredTime?: boolean,
  showVisitedTime?: boolean
}

const ReportListItem = ({ report, showStarredTime, showVisitedTime }: Props) => (
  <article className={styles.report + " list_item"} title={report.description}>

      <Link href="/reports/[id]" as={`/reports/${report.id}`}>
        <a>
          <h3 className={styles.title}>{report.getTitle()}</h3>
        </a>
      </Link>

      <div className={styles.extra + " " + styles.dates}>
        {showStarredTime && report.starred_time && <p>Starred {(new Date(report.starred_time)).toLocaleString()}</p>}
        {showVisitedTime && report.visited_time && <p>Visited {(new Date(report.visited_time)).toLocaleString()}</p>}
      </div>

  </article>
)

export default ReportListItem
