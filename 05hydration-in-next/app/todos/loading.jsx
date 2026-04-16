

function loading() {
  return (
   <div className="flex flex-col gap-4 p-5">
      {[...Array(5)].map((_, i) => (
        <div
          key={i}
          className="flex items-center gap-4 p-4 rounded-lg bg-gray-100"
        >
          {/* Checkbox */}
          <div className="w-5 h-5 rounded bg-gray-300 relative overflow-hidden">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
          </div>

          {/* Text */}
          <div className="flex-1 space-y-2">
            <div className="h-3 w-1/3 bg-gray-300 rounded relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>

            <div className="h-3 w-2/3 bg-gray-300 rounded relative overflow-hidden">
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/60 to-transparent"></div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default loading