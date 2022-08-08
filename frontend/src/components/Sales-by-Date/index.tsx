import ReactApexChart from 'react-apexcharts';
import { chartOptions } from './helpers';

import './styles.scss';

const initalData = [
    {
        x: '2020-01-01',
        y: 554
    },
    {
        x: '2020-02-01',
        y: 626
    },
    {
        x: '2020-03-01',
        y: 226
    },
    {
        x: '2020-04-01',
        y: 456
    },
    {
        x: '2020-05-01',
        y: 896
    },
];

export default function SalesByDate() {
    return (
        <div className="sales-by-date-container base-card">
            <div className="">
                <h4 className="sales-by-date-title">Evolução de vendas</h4>
                <span className="sales-by-date-period">01/01/2017 a 31/01/2022</span>
            </div>
            <div className="sales-by-date-data">
                <div className="sales-by-date-quantity-container">
                    <h2 className="sales-by-date-quantity">R$ 465.988,00</h2>
                    <span className="sales-by-date-quantity-label">Vendas no período</span>
                    <span className="sales-by-date-quantity-description">O gráfico mostra as vendas em todas as lojas</span>
                </div>

                <div className="sales-by-date-chart">
                    <ReactApexChart
                        options={chartOptions}
                        series={[{ name: "vendas", data: initalData }]}
                        type="bar"
                        height={260}
                        with="100%"
                    />
                </div>
            </div>
        </div>
    )
}
