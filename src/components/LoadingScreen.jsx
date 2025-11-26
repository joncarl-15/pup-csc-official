import React from 'react'
import cscLogo from '../Picture/csc-logo.png'

const LoadingScreen = () => {
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 backdrop-blur-xl">
            {/* Blur overlay */}
            <div className="absolute inset-0 bg-white/30 backdrop-blur-md"></div>

            {/* Content */}
            <div className="relative z-10 flex flex-col items-center">
                {/* CSC Logo */}
                <div className="mb-8">
                    <img
                        src={cscLogo}
                        alt="CSC Logo"
                        className="w-32 h-32 md:w-40 md:h-40 object-contain drop-shadow-2xl"
                    />
                </div>

                {/* Loading Text */}
                <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
                    Please wait...
                </h2>

                {/* Loading Spinner */}
                <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-3 h-3 bg-orange-600 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                </div>
            </div>
        </div>
    )
}

export default LoadingScreen
