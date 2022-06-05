import { getReportById, setReportVisited } from '@store/report-slice'
import ReportFeatured from 'components/ReportFeatured'
import { useAppDispatch, useAppSelector } from 'hooks/redux-hooks'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const ReportDetailPage = ({ }) => {
    const router = useRouter()
    const { id } = router.query
    const report = useAppSelector(state => getReportById(state, Array.isArray(id) ? id[0] : id))
    const dispatch = useAppDispatch()

    useEffect(() => {
        // update report as visited
        dispatch(setReportVisited(report.id))
    }, [dispatch, report?.time_visited, report?.id]);

    return (
        <>
        <nav>
            <Link href="/">Home</Link>
        </nav>
        <main>
            <h1>Report detail</h1>

            <ReportFeatured featuredReport={report} />

        </main>
        </>
    )
}

export default ReportDetailPage

export const getServerSideProps = async (context: { params: { id: string } }) => {
    const { id } = context.params;

    return {
        props: { id }
    }
}
