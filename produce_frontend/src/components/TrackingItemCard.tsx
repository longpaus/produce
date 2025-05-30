function TrackingItemCard({ name, color }: { name: string, color: string}) {

    return (
        <div
            className={`flex items-center justify-between p-4 mb-2 rounded-lg relative overflow-hidden`}
        >
            <div className={`absolute left-0 top-0 bottom-0 w-4 ${color} rounded-l-lg`} />
            <span className="pl-4">{name}</span>
            <button className="text-blue-400 rounded-full p-1">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <circle cx="12" cy="12" r="10" strokeWidth="2" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3" />
                </svg>
            </button>
        </div>
    )
}

export default TrackingItemCard; 