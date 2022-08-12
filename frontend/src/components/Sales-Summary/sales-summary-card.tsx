import React from 'react';
import { ReactComponent as AvatarIcon }  from '../../assets/images/avatar-icon.svg'; 

import './styles.scss';


type Props = {
  label: string;
  value: number | string;
  icon: React.ReactNode;
}



export default function SaleSummaryCard({ label, value, icon }: Props) {   
  return (
    <div className="sales-summary-card base-card">
        {icon}
        <h3 className="sales-summary-card-value">{value}</h3>
        <span className="sales-summary-card-label">{label}</span>

    </div>  
  )
}
 