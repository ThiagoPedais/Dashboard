import SaleSummaryCard from './sales-summary-card';
import { ReactComponent as AvatarIcon }  from '../../assets/images/avatar-icon.svg'; 
import { ReactComponent as BarChartIcon }  from '../../assets/images/bar-chart-icon.svg'; 
import { ReactComponent as DoneIcon }  from '../../assets/images/done-icon.svg'; 
import { ReactComponent as SyncIcon }  from '../../assets/images/sync-icon.svg'; 


import './styles.scss';

export default function SalesSummary() {
  return (
    <div className="sales-summary-container">
        <SaleSummaryCard value={430} label="Média" icon={<DoneIcon />} />
        <SaleSummaryCard value={530} label="Quantidade" icon={<SyncIcon />} />
        <SaleSummaryCard value={730} label="Mínima" icon={<BarChartIcon />} />
        <SaleSummaryCard value={830} label="Máxima" icon={<AvatarIcon />} />
    </div>
  )
}
