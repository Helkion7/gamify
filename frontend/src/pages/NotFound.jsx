import React, { useState } from "react";
import BlurText from "../snippets/BlurText";
import { Home, RefreshCw } from "lucide-react";

const NotFound = () => {
  const [isSpinning, setIsSpinning] = useState(false);

  const handleRefreshClick = () => {
    setIsSpinning(true);
    setTimeout(() => setIsSpinning(false), 1000);
  };

  const handleAnimationComplete = () => {
    console.log("Animation completed!");
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-white to-gray-100 p-4">
      <div className="relative">
        <div className="absolute inset-0 blur-3xl bg-blue-200/30 rounded-full animate-pulse" />
        <div className="relative">
          <BlurText
            text="404"
            delay={150}
            animateBy="chars"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-8xl font-bold text-gray-800 mb-4"
          />
        </div>
      </div>

      <BlurText
        text="Oops! Page not found"
        delay={200}
        animateBy="words"
        direction="bottom"
        className="text-2xl text-gray-600 mt-8 mb-12"
      />

      <p className="text-gray-500 text-center max-w-md mb-8">
        Looks like you've wandered into the void. Don't worry, it happens to the
        best of us!
      </p>

      <div className="flex gap-4">
        <button
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors shadow-lg hover:shadow-xl"
          onClick={() => (window.location.href = "/")}
        >
          <Home size={20} />
          Go Home
        </button>

        <button
          className="flex items-center gap-2 px-6 py-3 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors shadow-lg hover:shadow-xl"
          onClick={handleRefreshClick}
        >
          <RefreshCw
            size={20}
            className={`transition-transform duration-1000 ${
              isSpinning ? "rotate-360" : ""
            }`}
          />
          Try Again
        </button>
      </div>
    </div>
  );
};

export default NotFound;
