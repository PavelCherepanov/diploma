import React from 'react';

const NotFoundComponent = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-200">
          <h1 className="text-5xl font-bold text-gray-800 mb-4">404</h1>
          <p className="text-xl text-gray-600">Упс! Страница не найдена</p>
        </div>
      );
}

export default NotFoundComponent;