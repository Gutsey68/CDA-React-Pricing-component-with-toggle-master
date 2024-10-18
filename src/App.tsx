import backgroundBottom from './assets/bg-bottom.svg';
import backgroundTop from './assets/bg-top.svg';
import CardSection from './components/CardSection';
import Hero from './components/Hero';
import { ValueProvider } from './context/valueContext';

function App() {
    return (
        <ValueProvider>
            <main className="bg-slate-100 min-h-screen w-full flex items-center justify-center flex-col relative">
                <div className="z-10">
                    {' '}
                    <Hero />
                    <CardSection />
                </div>

                <img className="absolute bottom-0 left-0 z-0" src={backgroundBottom} alt="" />
                <img className="absolute top-0 right-0 z-0" src={backgroundTop} alt="" />
            </main>
        </ValueProvider>
    );
}

export default App;
