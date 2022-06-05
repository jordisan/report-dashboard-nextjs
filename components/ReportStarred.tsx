import { useAppDispatch } from 'hooks/redux-hooks'
import { Star } from 'tabler-icons-react'

import { toggleReportStarred } from '@store/report-slice'
import { Report } from '@models/report'

import styles from './reportstarred.module.scss'

type Props = {
  report: Report,
  size?: number
}

const ReportStarred = ({ report, size }: Props) => {
  const dispatch = useAppDispatch()
  function toggle() {
    if (report && report.id) {
      dispatch(toggleReportStarred(report?.id))
    }
  }

  const iconSize: number = !size ? 20 : size;
  const starred: boolean = !!report?.starred_time;

  return (
    <div className={styles.starred + " " + (starred ? styles.starred_yes : styles.starred_no)}>
      <button onClick={toggle}>
        <Star className={styles.star} size={iconSize} fill={starred ? "#857f0c" : "none"} strokeWidth="1" />
        {iconSize > 20 &&
          <span className={styles.label}>{starred ? "starred" : "not starred"}</span>
        }
      </button>
    </div>
  )
}

export default ReportStarred
