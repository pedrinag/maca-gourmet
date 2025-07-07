import React from 'react';
import { Gift, Calculator, Cake, MessageCircle, Palette, Star } from 'lucide-react';

const BonusSection = () => {
  const bonuses = [
    {
      icon: <Calculator className="w-8 h-8" />,
      title: "GUIA DE PRECIFICAÇÃO",
      description: "Aprenda a cobrar R$12 numa maçã que custou R$2",
      image: "https://i.postimg.cc/DZvrb8dM/20250517-2003-Guia-com-Macas-do-Amor-remix-01jvg7rqjtfs6vgn26cwg85stp-removebg-preview-200x300.webp",
      value: "R$ 17",
      features: ["Planilha automática", "Cálculo de lucro", "Estratégias de preço"]
    },
    {
      icon: <Cake className="w-8 h-8" />,
      title: "RECEITAS DE CONES TRUFADOS",
      description: "Sobremesas de R$15 com sobras de chocolate",
      image: "https://i.postimg.cc/Fzq3qGtM/20250517-2016-Capa-Aperfeicoada-de-Ebook-remix-01jvg8h15pfmytyjtaz6dafzta-removebg-preview-300x300.webp",
      value: "R$ 27",
      features: ["5 receitas exclusivas", "Técnicas profissionais", "Dicas de apresentação"]
    },
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "KIT EMPREENDEDORA",
      description: "Venda no WhatsApp com modelos prontos",
      image: "https://i.postimg.cc/rFB5NhNW/20250517-2013-Ebook-Empreendedorismo-Moderno-remix-01jvg89tcdf038t4epzhtapwgy-removebg-preview-300x3.webp",
      value: "R$ 37",
      features: ["Scripts de vendas", "Templates prontos", "Estratégias digitais"]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "GUIA CRIAÇÃO DE LOGOMARCA",
      description: "Identidade profissional sem designer: Crie no celular",
      image: "https://i.postimg.cc/cJmYZdyM/20250517-2007-Camiseta-com-Nova-Logo-remix-01jvg7z1n9eyw81s8a0v8c648a-removebg-preview-300x300.webp",
      value: "R$ 19",
      features: ["Tutorial passo a passo", "Apps gratuitos", "Identidade visual"]
    }
  ];

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-[#E31837]">
              SEUS PRESENTES ESPECIAIS HOJE:
            </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Bonuses Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {bonuses.map((bonus, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-[#FFD700] overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Bonus Header */}
              <div className="bg-[#F7F0E6] p-6">
                <div className="flex items-center justify-center mb-4">
                  <span className="text-sm font-bold text-[#E31837] line-through mr-1">de {bonus.value}</span>
                  <span className="text-sm font-bold text-[#333333] mx-1">por</span>
                  <span className="text-sm font-black text-[#FFD700] ml-1">GRÁTIS!</span>
                </div>
                
                <img 
                  src={bonus.image} 
                  alt={bonus.title} 
                  className="w-full h-48 object-contain rounded-xl border-2 border-[#FFD700] bg-white mx-auto"
                />
              </div>

              {/* Bonus Content */}
              <div className="p-6">
                <h3 className="text-lg font-black text-[#333333] mb-3">
                  {bonus.title}
                </h3>
                <p className="text-[#333333] text-sm mb-4">
                  {bonus.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-4">
                  {bonus.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-[#E31837] rounded-full flex items-center justify-center">
                        <span className="text-white text-xs">✓</span>
                      </div>
                      <span className="text-xs text-[#333333] font-bold">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Bonus Badge */}
                <div className="bg-[#E31837] text-white text-center py-2 rounded-lg font-bold text-sm">
                  🎁 BÔNUS EXCLUSIVO
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Total Value Section - NOVO BLOCO */}
        <div className="text-center" id="oportunidade-unica">
          <div className="bg-[#E31837] rounded-2xl p-8 shadow-lg border-2 border-[#6A0DAD] max-w-3xl mx-auto flex flex-col items-center">
            {/* Logo grande */}
            <img
              src="https://i.postimg.cc/Z5V7S4w8/20250517-1952-Logo-Macas-do-Amor-remix-01jvg757psfn2svdm2dp084cnp-removebg-preview-150x150.webp"
              alt="Logo Maçãs Gourmet"
              className="w-24 h-24 md:w-32 md:h-32 object-contain mb-4"
            />
            {/* Títulos */}
            <h2 className="text-2xl md:text-3xl font-black text-[#FFD700] mb-2 uppercase tracking-tight">OPORTUNIDADE ÚNICA!</h2>
            <h3 className="text-lg md:text-xl font-black text-white mb-4">ADQUIRINDO HOJE, VOCÊ LEVA 4 BÔNUS EXCLUSIVOS:</h3>
            {/* Lista dos bônus */}
            <ul className="text-left max-w-md mx-auto mb-6">
              <li className="flex items-center gap-2 mb-2">
                <span className="flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7 14.5L12 19.5L21 9.5" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <span className="font-bold text-white text-base uppercase">GUIA DE RECEITAS MAÇÃS DO AMOR GOURMET</span>
              </li>
              {bonuses.map((bonus, idx) => (
                <li key={idx} className="flex items-center gap-2 mb-2">
                  <span className="inline-block w-5 h-5 flex items-center justify-center">
                    <Gift className="w-5 h-5 text-[#FFD700]" />
                  </span>
                  <span className="font-bold text-white text-base">{bonus.title} <span className="font-black">(BÔNUS GRÁTIS)</span></span>
                </li>
              ))}
            </ul>
            {/* Preço e oferta - sem quadrado branco */}
            <div className="flex flex-col items-center mb-6 w-full max-w-xs mx-auto">
              <div className="text-lg font-bold text-[#FFD700] mb-1">DE: <span className="line-through">R$ 100</span></div>
              <div className="text-base font-black text-white mb-1 uppercase">por apenas</div>
              <div className="text-5xl md:text-6xl font-black text-[#51ff51] mb-1 leading-tight">R$ 10</div>
              <div className="text-base font-bold text-white mb-1 uppercase">pagamento único</div>
            </div>
            {/* Botão */}
            <a href="https://maca-gourmet.pay.yampi.com.br/r/4YZR67H8A8" target="_blank" rel="noopener noreferrer" role="button" className="bg-gradient-to-r from-[#6A0DAD] to-[#6A0DAD] hover:from-[#6A0DAD]/90 hover:to-[#6A0DAD] text-white font-black text-lg md:text-2xl py-4 px-2 md:px-12 rounded-2xl shadow-2xl shadow-[#6A0DAD]/40 transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center mx-auto w-full max-w-lg animate-pulse-slow text-center leading-tight mb-4">
              <span className="block w-full text-lg md:text-2xl leading-tight">SIM! EU QUERO O GUIA MAÇÃS GOURMET</span>
            </a>
            {/* Frases de urgência */}
            <div className="text-white text-base font-bold mb-1">APROVEITE AGORA: <span className="font-normal text-[#FFD700]">Você <u className='text-white'>NÃO vai encontrar</u> esse preço depois.</span></div>
            <div className="text-white text-base font-bold">Na sua <span className="text-[#FFD700]">PRIMEIRA VENDA</span> você recupera o <span className="text-[#FFD700]">VALOR DO GUIA!</span></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BonusSection;