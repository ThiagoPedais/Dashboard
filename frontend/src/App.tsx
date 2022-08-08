import './App.scss';
import Filter from './components/Filter';
import Header from './components/Header';
import SalesByDate from './components/Sales-by-Date';
import SalesSummary from './components/Sales-Summary';

function App() {

    return (
        <>
            <Header />
            <div className="app-container">
                <Filter />
                <SalesByDate />
                <div className="sales-overview-container">
                    <SalesSummary />
                </div>
            </div>
        </>
    )
}

export default App;