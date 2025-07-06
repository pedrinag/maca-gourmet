import React from 'react';
import { ArrowRight } from 'lucide-react';

const FinancialIndependenceBanner = () => (
  <div className="w-full flex justify-center">
    <div
      className="flex items-center justify-between gap-2 px-4 py-2 md:px-8 md:py-3 rounded-full border border-[#6A0DAD] bg-[#6A0DAD] shadow-sm max-w-2xl w-full text-white text-sm md:text-lg font-black transition-all duration-200"
      style={{backdropFilter: 'blur(2px)'}}
    >
      <span className="text-center w-full whitespace-normal">
        SUA INDEPENDÊNCIA FINANCEIRA COMEÇA HOJE!
      </span>
      <ArrowRight className="w-5 h-5 text-white flex-shrink-0" />
    </div>
  </div>
);

export default FinancialIndependenceBanner; 