import React from 'react';
import { Shield, Clock, ArrowRight, AlertTriangle, CheckCircle, Star } from 'lucide-react';

const GuaranteeSection = () => {
  const guaranteeFeatures = [
    { text: "Método 100% testado e aprovado", icon: "✅" },
    { text: "Suporte via WhatsApp", icon: "📱" },
    { text: "Garantia de 7 dias", icon: "🛡️" },
    { text: "Acesso imediato ao conteúdo", icon: "⚡" }
  ];

  const risks = [
    { text: "Risco financeiro", icon: "❌" },
    { text: "Complicações burocráticas", icon: "❌" },
    { text: "Necessidade de investimento alto", icon: "❌" },
    { text: "Experiência prévia obrigatória", icon: "❌" }
  ];

  return (
    <section className="py-16 bg-[#F7F0E6]">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="bg-white rounded-2xl shadow-xl border-2 border-[#FFD700] overflow-hidden">
          {/* Header Section */}
          <div className="bg-[#E31837] p-8 text-white text-center">
            <div className="flex flex-col items-center justify-center mb-4">
              <img src="https://i.postimg.cc/HxjtHMrH/selo-de-qualidade-garantida-150x150.webp" alt="Selo de Garantia" className="w-20 h-20 md:w-24 md:h-24 mb-2 drop-shadow" />
            </div>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              GARANTIA TOTAL:
            </h2>
            <h2 className="text-2xl md:text-3xl font-black text-[#FFD700] mb-4">
              RISCO ZERO PARA VOCÊ!
            </h2>
            <div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
          </div>

          {/* Main Promise */}
          <div className="p-8">
            <div className="bg-[#E31837] rounded-2xl p-6 text-white text-center mb-8">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Star className="w-6 h-6 text-[#FFD700]" />
                <h3 className="text-xl md:text-2xl font-black">
                  MINHA PROMESSA PARA VOCÊ:
                </h3>
                <Star className="w-6 h-6 text-[#FFD700]" />
              </div>
              
              <div className="bg-white/20 rounded-xl p-4">
                <p className="text-base md:text-lg font-medium">
                  "Se você seguir o método do <strong className="text-[#FFD700]">Guia Maçãs Gourmet</strong> e não conseguir vender nem uma maçã, 
                  eu <strong className="text-[#FFD700]">DEVOLVO SEUS R$10</strong> sem fazer pergunta alguma!"
                </p>
              </div>
            </div>

            <div className="bg-[#FFD700] rounded-2xl p-6 text-[#E31837] text-center mb-8 flex flex-col items-center">
              <div className="text-6xl md:text-7xl font-black text-white mb-2 drop-shadow-lg">R$ 10</div>
              <span className="bg-[#E31837] text-white rounded-lg px-3 py-1 text-base font-black shadow border border-[#FFD700] mb-2">ECONOMIZE R$ 90</span>
              <div className="text-lg font-bold text-white text-center">
                Aproveite: de <span className="line-through opacity-60">R$ 100</span> por apenas <span className="font-black text-2xl text-[#6A0DAD]">R$ 10!</span>
              </div>
            </div>

            {/* Features vs Risks Comparison */}
            {/* bloco removido conforme solicitado */}

            {/* Urgency Section */}
            {/* bloco de destaque removido conforme solicitado */}

            {/* Final CTA */}
            <a href="#oportunidade-unica" role="button" className="bg-gradient-to-r from-[#6A0DAD] to-[#6A0DAD] hover:from-[#6A0DAD]/90 hover:to-[#6A0DAD] text-white font-black text-base md:text-3xl py-4 px-2 md:px-12 rounded-2xl shadow-2xl shadow-[#6A0DAD]/40 transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center mx-auto w-full max-w-lg animate-pulse-slow text-center leading-tight mb-4">
              <span className="block w-full text-[21px] md:text-3xl leading-tight">QUERO MINHA LIBERDADE FINANCEIRA</span>
              <span className="text-[#FFD700] text-base md:text-2xl font-bold block w-full mt-1">AGORA MESMO!</span>
            </a>

            {/* Time Limit */}
            <div className="bg-[#FFD700] text-[#333333] rounded-xl p-4 font-black text-lg max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Clock className="w-6 h-6" />
                <span>⏰ Oferta válida apenas até às 23:59 de hoje!</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuaranteeSection;