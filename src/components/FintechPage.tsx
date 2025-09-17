import React from 'react';
import { ArrowLeft, Wallet, Globe, Shield, CreditCard, Link as LinkIcon, Smartphone } from 'lucide-react';

interface FintechPageProps {
  onBack: () => void;
}

export default function FintechPage({ onBack }: FintechPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <button
              onClick={onBack}
              className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Назад
            </button>
            <div className="flex items-center space-x-2">
              <Wallet className="w-8 h-8 text-blue-600" />
              <span className="text-xl font-bold text-gray-900">Nomira Finance</span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-8">
            <div className="p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
              <Wallet className="w-16 h-16 text-white" />
            </div>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Nomira Finance
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Финансовые продукты на основе блокчейна и криптовалют. 
            Принимайте и отправляйте деньги из любой точки мира в фиате и крипте.
          </p>
          <a
            href="http://t.me/nomiraappbot/app"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            <Smartphone className="w-5 h-5 mr-2" />
            Открыть приложение
          </a>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Globe className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Глобальные переводы</h3>
              <p className="text-gray-600">
                Принимайте деньги в Россию из любой точки мира. Создайте платежную ссылку и отправьте клиенту, другу, партнеру или родственнику.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <Shield className="w-12 h-12 text-green-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Безопасность</h3>
              <p className="text-gray-600">
                Nomira автоматически отслеживает поступление средств. Получайте средства на свой кошелек с полным контролем над seed фразой.
              </p>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <LinkIcon className="w-12 h-12 text-purple-600 mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Простота использования</h3>
              <p className="text-gray-600">
                Простой и понятный интерфейс. Люди могут платить как криптовалютой, так и фиатом через одну ссылку.
              </p>
            </div>
          </div>

          {/* How it works */}
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 md:p-12 mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Как это работает</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">1</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Создайте кошелек</h3>
                  <p className="text-gray-600">
                    Рекомендуем использовать кошельки с хранением seed фразы, например, 
                    <a href="https://trustwallet.com/ru" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline ml-1">
                      Trust Wallet
                    </a>
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">2</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Создайте платежную ссылку</h3>
                  <p className="text-gray-600">
                    Укажите адрес кошелька и криптовалюту для получения платежа (например, USDT на Tron)
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-semibold">3</div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">Получите платеж</h3>
                  <p className="text-gray-600">
                    После получения платежа вы можете воспользоваться средствами где угодно
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Integration Options */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Варианты использования средств</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <CreditCard className="w-12 h-12 text-green-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Получение на карту в РФ</h3>
                <p className="text-gray-600 mb-4">
                  Воспользуйтесь легальным сервисом с лицензией на обмен в Беларуси. 
                  Получите прозрачную историю обмена и деньги на карту от юридического лица.
                </p>
                <a
                  href="https://whitebird.io/signup?refid=G45N0qH7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  WhiteBird →
                </a>
              </div>
              
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <Smartphone className="w-12 h-12 text-purple-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Оплата через СБП</h3>
                <p className="text-gray-600 mb-4">
                  Используйте криптокошелек для оплаты любых покупок через СБП. 
                  Может потребоваться прохождение KYC.
                </p>
                <a
                  href="https://t.me/antarctic_wallet_bot/app?startapp=ref_672bd53615"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
                >
                  Antarctic Wallet →
                </a>
              </div>
            </div>
          </div>

          {/* International Card */}
          <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-3xl p-8 md:p-12">
            <div className="text-center mb-8">
              <CreditCard className="w-16 h-16 text-purple-600 mx-auto mb-4" />
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Карта для зарубежных покупок</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Получите карту MasterCard для расчетов за рубежом. Карта привязывается к Apple Pay 
                и работает практически везде. Пополнение через криптовалюту.
              </p>
            </div>
            <div className="text-center">
              <a
                href="https://www.hpx.com/en/join?id=U819524"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-6 py-3 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-colors"
              >
                <CreditCard className="w-5 h-5 mr-2" />
                Получить карту HPX
              </a>
            </div>
          </div>

          {/* Security Notice */}
          <div className="mt-16 bg-yellow-50 border border-yellow-200 rounded-2xl p-8">
            <div className="flex items-start space-x-4">
              <Shield className="w-8 h-8 text-yellow-600 flex-shrink-0 mt-1" />
              <div>
                <h3 className="text-lg font-semibold text-yellow-800 mb-2">Важно о безопасности</h3>
                <p className="text-yellow-700">
                  Лучший способ — хранить основную массу средств на своем кошельке (Trust Wallet), 
                  а при необходимости отправлять на сервисы для обмена или трат. Это минимизирует риски 
                  и обеспечивает полный контроль над вашими средствами.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}