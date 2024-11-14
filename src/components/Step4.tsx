import { Step2Plan, Step3AddOn } from "../types";

interface Step4Props {
    step2Selected: { plan: Step2Plan; yearly: boolean };
    step3Selected: Step3AddOn;
    setOnStep: React.Dispatch<React.SetStateAction<number>>;
}


export default function Step4({ step2Selected, step3Selected, setOnStep }: Step4Props) {

    const addOnsEls = Object.values(step3Selected).map(addOn => {
        if (addOn.selected === true) {
            return (
                <div key={addOn.title} className="flex justify-between mt-2 md:mt-3">
                    <p className="font-medium md:text-xs text-neutral-cool-gray">{addOn.title}</p>
                    <p className="text-sm text-primary-marine-blue">
                        {step2Selected.yearly ? addOn.yearlyPrice : addOn.monthlyPrice}
                    </p>
                </div>
            )
        }
    })

    let total = 0;
    if (step2Selected.yearly) {
        let yearlyPlan: any[] | number | null = step2Selected.plan.yearlyPrice?.match(/\d+/);
        yearlyPlan = yearlyPlan ? parseInt(yearlyPlan[0]) : 0;
        let yearlyAddOns = Object.values(step3Selected).reduce((total, addOn) => {
            if (addOn.selected) {
                let yearlyAddOn: any[] | number | null = addOn.yearlyPrice.match(/\d+/)
                yearlyAddOn = yearlyAddOn ? parseInt(yearlyAddOn[0]) : 0
                total += yearlyAddOn;
            }

            return total;
        }, 0);
        total += yearlyAddOns + yearlyPlan
    } else {
        let monthlyPlan: any[] | number | null = step2Selected.plan.monthlyPrice?.match(/\d+/);
        monthlyPlan = monthlyPlan ? parseInt(monthlyPlan[0]) : 0;
        let monthlyAddOns = Object.values(step3Selected).reduce((total, addOn) => {
            if (addOn.selected) {
                let monthlyAddOn: any[] | number | null = addOn.monthlyPrice.match(/\d+/)
                monthlyAddOn = monthlyAddOn ? parseInt(monthlyAddOn[0]) : 0
                total += monthlyAddOn;
            }

            return total;
        }, 0);
        total += monthlyAddOns + monthlyPlan
    }



    return (
        <>
            <div className="">
                <h1 className="text-2xl font-bold text-start text-primary-marine-blue md:text-3xl">Finishing up</h1>
                <p className="mt-2 text-neutral-cool-gray">Double-check everything looks OK before confirming.</p>
            </div>

            <div className="p-4 mt-10 rounded-lg md:p-6 bg-neutral-magnolia">

                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-primary-marine-blue md:font-bold md:text-base">
                        {step2Selected.plan.name} ({step2Selected.yearly ? "Yearly" : "Monthly"})
                        <a className="block text-sm font-normal underline text-neutral-cool-gray cursor-pointer"
                            onClick={() => setOnStep(2)}>Change</a>
                    </h2>
                    <h2 className="font-bold text-primary-marine-blue">
                        {step2Selected.yearly ? step2Selected.plan.yearlyPrice : step2Selected.plan.monthlyPrice}
                    </h2>
                </div>

                <hr className="mt-5 mb-4" />

                {addOnsEls}

            </div>


            <div className="flex items-center justify-between px-4 mt-4 md:px-6">
                <p className="text-sm font-medium md:text-xs text-neutral-cool-gray">
                    Total (per {step2Selected.yearly ? "year" : "month"})
                </p>
                <h1 className="text-lg font-bold text-primary-purplish-blue">
                    {`+$${total}/${step2Selected.yearly ? "yr" : "mo"}`}
                </h1>
            </div>
        </>
    )
}