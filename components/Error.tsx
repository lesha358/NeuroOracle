import React from 'react';

export interface ErrorProps {
  message: string;
}

export default function Error({ message }: ErrorProps): React.ReactElement {
  return (
    <div className="min-h-screen bg-gray-50 px-4 py-16 sm:px-6 sm:py-24 md:grid md:place-items-center lg:px-8">
      <div className="max-w-max mx-auto">
        <main className="sm:flex">
          <p className="text-4xl font-extrabold text-red-600 sm:text-5xl">Ошибка</p>
          <div className="sm:ml-6">
            <div className="sm:border-l sm:border-gray-200 sm:pl-6">
              <p className="text-lg font-medium text-gray-900">{message}</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
} 