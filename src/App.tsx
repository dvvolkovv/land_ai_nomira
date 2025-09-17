import React, { useState } from 'react';
import { Menu, X, Brain, Users, Briefcase, Mail, ChevronRight, Wallet } from 'lucide-react';
import FintechPage from './components/FintechPage';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState('home');

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavigation = (page: string) => {
    setCurrentPage(page);
    setIsMenuOpen(false);
  };

  if (currentPage === 'fintech') {
    return <FintechPage onBack={() => setCurrentPage('home')} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Nomira</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">Главная</a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">Услуги</a>
              <button 
                onClick={() => handleNavigation('fintech')}
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Финтех
              </button>
              <a href="#about" className="text-gray-700 hover:text-blue-600 transition-colors">О нас</a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">Контакты</a>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                Главная
              </a>
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                Услуги
              </a>
              <button 
                onClick={() => handleNavigation('fintech')}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md"
              >
                Финтех
              </button>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                О нас
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md">
                Контакты
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
              <Brain className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            ИИ решения, которые понимают людей
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Nomira создаёт ИИ-решения, которые понимают людей глубже данных. 
            От HR-автоматизации до персональных ассистентов — мы делаем технологии человечными.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              Начать проект
            </button>
            <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-xl hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Узнать больше
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши решения
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Мы специализируемся на создании ИИ-продуктов, которые решают реальные бизнес-задачи
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* HR Automation */}
            <div className="group bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <Users className="w-12 h-12 text-blue-600" />
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">HR Автоматизация</h3>
              <p className="text-gray-600 mb-4">
                ИИ-ассистенты для рекрутинга, анализа резюме и автоматизации HR-процессов. 
                Находим лучших кандидатов быстрее человека.
              </p>
              <div className="flex items-center text-blue-600 font-medium">
                Подробнее <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Personal Assistant */}
            <div className="group bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <Brain className="w-12 h-12 text-purple-600" />
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-purple-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Персональный ассистент</h3>
              <p className="text-gray-600 mb-4">
                ИИ-помощник, который понимает ваши ценности и цели. Помогает принимать решения 
                и находить решения, соответствующие вашим приоритетам.
              </p>
              <div className="flex items-center text-purple-600 font-medium">
                Подробнее <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>

            {/* Business Solutions */}
            <div className="group bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="flex items-center justify-between mb-6">
                <Briefcase className="w-12 h-12 text-green-600" />
                <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-green-600 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Бизнес-решения</h3>
              <p className="text-gray-600 mb-4">
                Кастомные ИИ-решения для автоматизации бизнес-процессов, анализа данных 
                и повышения эффективности команды.
              </p>
              <div className="flex items-center text-green-600 font-medium">
                Подробнее <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            О Nomira
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Мы верим, что ИИ должен понимать не только данные, но и людей. Наша миссия — 
            создавать технологии, которые усиливают человеческие способности, а не заменяют их.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600">Проектов реализовано</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">95%</div>
              <div className="text-gray-600">Довольных клиентов</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">24/7</div>
              <div className="text-gray-600">Поддержка решений</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
            Готовы начать проект?
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Расскажите нам о вашей задаче, и мы предложим оптимальное ИИ-решение
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Mail className="w-5 h-5 mr-2" />
              Связаться с нами
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold">Nomira</span>
              </div>
              <p className="text-gray-400 max-w-md">
                ИИ решения, которые понимают людей глубже данных. 
                Создаём технологии будущего уже сегодня.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Услуги</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">HR Автоматизация</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Персональный ассистент</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Бизнес-решения</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Контакты</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="mailto:hello@nomira.ai" className="hover:text-white transition-colors">hello@nomira.ai</a></li>
                <li><a href="tel:+7-999-123-45-67" className="hover:text-white transition-colors">+7 (999) 123-45-67</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Nomira. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;