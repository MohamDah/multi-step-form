import checkmark from "../assets/images/icon-checkmark.svg"
import { Step3AddOn } from "../types";

interface Step3Props {
    step3Selected: Step3AddOn;
    setStep3Selected: React.Dispatch<React.SetStateAction<Step3AddOn>>;

    yearly: boolean;
}

export default function Step3({ step3Selected, setStep3Selected, yearly}: Step3Props) {
    type Step3key = 'online' | 'storage' | 'profile';

    function handleSelect(id: Step3key, title:string, yearlyPrice:string, monthlyPrice: string, selected:boolean) {
        setStep3Selected(prev => ({
            ...prev,
            [id]: {
                title,
                monthlyPrice,
                yearlyPrice,
                selected: !selected
            }
        }))
        // setStep3Selected(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const sCls = "border-primary-purplish-blue bg-neutral-alabaster"

    const addOns = [
        {
            id: "online",
            title: "Online service",
            description: "Access to multiplayer games",
            monthlyPrice: "+$1/mo",
            yearlyPrice: "+$10/yr",
            selected: step3Selected.online.selected
        },
        {
            id: "storage",
            title: "Larger storage",
            description: "Extra 1TB of cloud save",
            monthlyPrice: "+$2/mo",
            yearlyPrice: "+$20/yr",
            selected: step3Selected.storage.selected
        },
        {
            id: "profile",
            title: "Customizable Profile",
            description: "Custom theme on your profile",
            monthlyPrice: "+$2/mo",
            yearlyPrice: "+$20/yr",
            selected: step3Selected.profile.selected
        }
    ];

    const addOnsEls = addOns.map(addOn => {
        return (
            <label key={addOn.id} className={`border ${addOn.selected ? sCls : "md:hover:border-primary-purplish-blue"} flex items-center gap-3 md:gap-6 rounded-lg cursor-pointer p-3 md:px-5 md:py-4`}>

                <input type="checkbox" id={addOn.id} className="hidden peer"
                    onChange={() => handleSelect(addOn.id as Step3key, addOn.title, addOn.yearlyPrice, addOn.monthlyPrice, addOn.selected)} checked={addOn.selected} />
                <div className="peer-checked:bg-primary-purplish-blue px-1 py-1.5 rounded border aspect-square">
                    <img src={checkmark} alt="checkmark" className="w-3" />
                </div>

                <div>
                    <h2 className="font-medium text-primary-marine-blue text-sm md:text-base">{addOn.title}</h2>
                    <p className="text-neutral-cool-gray text-xs md:text-sm">{addOn.description}</p>
                </div>
                <p className="ml-auto text-xs md:text-sm text-primary-purplish-blue">
                    {yearly ? addOn.yearlyPrice : addOn.monthlyPrice}
                    </p>
            </label>

        )
    })

    return (
        <>
            <div className="">
                <h1 className="text-2xl font-bold text-start text-primary-marine-blue md:text-3xl">Pick add-ons</h1>
                <p className="mt-2 text-neutral-cool-gray">Add-ons help enhance your gaming experience.</p>
            </div>


            <div className="flex flex-col items-stretch gap-4 mt-6 justify-evenly">
                {addOnsEls}

                {/* <label className={`border ${step3Selected.online ? sCls : "md:hover:border-primary-purplish-blue"} flex items-center gap-3 md:gap-6 rounded-lg cursor-pointer p-3 md:px-5 md:py-4`}>

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
                </label> */}

            </div>
        </>
    )
}