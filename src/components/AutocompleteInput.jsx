import { useState, useRef, useEffect } from "react";

export default function AutocompleteInput({
    label,
    placeholder,
    value,
    onChange,
    suggestions = [],
}) {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef(null);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (wrapperRef.current && !wrapperRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div ref={wrapperRef} className="relative">
            {label && (
                <label className="block mb-1 text-sm text-neutral-300">
                    {label}
                </label>
            )}

            <input
                type="text"
                value={value}
                onChange={(e) => {
                    onChange(e.target.value);
                    setOpen(true);
                }}
                placeholder={placeholder}
                className="w-full rounded-xl border border-neutral-700 bg-black text-white placeholder:text-neutral-500 px-3 py-2 text-sm focus:outline-none focus:border-yellow-400"
            />

            {open && suggestions.length > 0 && (
                <div className="absolute z-50 mt-1 w-full rounded-xl border border-neutral-700 bg-neutral-900 shadow-lg max-h-56 overflow-auto">
                    {suggestions.map((item) => (
                        <div
                            key={item}
                            onClick={() => {
                                onChange(item);
                                setOpen(false);
                            }}
                            className="px-3 py-2 text-sm text-neutral-200 hover:bg-neutral-800 cursor-pointer"
                        >
                            {item}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}