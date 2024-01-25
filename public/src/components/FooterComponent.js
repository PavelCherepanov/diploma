import React from 'react';

const FooterComponent = () => {
  return (
  
    <footer className="bg-gray-800">
        <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">LinkedIn</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M5 4h3v12H5V4zm1.5 13.5a1.5 1.5 0 0 1-1.5-1.5V8h-1v8a2.5 2.5 0 0 0 2.5 2.5h10v-1h-10z"
                />
              </svg>
            </a>

            <a href="#" className="text-gray-400 hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.75 8.15 6.63 9.62.48.09.65-.21.65-.47v-1.66c-2.69.59-3.26-1.29-3.26-1.29-.44-1.12-1.08-1.42-1.08-1.42-.89-.61.07-.6.07-.6.99.07 1.51 1.02 1.51 1.02.88 1.51 2.31 1.07 2.88.82.1-.65.34-1.07.62-1.32-2.18-.25-4.47-1.11-4.47-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.03.8-.22 1.65-.33 2.5-.33s1.7.11 2.5.33c1.91-1.3 2.75-1.03 2.75-1.03.55 1.38.21 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.29 4.68-4.48 4.93.35.31.67.92.67 1.86v2.75c0 .26.17.56.66.47C19.25 20.15 22 16.42 22 12c0-5.52-4.48-10-10-10z"
                />
              </svg>
            </a>
          </div>
          <p className="mt-8 text-center text-base text-gray-400">&copy; 2024 Диплом</p>
        </div>
      </footer>
      
  );
};

export default FooterComponent;