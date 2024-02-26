
import './App.css';

import { ResponsiveProvider } from './context/responsive';
import { ScrollProvider } from "./context/scrollEvent";

import MainIntro from './main/MainIntro';
import Main2 from "./main/Main2";
import QuickBtns from "./main/QuickBtns";


function App() {
    
    return (
        <ResponsiveProvider>
            <ScrollProvider>
                    <div className="App">
                        <QuickBtns />
                        <MainIntro />
                        <Main2 />
                    </div>
            </ScrollProvider>
        </ResponsiveProvider>
    
    );
}

export default App;
