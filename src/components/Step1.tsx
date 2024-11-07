
export default function Step1() {
    return (
        <>
            <div>
                <h1 className="text-2xl font-bold text-primary-marine-blue md:text-3xl">Personal info</h1>
                <p className="mt-2 text-neutral-cool-gray">Please provide your name, email address, and phone number.</p>
            </div>
            <form className="">
                <label htmlFor="name" className="block mt-5 text-sm text-primary-marine-blue">Name</label>
                <input type="text" id="name" placeholder="e.g. Stephen King" className="w-full h-10 pl-4 mt-1 text-sm border rounded" />
                <label htmlFor="email" className="block mt-5 text-sm text-primary-marine-blue">Email Address</label>
                <input type="email" id="email" placeholder="e.g. stephenking@lorem.com" className="w-full h-10 pl-4 mt-1 text-sm border rounded" />
                <label htmlFor="phone" className="block mt-5 text-sm text-primary-marine-blue">Phone Number</label>
                <input type="tel" id="phone" placeholder="e.g. +1 234 567 890" className="w-full h-10 pl-4 mt-1 text-sm border rounded" />
            </form>
        </>
    )
}