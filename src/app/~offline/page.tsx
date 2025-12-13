"use client";

import { FiWifiOff } from "react-icons/fi";

export default function OfflineFallback() {
  return (
    <main className="min-h-screen flex-col flex items-center justify-center bg-light-bg dark:bg-dark-bg text-light-accent dark:text-white px-6">
      <div className="text-center max-w-md">
        <FiWifiOff className="text-6xl mx-auto mb-6 text-blue-400" />
        <h1 className="text-4xl font-bold mb-4">You&apos;re Offline</h1>
        <p className="text-gray-400 mb-8">
          It seems you&apos;re not connected to the internet. Please check your connection and try again.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-semibold transition-colors"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}
