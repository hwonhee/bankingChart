import { Helmet } from 'react-helmet-async';
import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// components
import Iconify from '../components/iconify';
// sections
import {
  AppTasks,
  AppNewsUpdate,
  AppOrderTimeline,
  AppCurrentVisits,
  AppWebsiteVisits,
  AppTrafficBySite,
  AppWidgetSummary,
  AppCurrentSubject,
  AppConversionRates,
} from '../sections/@dashboard/app';

import WonBanking from '../asset/wonbank.png';
import WonBankingCompany from '../asset/wonbankCompany.png';
import WibeeBank from '../asset/WibeeBank.png';
import GlobalBanking from '../asset/GlobalBanking.png';

// ----------------------------------------------------------------------

export default function DashboardAppPage() {
  const theme = useTheme();

  return (
    <>
      <Helmet>
        <title>우리은행 데이터 차트</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          우리은행 가상 데이터 차트 (만든이: 한원희)
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="금리별 대출량 추이"
              subheader="작년비 +43% 증가"
              chartLabels={[
                '07/08/2008',
                '02/01/2009',
                '03/01/2011',
                '04/01/2012',
                '05/01/2013',
                '06/01/2014',
                '07/01/2015',
                '08/01/2016',
                '09/01/2017',
                '10/01/2018',
                '11/01/2020',
                '11/01/2021',
                '11/01/2022',
              ]}
              chartData={[
                {
                  name: '우리은행 대출취급금액 (천억원)',
                  type: 'column',
                  fill: 'solid',
                  data: [1, 0.2, 1.1, 1.1, 2.3, 4.4, 3.2, 2.1, 3.3, 1.1, 3.2, 1.1, 1.1],
                },
                {
                  name: '한국은행 기준금리',
                  type: 'area',
                  fill: 'gradient',
                  data: [5.25, 2.5, 2.25, 3.25, 2.75, 2.25, 1.75, 1.25, 1.75, 0.5, 1.25, 2.5, 3.25],
                },
                {
                  name: '우리은행 대출금리',
                  type: 'line',
                  fill: 'solid',
                  data: [7.0, 4.2, 4.15, 5.12, 4.2, 3.85, 3.65, 4.21, 3.26, 2.0, 2.55, 4.21, 6.11],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="금융상품 가입고객 현황"
              chartData={[
                { label: '예/적금', value: 4344 },
                { label: '대출', value: 5435 },
                { label: '투자상품', value: 1443 },
                { label: '외환상품', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="과목별 전자문서 사용비율"
              subheader=""
              chartData={[
                { label: '수신', value: 400 },
                { label: '여신', value: 430 },
                { label: '자산관리', value: 120 },
                { label: '기타', value: 280 }
              ]}
            />
          </Grid>
          
          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="우리은행 앱별 UV"
              list={[
                {
                  name: 'WON뱅킹',
                  value: 784676,
                  icon: <Iconify icon={WonBanking} color="#1877F2" width={32} />,
                },
                {
                  name: 'WON뱅킹 기업',
                  value: 341212,
                  icon: <Iconify icon={WonBankingCompany} color="#DF3E30" width={32} />,
                },
                {
                  name: '위비뱅크',
                  value: 411213,
                  icon: <Iconify icon={WibeeBank} color="#006097" width={32} />,
                },
                {
                  name: '우리글로벌뱅킹',
                  value: 236863,
                  icon: <Iconify icon={GlobalBanking} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
