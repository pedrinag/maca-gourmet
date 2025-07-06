import React, { useState, useEffect } from 'react';
import { Check, ChefHat, TrendingUp, Package, DollarSign } from 'lucide-react';

const ContentSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const recipes = [
    {
      title: "Maçã do Amor Tradicional",
      subtitle: "Ponto PERFEITO da calda que nunca desanda",
      image: "https://i.postimg.cc/ryg8W9pn/img-01.webp"
    },
    {
      title: "Brigadeiro COM Granulado",
      subtitle: "Cobertura que brilha por 3 dias",
      image: "https://i.postimg.cc/NMBc2yvv/img-02.webp"
    },
    {
      title: "Chocolate Branco com Coco",
      subtitle: "Feito com chocolate de R$5 do mercado",
      image: "https://i.postimg.cc/Tw0XVRTL/img-03.webp"
    },
    {
      title: "Nutella com Castanhas",
      subtitle: "O sabor premium que vende a R$15 cada",
      image: "https://i.postimg.cc/Fzn56Ddh/img-04.webp"
    },
    {
      title: "Mel com Canela",
      subtitle: "A receita que vende o ano todo",
      image: "https://i.postimg.cc/Nf5wXqSF/img-05.webp"
    },
    {
      title: "E MUITOS OUTROS SABORES…",
      subtitle: "Variantes com corante de supermercado",
      image: "https://i.postimg.cc/fRdnH7wh/img-06.webp"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % recipes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const benefits = [
    { text: "Fáceis de fazer", icon: "👌" },
    { text: "Zero bolhas, zero grude", icon: "✨" }, 
    { text: "Não precisa de ingredientes caros", icon: "💰" },
    { text: "Ingredientes acessíveis", icon: "🛒" },
    { text: "Custo de produção baixíssimo", icon: "📉" },
    { text: "Lucro de até 300%", icon: "📈" }
  ];

  const modules = [
    {
      icon: <ChefHat className="w-6 h-6" />,
      title: "Produção à Prova de Erros",
      image: "https://i.postimg.cc/hPLtNpqV/4b816294da8d2362fa43458fdb182dc1-300x291.webp",
      benefits: benefits
    },
    {
      icon: <DollarSign className="w-6 h-6" />,
      title: "Técnicas de Venda",
      image: "https://i.postimg.cc/MHbJ33jT/dinheiro-esquecido-e1714744810834-300x300.webp",
      benefits: [
        { text: "Venda online e presencial", icon: "🌐" },
        { text: "Como fidelizar clientes", icon: "❤️" },
        { text: "Estratégias de precificação", icon: "💎" },
        { text: "Marketing no WhatsApp", icon: "📱" }
      ]
    },
    {
      icon: <Package className="w-6 h-6" />,
      title: "Embalagem e Armazenamento",
      image: "https://i.postimg.cc/fTwGTK9c/20250517-1940-Macas-Decoradas-remix-01jvg6dvdyf7cb6p5xpb30cvys-300x300.webp",
      benefits: [
        { text: "Armazenamento correto", icon: "📦" },
        { text: "Dicas de embalagem", icon: "🎁" },
        { text: "Manter durabilidade e brilho", icon: "✨" },
        { text: "Transporte seguro", icon: "🚚" },
        { text: "Apresentação profissional", icon: "👑" },
        { text: "Redução de desperdícios", icon: "♻️" }
      ]
    }
  ];

  return (
    <section className="pt-6 md:pt-12 pb-12 md:pb-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black text-[#E31837] mb-4">
            O QUE VOCÊ VAI APRENDER HOJE:
          </h2>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full"></div>
        </div>

        {/* Recipe Carousel */}
        <div className="mb-16">
          <div className="max-w-3xl mx-auto">
            <div className="bg-[#E31837] rounded-2xl p-8 text-white text-center shadow-lg h-[420px] md:h-[500px] flex flex-col justify-center items-center overflow-hidden">
              <img 
                src={recipes[currentSlide].image}
                alt={recipes[currentSlide].title}
                className="w-full h-56 md:h-72 object-cover rounded-xl mb-4 mx-auto"
              />
              <h3 className="text-2xl md:text-3xl font-black mb-4">
                {recipes[currentSlide].title}
              </h3>
              <p className="text-lg text-[#FFD700] font-bold">
                {recipes[currentSlide].subtitle}
              </p>
              
              {/* Progress Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {recipes.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide 
                        ? 'bg-[#FFD700]' 
                        : 'bg-white/50 hover:bg-white/70'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content Modules Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-[#FFD700] overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Module Header */}
              <div className="bg-[#F7F0E6] p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#E31837] rounded-lg flex items-center justify-center text-white">
                    {module.icon}
                  </div>
                  <h3 className="text-xl font-black text-[#333333]">
                    {module.title}
                  </h3>
                </div>
                
                <img 
                  src={module.image} 
                  alt={module.title} 
                  className="w-full h-60 object-cover rounded-xl border-2 border-[#FFD700]"
                />
              </div>

              {/* Benefits List */}
              <div className="p-6">
                <div className="space-y-3">
                  {module.benefits.map((benefit, benefitIndex) => (
                    <div key={benefitIndex} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#E31837] rounded-lg flex items-center justify-center">
                        <span className="text-sm">{benefit.icon}</span>
                      </div>
                      <span className="text-[#333333] font-medium">
                        {benefit.text}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-[#F7F0E6] rounded-2xl p-8 border-2 border-[#FFD700] max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <TrendingUp className="w-8 h-8 text-[#E31837]" />
              <h3 className="text-2xl md:text-3xl font-black text-[#333333]">E MUITO MAIS!</h3>
            </div>
            <p className="text-lg text-[#333333]">
              Técnicas secretas, dicas profissionais e tudo que você precisa para ter 
              <span className="text-[#E31837] font-black"> SUCESSO GARANTIDO!</span>
            </p>
          </div>
        </div>

        <a href="#oportunidade-unica" role="button" className="bg-gradient-to-r from-[#6A0DAD] to-[#6A0DAD] hover:from-[#6A0DAD]/90 hover:to-[#6A0DAD] text-white font-black text-base md:text-3xl py-4 px-2 md:px-12 rounded-2xl shadow-2xl shadow-[#6A0DAD]/40 transform hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center mx-auto w-full max-w-lg animate-pulse-slow text-center leading-tight mt-8">
          <span className="block w-full text-[21px] md:text-3xl leading-tight">QUERO MINHA LIBERDADE FINANCEIRA</span>
          <span className="text-[#FFD700] text-base md:text-2xl font-bold block w-full mt-1">AGORA MESMO!</span>
        </a>
      </div>
    </section>
  );
};

export default ContentSection;