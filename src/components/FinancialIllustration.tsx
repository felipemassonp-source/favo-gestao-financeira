import React from 'react';

export default function FinancialIllustration() {
  return (
    <div className="w-full h-full min-h-[300px] flex items-center justify-center p-8 bg-[#FFFFFF] border border-[#472f5b]/10 group hover:border-[#D8B36B]/50 transition-colors">
      <svg 
        viewBox="0 0 400 300" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full max-w-[320px] transform group-hover:scale-105 transition-transform duration-700 ease-out"
      >
        {/* Background shadow/accent */}
        <rect x="70" y="50" width="180" height="220" rx="4" fill="#D8B36B" fillOpacity="0.1" />
        
        {/* Main Document (Report) */}
        <rect x="50" y="30" width="180" height="220" rx="4" fill="#FFFFFF" stroke="#472f5b" strokeWidth="3" />
        
        {/* Report Header */}
        <rect x="75" y="60" width="70" height="12" rx="6" fill="#472f5b" />
        <rect x="155" y="60" width="30" height="12" rx="6" fill="#D8B36B" />
        
        {/* Report Content Lines */}
        <rect x="75" y="90" width="130" height="4" rx="2" fill="#2a3a1e" fillOpacity="0.3" />
        <rect x="75" y="105" width="110" height="4" rx="2" fill="#2a3a1e" fillOpacity="0.3" />
        <rect x="75" y="120" width="120" height="4" rx="2" fill="#2a3a1e" fillOpacity="0.3" />
        
        {/* Bar Chart inside Report */}
        <rect x="75" y="150" width="16" height="60" rx="2" fill="#472f5b" />
        <rect x="101" y="170" width="16" height="40" rx="2" fill="#D8B36B" />
        <rect x="127" y="140" width="16" height="70" rx="2" fill="#472f5b" />
        <rect x="153" y="160" width="16" height="50" rx="2" fill="#2a3a1e" />
        <rect x="179" y="130" width="16" height="80" rx="2" fill="#D8B36B" />
        
        {/* Bottom line */}
        <rect x="75" y="210" width="130" height="2" fill="#472f5b" fillOpacity="0.2" />
        
        {/* Floating Bank Document (Invoice / Receipt) */}
        <g transform="translate(160, 90)">
          <rect x="0" y="0" width="140" height="160" rx="4" fill="#FFFFFF" stroke="#472f5b" strokeWidth="3" />
          <path d="M 20 140 L 120 140" stroke="#D8B36B" strokeWidth="3" strokeLinecap="round" strokeDasharray="6 6" />
          
          {/* Bank/Invoice Logo */}
          <circle cx="35" cy="35" r="12" fill="#D8B36B" fillOpacity="0.2" stroke="#D8B36B" strokeWidth="2" />
          
          {/* Invoice Header */}
          <rect x="55" y="28" width="60" height="6" rx="3" fill="#472f5b" />
          <rect x="55" y="38" width="40" height="4" rx="2" fill="#2a3a1e" fillOpacity="0.3" />
          
          {/* Invoice Rows */}
          <rect x="20" y="70" width="70" height="6" rx="3" fill="#2a3a1e" fillOpacity="0.2" />
          <rect x="100" y="70" width="20" height="6" rx="3" fill="#472f5b" />
          
          <rect x="20" y="85" width="50" height="6" rx="3" fill="#2a3a1e" fillOpacity="0.2" />
          <rect x="100" y="85" width="20" height="6" rx="3" fill="#472f5b" />
          
          <rect x="20" y="100" width="60" height="6" rx="3" fill="#2a3a1e" fillOpacity="0.2" />
          <rect x="100" y="100" width="20" height="6" rx="3" fill="#D8B36B" />
          
          {/* Checkmark icon for paid invoice */}
          <g transform="translate(100, 115)">
            <circle cx="10" cy="10" r="10" fill="#D8B36B" />
            <path d="M 6 10 L 9 13 L 14 7" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </g>
        </g>
      </svg>
    </div>
  );
}
