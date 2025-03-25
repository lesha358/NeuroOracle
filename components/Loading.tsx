import React from 'react';

interface LoadingProps {
  message: string;
}

export default function Loading({ message }: LoadingProps): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <div className="flex items-center space-x-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gray-900"></div>
            <p className="text-xl font-medium text-gray-900">{message}</p>
          </div>
        </main>
      </div>
    </div>
  );
} 