
interface Step1Props {
    handleOnStep: Function, 
    step1Data: {name: string, email: string, phone: string}, 
    setStep1Data: React.Dispatch<React.SetStateAction<{name: string, email: string, phone: string}>>
}

export default function Step1({handleOnStep, step1Data, setStep1Data} : Step1Props) {
    

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        handleOnStep();
    }

    
    return (
        <>
            <div>
                <h1 className="text-2xl font-bold text-primary-marine-blue md:text-3xl">Personal info</h1>
                <p className="mt-2 text-neutral-cool-gray">Please provide your name, email address, and phone number.</p>
            </div>
            <form onSubmit={handleSubmit} className="">
                <label htmlFor="name" className="block mt-5 text-sm text-primary-marine-blue">Name</label>
                <input onChange={e=>{setStep1Data(prev => ({...prev, name: e.target.value}))}} value={step1Data.name}
                 required type="text" id="name" placeholder="e.g. Stephen King" className="w-full h-10 pl-4 mt-1 text-sm border rounded" />
                <label htmlFor="email" className="block mt-5 text-sm text-primary-marine-blue">Email Address</label>
                <input onChange={e=>{setStep1Data(prev => ({...prev, email: e.target.value}))}} value={step1Data.email}
                required type="email" id="email" placeholder="e.g. stephenking@lorem.com" className="w-full h-10 pl-4 mt-1 text-sm border rounded"
                pattern="[^@\s]+@[^@\s]+\.[^@\s]+" title="Invalid email address" />
                <label htmlFor="phone" className="block mt-5 text-sm text-primary-marine-blue">Phone Number</label>
                <input onChange={e=>{setStep1Data(prev => ({...prev, phone: e.target.value}))}} value={step1Data.phone}
                required type="tel" id="phone" placeholder="e.g. +1 234 567 890" className="w-full h-10 pl-4 mt-1 text-sm border rounded" />

                <input type="submit" id="step1Submit" className="hidden" />
            </form>
        </>
    )
}