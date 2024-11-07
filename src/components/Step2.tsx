import arcade from "../assets/images/icon-arcade.svg"
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"

interface Step2Props {
    selected: { arcade: boolean; advanced: boolean; pro: boolean; yearly: boolean };
    setSelected: React.Dispatch<React.SetStateAction<{ arcade: boolean; advanced: boolean; pro: boolean; yearly: boolean }>>;
}

export default function Step2({ selected, setSelected }: Step2Props) {
    type PlanKey = 'arcade' | 'advanced' | 'pro' | 'yearly';

    function handleSelect(key: PlanKey) {
        setSelected(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const sCls = "border-primary-purplish-blue bg-neutral-alabaster"
    return (
        <>
            <div className="">
                <h1 className="text-2xl font-bold text-start text-primary-marine-blue md:text-3xl">Select your plan</h1>
                <p className="mt-2 text-neutral-cool-gray">You have the option of monthly or yearly billing.</p>
            </div>
            <div className="flex flex-col gap-4 mt-6 md:flex-row md:justify-evenly">
                <a className={`border ${selected.arcade ? sCls : "md:hover:border-primary-purplish-blue"} flex md:flex-col md:w-1/3 gap-5 p-4 rounded-xl cursor-pointer`}
                    onClick={() => handleSelect("arcade")}>
                    <img src={arcade} alt="Icon" className="w-10 mb-5" />
                    <div>
                        <h2 className="font-medium text-primary-marine-blue">Arcade</h2>
                        <p className="text-sm text-neutral-cool-gray">$9/mo</p>
                    </div>
                </a>
                <a className={`border ${selected.advanced ? sCls : "md:hover:border-primary-purplish-blue"} flex md:flex-col md:w-1/3 gap-5 p-4 rounded-xl cursor-pointer`}
                    onClick={() => handleSelect("advanced")}>
                    <img src={advanced} alt="Icon" className="w-10 mb-5" />
                    <div>
                        <h2 className="font-medium text-primary-marine-blue">Advanced</h2>
                        <p className="text-sm text-neutral-cool-gray">$12/mo</p>
                    </div>
                </a>
                <a className={`border ${selected.pro ? sCls : "md:hover:border-primary-purplish-blue"} flex md:flex-col md:w-1/3 gap-5 p-4 rounded-xl cursor-pointer`}
                    onClick={() => handleSelect("pro")}>
                    <img src={pro} alt="Icon" className="w-10 mb-5" />
                    <div>
                        <h2 className="font-medium text-primary-marine-blue">Pro</h2>
                        <p className="text-sm text-neutral-cool-gray">$15/mo</p>
                    </div>
                </a>
            </div>
            <div className="flex items-center h-10 mt-8 justify-center gap-5 bg-neutral-alabaster">
                <p className="font-medium text-primary-marine-blue">Monthly</p>
                <div className="w-10 h-5 p-1 rounded-full bg-primary-marine-blue cursor-pointer"
                onClick={()=>handleSelect("yearly")}>
                    <div className={`h-full w-3 bg-white rounded-full ${selected.yearly ? "ml-auto" : ""}`} />
                </div>
                <p className="font-medium text-neutral-cool-gray">Yearly</p>
            </div>
        </>
    )
}