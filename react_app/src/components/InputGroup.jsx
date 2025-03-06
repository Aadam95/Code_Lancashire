
export default function InputGroup({
    label,
    type,
    placeholder,
    name,
    spanText

}) {
    return (
        <div>
            <label htmlFor={name} className="block text-sm/6 font-medium text-gray-900">
                    {label}
            </label>
            <div className="mt-2 grid grid-cols-1 border border-gray-200 rounded-md">
                <input
                    name={name}
                    type={type}
                    placeholder={placeholder}
                    className="col-start-1 row-start-1 block w-full rounded-md bg-white py-1.5 pl-10 pr-3 text-base text-gray-900 placeholder:text-gray-400 sm:pl-9 sm:text-sm/6 outline-0"
                    />
                <span
                    aria-hidden="true" className="pointer-events-none col-start-1 row-start-1 ml-3 size-5 self-center text-gray-400 sm:size-4"
                    >
                    {spanText}
                </span>
            </div>
        </div>
    )
}