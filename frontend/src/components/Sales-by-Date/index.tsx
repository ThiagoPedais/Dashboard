import { useEffect, useMemo, useState } from 'react';
import ReactApexChart from 'react-apexcharts';
import { ChartSeriesData, FilterData, SalesByDateType } from '../../types';
import { formatDate, formatPrice } from '../../utils/formatters';
import { buildFilterParams, makeRequest } from '../../utils/request';
import { buildChartSeries, chartOptions, sumSalesByDate } from './helpers';

import './styles.scss';

type Props = {
    filterData?: FilterData;
};

export default function SalesByDate({ filterData }: Props) {

    const [chartSeries, setChartSeries] = useState<ChartSeriesData[]>([]);
    const [totalSum, setTotalSum] = useState(0);

    const params = useMemo(() =>  buildFilterParams(filterData), [filterData]);

    useEffect(() => {
        makeRequest.get<SalesByDateType[]>('sales/by-date', {params})
            .then((res) => {
                const newChartSeries = buildChartSeries(res.data);
                setChartSeries(newChartSeries);

                const newTotalSum = sumSalesByDate(res.data);
                setTotalSum(newTotalSum);
                // console.log(res.data)
            })
            .catch((err) => {
                console.error("Error to fetch sales by date")
            });
    }, [params]);


    return (
        <div className="sales-by-date-container base-card">
            <div className="">
                <h4 className="sales-by-date-title">Evolução de vendas</h4>
                {
                    filterData?.dates && (
                        <span className="sales-by-date-period">
                            {formatDate(filterData?.dates?.[0])} até {formatDate(filterData?.dates?.[1])}
                        </span>
                    )
                }
            </div>
            <div className="sales-by-date-data">
                <div className="sales-by-date-quantity-container">
                    <h2 className="sales-by-date-quantity">{formatPrice(totalSum)}</h2>
                    <span className="sales-by-date-quantity-label">Vendas no período</span>
                    <span className="sales-by-date-quantity-description">O gráfico mostra as vendas em todas as lojas</span>
                </div>

                <div className="sales-by-date-chart">
                    <ReactApexChart
                        options={chartOptions}
                        series={[{ name: "vendas", data: chartSeries }]}
                        type="bar"
                        height={260}
                        with="100%"
                    />
                </div>
            </div>
        </div>
    )
}
