
import React from 'react';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 bg-primary rounded-full opacity-70 animate-pulse"></div>
        <div className="absolute inset-1 bg-background rounded-full flex items-center justify-center">
          <div className="w-3 h-3 bg-primary rounded-full"></div>
        </div>
      </div>
      <span className="font-bold text-xl tracking-tight">RNP IT SOLUTION</span>
    </div>
  );
};

export default Logo;
