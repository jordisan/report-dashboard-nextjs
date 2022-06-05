import Link from 'next/link'

import ReportStarred from './ReportStarred'
import { Report } from '@models/report'
import ImageFallback from './ImageFallback'

import styles from './report.module.scss'
import { Grid } from '@mantine/core'
import ReportSocial from './ReportSocial'
import ReportOwner from './ReportOwner'

type Props = {
  report: Report
}

const ReportSummary = ({ report: report }: Props) => (
  <article className={styles.report + " summary"}>

  <Grid>
        <Grid.Col sm={2} xs={12}>

          <div className={styles.main_image}>
            <ImageFallback src={report?.getMainImage()} alt="main graphic from report" layout="fill"
             fallbackSrc={report?.getMainImageDefault()} />
          </div>   

        </Grid.Col>

        <Grid.Col sm={8} xs={12}>

          <Link href="/reports/[id]" as={`/reports/${report.id}`}>
            <a>
              <h3 className={styles.title}>{report.getTitle()}</h3>
            </a>
          </Link>
          
          <ReportStarred report={report} />

          <p className={styles.description}>{report.description}</p>

          <div className={styles.extra}>
            <span>
              {!!report && report.socialData &&
                <ReportSocial social={report?.socialData} size={13} />
              }
            </span>
            <span>
              {!!report && report.owner &&
                <ReportOwner owner={report?.owner} />
              }
            </span>
            <span>
              {report.created_at && <p>Created {(new Date(report.created_at)).toLocaleDateString()}</p>}
            </span>
            <span>
              {report.updated_at && <p>Updated {(new Date(report.updated_at)).toLocaleDateString()}</p>}
            </span>
          </div>
          
        </Grid.Col>

  </Grid>

  </article>
)

export default ReportSummary
