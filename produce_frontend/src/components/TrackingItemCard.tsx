function TrackingItemCard({ name, color }: { name: string, color: string}) {
    return (
        <div
            className={`flex items-center justify-between p-4 rounded-lg relative overflow-hidden bg-gray-800 cursor-pointer`}
        >
            <div className={`absolute left-0 top-0 bottom-0 w-2 ${color} rounded-l-lg`} />
            <span className="pl-4 font-medium">{name}</span>
            <div className="flex gap-2">
                <button className="text-blue-400 hover:text-blue-300 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <circle cx="12" cy="12" r="10" strokeWidth="2" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                    </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-300 rounded-full p-1">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default TrackingItemCard; 