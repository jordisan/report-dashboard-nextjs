import Link from 'next/link'
import { useAppSelector } from 'hooks/redux-hooks'

import { Report } from '@models/report'
import { getFeaturedReport } from '@store/report-slice'
import ReportOwner from './ReportOwner'
import ReportSocial from './ReportSocial'
import ReportStarred from './ReportStarred'
import ImageFallback from './ImageFallback'

import styles from './report.module.scss'
import { Grid } from '@mantine/core'

type Props = {
  featuredReport? : Report
}

const ReportFeatured = ({ featuredReport }: Props) => {
  const featured: Report = useAppSelector(getFeaturedReport);
  const report: Report = !featuredReport ? featured : featuredReport;

  return (
    <article className={styles.report + " " + styles.report_featured}>
      <Grid>
        <Grid.Col sm={3} xs={12}>

          <div className={styles.main_image}>
            <ImageFallback src={report?.getMainImage()} fallbackSrc={report?.getMainImageDefault()} alt="main graphic from report" layout="fill" priority />
          </div>  

        </Grid.Col>
        <Grid.Col sm={9} xs={12}>
          <h2 className={styles.featured_label}>Featured</h2>
          <Link href="/reports/[id]" as={`/reports/${report?.id}`}>
            <a>
              <h3 className={styles.title}>{report?.getTitle()}</h3>
            </a>
          </Link>
          <p className={styles.description}>{report?.description}</p>
          
          <Grid className={styles.extra}>
            <Grid.Col sm={2} xs={5}>
              <ReportStarred report={report} size={24} />
            </Grid.Col>
            <Grid.Col sm={3} xs={7}>
              {!!report && report.socialData &&
              <ReportSocial social={report?.socialData} />
              }
            </Grid.Col>              
            <Grid.Col sm={4} xs={5}>
              {!!report && report.owner &&
              <ReportOwner owner={report?.owner} />
              }
            </Grid.Col>          
            <Grid.Col sm={3} xs={7}>
              <div className={styles.dates}>
                {report.created_at && <p>Created {(new Date(report.created_at)).toLocaleString()}</p>}
                {report.updated_at && <p>Updated {(new Date(report.updated_at)).toLocaleString()}</p>}
              </div>
            </Grid.Col>
          </Grid>

        </Grid.Col>
      </Grid>

    

      
    </article>
  )
}

export default ReportFeatured
