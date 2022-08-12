import { useEffect, useMemo, useState } from 'react';
import './App.scss';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/Pie-Chart-Card';
import SalesByDate from './components/Sales-by-Date';
import SalesSummary from './components/Sales-Summary';
import SalesTable from './components/Sales-Table';
import { buildSalesByPaymentMethod, buildSalesByStoreChart } from './helpers';
import { FilterData, PieChartConfig, SalesByPaymentMethod, SalesByStore } from './types';
import { buildFilterParams, makeRequest } from './utils/request';

function App() {

    const [filterData, setFilterData] = useState<FilterData>();
    const [salesByStore, setSalesByStore] = useState<PieChartConfig>();
    const [salesByPaymentMethod, setSalesByPaymentMethod] = useState<PieChartConfig>();


    const params = useMemo(() => buildFilterParams(filterData), [filterData]);

    useEffect(() => {
        makeRequest.get<SalesByStore[]>('sales/by-store', { params })
            .then((res) => {
                const newSalesBySotre = buildSalesByStoreChart(res.data);
                setSalesByStore(newSalesBySotre);
            })
            .catch((err) => {
                console.error("Error to fetch sales by date")
            });
    }, [params]);

    useEffect(() => {
        makeRequest.get<SalesByPaymentMethod[]>('sales/by-payment-method', { params })
            .then((res) => {
                const newSalesByPaymentMethod = buildSalesByPaymentMethod(res.data);
                setSalesByPaymentMethod(newSalesByPaymentMethod);
            })
            .catch((err) => {
                console.error("Error to fetch sales by date")
            });
    }, [params]);

    const onFilterChange = (filter: FilterData) => {
        setFilterData(filter);
        // console.log({ filter });
    };

    return (
        <>
            <Header />
            <div className="app-container">
                <Filter onFilterChange={onFilterChange} />
                <SalesByDate filterData={filterData} />
                <div className="sales-overview-container">
                    <SalesSummary filterData={filterData} />
                    <PieChartCard
                        name="Lojas"
                        labels={salesByStore?.labels}
                        series={salesByStore?.series} 
                    />
                    <PieChartCard
                        name="Pagamentos"
                        labels={salesByPaymentMethod?.labels}
                        series={salesByPaymentMethod?.series}
                    />
                </div>
                <SalesTable filterData={filterData} />
            </div>
        </>
    )
}

export default App;