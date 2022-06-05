import Link from 'next/link'
import Image from 'next/image'

import { User } from '@models/user'

import styles from './report.module.scss'

type Props = {
  owner: User
}

const ReportOwner = ({ owner }: Props) => (
  <figure className={styles.owner + ' profile'} title="owner">
    <span className="picture">
      <Image src={owner?.getProfileImage()} alt="profile picture" width="20" height="20" />
    </span>
    {owner?.name} ({owner?.type})
  </figure>
)

export default ReportOwner
