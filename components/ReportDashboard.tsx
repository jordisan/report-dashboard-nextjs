import { useAppSelector } from 'hooks/redux-hooks';
import { Grid } from '@mantine/core';

import ReportFeatured from './ReportFeatured'
import ReportList, { ItemFormat } from './ReportList'
import { getAllReports, getStarredReports, getVisitedReports } from '@store/report-slice';
import { ChartInfographic } from 'tabler-icons-react';

type Props = {
}

const ReportDashboard = ({}: Props) => (
  <main>

    <header>
      <ChartInfographic
        id="logo"
        size={32}
        strokeWidth={2}
      />
      <h1>Dashboard</h1>
    </header>

    <Grid gutter="xl">
      <Grid.Col xl={9} md={12}>
        <ReportFeatured />
        <ReportList reports={useAppSelector(getAllReports)} format={ItemFormat.summary} title={'All reports'} />
      </Grid.Col>
      <Grid.Col xl={3} md={12}>
        <Grid gutter="xl">
          <Grid.Col xl={12} md={6}>
            <ReportList reports={useAppSelector(getStarredReports)} title={'My starred reports'} showStarredTime={true} />
          </Grid.Col>
          <Grid.Col xl={12} md={6}>
            <ReportList reports={useAppSelector(getVisitedReports)} title={'Visited reports'} showVisitedTime={true} />
          </Grid.Col>
        </Grid>
      </Grid.Col>
    </Grid>
   
  </main>
)

export default ReportDashboard
