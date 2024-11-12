import arcade from "../assets/images/icon-arcade.svg"
import advanced from "../assets/images/icon-advanced.svg"
import pro from "../assets/images/icon-pro.svg"
import { Step2Plan } from "../types"

interface Step2Props {
    selected: { plan: Step2Plan; yearly: boolean };
    setSelected: React.Dispatch<React.SetStateAction<{ plan: Step2Plan; yearly: boolean }>>;
}

export default function Step2({ selected, setSelected }: Step2Props) {

    function handleSelect(value: Step2Plan) {
        if (selected.plan.name === value.name) {
            setSelected(prev => ({ ...prev, plan: { name: "", yearlyPrice: "", monthlyPrice: "" } }))
        } else {
            setSelected(prev => ({ ...prev, plan: value }))
        }
    }

    function handleYearly() {
        setSelected(prev => ({ ...prev, yearly: !prev.yearly }))
    }

    const sCls = "border-primary-purplish-blue bg-neutral-alabaster"

    const plans = [
        {
            name: "Arcade",
            yearlyPrice: "$90/yr",
            monthlyPrice: "$9/mo",
            img: arcade,
        },
        {
            name: "Advanced",
            yearlyPrice: "$120/yr",
            monthlyPrice: "$12/mo",
            img: advanced,
        },
        {
            name: "Pro",
            yearlyPrice: "$150/yr",
            monthlyPrice: "$15/mo",
            img: pro,
        },
    ];

    const planEls = plans.map(plan => {

        return (
            <a key={plan.name} className={`border ${selected.plan.name === plan.name ? sCls : "md:hover:border-primary-purplish-blue"} flex md:flex-col md:w-1/3 gap-5 p-4 rounded-xl cursor-pointer`}
                onClick={() => handleSelect({ name: plan.name, yearlyPrice: plan.yearlyPrice, monthlyPrice: plan.monthlyPrice } as Step2Plan)}>
                <img src={plan.img} alt="Icon" className="w-10 mb-5" />
                <div>
                    <h2 className="font-medium text-primary-marine-blue">{plan.name}</h2>
                    <p className="text-sm text-neutral-cool-gray">{selected.yearly ? plan.yearlyPrice : plan.monthlyPrice}</p>
                    {/* {selected.yearly && <p className="text-xs text-primary-marine-blue mt-1">2 months free</p>} */}
                    <p className={`text-xs text-primary-marine-blue mt-1 ${selected.yearly ? "" : "opacity-0"}`}>2 months free</p>
                </div>
            </a>
        )
    })

    return (
        <>
            <div className="">
                <h1 className="text-2xl font-bold text-start text-primary-marine-blue md:text-3xl">Select your plan</h1>
                <p className="mt-2 text-neutral-cool-gray">You have the option of monthly or yearly billing.</p>
            </div>
            <div className="flex flex-col gap-4 mt-6 md:flex-row md:justify-evenly md:h-44">
                {planEls}
            </div>
            <div className="flex items-center h-10 mt-8 justify-center gap-5 bg-neutral-alabaster">
                <p className="font-medium text-primary-marine-blue">Monthly</p>
                <div className="w-10 h-5 p-1 rounded-full bg-primary-marine-blue cursor-pointer"
                    onClick={handleYearly}>
                    <div className={`h-full w-3 bg-white rounded-full ${selected.yearly ? "ml-auto" : ""}`} />
                </div>
                <p className="font-medium text-neutral-cool-gray">Yearly</p>
            </div>
        </>
    )
}