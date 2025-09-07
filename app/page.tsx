"use client";

import React from "react";
import { Navigation } from "@/components/navigation";
import { FloatingContact } from "@/components/floating-contact";
import { Footer } from "@/components/footer";
import { FAQSection } from "@/components/faq-section";
import { MessageCircle, Star, Award, Users, Clock, Sparkles } from "lucide-react";
import { AcupunctureIcon, MassageIcon, ReikiIcon, HypnosisIcon } from "@/components/service-icons";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <FloatingContact />

      {/* Hero Section */}
      <main>
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" role="banner" aria-labelledby="hero-title">
          {/* Background Image */}
          <div className="absolute inset-0">
            <img 
              src="/images/zen-hero-bg.webp" 
              alt="Zen background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-stone-900/40 via-stone-800/30 to-stone-900/35"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-stone-900/20"></div>
          </div>
          

          
          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-6 text-center">
            <div className="max-w-4xl mx-auto">
          
              <h1 id="hero-title" className="text-4xl md:text-6xl lg:text-7xl font-extralight text-white mb-8 leading-tight">
                Marlene Martins
                <br />
                <span className="text-emerald-300 font-light text-2xl md:text-4xl lg:text-5xl">Medicina Tradicional Chinesa</span>
              </h1>
              <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                Acupuntura • Massagem Terapêutica • Reiki • Hipnose
                <br />
                <span className="text-lg md:text-xl text-white mt-2 block font-semibold">
                  Descubra o equilíbrio perfeito entre corpo e mente
                </span>
              </p>
              <Button 
                size="lg" 
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-light px-6 sm:px-12 py-4 sm:py-6 text-base sm:text-lg rounded-full shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                onClick={() => {
                  const message = encodeURIComponent(
                    "Olá! Gostaria de agendar uma consulta. Pode ajudar-me com os horários disponíveis?"
                  );
                  window.open(`https://wa.me/351910784945?text=${message}`, "_blank");
                }}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                AGENDAR CONSULTA
              </Button>
            </div>
          </div>
          
        </section>

        {/* About Section */}
        <section className="py-20 bg-gradient-to-b from-stone-50 to-white" aria-labelledby="about-title">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 text-center lg:text-left">
                <h2 id="about-title" className="text-4xl md:text-5xl font-light text-stone-800 mb-8 leading-tight">
                  Sobre Marlene Martins
                  <br />
                  <span className="text-emerald-600 text-2xl md:text-3xl">Médica de Medicina Tradicional Chinesa</span>
                </h2>
                
                {/* Badge de Experiência */}
                <div className="flex flex-wrap gap-4 mb-8 justify-center lg:justify-start">
                  <div className="bg-emerald-100 text-emerald-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Award className="w-4 h-4" />
                    +15 Anos de Experiência
                  </div>
                  <div className="bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2">
                    <Star className="w-4 h-4" />
                    Avaliação 5★ Google
                  </div>
                </div>
                
                <div className="space-y-6 text-stone-600 leading-relaxed">
                  <p className="text-lg">
                    <strong>Marlene Martins</strong> é uma acupunturista certificada especializada em medicina tradicional chinesa, dedicando-se a tratamentos personalizados que respeitam a individualidade de cada pessoa.
                  </p>
                  <p className="hidden md:block text-base">
                    A sua abordagem combina técnicas ancestrais milenares com conhecimento moderno, criando um ambiente de cura que promove o equilíbrio natural do corpo e da mente através de <strong>acupuntura</strong>, <strong>massagem terapêutica</strong>, <strong>reiki</strong> e <strong>hipnose</strong>.
                  </p>
                  <p className="text-base">
                    Cada sessão é cuidadosamente planeada para suas necessidades específicas, proporcionando uma experiência transformadora em <strong>Samora Correia</strong>.
                  </p>
                </div>
              </div>
              
              <div className="order-1 lg:order-2 text-center">
                <div className="relative inline-block">
                  <img 
                    src="/images/marlene-martins-profile.webp" 
                    alt="Marlene Martins - Acupunturista e Terapeuta de Medicina Tradicional Chinesa" 
                    className="w-80 h-80 md:w-96 md:h-96 object-cover rounded-full shadow-2xl mx-auto"
                  />
                  <div className="absolute -bottom-4 -right-4 bg-emerald-600 text-white p-4 rounded-full shadow-lg">
                    <Award className="w-8 h-8" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 bg-white" aria-labelledby="services-title">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 id="services-title" className="text-4xl md:text-5xl font-light text-stone-800 mb-6">
                Serviços Especializados
                <br />
                <span className="text-emerald-600 text-2xl md:text-3xl">Medicina Tradicional Chinesa</span>
              </h2>
              <p className="text-xl text-stone-600 max-w-3xl mx-auto leading-relaxed">
                Tratamentos personalizados que combinam sabedoria ancestral com técnicas modernas para promover o seu bem-estar integral.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Acupuntura */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors">
                      <AcupunctureIcon className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-stone-800 mb-4">Acupuntura</h3>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    Técnica milenar que utiliza agulhas finas para estimular pontos específicos, promovendo o equilíbrio energético e alívio de dores.
                  </p>
                  <ul className="text-sm text-stone-500 space-y-2">
                    <li>• Dores crónicas e agudas</li>
                    <li>• Stress e ansiedade</li>
                    <li>• Problemas digestivos</li>
                    <li>• Insónia e fadiga</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Massagem Terapêutica */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors">
                      <MassageIcon className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-stone-800 mb-4">Massagem Terapêutica</h3>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    Técnicas de massagem oriental que relaxam músculos, melhoram a circulação e promovem o bem-estar físico e mental.
                  </p>
                  <ul className="text-sm text-stone-500 space-y-2">
                    <li>• Tensão muscular</li>
                    <li>• Melhoria da circulação</li>
                    <li>• Relaxamento profundo</li>
                    <li>• Alívio do stress</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Reiki */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors">
                      <ReikiIcon className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-stone-800 mb-4">Reiki</h3>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    Terapia energética que canaliza energia universal para promover cura, equilíbrio emocional e paz interior.
                  </p>
                  <ul className="text-sm text-stone-500 space-y-2">
                    <li>• Equilíbrio energético</li>
                    <li>• Redução do stress</li>
                    <li>• Bem-estar emocional</li>
                    <li>• Paz interior</li>
                  </ul>
                </CardContent>
              </Card>

              {/* Hipnose */}
              <Card className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg hover:-translate-y-2">
                <CardContent className="p-8 text-center">
                  <div className="mb-6 flex justify-center">
                    <div className="p-4 bg-emerald-100 rounded-full group-hover:bg-emerald-200 transition-colors">
                      <HypnosisIcon className="w-12 h-12 text-emerald-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold text-stone-800 mb-4">Hipnose</h3>
                  <p className="text-stone-600 leading-relaxed mb-6">
                    Técnica que acessa o subconsciente para promover mudanças positivas, superar medos e alcançar objetivos pessoais.
                  </p>
                  <ul className="text-sm text-stone-500 space-y-2">
                    <li>• Cessação tabágica</li>
                    <li>• Controlo de peso</li>
                    <li>• Fobias e medos</li>
                    <li>• Autoconfiança</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <FAQSection />
      </main>

      <Footer />
    </div>
  );
}