
import React from 'react';

const Logo = ({ className = '' }: { className?: string }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img 
        src="/lovable-uploads/5a62338a-981b-460b-8a33-12b4713ac4b2.png" 
        alt="RNP IT Solution Logo" 
        className="h-10" 
      />
    </div>
  );
};

export default Logo;
