import './App.css';

import { ResponsiveProvider } from './context/responsive';

import MainIntro from './main/MainIntro';
import Main2 from './main/Main2';
import QuickBtns from './main/QuickBtns';
import Main3 from './main/Main3';

function App() {
    return (
        <ResponsiveProvider>
            <div className="App">
                <QuickBtns />
                <MainIntro />
                <Main2 />
                <Main3 />
            </div>
        </ResponsiveProvider>
    );
}

export default App;
