
export default function NavItem({ text, num, onStep, setOnStep }: { text: string, num: number, onStep: number, setOnStep: Function }) {
    const highlightCls =  onStep === num ? "bg-primary-light-blue text-primary-marine-blue" : "group-hover:bg-primary-light-blue"

    return (
        <a onClick={()=>setOnStep(num)} className={`group relative flex items-center gap-4 text-neutral-alabaster cursor-pointer`}>
            <div className={`${highlightCls} group-hover:text-primary-marine-blue flex items-center justify-center font-semibold border rounded-full leading-[.5] p-3 text-sm`}>{num}</div>
            <div>
                <p className="hidden text-xs font-extralight text-neutral-light-gray md:block">STEP {num}</p>
                <p className="hidden text-sm font-medium tracking-wide md:block">{text}</p>
            </div>
        </a>
    )
}