import React from 'react';
import { ArrowDown } from 'lucide-react';
import FinancialIndependenceBanner from './FinancialIndependenceBanner';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#F7F0E6] via-white to-[#FFF9F0] py-10 md:py-16 lg:py-24">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#E31837] rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#6A0DAD] rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-[#FFD700] rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="mb-8 mt-2"><FinancialIndependenceBanner /></div>
        <div className="text-center max-w-5xl mx-auto">
          {/* TÍTULO PRINCIPAL E HEADLINE JUNTOS */}
          <div className="mb-8">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tight mb-6 drop-shadow">
              <span className="text-[#6A0DAD]">Transforme</span> <span className="text-[#E31837] bg-[#E31837]/10 px-3 py-1 rounded-lg">R$10</span> <span className="text-[#6A0DAD]">em</span> <span className="text-[#E31837]">SUA PRIMEIRA RENDA</span> <span className="block text-[#6A0DAD] mt-2">em 48 Horas</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-800 leading-relaxed">
              <span className="text-2xl">🍎</span> <strong>GUIA MAÇÃS GOURMET:</strong> O método infalível que já colocou <span className="font-black text-[#27AE60] bg-[#27AE60]/10 px-2 py-1 rounded">R$3.800/mês</span> no bolso de 
              <span className="font-black text-[#E31837] bg-[#E31837]/10 px-2 py-1 rounded ml-1">5.327 mulheres</span> - mesmo se você nunca fez um doce ou acha que não nasceu pra cozinha!
            </p>
            
            <div className="w-32 h-1 bg-gradient-to-r from-[#E31837] to-[#FFD700] mx-auto rounded-full mt-6"></div>
          </div>
          
          {/* IMAGEM MOCKUP CENTRALIZADA */}
          <div className="mb-12 flex justify-center">
            <img 
              src="https://i.postimg.cc/MGrLqvZY/transferir.jpg" 
              alt="Maçãs gourmet decoradas profissionalmente" 
              className="w-full max-w-4xl rounded-3xl shadow-2xl border-4 border-white object-cover"
            />
          </div>
          
          {/* CTA BUTTON */}
          <div>
            <a href="#oportunidade-unica" role="button" className="bg-gradient-to-r from-[#6A0DAD] to-[#6A0DAD] hover:from-[#6A0DAD]/90 hover:to-[#6A0DAD] text-white font-black text-base md:text-3xl py-4 px-2 md:px-12 rounded-2xl shadow-2xl shadow-[#6A0DAD]/40 transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center mx-auto w-full max-w-lg animate-pulse-slow text-center leading-tight">
              <span className="block w-full text-[21px] md:text-3xl leading-tight">QUERO MINHA LIBERDADE FINANCEIRA</span>
              <span className="text-[#FFD700] text-base md:text-2xl font-bold block w-full mt-1">AGORA MESMO!</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;