import NavItem from "./components/NavItem"
import msidebar from "./assets/images/bg-sidebar-mobile.svg"
import dsidebar from "./assets/images/bg-sidebar-desktop.svg"
import { useEffect, useState } from "react"
import Step1 from "./components/Step1"
import Step2 from "./components/Step2"
import Step3 from "./components/Step3"
import Step4 from "./components/Step4"
import { Step2Plan } from "./types"
import { Step3AddOn } from "./types"



function App() {
    const [onStep, setOnStep] = useState(1)

    const [step1Data, setStep1Data] = useState({
        name: "",
        email: "",
        phone: ""
    })

    const [step2Selected, setStep2Selected] = useState<{ plan: Step2Plan; yearly: boolean }>({
        plan: { name: "", yearlyPrice: "", monthlyPrice: "" },
        yearly: false
    })

    const [step3Selected, setStep3Selected] = useState<Step3AddOn>({
        online: { title: "", monthlyPrice: "", yearlyPrice: "", selected: false },
        storage: { title: "", monthlyPrice: "", yearlyPrice: "", selected: false },
        profile: { title: "", monthlyPrice: "", yearlyPrice: "", selected: false }
    })

    const [errMessage, setErrMessage] = useState("")

    const [submitMessage, setSubmitMessage] = useState("")

    const navbar = (
        <nav className="relative flex flex-row justify-center w-full px-10 py-8 overflow-hidden rounded-md md:min-w-64 md:gap-6 md:w-1/3 md:flex-col md:justify-start md:items-start md:pl-6">
            <img src={dsidebar} alt="sidebar" className="absolute bottom-0 left-0 hidden w-full md:block" />
            <NavItem setOnStep={handleOnStep} onStep={onStep} text="YOUR INFO" num={1} />
            <NavItem setOnStep={handleOnStep} onStep={onStep} text="SELECT PLAN" num={2} />
            <NavItem setOnStep={handleOnStep} onStep={onStep} text="ADD-ONS" num={3} />
            <NavItem setOnStep={handleOnStep} onStep={onStep} text="SUMMARY" num={4} />
        </nav>
    )

    let stepEl;
    switch (onStep) {
        case 1: stepEl = <Step1 handleOnStep={handleOnStep} step1Data={step1Data} setStep1Data={setStep1Data} />; break;
        case 2: stepEl = <Step2 selected={step2Selected} setSelected={setStep2Selected} />; break;
        case 3: stepEl = <Step3 step3Selected={step3Selected} setStep3Selected={setStep3Selected} yearly={step2Selected.yearly} />; break;
        case 4: stepEl = <Step4 step2Selected={step2Selected} step3Selected={step3Selected} setOnStep={setOnStep} />; break;
        default: stepEl = <h1>amongus</h1>
    }

    function isOk(step: number) {
        if (step === 1) {
            if (Object.values(step1Data).includes("")) {
                return false
            } else return true
        } else if (step === 2) {
            if (step2Selected.plan.name === "") {
                return false
            } else return true
        } else {
            return true
        }

    }

    function handleOnStep(step: number | null = null) {
        if (step !== onStep) {
            setErrMessage("")
        }
        if (step === null) {
            if (onStep === 1) {
                if (Object.values(step1Data).includes("")) {
                    setErrMessage("You can't leave an empty field")
                    return true
                } else {
                    setOnStep(prev => prev + 1);

                }
            } else if (onStep === 2) {
                if (step2Selected.plan.name !== "") {
                    setOnStep(prev => prev + 1);
                } else {
                    setErrMessage("You must select a plan")
                    return true
                }
            } else {
                setOnStep(prev => prev + 1);
            }

        } else {
            if (step <= onStep) {
                setOnStep(step);
            } else if (step > onStep) {
                for (let i = onStep; i < step; i++) {
                    if (!isOk(i)) {
                        setOnStep(i)
                        i === 1 ? setErrMessage("You can't leave an empty field") : setErrMessage("You must select a plan")
                        return
                    }
                }

                setOnStep(step)
            }
        }
    }

    function confirm() {
        setSubmitMessage("Submission Successful!")
    }

    useEffect(()=> {
        if (submitMessage) {
            setSubmitMessage("")
        }
    }, [onStep])

    return (
        <>
            <img src={msidebar} alt="sidebar" className="absolute w-full md:hidden" />
            <div className="md:h-[35rem] items-stretch md:shadow rounded-xl relative px-5 flex flex-col w-full md:flex-row md:justify-between md:max-w-[56rem] md:mx-auto md:mt-16 md:bg-white md:p-5">
                {navbar}
                <main className="relative p-6 mx-auto bg-white border-black shadow md:w-7/12 rounded-xl md:border-none md:shadow-none">
                    {stepEl}

                    {errMessage && <h1 className="w-full text-center text-red-700 text-2xl md:text-3xl mt-4">{errMessage}</h1>}
                    {submitMessage && <h1 className="w-full text-center text-green-700 text-2xl md:text-3xl mt-4">{submitMessage}</h1>}

                    {
                        onStep > 1 &&
                        <button className="absolute hidden h-10 text-sm font-medium rounded-lg bottom-2 left-2 w-28 text-neutral-cool-gray md:inline"
                            onClick={() => { handleOnStep(onStep-1) }}>Go Back</button>
                    }
                    {
                        onStep === 1
                            ? <label htmlFor="step1Submit" tabIndex={0}
                                className="absolute hidden h-10 text-sm font-medium text-white rounded-lg bottom-2 right-2 w-28 hover:bg-blue-900 bg-primary-marine-blue md:flex items-center justify-center cursor-pointer"
                            >Next Step</label>
                            : onStep !== 4
                                ? <button onClick={() => handleOnStep()}
                                    className="absolute hidden h-10 text-sm font-medium text-white rounded-lg bottom-2 right-2 w-28 hover:bg-blue-900 bg-primary-marine-blue md:block"
                                >Next Step</button>
                                : <button onClick={confirm}
                                className="absolute hidden h-10 text-sm font-medium text-white rounded-lg bottom-2 right-2 w-28 bg-primary-purplish-blue md:block"
                                >Confirm</button>
                    }
                </main>
            </div>

            <div className="fixed bottom-0 flex justify-end w-full h-16 p-3 bg-white shadow md:hidden">
                {
                    onStep > 1 &&
                    <button className="text-sm font-medium rounded text-neutral-cool-gray"
                        onClick={() => { handleOnStep(onStep-1) }}>Go Back</button>
                }

                {

                    onStep === 1
                        ? <label htmlFor="step1Submit" tabIndex={0} className="flex items-center justify-center cursor-pointer w-24 ml-auto text-sm font-medium text-white rounded bg-primary-marine-blue hover:bg-blue-900">Next Step</label>
                        : onStep !== 4
                            ? <button onClick={() => handleOnStep()}
                                className="w-24 ml-auto text-sm font-medium text-white rounded bg-primary-marine-blue hover:bg-blue-900">Next Step</button>
                            : <button onClick={confirm}
                            className="w-24 ml-auto text-sm font-medium text-white rounded bg-primary-purplish-blue">Confirm</button>


                }
            </div>
        </>
    )
}

export default App
