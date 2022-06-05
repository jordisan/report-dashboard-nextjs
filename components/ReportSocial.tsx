import { useAppDispatch } from 'hooks/redux-hooks'
import { EyeCheck, Messages, Star, Stars } from 'tabler-icons-react'

import { SocialData } from '@models/socialdata'

import styles from './reportsocial.module.scss'


type Props = {
  social: SocialData | undefined,
  size?: number
}

const ReportSocial = ({ social, size }: Props) => {
  const dispatch = useAppDispatch()

  const iconSize: number = !size ? 20 : size;

  return (
    <div className={styles.social}>
      <span className={styles.comments} title="comments">
        <Messages size={iconSize} />&nbsp;
        {social?.number_of_comments}
      </span>
      <span className={styles.stars} title="stars">
        <Stars size={iconSize} />&nbsp;
        {social?.stars}
      </span>
      <span className={styles.views} title="views">
        <EyeCheck size={iconSize} />&nbsp;
        {social?.views}
      </span>
    </div>
  )
}

export default ReportSocial
