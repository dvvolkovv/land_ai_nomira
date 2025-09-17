import React, { useState } from 'react';
import { 
  Users, 
  Bot, 
  TrendingUp, 
  ShoppingCart, 
  MapPin, 
  Building, 
  DollarSign, 
  Mic, 
  Network,
  ArrowRight,
  CheckCircle,
  Star,
  Calendar,
  HeadphonesIcon,
  ChevronDown,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Nomira
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors">
                О нас
              </button>
              <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all">
                Связаться
              </button>
            </div>

            <button 
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 py-4">
              <div className="flex flex-col space-y-4 px-4">
                <button onClick={() => scrollToSection('services')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">
                  Услуги
                </button>
                <button onClick={() => scrollToSection('about')} className="text-gray-700 hover:text-purple-600 transition-colors text-left">
                  О нас
                </button>
                <button onClick={() => scrollToSection('contact')} className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all text-center">
                  Связаться
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-20 bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
              Будущее бизнеса с{' '}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                искусственным интеллектом
              </span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Мы создаём ИИ-решения, которые понимают людей глубже данных. 
              От HR-автоматизации до персональных ассистентов — технологии будущего уже здесь.
            </p>
            
            {/* Prominent Telegram Bot Button */}
            <div className="mb-8">
              <a
                href="https://t.me/nomira_ai_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-green-500 to-emerald-600 text-white py-5 px-10 rounded-2xl text-xl font-bold hover:shadow-2xl transition-all transform hover:-translate-y-2 hover:scale-105 border-4 border-white shadow-xl"
              >
                <svg className="w-8 h-8 mr-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Хотите понять как использовать ИИ в вашем бизнесе - переходите сюда
                <ArrowRight className="w-6 h-6 ml-3" />
              </a>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => scrollToSection('services')}
                className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                Посмотреть решения
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-purple-600 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-600 hover:text-white transition-all"
              >
                Получить консультацию
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Наши ИИ-решения
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              От найма сотрудников до управления финансами — комплексная экосистема ИИ для вашего бизнеса
            </p>
          </div>

          {/* Service 1: HR и команды будущего */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">HR и команды будущего</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    ИИ анализирует резюме, психометрию (астрология, Human Design, нумерология) и помогает строить устойчивые команды.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">📊 Точный найм</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">👥 Гармоничные команды</span>
                    </div>
                    <div className="flex items-center">
                      <CheckCircle className="w-5 h-5 text-green-600 mr-3" />
                      <span className="text-gray-700">🔮 Прогноз совместимости</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <h4 className="font-semibold text-gray-900">Карта команды</h4>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1,2,3,4,5,6].map((i) => (
                      <div key={i} className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-3 text-center">
                        <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-2"></div>
                        <div className="text-xs text-gray-600">Сотрудник {i}</div>
                        <div className="text-xs text-green-600">✓ Совместим</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 2: Персональные ассистенты */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mr-4">
                      <Bot className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Персональные ассистенты</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    AI-коуч и навигатор по жизни. Ассистент ведёт коучинговый диалог, формирует «граф намерений» (200+ интентов) и предлагает решения.
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🌍</span>
                      <span className="text-gray-700">Отдых и путешествия</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">💼</span>
                      <span className="text-gray-700">Карьера и обучение</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">💳</span>
                      <span className="text-gray-700">Финансы</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-2">🧘</span>
                      <span className="text-gray-700">Здоровье</span>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="space-y-4">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm text-gray-700">Хочу отправиться в отпуск, но не знаю куда...</p>
                      </div>
                      <div className="bg-blue-100 rounded-lg p-3 ml-8">
                        <p className="text-sm text-blue-800">Анализирую ваши предпочтения... Рекомендую:</p>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-3 text-center">
                          <span className="text-2xl">🏝️</span>
                          <p className="text-xs">Бали</p>
                        </div>
                        <div className="bg-gradient-to-br from-purple-100 to-blue-100 rounded-lg p-3 text-center">
                          <span className="text-2xl">🏔️</span>
                          <p className="text-xs">Швейцария</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 3: AI-маркетинг */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">AI-маркетинг и продажи</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    ИИ-маркетолог для бизнеса, который генерирует персонализированные креативы и строит воронки под ценности клиентов.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🎨</span>
                      <span className="text-gray-700">Генерация персонализированных креативов</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📈</span>
                      <span className="text-gray-700">Построение воронки под ценности клиента</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🛍️</span>
                      <span className="text-gray-700">Рекомендации товаров и услуг</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-l-4 border-purple-600">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Психотип: "Свобода"</p>
                    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg p-3">
                      <p className="text-sm">🌅 Открой мир без границ! Туры от 30,000₽</p>
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-lg border-l-4 border-blue-600">
                    <p className="text-sm font-semibold text-gray-900 mb-2">Психотип: "Стабильность"</p>
                    <div className="bg-gradient-to-r from-blue-100 to-indigo-100 rounded-lg p-3">
                      <p className="text-sm">🏠 Надёжная ипотека под 6%. Ваш дом мечты!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: Автоматизация маркетплейсов */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-green-50 to-teal-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-600 to-teal-600 rounded-xl flex items-center justify-center mr-4">
                      <ShoppingCart className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Автоматизация маркетплейсов</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    AI-боты для Avito, Wildberries, Ozon с автоответами, оформлением заказов и работой на нескольких площадках.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">💬</span>
                      <span className="text-gray-700">Автоответы</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🛒</span>
                      <span className="text-gray-700">Оформление заказов</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🔔</span>
                      <span className="text-gray-700">Умные напоминания</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🚀</span>
                      <span className="text-gray-700">Работа на нескольких площадках</span>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="border-b border-gray-200 pb-4 mb-4">
                      <h4 className="font-semibold text-gray-900">Чат на Avito</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm">Здравствуйте! Интересует ваш товар</p>
                      </div>
                      <div className="bg-green-100 rounded-lg p-3 ml-8">
                        <p className="text-sm">Добро пожаловать! Товар в наличии. Готов оформить заказ?</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm">Да, давайте</p>
                      </div>
                      <div className="bg-green-100 rounded-lg p-3 ml-8">
                        <p className="text-sm">Отлично! Ваш заказ №12345 оформлен. Ожидайте звонка курьера.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5: Консьерж-сервисы */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-red-600 rounded-xl flex items-center justify-center mr-4">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Консьерж-сервисы</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    AI-помощник для жизни: подбор кафе, мероприятий, книг, рекомендации друзей и автоматическая организация быта.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <MapPin className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">Подбор кафе и ресторанов</span>
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">Поиск мероприятий</span>
                    </div>
                    <div className="flex items-center">
                      <Users className="w-5 h-5 text-orange-600 mr-3" />
                      <span className="text-gray-700">Рекомендации сообществ</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <h4 className="font-semibold text-gray-900">Карта рекомендаций</h4>
                  </div>
                  <div className="relative bg-gradient-to-br from-orange-100 to-red-100 rounded-xl h-48 p-4">
                    <div className="absolute top-4 left-4 bg-white rounded-full p-2 shadow-md">
                      <span className="text-xs">🍕 Пиццерия</span>
                    </div>
                    <div className="absolute top-8 right-6 bg-white rounded-full p-2 shadow-md">
                      <span className="text-xs">🎭 Театр</span>
                    </div>
                    <div className="absolute bottom-6 left-8 bg-white rounded-full p-2 shadow-md">
                      <span className="text-xs">📚 Библиотека</span>
                    </div>
                    <div className="absolute bottom-4 right-4 bg-white rounded-full p-2 shadow-md">
                      <span className="text-xs">☕ Кофейня</span>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-4 h-4 bg-red-600 rounded-full animate-pulse"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 6: Корпоративный ассистент */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-600 to-blue-600 rounded-xl flex items-center justify-center mr-4">
                      <Building className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Корпоративный AI-ассистент</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Ассистент для внутренних процессов компании. Работает с документами и CRM без выхода во внешний интернет.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📂</span>
                      <span className="text-gray-700">Анализ документов</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🗂️</span>
                      <span className="text-gray-700">Работа с CRM</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">⚡</span>
                      <span className="text-gray-700">Быстрые ответы сотрудникам</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🔒</span>
                      <span className="text-gray-700">Полная безопасность данных</span>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="border-b border-gray-200 pb-4 mb-4">
                      <h4 className="font-semibold text-gray-900">Корпоративный чат</h4>
                    </div>
                    <div className="space-y-3">
                      <div className="bg-gray-100 rounded-lg p-3">
                        <p className="text-sm">Найди клиентов с оборотом &gt; 1 млн руб.</p>
                      </div>
                      <div className="bg-blue-100 rounded-lg p-3 ml-8">
                        <p className="text-sm">Найдено 23 клиента. Генерирую отчёт...</p>
                      </div>
                      <div className="bg-white border border-gray-200 rounded-lg p-3">
                        <p className="text-xs text-gray-600">📊 Отчёт готов</p>
                        <p className="text-sm font-semibold">Топ-клиенты Q4 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 7: Финансовый ассистент */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-yellow-600 to-orange-600 rounded-xl flex items-center justify-center mr-4">
                      <DollarSign className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Финансовый AI-ассистент</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    ИИ для личных и корпоративных финансов с поддержкой криптовалют, умным бюджетированием и автоматической конвертацией.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">💳</span>
                      <span className="text-gray-700">Умный бюджет</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📈</span>
                      <span className="text-gray-700">Управление инвестициями и криптой</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🪙</span>
                      <span className="text-gray-700">Подключение блокчейн-кошельков</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">📊</span>
                      <span className="text-gray-700">Аналитика и защита капитала</span>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center mb-4">
                    <h4 className="font-semibold text-gray-900">Финансовый дашборд</h4>
                  </div>
                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-green-100 to-teal-100 rounded-lg p-3">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-700">Общий баланс</span>
                        <span className="font-bold text-green-700">₽2,450,000</span>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div className="bg-blue-100 rounded-lg p-3 text-center">
                        <p className="text-xs text-gray-600">Фиат</p>
                        <p className="font-bold text-blue-700">₽1,800,000</p>
                      </div>
                      <div className="bg-orange-100 rounded-lg p-3 text-center">
                        <p className="text-xs text-gray-600">Крипто</p>
                        <p className="font-bold text-orange-700">₽650,000</p>
                      </div>
                    </div>
                    <button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 text-white py-2 rounded-lg text-sm font-semibold">
                      Ребалансировать
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 8: Голосовое управление */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-3xl p-8 lg:p-12">
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div className="lg:order-2">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-pink-600 to-purple-600 rounded-xl flex items-center justify-center mr-4">
                      <Mic className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900">Голосовое управление</h3>
                  </div>
                  <p className="text-lg text-gray-700 mb-6">
                    Интеграция с голосовыми помощниками для управления CRM, бронирования, финансовых переводов и заказов.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🎤</span>
                      <span className="text-gray-700">Управление CRM голосом</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">✈️</span>
                      <span className="text-gray-700">Бронирование билетов</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">💸</span>
                      <span className="text-gray-700">Финансовые переводы</span>
                    </div>
                    <div className="flex items-center">
                      <span className="text-2xl mr-3">🛍️</span>
                      <span className="text-gray-700">Подтверждение заказов</span>
                    </div>
                  </div>
                </div>
                <div className="lg:order-1">
                  <div className="bg-white rounded-2xl p-6 shadow-lg">
                    <div className="text-center mb-6">
                      <div className="w-20 h-20 bg-gradient-to-br from-pink-600 to-purple-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <Mic className="w-10 h-10 text-white animate-pulse" />
                      </div>
                      <p className="text-sm text-gray-600">"Алиса, забронируй билеты в Париж"</p>
                    </div>
                    <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Заказ готов!</h4>
                      <div className="text-sm text-gray-700 space-y-1">
                        <p>✈️ Москва → Париж</p>
                        <p>📅 15 марта, 10:30</p>
                        <p>💰 35,000 ₽</p>
                      </div>
                      <button className="mt-3 w-full bg-gradient-to-r from-pink-600 to-purple-600 text-white py-2 rounded-lg text-sm">
                        Подтвердить
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Service 9: Главная идея */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-purple-50 via-blue-50 to-indigo-50 rounded-3xl p-8 lg:p-12 text-center">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mr-4">
                  <Network className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Граф ценностей — ядро всех решений</h3>
              </div>
              <p className="text-xl text-gray-700 mb-8 max-w-4xl mx-auto">
                Все наши ассистенты связаны через единую систему, которая понимает человека глубже, чем просто данные. 
                Мы анализируем ваши истинные ценности и мотивации.
              </p>
              <div className="max-w-2xl mx-auto">
                <div className="relative">
                  <div className="grid grid-cols-4 gap-4">
                    {[
                      { name: 'Работа', emoji: '💼', color: 'purple' },
                      { name: 'Финансы', emoji: '💰', color: 'blue' },
                      { name: 'Здоровье', emoji: '🧘', color: 'green' },
                      { name: 'Отдых', emoji: '🌴', color: 'orange' }
                    ].map((node, i) => (
                      <div key={i} className={`bg-gradient-to-br from-${node.color}-100 to-${node.color}-200 rounded-xl p-4 text-center hover:scale-105 transition-transform`}>
                        <div className="text-3xl mb-2">{node.emoji}</div>
                        <div className="text-sm font-semibold text-gray-700">{node.name}</div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute inset-0 pointer-events-none">
                    <svg className="w-full h-full">
                      <line x1="25%" y1="50%" x2="75%" y2="50%" stroke="#ddd" strokeWidth="2" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                      </line>
                      <line x1="50%" y1="25%" x2="50%" y2="75%" stroke="#ddd" strokeWidth="2" strokeDasharray="5,5">
                        <animate attributeName="stroke-dashoffset" values="0;10" dur="2s" repeatCount="indefinite"/>
                      </line>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
          {/* Additional AI Solutions */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                Дополнительные ИИ-решения
              </h3>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Специализированные решения для различных отраслей и задач
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* 3D-Terra */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-blue-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🚁</span>
                  <h4 className="text-lg font-bold text-gray-900">3D-Terra</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Дроны и 3D-моделирование для строительства, добычи и инфраструктуры
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Строительство</span>
                  <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded">Добыча</span>
                </div>
              </div>

              {/* AIcast Studio */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-purple-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📻</span>
                  <h4 className="text-lg font-bold text-gray-900">AIcast Studio</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Автоматизация радиоконтента: погода, новости, гороскопы
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Медиа</span>
                  <span className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">Контент</span>
                </div>
              </div>

              {/* Компьютерное зрение */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-green-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">👁️</span>
                  <h4 className="text-lg font-bold text-gray-900">Компьютерное зрение</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Подсчет паллет, контроль логистики, мониторинг ТБ на складах
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Склады</span>
                  <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">Безопасность</span>
                </div>
              </div>

              {/* SupportBot */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-orange-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🤖</span>
                  <h4 className="text-lg font-bold text-gray-900">SupportBot</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  ИИ-автоматизация клиентской поддержки с базой знаний 24/7
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">Поддержка</span>
                  <span className="bg-orange-100 text-orange-800 text-xs px-2 py-1 rounded">24/7</span>
                </div>
              </div>

              {/* TravelBot */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-teal-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">✈️</span>
                  <h4 className="text-lg font-bold text-gray-900">TravelBot</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Персональный подбор туров через Telegram-бота
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Туризм</span>
                  <span className="bg-teal-100 text-teal-800 text-xs px-2 py-1 rounded">Telegram</span>
                </div>
              </div>

              {/* ИИ-видеоаналитика */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-red-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📹</span>
                  <h4 className="text-lg font-bold text-gray-900">ИИ-видеоаналитика</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Мониторинг объектов и транспорта в реальном времени
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Мониторинг</span>
                  <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">Безопасность</span>
                </div>
              </div>

              {/* ИИ-ассистенты и синтез речи */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-indigo-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🎤</span>
                  <h4 className="text-lg font-bold text-gray-900">ИИ-ассистенты TTS/STT</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Автоматизация коммуникаций и генерация аудиоконтента
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Голос</span>
                  <span className="bg-indigo-100 text-indigo-800 text-xs px-2 py-1 rounded">Аудио</span>
                </div>
              </div>

              {/* Корпоративные LLM */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-pink-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🏢</span>
                  <h4 className="text-lg font-bold text-gray-900">Корпоративные LLM</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Чат-боты, аналитика документов, внутренняя автоматизация
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">Корпоративный</span>
                  <span className="bg-pink-100 text-pink-800 text-xs px-2 py-1 rounded">Документы</span>
                </div>
              </div>

              {/* Генератор документации */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-yellow-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">📋</span>
                  <h4 className="text-lg font-bold text-gray-900">Генератор документации</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Ускорение подготовки отчетов для аудиторов
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Аудит</span>
                  <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded">Отчеты</span>
                </div>
              </div>

              {/* Автоматизация пресейла */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-cyan-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">💼</span>
                  <h4 className="text-lg font-bold text-gray-900">Автоматизация пресейла</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Генерация коммерческих предложений и документов
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">Продажи</span>
                  <span className="bg-cyan-100 text-cyan-800 text-xs px-2 py-1 rounded">КП</span>
                </div>
              </div>

              {/* Агент базы данных */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-emerald-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">🗄️</span>
                  <h4 className="text-lg font-bold text-gray-900">Агент базы данных</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Автоматические ответы и аналитика для бизнеса
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">База данных</span>
                  <span className="bg-emerald-100 text-emerald-800 text-xs px-2 py-1 rounded">Аналитика</span>
                </div>
              </div>

              {/* Корпоративный ИИ для разработчиков */}
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow border-l-4 border-violet-600">
                <div className="flex items-center mb-4">
                  <span className="text-2xl mr-3">👨‍💻</span>
                  <h4 className="text-lg font-bold text-gray-900">ИИ для разработчиков</h4>
                </div>
                <p className="text-gray-600 text-sm mb-3">
                  Рост продуктивности разработки до 95%
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="bg-violet-100 text-violet-800 text-xs px-2 py-1 rounded">Разработка</span>
                  <span className="bg-violet-100 text-violet-800 text-xs px-2 py-1 rounded">+95%</span>
                </div>
              </div>
            </div>
          </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Почему выбирают нас
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы не просто создаём технологии — мы создаём будущее, где ИИ понимает людей
            </p>
          </div>

          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Наша философия ИИ
            </h2>
            
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 mb-12 text-left">
              <div className="max-w-3xl mx-auto space-y-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-indigo-600">Основой и платформой нашего ИИ</strong> является персональный, личностный и, самое главное, 
                  <strong className="text-indigo-600"> ценностно-ориентированный подход</strong> к пониманию потребностей человека. 
                  Это позволяет более глубоко и персонально давать предложения, а также соединять людей по ценностям, 
                  что делает возможным долгосрочное и эффективное сотрудничество.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-indigo-600">Ядром любого ИИ</strong> в общении с человеком является понимание его ценностей, 
                  видения мира, желаний и намерений. Мы создаем продукт, в котором это ядро как MCP сервер встраивается 
                  в алгоритмы взаимодействий и позволяет получать высокие результаты.
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  <strong className="text-indigo-600">Дерево графов личных данных</strong> соединяет людей в разных сферах, 
                  проводит глубоко ценностный нетворкинг и помогает объединять людей качественно и эффективно.
                </p>
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 mx-auto">

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Инновационность</h3>
              <p className="text-gray-600">
                Используем передовые технологии машинного обучения и анализа поведения пользователей
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Персонализация</h3>
              <p className="text-gray-600">
                Каждое решение адаптируется под уникальные потребности и ценности вашего бизнеса
              </p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HeadphonesIcon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Поддержка</h3>
              <p className="text-gray-600">
                Полный цикл внедрения и поддержки решений с обучением вашей команды
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Готовы к внедрению ИИ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Мы создаём готовые решения и кастомные разработки. 
              Свяжитесь с нами в Telegram, и мы подберём стратегию именно для вас.
            </p>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 lg:p-12">
            <div className="text-center">
              <div className="mb-8">
                <div className="w-24 h-24 bg-gradient-to-br from-purple-600 to-blue-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Bot className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Обсудим ваш проект в Telegram
                </h3>
                <p className="text-lg text-gray-600 mb-8">
                  Напишите нам напрямую для быстрой консультации и персонального предложения
                </p>
              </div>
              
              <a
                href="https://t.me/nomira_ai_bot"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 text-white py-4 px-8 rounded-xl text-lg font-semibold hover:shadow-xl transition-all transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
                Написать в Telegram
                <ArrowRight className="w-5 h-5 ml-2" />
              </a>
              
              <p className="text-sm text-gray-500 mt-4">
                @nomira_ai_bot
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                Nomira
              </span>
            </div>
            <p className="text-gray-400 mb-4">
              Создаём ИИ-решения, которые понимают людей глубже данных
            </p>
            <div className="text-sm text-gray-500">
              © 2025 Nomira. Все права защищены.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;