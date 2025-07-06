import React from 'react';
import { Shield, Mail, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#333333] text-white py-12">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <div className="flex items-center gap-3 justify-center md:justify-start mb-4">
              <img
                src="https://i.postimg.cc/Z5V7S4w8/20250517-1952-Logo-Macas-do-Amor-remix-01jvg757psfn2svdm2dp084cnp-removebg-preview-150x150.webp"
                alt="Logo Maçãs Gourmet"
                className="w-14 h-14 object-contain"
              />
              <h3 className="text-xl font-black text-[#E31837]">Guia Maçãs Gourmet</h3>
            </div>
            <p className="text-gray-300 text-sm">
              O método que já transformou a vida de mais de 5.327 mulheres, 
              proporcionando independência financeira através das maçãs gourmet.
            </p>
          </div>

          {/* Contact Info */}
          <div className="text-center">
            <h4 className="text-lg font-bold mb-4 text-[#FFD700]">Suporte</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-center gap-2">
                <Mail className="w-4 h-4 text-[#E31837]" />
                <span className="text-gray-300 text-sm">suportemacasgourmett@gmail.com</span>
              </div>
            </div>
          </div>

          {/* Guarantee */}
          <div className="text-center md:text-right">
            <div className="flex items-center gap-2 justify-center md:justify-end mb-4">
              <Shield className="w-5 h-5 text-[#E31837]" />
              <h4 className="text-lg font-bold text-[#FFD700]">Garantia Total</h4>
            </div>
            <p className="text-gray-300 text-sm">
              7 dias de garantia incondicional. Se não funcionar, 
              devolvemos 100% do seu investimento.
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gray-600 mb-6"></div>

        {/* Bottom Section */}
        <div className="text-center">
          <div className="bg-gray-700 rounded-xl p-4 mb-4">
            <p className="text-gray-300 text-xs">
              <strong className="text-white">Aviso Legal:</strong> Os resultados podem variar de pessoa para pessoa. 
              Este produto não garante renda específica e depende do seu esforço e dedicação. 
              Todas as informações são baseadas em experiências reais de nossas alunas.
            </p>
          </div>
          
          <div className="flex items-center justify-center gap-3 text-xs text-gray-400">
            <span>Copyright © 2024</span>
            <span>•</span>
            <span>Todos os direitos reservados</span>
            <span>•</span>
            <span>Guia Maçãs Gourmet</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;