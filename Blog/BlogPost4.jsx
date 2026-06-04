import React from 'react';
import { FaTelegram, FaFilter, FaRobot, FaChartLine, FaCogs, FaUsers, FaDatabase } from 'react-icons/fa';
import Button from '../Button';

const BlogPost4 = () => {
  const funnelCode = `from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import CallbackContext

async def start_funnel(update: Update, context: CallbackContext):
    keyboard = [
        [
            InlineKeyboardButton("👋 Дізнатися більше", callback_data="learn_more"),
            InlineKeyboardButton("🎯 Отримати пропозицію", callback_data="get_offer")
        ],
        [
            InlineKeyboardButton("📱 Зв'язатися з менеджером", callback_data="contact_manager")
        ]
    ]
    reply_markup = InlineKeyboardMarkup(keyboard)
    
    await update.message.reply_text(
        "Вітаю! Я допоможу вам знайти найкраще рішення для вашого бізнесу.",
        reply_markup=reply_markup
    )`;

  const analyticsCode = `import pandas as pd
from datetime import datetime, timedelta

def analyze_funnel_metrics(data: pd.DataFrame):
    # Розрахунок конверсії по етапах
    total_users = len(data)
    learn_more = len(data[data['stage'] == 'learn_more'])
    got_offer = len(data[data['stage'] == 'got_offer'])
    contacted_manager = len(data[data['stage'] == 'contacted_manager'])
    made_purchase = len(data[data['stage'] == 'made_purchase'])
    
    # Розрахунок конверсії
    conversion_rates = {
        'learn_more_rate': learn_more / total_users * 100,
        'offer_rate': got_offer / learn_more * 100,
        'contact_rate': contacted_manager / got_offer * 100,
        'purchase_rate': made_purchase / contacted_manager * 100
    }
    
    return conversion_rates`;

  const segmentationCode = `from sklearn.cluster import KMeans
import numpy as np

def segment_users(user_data):
    # Підготовка даних для кластеризації
    features = ['interaction_count', 'avg_response_time', 'purchase_history']
    X = user_data[features].values
    
    # Кластеризація користувачів
    kmeans = KMeans(n_clusters=4, random_state=42)
    clusters = kmeans.fit_predict(X)
    
    # Аналіз кластерів
    for i in range(4):
        cluster_data = user_data[clusters == i]
        print(f"Кластер {i}:")
        print(f"Середня кількість взаємодій: {cluster_data['interaction_count'].mean()}")
        print(f"Середній час відповіді: {cluster_data['avg_response_time'].mean()}")
        print(f"Середня кількість покупок: {cluster_data['purchase_history'].mean()}")
        print("---")`;

  const automationCode = `from telegram.ext import ConversationHandler, CommandHandler, CallbackQueryHandler

def setup_funnel_automation():
    return ConversationHandler(
        entry_points=[CommandHandler('start', start_funnel)],
        states={
            'LEARN_MORE': [
                CallbackQueryHandler(show_info, pattern='^learn_more$'),
                CallbackQueryHandler(show_offer, pattern='^get_offer$'),
                CallbackQueryHandler(contact_manager, pattern='^contact_manager$')
            ],
            'OFFER': [
                CallbackQueryHandler(process_offer, pattern='^accept_offer$'),
                CallbackQueryHandler(decline_offer, pattern='^decline_offer$')
            ],
            'CONTACT': [
                MessageHandler(Filters.text & ~Filters.command, save_contact)
            ]
        },
        fallbacks=[CommandHandler('cancel', cancel)]
    )`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="p-6 flex-grow mt-20">
        {/* Порожній блок для відступу зверху */}
      </div>

      {/* Заголовок та вступ */}
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Створення ефективних воронок продажів з Telegram ботами</h1>
      <img src="/sales-funnel.png" alt="Воронки продажів з чат-ботами" className="w-full h-72 object-cover mb-6 rounded-lg shadow-md" />

      {/* Зміст */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-bold mb-4">Зміст:</h3>
        <ul className="space-y-2">
          <li className="hover:text-blue-600 cursor-pointer">1. Вступ та концепція воронок продажів</li>
          <li className="hover:text-blue-600 cursor-pointer">2. Структура воронки в Telegram боті</li>
          <li className="hover:text-blue-600 cursor-pointer">3. Сегментація та персоналізація</li>
          <li className="hover:text-blue-600 cursor-pointer">4. Автоматизація процесів</li>
          <li className="hover:text-blue-600 cursor-pointer">5. Аналітика та оптимізація</li>
          <li className="hover:text-blue-600 cursor-pointer">6. Інтеграція з CRM</li>
          <li className="hover:text-blue-600 cursor-pointer">7. Найкращі практики</li>
        </ul>
      </div>

      {/* Вступ */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaFilter className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Вступ та концепція воронок продажів</h2>
        </div>
        <p className="text-lg mb-6">
          Воронка продажів в Telegram боті - це структурований підхід до конвертації потенційних клієнтів у покупців. 
          Використання ботів дозволяє автоматизувати цей процес та зробити його більш ефективним, забезпечуючи 
          персоналізований підхід до кожного клієнта.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">Переваги використання ботів для воронок продажів:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Автоматизація процесу продажів</li>
            <li>Цілодобова доступність</li>
            <li>Масштабованість</li>
            <li>Збір та аналіз даних</li>
            <li>Персоналізація взаємодії</li>
          </ul>
        </div>
      </div>

      {/* Структура воронки */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaRobot className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Структура воронки в Telegram боті</h2>
        </div>
        <p className="text-lg mb-6">
          Правильна структура воронки - ключ до успішних продажів. Розглянемо приклад реалізації 
          базової воронки продажів у Telegram боті:
        </p>

        <pre className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md overflow-x-auto">
          <code>{funnelCode}</code>
        </pre>

        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">🎯 Етапи воронки продажів:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Залучення користувача</li>
            <li>Визначення потреб</li>
            <li>Презентація рішення</li>
            <li>Робота з запереченнями</li>
            <li>Закриття угоди</li>
          </ul>
        </div>
      </div>

      {/* Сегментація */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaUsers className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Сегментація та персоналізація</h2>
        </div>
        <p className="text-lg mb-6">
          Ефективна сегментація користувачів дозволяє створювати персоналізовані пропозиції та 
          підвищувати конверсію. Ось приклад реалізації сегментації:
        </p>

        <pre className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md overflow-x-auto">
          <code>{segmentationCode}</code>
        </pre>

        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">👥 Критерії сегментації:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Поведінкові патерни</li>
            <li>Історія взаємодії</li>
            <li>Демографічні дані</li>
            <li>Інтереси та преференції</li>
            <li>Історія покупок</li>
          </ul>
        </div>
      </div>

      {/* Автоматизація */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaCogs className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Автоматизація процесів</h2>
        </div>
        <p className="text-lg mb-6">
          Автоматизація дозволяє масштабувати процес продажів без втрати якості. 
          Розглянемо приклад автоматизації воронки:
        </p>

        <pre className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md overflow-x-auto">
          <code>{automationCode}</code>
        </pre>

        <div className="bg-purple-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">⚙️ Можливості автоматизації:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Автоматичні відповіді</li>
            <li>Розсилки та нагадування</li>
            <li>Кваліфікація лідів</li>
            <li>Збір контактів</li>
            <li>Інтеграція з іншими системами</li>
          </ul>
        </div>
      </div>

      {/* Аналітика */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaChartLine className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Аналітика та оптимізація</h2>
        </div>
        <p className="text-lg mb-6">
          Аналіз метрик воронки допомагає виявляти проблемні місця та оптимізувати процес продажів:
        </p>

        <pre className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md overflow-x-auto">
          <code>{analyticsCode}</code>
        </pre>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">📊 Ключові метрики:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Конверсія по етапах</li>
            <li>Час проходження воронки</li>
            <li>Вартість залучення клієнта</li>
            <li>Lifetime Value (LTV)</li>
            <li>Return on Investment (ROI)</li>
          </ul>
        </div>
      </div>

      {/* CRM Інтеграція */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaDatabase className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Інтеграція з CRM</h2>
        </div>
        <p className="text-lg mb-6">
          Інтеграція з CRM-системою дозволяє ефективно керувати відносинами з клієнтами та 
          автоматизувати процес продажів.
        </p>

        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">🔄 Переваги інтеграції з CRM:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Єдина база клієнтів</li>
            <li>Автоматичне оновлення даних</li>
            <li>Відстеження історії взаємодії</li>
            <li>Автоматизація follow-up</li>
            <li>Аналітика та звітність</li>
          </ul>
        </div>
      </div>

      {/* Найкращі практики */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Найкращі практики</h2>
        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">✅ Що робити:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Регулярно аналізувати метрики</li>
              <li>Тестувати різні сценарії</li>
              <li>Персоналізувати комунікацію</li>
              <li>Оптимізувати кожен етап</li>
              <li>Збирати відгуки користувачів</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">❌ Чого уникати:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Надмірного спаму</li>
              <li>Складних сценаріїв</li>
              <li>Ігнорування аналітики</li>
              <li>Відсутності тестування</li>
              <li>Неперсоналізованих повідомлень</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Висновок */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Висновок</h2>
        <p className="text-lg mb-6">
          Створення ефективної воронки продажів з використанням Telegram бота - це комплексний процес, 
          який вимагає ретельного планування, постійної оптимізації та аналізу даних. Використовуючи 
          правильні інструменти та підходи, ви можете значно підвищити ефективність продажів та 
          покращити взаємодію з клієнтами.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h4 className="font-bold mb-4">🚀 Наступні кроки:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Проаналізуйте вашу поточну воронку продажів</li>
            <li>Визначте ключові метрики для відстеження</li>
            <li>Розробіть план автоматизації</li>
            <li>Почніть з малого та масштабуйте</li>
            <li>Постійно тестуйте та оптимізуйте</li>
          </ul>
        </div>
      </div>

      {/* Кнопка для зв'язку */}
      <div className="flex items-center justify-center">
        <a
          href="https://t.me/nowayrm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center justify-center text-white">
            <FaTelegram className="mr-2" />
            Замовити налаштування воронки продажів
          </Button>
        </a>
      </div>
    </div>
  );
};

export default BlogPost4;
