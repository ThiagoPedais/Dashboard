import { useState } from 'react';
import './App.scss';
import Filter from './components/Filter';
import Header from './components/Header';
import PieChartCard from './components/Pie-Chart-Card';
import SalesByDate from './components/Sales-by-Date';
import SalesSummary from './components/Sales-Summary';
import SalesTable from './components/Sales-Table';
import { FilterData } from './types';

function App() {

    const [filterData, setFilterData] = useState<FilterData>();

    const onFilterChange = (filter: FilterData) => {
        setFilterData(filter);
        console.log( { filter } );        
    };

    return (
        <>
            <Header />
            <div className="app-container">
                <Filter onFilterChange={onFilterChange} />
                <SalesByDate filterData={filterData} />
                <div className="sales-overview-container">
                    <SalesSummary />
                    <PieChartCard name="Lojas" labels={['Brasília DF', 'Goias', 'Salvador', 'Vicente Pires']} series={[40, 10, 20, 30]} />
                    <PieChartCard name="Pagamentos" labels={['Crédito', 'Débito', 'Dinheiro', 'Pix']} series={[40, 10, 20, 30]} />
                </div>
                <SalesTable />
            </div>
        </>
    )
}

export default App;