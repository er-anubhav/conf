import React from "react";

interface ComingSoonProps {
  message?: string;
  date?: string;
}

const Schedule: React.FC<ComingSoonProps> = ({ message, date }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-2 sm:px-4">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Coming Soon</h1>
        {message && <p className="mt-4 text-lg text-gray-600">{message}</p>}
        {date && (
          <p className="mt-2 text-sm text-gray-500">
            Expected launch date: <span className="font-medium">{date}</span>
          </p>
        )}
      </div>
    </div>
  );
};

export default Schedule;
