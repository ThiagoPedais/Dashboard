import './App.scss';
import Filter from './components/Filter';
import Header from './components/Header';

function App() {

    return (
        <>
            <Header />
            <div className="app-container">
                <Filter />
            </div>
        </>
    )
}

export default App;