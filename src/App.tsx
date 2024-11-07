import NavItem from "./components/NavItem"
import msidebar from "./assets/images/bg-sidebar-mobile.svg"
import dsidebar from "./assets/images/bg-sidebar-desktop.svg"
import { useState } from "react"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import Step4 from "./components/Step4"



function App() {
    const [onStep, setOnStep] = useState(1)

    type Step2key = 'arcade' | 'advanced' | 'pro' | 'yearly';
    type Step3key = 'online' | 'storage' | 'profile';

    const [step2Selected, setStep2Selected] = useState<Record<Step2key, boolean>>({
        arcade: false,
        advanced: false,
        pro: false,
        yearly: false
    })

    const [step3Selected, setStep3Selected] = useState<Record<Step3key, boolean>>({
        online: false,
        storage: false,
        profile: false
    })





    const navbar = (
        <nav className="relative flex flex-row justify-center w-full px-10 py-8 overflow-hidden rounded-md md:min-w-64 md:gap-6 md:w-1/3 md:flex-col md:justify-start md:items-start md:pl-6">
            <img src={dsidebar} alt="sidebar" className="absolute bottom-0 left-0 hidden w-full md:block" />
            <NavItem setOnStep={setOnStep} onStep={onStep} text="YOUR INFO" num={1} />
            <NavItem setOnStep={setOnStep} onStep={onStep} text="SELECT PLAN" num={2} />
            <NavItem setOnStep={setOnStep} onStep={onStep} text="ADD-ONS" num={3} />
            <NavItem setOnStep={setOnStep} onStep={onStep} text="SUMMARY" num={4} />
        </nav>
    )

    let stepEl;
    switch (onStep) {
        case 1: stepEl = <Step1 />; break;
        case 2: stepEl = <Step2 selected={step2Selected} setSelected={setStep2Selected} />; break;
        case 3: stepEl = <Step3 step3Selected={step3Selected} setStep3Selected={setStep3Selected} />; break;
        case 4: stepEl = <Step4 step2Selected={step2Selected} step3Selected={step3Selected} />; break;
        default: stepEl = <h1>amongus</h1>
    }

    return (
        <>
            <img src={msidebar} alt="sidebar" className="absolute w-full md:hidden" />
            <div className="md:h-[35rem] items-stretch md:shadow rounded-xl relative px-5 flex flex-col w-full md:flex-row md:justify-between md:max-w-[56rem] md:mx-auto md:mt-16 md:bg-white md:p-5">
                {navbar}
                <main className="relative h-full p-6 mx-auto bg-white border-black shadow md:w-7/12 rounded-xl md:border-none md:shadow-none">
                    {stepEl}
                    {
                        onStep > 1 &&
                        <button className="absolute bottom-2 left-2 hidden h-10 text-sm font-medium rounded-lg w-28 text-neutral-cool-gray md:inline"
                            onClick={() => { setOnStep(prev => prev - 1) }}>Go Back</button>
                    }
                    {
                        onStep !== 4
                        ? <button className="absolute bottom-2 right-2 hidden h-10 text-sm font-medium text-white rounded-lg w-28 bg-primary-marine-blue md:block"
                        >Next Step</button>
                        : <button className="absolute bottom-2 right-2 hidden h-10 text-sm font-medium text-white rounded-lg w-28 bg-primary-purplish-blue md:block"
                        >Confirm</button>
                    }
                </main>
            </div>

            <div className="fixed bottom-0 flex justify-end w-full h-16 p-3 bg-white shadow md:hidden">
                {
                    onStep > 1 &&
                    <button className="text-sm font-medium rounded text-neutral-cool-gray"
                        onClick={() => { setOnStep(prev => prev - 1) }}>Go Back</button>
                }

                {
                    onStep !== 4
                    ? <button className="w-24 ml-auto text-sm font-medium text-white rounded bg-primary-marine-blue">Next Step</button>
                    : <button className="w-24 ml-auto text-sm font-medium text-white rounded bg-primary-purplish-blue">Confirm</button>
                     

                }
            </div>
        </>
    )
}

export default App
