import SaleSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon } from '../../assets/images/avatar-icon.svg';
import { ReactComponent as BarChartIcon } from '../../assets/images/bar-chart-icon.svg';
import { ReactComponent as DoneIcon } from '../../assets/images/done-icon.svg';
import { ReactComponent as SyncIcon } from '../../assets/images/sync-icon.svg';


import './styles.scss';
import { FilterData, SalesByDateType, SalesSummaryData } from '../../types';
import { useEffect, useMemo, useState } from 'react';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { buildChartSeries, sumSalesByDate } from '../Sales-by-Date/helpers';


type Props = {
  filterData?: FilterData;
};

const initialSummary = {
  min: 0,
  max: 0,
  avg: 0,
  count: 0
}

export default function SalesSummary({ filterData }: Props) {

  const [summary, setSummary] = useState<SalesSummaryData>(initialSummary);
  const params = useMemo(() => buildFilterParams(filterData), [filterData]);

  useEffect(() => {
    makeRequest.get<SalesSummaryData>('sales/summary', { params })
      .then((res) => {
        setSummary(res.data)
      })
      .catch((err) => {
        console.error("Error to fetch sales by date")
      });
  }, [params]); 


  return (
    <div className="sales-summary-container">
      <SaleSummaryCard value={summary?.avg?.toFixed(2)} label="Média" icon={<DoneIcon />} />
      <SaleSummaryCard value={summary?.count} label="Quantidade" icon={<SyncIcon />} />
      <SaleSummaryCard value={summary?.min} label="Mínima" icon={<BarChartIcon />} />
      <SaleSummaryCard value={summary?.max} label="Máxima" icon={<AvatarIcon />} />
    </div>
  )
}
