import React from 'react';
import { Check } from 'lucide-react';

export default function PricingTable() {
  const plans = [
    {
      name: 'LITE',
      price: '150-200',
      description: 'Ідеальний варіант для малого бізнесу, експертів або кав\'ярень. Бот замінює лендінг або менеджера на першому етапі.',
      features: [
        'Привітальне повідомлення',
        'Відповіді на часті питання',
        'Кнопка «Зв\'язатися з менеджером»',
        'Збір заявок у чат'
      ],
      forWhom: 'Локальний бізнес, інфобізнес (лікувальні воронки)'
    },
    {
      name: 'PRO',
      price: '200-300',
      popular: true,
      description: 'Повноцінний робочий інструмент, який автоматизує рутину. Бот сам продає, приймає гроші та заносить дані в базу.',
      features: [
        'Кошик товарів',
        'Інтеграція з платіжними системами',
        'Автоматичне сповіщення про нове замовлення',
        'Робота з базою клієнтів у Google Sheets'
      ],
      forWhom: 'Інтернет-магазини в Telegram, салони краси, доставка їжі'
    },
    {
      name: 'CUSTOM',
      price: 'Індивідуально',
      description: 'Тут немає стандартів, бо кожен проєкт унікальний. Це розробка «під ключ» зі складною архітектурою.',
      features: [
        'Використання GPT-4 для розумних відповідей',
        'Багатомовність',
        'Глибока аналітика дій користувачів',
        'Робота з великими базами даних'
      ],
      forWhom: 'Корпорації, стартапи, складні сервіси (наприклад, боти для пошуку нерухомості або вакансій)'
    }
  ];

  return (
    <div className="min-h-screen bg-white py-20 px-6">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
        
        * {
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        .delay-1 {
          animation-delay: 0.1s;
          opacity: 0;
        }
        
        .delay-2 {
          animation-delay: 0.2s;
          opacity: 0;
        }
        
        .delay-3 {
          animation-delay: 0.3s;
          opacity: 0;
        }
      `}</style>
      
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 fade-in">
          <h1 className="text-5xl font-light mb-4 text-black tracking-tight">
            Тарифні плани
          </h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl">
            Оберіть ідеальне рішення для автоматизації вашого бізнесу
          </p>
        </div>

        {/* Pricing Table */}
        <div className="border border-gray-200 rounded-2xl overflow-hidden fade-in delay-1">
          <table className="w-full min-w-[900px]">
            <thead>
              <tr className="border-b border-gray-200">
                {plans.map((plan, index) => (
                  <th 
                    key={plan.name}
                    className={`p-8 text-left border-r border-gray-200 last:border-r-0 relative bg-white fade-in delay-${index + 1}`}
                  >
                    {plan.popular && (
                      <div className="absolute top-0 left-0 right-0 bg-black text-white text-xs font-medium py-2 px-4 text-center tracking-wider rounded-tl-2xl rounded-tr-2xl">
                        ПОПУЛЯРНИЙ
                      </div>
                    )}
                    <div className={`${plan.popular ? 'mt-10' : ''}`}>
                      <h3 className="text-2xl font-light text-black mb-3 tracking-tight">{plan.name}</h3>
                      <div className="mb-2">
                        <span className="text-4xl font-light text-black">
                          {plan.price}
                        </span>
                        {plan.price !== 'Індивідуально' && (
                          <span className="text-gray-400 ml-1 text-2xl">$</span>
                        )}
                      </div>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                {plans.map((plan) => (
                  <td key={plan.name} className="p-8 align-top border-r border-gray-200 last:border-r-0 bg-white">
                    <p className="text-gray-700 leading-relaxed text-sm font-light">
                      {plan.description}
                    </p>
                  </td>
                ))}
              </tr>
              <tr className="border-b border-gray-200 bg-gray-50">
                {plans.map((plan) => (
                  <td key={plan.name} className="p-8 align-top border-r border-gray-200 last:border-r-0">
                    <h4 className="font-medium text-black mb-4 text-xs uppercase tracking-widest">
                      Функціонал
                    </h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <Check className="w-4 h-4 text-black mr-3 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                          <span className="text-gray-700 text-sm font-light leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </td>
                ))}
              </tr>
              <tr>
                {plans.map((plan) => (
                  <td key={plan.name} className="p-8 align-top border-r border-gray-200 last:border-r-0 bg-white">
                    <h4 className="font-medium text-black mb-3 text-xs uppercase tracking-widest">
                      Для кого
                    </h4>
                    <p className="text-gray-700 text-sm font-light leading-relaxed">
                      {plan.forWhom}
                    </p>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Bottom Note */}
        <div className="text-center mt-12 fade-in delay-3">
          <p className="text-gray-600 text-base font-light">
            Не впевнені, який план обрати? <a href="#" className="text-black underline hover:no-underline">Зв'яжіться з нами</a> для консультації
          </p>
        </div>
      </div>
    </div>
  );
}
