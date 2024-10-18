import Toggle from './Toggle';

function Hero() {
    return (
        <section className="text-center flex flex-col items-center">
            <h1 className="text-4xl font-bold tracking-wide text-slate-500 mb-10">Our Pricing</h1>
            <div className="flex items-center text-slate-400 font-medium gap-5">
                <p>Annually</p>
                <Toggle />
                <p>Monthly</p>
            </div>
        </section>
    );
}
export default Hero;
