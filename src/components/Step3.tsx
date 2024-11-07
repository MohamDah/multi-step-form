import checkmark from "../assets/images/icon-checkmark.svg"

interface Step3Props {
    step3Selected: {
        online: boolean;
        storage: boolean;
        profile: boolean;
    };
    setStep3Selected: React.Dispatch<React.SetStateAction<{
        online: boolean;
        storage: boolean;
        profile: boolean;
    }>>;
}

export default function Step3({ step3Selected, setStep3Selected }: Step3Props) {
    type Step3key = 'online' | 'storage' | 'profile';

    function handleSelect(key : Step3key) {
        setStep3Selected(prev => ({...prev, [key]: !prev[key]}))
    }

    const sCls = "border-primary-purplish-blue bg-neutral-alabaster"


    return (
        <>
            <div className="">
                <h1 className="text-2xl font-bold text-start text-primary-marine-blue md:text-3xl">Pick add-ons</h1>
                <p className="mt-2 text-neutral-cool-gray">Add-ons help enhance your gaming experience.</p>
            </div>


            <div className="flex flex-col items-stretch gap-4 mt-6 justify-evenly">
                
                <label className={`border ${step3Selected.online ? sCls : "md:hover:border-primary-purplish-blue"} flex items-center gap-3 md:gap-6 rounded-lg cursor-pointer p-3 md:px-5 md:py-4`}>

                    <input type="checkbox" id="online" className="hidden peer"
                        onChange={() => handleSelect("online")} checked={step3Selected.online} />
                    <div className="peer-checked:bg-primary-purplish-blue px-1 py-1.5 rounded border aspect-square">
                        <img src={checkmark} alt="checkmark" className="w-3" />
                    </div>

                    <div>
                        <h2 className="font-medium text-primary-marine-blue text-sm md:text-base">Online service</h2>
                        <p className="text-neutral-cool-gray text-xs md:text-sm">Access to multiplayer games</p>
                    </div>
                    <p className="ml-auto text-xs md:text-sm text-primary-purplish-blue">+$1/mo</p>
                </label>


                <label className={`border ${step3Selected.storage ? sCls : "md:hover:border-primary-purplish-blue"} flex items-center gap-3 md:gap-6 rounded-lg cursor-pointer p-3 md:px-5 md:py-4`}>

                    <input type="checkbox" id="storage" className="hidden peer"
                        onChange={() => handleSelect("storage")} checked={step3Selected.storage} />
                    <div className="peer-checked:bg-primary-purplish-blue px-1 py-1.5 rounded border">
                        <img src={checkmark} alt="checkmark" className="w-3" />
                    </div>

                    <div>
                        <h2 className="font-medium text-primary-marine-blue text-sm md:text-base">Larger storage</h2>
                        <p className="text-neutral-cool-gray text-xs md:text-sm">Extra 1TB of cloud save</p>
                    </div>
                    <p className="ml-auto text-xs md:text-sm text-primary-purplish-blue">+$2/mo</p>
                </label>

                <label className={`border ${step3Selected.profile ? sCls : "md:hover:border-primary-purplish-blue"} flex items-center gap-3 md:gap-6 rounded-lg cursor-pointer p-3 md:px-5 md:py-4`}>

                    <input type="checkbox" id="profile" className="hidden peer"
                        onChange={() => handleSelect("profile")} checked={step3Selected.profile} />
                    <div className="peer-checked:bg-primary-purplish-blue px-1 py-1.5 rounded border">
                        <img src={checkmark} alt="checkmark" className="w-3" />
                    </div>

                    <div>
                        <h2 className="font-medium text-primary-marine-blue text-sm md:text-base">Customizable Profile</h2>
                        <p className="text-neutral-cool-gray text-xs md:text-sm">Custom theme on your profile</p>
                    </div>
                    <p className="ml-auto text-xs md:text-sm text-primary-purplish-blue">+$2/mo</p>
                </label>

            </div>
        </>
    )
}