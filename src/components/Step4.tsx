
interface Step4Props {
    step2Selected: { arcade: boolean; advanced: boolean; pro: boolean; yearly: boolean };
    step3Selected: {
        online: boolean;
        storage: boolean;
        profile: boolean;
    };
}


export default function Step4({step2Selected, step3Selected} : Step4Props) {

    return (
        <>
            <div className="">
                <h1 className="text-2xl font-bold text-start text-primary-marine-blue md:text-3xl">Finishing up</h1>
                <p className="mt-2 text-neutral-cool-gray">Double-check everything looks OK before confirming.</p>
            </div>

            <div className="p-4 mt-10 rounded-lg md:p-6 bg-neutral-magnolia">
                <div className="flex items-center justify-between">
                    <h2 className="text-sm font-semibold text-primary-marine-blue md:font-bold md:text-base">
                        Arcade (Monthly)
                        <a className="block text-sm font-normal underline text-neutral-cool-gray">Change</a>
                    </h2>
                    <h2 className="font-bold text-primary-marine-blue">$9/mo</h2>
                </div>

                <hr className="mt-5 mb-4" />

                <div className="flex justify-between mt-2 md:mt-3">
                    <p className="font-medium md:text-xs text-neutral-cool-gray">Online service</p>
                    <p className="md:text-sm text-primary-marine-blue">+1/mo</p>
                </div>
                <div className="flex justify-between mt-2 md:mt-3">
                    <p className="font-medium md:text-xs text-neutral-cool-gray">Larger storage</p>
                    <p className="md:text-sm text-primary-marine-blue">+2/mo</p>
                </div>
            </div>


            <div className="flex items-center justify-between px-4 mt-4 md:px-6">
                <p className="text-sm font-medium md:text-xs text-neutral-cool-gray">Total (per month)</p>
                <h1 className="text-lg font-bold text-primary-purplish-blue">+$12/mo</h1>
            </div>
        </>
    )
}