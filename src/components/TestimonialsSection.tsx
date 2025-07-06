import React from 'react';
import { Star, MapPin, Quote, TrendingUp, DollarSign } from 'lucide-react';

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carla",
      location: "BA",
      text: "Comprei com medo, fiz R$180 em 3 dias!",
      image: "https://i.postimg.cc/28PjxNQx/84e43533-2ff7-4bce-8d34-d5d4106dac0f.jpg",
      rating: 5,
      result: "R$ 180",
      timeframe: "3 dias"
    },
    {
      name: "Fernanda",
      location: "RO", 
      text: "Vendi 32 maçãs com fogão de botão!",
      image: "https://i.postimg.cc/7YCY7Z26/a5ebd33f-865e-4863-bfbb-9515197b13c0.jpg",
      rating: 5,
      result: "32 maçãs",
      timeframe: "1 semana"
    },
    {
      name: "Maria",
      location: "CE",
      text: "87 maçãs vendidas mesmo com fogão ruim!",
      image: "https://i.postimg.cc/fyPzF66D/df7745ef-a1c5-4579-b7ab-e7cee1f8fd0d.jpg",
      rating: 5,
      result: "87 maçãs",
      timeframe: "1 mês"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <TrendingUp className="w-8 h-8 text-[#E31837]" />
            <h2 className="text-3xl md:text-4xl font-black text-[#E31837]">
              OLHA O QUE MINHAS<br className="hidden md:inline" /> ALUNAS CONQUISTARAM:
            </h2>
          </div>
          <div className="w-24 h-1 bg-[#FFD700] mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-[#333333] max-w-2xl mx-auto">
            Resultados reais de mulheres que transformaram suas vidas com o método
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg border-2 border-[#FFD700] overflow-hidden hover:shadow-xl transition-all duration-300">
              {/* Testimonial Header */}
              <div className="bg-[#F7F0E6] p-6 text-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name} 
                  className="w-16 h-16 rounded-full mx-auto mb-3 border-2 border-[#FFD700] object-cover"
                />
                
                <div className="flex justify-center mb-2">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-[#FFD700] fill-current" />
                  ))}
                </div>
                
                <div className="flex items-center justify-center gap-2 mb-3">
                  <h3 className="text-lg font-black text-[#333333]">{testimonial.name}</h3>
                  <div className="flex items-center gap-1 bg-[#E31837] text-white rounded-lg px-2 py-1">
                    <MapPin className="w-3 h-3" />
                    <span className="text-xs font-bold">{testimonial.location}</span>
                  </div>
                </div>

                {/* Result Highlight */}
                <div className="bg-[#E31837] text-white rounded-xl p-3">
                  <div className="text-xl font-black mb-1">{testimonial.result}</div>
                  <div className="text-sm">em {testimonial.timeframe}</div>
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="p-6">
                <div className="relative mb-4">
                  <Quote className="w-6 h-6 text-[#E31837] absolute -top-1 -left-1" />
                  <p className="text-[#333333] italic pl-5 text-sm font-medium">
                    "{testimonial.text}"
                  </p>
                </div>
                
                <div className="bg-[#E31837] text-white text-center py-2 rounded-lg font-bold text-sm">
                  ✓ RESULTADO VERIFICADO
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA Section */}
        <div className="text-center">
          <div className="bg-[#F7F0E6] rounded-2xl p-8 border-2 border-[#FFD700] max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <h3 className="text-2xl md:text-3xl font-black text-[#333333] w-full text-center">
                VOCÊ PODE SER A PRÓXIMA!
              </h3>
            </div>
            
            <div className="bg-white rounded-xl p-6 border border-[#FFD700] mb-6">
              <p className="text-lg md:text-xl font-bold text-[#333333]">
                Junte-se às mais de <span className="text-[#E31837]">5.327 mulheres</span> que já mudaram de vida
              </p>
            </div>

            {/* Success Stats */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl p-4 border border-[#FFD700]">
                <div className="text-2xl font-black text-[#E31837] mb-1">98%</div>
                <div className="text-sm font-bold text-[#333333]">Taxa de sucesso</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#FFD700]">
                <div className="text-2xl font-black text-[#E31837] mb-1">R$ 3.800</div>
                <div className="text-sm font-bold text-[#333333]">Faturamento médio</div>
              </div>
              <div className="bg-white rounded-xl p-4 border border-[#FFD700]">
                <div className="text-2xl font-black text-[#E31837] mb-1">48h</div>
                <div className="text-sm font-bold text-[#333333]">Primeira venda</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;