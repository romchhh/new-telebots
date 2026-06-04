// @ts-nocheck
'use client';


import { getLegacyHeroImage } from '@/lib/blog/legacy-meta';
import React from 'react';
import { FaTelegram, FaCreditCard, FaLock, FaCode, FaChartLine, FaDatabase, FaExchangeAlt } from 'react-icons/fa';
import BlogLegacyButton from './BlogLegacyButton';

const BlogPost5 = () => {
  const paymentCode = `from telegram import Update, InlineKeyboardButton, InlineKeyboardMarkup
from telegram.ext import CallbackContext
import stripe

stripe.api_key = 'your_stripe_secret_key'

async def create_payment(update: Update, context: CallbackContext):
    # Створення платежу в Stripe
    try:
        payment_intent = stripe.PaymentIntent.create(
            amount=1000,  # сума в копійках
            currency='uah',
            payment_method_types=['card'],
            metadata={'telegram_user_id': update.effective_user.id}
        )
        
        # Створення платіжної форми
        keyboard = [
            [
                InlineKeyboardButton(
                    "💳 Оплатити",
                    url=f"https://your-domain.com/pay/{payment_intent.client_secret}"
                )
            ]
        ]
        reply_markup = InlineKeyboardMarkup(keyboard)
        
        await update.message.reply_text(
            "Для оплати натисніть кнопку нижче:",
            reply_markup=reply_markup
        )
        
    except stripe.error.StripeError as e:
        await update.message.reply_text(
            "Виникла помилка при створенні платежу. Спробуйте пізніше."
        )`;

  const webhookCode = `from flask import Flask, request, jsonify
import stripe

app = Flask(__name__)
stripe.api_key = 'your_stripe_secret_key'

@app.route('/webhook', methods=['POST'])
def webhook():
    event = None
    payload = request.data
    sig_header = request.headers['STRIPE-SIGNATURE']

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, 'your_webhook_secret'
        )
    except ValueError as e:
        return 'Invalid payload', 400
    except stripe.error.SignatureVerificationError as e:
        return 'Invalid signature', 400

    if event['type'] == 'payment_intent.succeeded':
        payment_intent = event['data']['object']
        handle_successful_payment(payment_intent)
    
    return jsonify({'status': 'success'})

def handle_successful_payment(payment_intent):
    # Оновлення статусу замовлення в базі даних
    user_id = payment_intent.metadata.get('telegram_user_id')
    # Відправка повідомлення користувачу
    bot.send_message(
        user_id,
        "Дякуємо за оплату! Ваше замовлення прийнято в обробку."
    )`;

  const liqpayCode = `from liqpay import LiqPay

def create_liqpay_payment(order_id: str, amount: float, description: str):
    liqpay = LiqPay('your_public_key', 'your_private_key')
    
    params = {
        'action': 'pay',
        'amount': amount,
        'currency': 'UAH',
        'description': description,
        'order_id': order_id,
        'version': '3',
        'sandbox': 0  # змініть на 1 для тестового режиму
    }
    
    signature = liqpay.cnb_signature(params)
    return signature, params`;

  const cryptoCode = `from web3 import Web3
from eth_account import Account
import secrets

def setup_crypto_payment():
    # Підключення до Ethereum мережі
    w3 = Web3(Web3.HTTPProvider('your_ethereum_node_url'))
    
    # Створення нового гаманця для отримання платежу
    private_key = secrets.token_hex(32)
    account = Account.from_key(private_key)
    
    return {
        'address': account.address,
        'private_key': private_key
    }

def check_payment_status(address: str, expected_amount: float):
    w3 = Web3(Web3.HTTPProvider('your_ethereum_node_url'))
    balance = w3.eth.get_balance(address)
    
    # Конвертація Wei в ETH
    balance_eth = w3.from_wei(balance, 'ether')
    
    return balance_eth >= expected_amount`;

  return (
    <div className="max-w-4xl mx-auto">
      {/* Заголовок та вступ */}
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Інтеграція платіжних систем у Telegram ботах</h1>
      <img src={getLegacyHeroImage(5)} alt="Інтеграція платіжних систем" className="w-full h-72 object-cover mb-6 rounded-lg shadow-md" />

      {/* Зміст */}
      <div className="bg-gray-50 p-6 rounded-lg mb-8">
        <h3 className="text-2xl font-bold mb-4">Зміст:</h3>
        <ul className="space-y-2">
          <li className="hover:text-blue-600 cursor-pointer">1. Вступ та огляд платіжних систем</li>
          <li className="hover:text-blue-600 cursor-pointer">2. Інтеграція Stripe</li>
          <li className="hover:text-blue-600 cursor-pointer">3. Робота з вебхуками</li>
          <li className="hover:text-blue-600 cursor-pointer">4. LiqPay інтеграція</li>
          <li className="hover:text-blue-600 cursor-pointer">5. Криптовалютні платежі</li>
          <li className="hover:text-blue-600 cursor-pointer">6. Безпека платежів</li>
          <li className="hover:text-blue-600 cursor-pointer">7. Найкращі практики</li>
        </ul>
      </div>

      {/* Вступ */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaCreditCard className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Вступ та огляд платіжних систем</h2>
        </div>
        <p className="text-lg mb-6">
          Інтеграція платіжних систем у Telegram ботах відкриває нові можливості для бізнесу, 
          дозволяючи автоматизувати процес оплати та покращити користувацький досвід. У цій статті 
          ми розглянемо різні способи інтеграції платіжних систем та найкращі практики їх реалізації.
        </p>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">Популярні платіжні системи:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Stripe - міжнародні платежі</li>
            <li>LiqPay - популярний в Україні</li>
            <li>WayForPay - локальний провайдер</li>
            <li>Криптовалютні платежі</li>
            <li>Telegram Payments</li>
          </ul>
        </div>
      </div>

      {/* Stripe інтеграція */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaCode className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Інтеграція Stripe</h2>
        </div>
        <p className="text-lg mb-6">
          Stripe надає потужний API для обробки платежів. Розглянемо приклад інтеграції 
          Stripe з Telegram ботом:
        </p>

        <pre className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md overflow-x-auto">
          <code>{paymentCode}</code>
        </pre>

        <div className="bg-yellow-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">🔑 Ключові особливості Stripe:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Підтримка багатьох валют</li>
            <li>Безпечна обробка платежів</li>
            <li>Детальна аналітика</li>
            <li>Автоматичні виплати</li>
            <li>Захист від шахрайства</li>
          </ul>
        </div>
      </div>

      {/* Вебхуки */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaExchangeAlt className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Робота з вебхуками</h2>
        </div>
        <p className="text-lg mb-6">
          Вебхуки дозволяють отримувати сповіщення про статус платежів у реальному часі. 
          Ось приклад обробки вебхуків від Stripe:
        </p>

        <pre className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md overflow-x-auto">
          <code>{webhookCode}</code>
        </pre>

        <div className="bg-green-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">🔄 Обробка подій:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Підтвердження платежу</li>
            <li>Обробка помилок</li>
            <li>Оновлення статусу замовлення</li>
            <li>Відправка повідомлень</li>
            <li>Логування подій</li>
          </ul>
        </div>
      </div>

      {/* LiqPay */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaDatabase className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">LiqPay інтеграція</h2>
        </div>
        <p className="text-lg mb-6">
          LiqPay - популярна платіжна система в Україні. Розглянемо приклад інтеграції:
        </p>

        <pre className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md overflow-x-auto">
          <code>{liqpayCode}</code>
        </pre>

        <div className="bg-purple-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">💳 Можливості LiqPay:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Карткові платежі</li>
            <li>Платежі через термінали</li>
            <li>QR-код оплата</li>
            <li>Розстрочка</li>
            <li>Масові виплати</li>
          </ul>
        </div>
      </div>

      {/* Криптовалюта */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaChartLine className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Криптовалютні платежі</h2>
        </div>
        <p className="text-lg mb-6">
          Інтеграція криптовалютних платежів стає все більш популярною. Ось приклад 
          роботи з Ethereum платежами:
        </p>

        <pre className="bg-gray-100 p-4 mb-6 rounded-lg shadow-md overflow-x-auto">
          <code>{cryptoCode}</code>
        </pre>

        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">🌐 Особливості крипто-платежів:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Низькі комісії</li>
            <li>Міжнародні перекази</li>
            <li>Швидкі транзакції</li>
            <li>Безпека блокчейну</li>
            <li>Прозорість операцій</li>
          </ul>
        </div>
      </div>

      {/* Безпека */}
      <div className="mb-8">
        <div className="flex items-center mb-4">
          <FaLock className="text-3xl mr-3 text-blue-600" />
          <h2 className="text-3xl font-bold">Безпека платежів</h2>
        </div>
        <p className="text-lg mb-6">
          Безпека - критично важливий аспект при роботі з платежами. Необхідно забезпечити 
          надійний захист даних користувачів та транзакцій.
        </p>

        <div className="bg-red-50 p-4 rounded-lg mb-6">
          <h4 className="font-bold mb-2">🔒 Заходи безпеки:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>SSL/TLS шифрування</li>
            <li>Токенізація даних карток</li>
            <li>Двофакторна автентифікація</li>
            <li>Моніторинг транзакцій</li>
            <li>Регулярні аудити безпеки</li>
          </ul>
        </div>
      </div>

      {/* Найкращі практики */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Найкращі практики</h2>
        <div className="space-y-6">
          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">✅ Рекомендації:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Використовуйте тестове середовище</li>
              <li>Обробляйте помилки коректно</li>
              <li>Зберігайте історію транзакцій</li>
              <li>Надавайте чіткі повідомлення</li>
              <li>Регулярно оновлюйте системи</li>
            </ul>
          </div>

          <div className="bg-red-50 p-4 rounded-lg">
            <h4 className="font-bold mb-2">❌ Чого уникати:</h4>
            <ul className="list-disc list-inside space-y-2">
              <li>Зберігання даних карток</li>
              <li>Ігнорування безпеки</li>
              <li>Відсутності логування</li>
              <li>Складного інтерфейсу</li>
              <li>Недостатнього тестування</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Висновок */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold mb-4">Висновок</h2>
        <p className="text-lg mb-6">
          Інтеграція платіжних систем у Telegram ботах - складний, але важливий процес, який може 
          значно покращити ваш бізнес. Використовуючи правильні інструменти та дотримуючись 
          найкращих практик безпеки, ви можете створити надійну та зручну систему оплати для 
          ваших користувачів.
        </p>

        <div className="bg-blue-50 p-6 rounded-lg mb-8">
          <h4 className="font-bold mb-4">🚀 Наступні кроки:</h4>
          <ul className="list-disc list-inside space-y-2">
            <li>Оберіть відповідну платіжну систему</li>
            <li>Налаштуйте тестове середовище</li>
            <li>Проведіть інтеграційне тестування</li>
            <li>Впровадіть системи моніторингу</li>
            <li>Регулярно оновлюйте безпеку</li>
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
          <BlogLegacyButton className="flex items-center justify-center text-white">
            <FaTelegram className="mr-2" />
            Замовити інтеграцію платіжної системи
          </BlogLegacyButton>
        </a>
      </div>
    </div>
  );
};

export default BlogPost5;
