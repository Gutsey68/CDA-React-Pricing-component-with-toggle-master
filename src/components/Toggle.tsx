import { useValueContext } from '../context/valueContext';

function Toggle() {
    const { toggleCardType, togglePrices } = useValueContext();
    return (
        <>
            {toggleCardType ? (
                <div
                    onClick={togglePrices}
                    className={`bg-gray-200 w-[65px] h-[35px] rounded-full flex items-center justify-start pl-1 cursor-pointer shadow-md hover:bg-gray-300 transition-opacity`}
                >
                    <div className="bg-white w-[28px] h-[28px] rounded-full shadow-md"></div>
                </div>
            ) : (
                <div
                    onClick={togglePrices}
                    className={`bg-gradient-to-t from-indigo-300 to-indigo-200 w-[65px] h-[35px] rounded-full flex items-center justify-end pr-1 cursor-pointer shadow-md hover:from-indigo-200 hover:to-indigo-100 transition-opacity`}
                >
                    <div className="bg-white w-[28px] h-[28px] rounded-full shadow-md"></div>
                </div>
            )}
        </>
    );
}
export default Toggle;
