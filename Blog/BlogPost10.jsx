import React from 'react';
import { FaTelegram, FaRobot, FaChartLine, FaLock, FaRocket, FaBrain, FaDatabase, FaMobileAlt } from 'react-icons/fa';
import Button from '../Button';

const StatCard = ({ number, label, description }) => (
  <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-200 hover:border-blue-300 transition-all duration-300">
    <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">{number}</div>
    <div className="text-lg font-semibold mb-2 text-gray-800">{label}</div>
    <div className="text-sm text-gray-600">{description}</div>
  </div>
);

const TrendCard = ({ icon: Icon, title, items }) => (
  <div className="bg-white rounded-xl p-6 hover:shadow-lg transition-all duration-300 border border-gray-200">
    <div className="flex items-center mb-4">
      <Icon className="text-purple-500 text-2xl mr-3" />
      <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
    </div>
    <ul className="space-y-2 text-gray-600">
      {items.map((item, index) => (
        <li key={index} className="flex items-center">
          <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
          {item}
        </li>
      ))}
    </ul>
  </div>
);

const MarketCard = ({ sector, volume, growth, details }) => (
  <div className="bg-white rounded-xl p-6 border border-gray-200">
    <h3 className="text-xl font-semibold mb-4 text-gray-800">{sector}</h3>
    <div className="grid grid-cols-2 gap-4 mb-4">
      <div>
        <div className="text-2xl font-bold text-purple-600">{volume}</div>
        <div className="text-sm text-gray-600">Об'єм ринку</div>
      </div>
      <div>
        <div className="text-2xl font-bold text-green-600">{growth}</div>
        <div className="text-sm text-gray-600">Річний ріст</div>
      </div>
    </div>
    <p className="text-gray-600 text-sm">{details}</p>
  </div>
);

const BlogPost10 = () => {
  const aiExample = `// Приклад інтеграції GPT-4 в Telegram бота

from openai import OpenAI
from telegram import Update
from telegram.ext import CallbackContext

class AIBot:
    def __init__(self):
        self.client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))
        self.context = {}
    
    async def process_message(self, update: Update, context: CallbackContext):
        user_id = update.effective_user.id
        message = update.message.text
        
        # Отримуємо історію контексту
        user_context = self.context.get(user_id, [])
        
        # Формуємо запит до GPT-4
        response = await self.client.chat.completions.create(
            model="gpt-4",
            messages=[
                {"role": "system", "content": "Ви - асистент для бізнесу"},
                *user_context,
                {"role": "user", "content": message}
            ],
            temperature=0.7,
            max_tokens=150
        )
        
        # Зберігаємо контекст
        user_context.append({"role": "user", "content": message})
        user_context.append({
            "role": "assistant", 
            "content": response.choices[0].message.content
        })
        self.context[user_id] = user_context[-10:]  # Зберігаємо останні 5 пар повідомлень
        
        return response.choices[0].message.content`;

  const blockchainExample = `// Приклад інтеграції Web3 в Telegram бота

from web3 import Web3
from eth_account import Account
import json

class Web3Bot:
    def __init__(self):
        self.w3 = Web3(Web3.HTTPProvider(os.getenv("ETH_NODE_URL")))
        self.contract_address = os.getenv("CONTRACT_ADDRESS")
        with open("contract_abi.json") as f:
            self.contract_abi = json.load(f)
        self.contract = self.w3.eth.contract(
            address=self.contract_address, 
            abi=self.contract_abi
        )
    
    async def create_wallet(self, user_id: int):
        """Створення нового гаманця"""
        account = Account.create()
        return {
            'address': account.address,
            'private_key': account.key.hex()
        }
    
    async def check_balance(self, address: str):
        """Перевірка балансу"""
        balance = self.w3.eth.get_balance(address)
        return self.w3.from_wei(balance, 'ether')
    
    async def send_transaction(self, from_address: str, to_address: str, amount: float):
        """Відправка транзакції"""
        nonce = self.w3.eth.get_transaction_count(from_address)
        transaction = {
            'nonce': nonce,
            'to': to_address,
            'value': self.w3.to_wei(amount, 'ether'),
            'gas': 21000,
            'gasPrice': self.w3.eth.gas_price
        }
        return transaction`;

  const mobileExample = `// Приклад крос-платформенної інтеграції

class CrossPlatformBot:
    def __init__(self):
        self.platforms = {
            'telegram': TelegramClient(),
            'viber': ViberClient(),
            'messenger': MessengerClient()
        }
        self.db = Database()
    
    async def broadcast_message(self, message: str, media: list = None):
        """Відправка повідомлення на всі платформи"""
        results = {}
        for platform, client in self.platforms.items():
            try:
                result = await client.send_message(message, media)
                results[platform] = {
                    'status': 'success',
                    'recipients': result.recipient_count
                }
            except Exception as e:
                results[platform] = {
                    'status': 'error',
                    'error': str(e)
                }
        return results
    
    async def sync_user_data(self, user_id: str, platform: str):
        """Синхронізація даних користувача між платформами"""
        user_data = await self.db.get_user(user_id)
        for p_name, client in self.platforms.items():
            if p_name != platform:
                await client.update_user(user_id, user_data)
        return user_data`;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <div className="p-6 flex-grow mt-20">
        {/* Порожній блок для відступу зверху */}
      </div>

      {/* Заголовок та вступ */}
      <h1 className="text-4xl font-bold mb-6 text-center md:text-left">Безпека Telegram ботів: Комплексний посібник із захисту даних та користувачів у 2024 році</h1>

      <img src="/ohyes.jpg" alt="Безпека Telegram ботів" className="w-full h-72 object-cover mb-6 rounded-lg shadow-md" />

      <div className="text-lg text-gray-700 space-y-6">
        <p className="font-semibold text-xl">
          У сучасному світі, де кібербезпека стає все більш критичною, захист Telegram ботів є надзвичайно важливим аспектом розробки. За даними останніх досліджень, кількість кібератак на месенджери зросла на 287% порівняно з минулим роком. Саме тому ми підготували детальний посібник з безпеки Telegram ботів.
        </p>

        <h2 className="text-3xl font-bold mt-8 mb-4">1. Основні загрози безпеці Telegram ботів</h2>
        <ul className="list-disc pl-6 space-y-3">
          <li>Несанкціонований доступ до API токену бота</li>
          <li>MITM-атаки (Man-in-the-Middle)</li>
          <li>DDoS-атаки на бота та сервер</li>
          <li>Спроби викрадення персональних даних користувачів</li>
          <li>SQL-ін'єкції та XSS-атаки</li>
          <li>Спам-атаки та флуд</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">2. Найкращі практики захисту Telegram ботів</h2>
        
        <h3 className="text-2xl font-semibold mt-6 mb-3">2.1. Захист API токену</h3>
        <p>
          API токен - це ключ доступу до вашого бота. Його компрометація може призвести до повного захоплення контролю над ботом. Рекомендовані заходи безпеки:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Зберігання токену в змінних середовища (.env файл)</li>
          <li>Регулярна ротація токенів</li>
          <li>Використання систем управління секретами (HashiCorp Vault, AWS Secrets Manager)</li>
          <li>Моніторинг незвичної активності</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3">2.2. Валідація вхідних даних</h3>
        <p>
          Кожне повідомлення, яке отримує ваш бот, повинно проходити ретельну перевірку:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Перевірка типів даних</li>
          <li>Санітизація користувацького вводу</li>
          <li>Обмеження довжини повідомлень</li>
          <li>Фільтрація спеціальних символів</li>
          <li>Використання регулярних виразів для валідації</li>
        </ul>

        <h3 className="text-2xl font-semibold mt-6 mb-3">2.3. Захист від DDoS-атак</h3>
        <p>
          DDoS-атаки можуть паралізувати роботу вашого бота. Основні методи захисту:
        </p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Використання CDN (Cloudflare, Akamai)</li>
          <li>Rate limiting для користувачів</li>
          <li>Масштабування інфраструктури</li>
          <li>Використання анти-DDoS сервісів</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">3. Шифрування та захист даних</h2>
        <p>
          Захист даних користувачів - це не тільки технічна необхідність, але й законодавча вимога (GDPR, CCPA). Основні аспекти:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Використання end-to-end шифрування для чутливих даних</li>
          <li>Безпечне зберігання паролів (bcrypt, Argon2)</li>
          <li>Шифрування даних у стані спокою</li>
          <li>Регулярне резервне копіювання даних</li>
          <li>Політика видалення даних</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">4. Моніторинг та аудит безпеки</h2>
        <p>
          Постійний моніторинг - ключ до раннього виявлення загроз:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Логування всіх критичних операцій</li>
          <li>Налаштування системи сповіщень</li>
          <li>Регулярний аудит безпеки</li>
          <li>Аналіз патернів використання</li>
          <li>Моніторинг продуктивності</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">5. Відповідність законодавству</h2>
        <p>
          Важливо забезпечити відповідність бота законодавчим вимогам:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>GDPR для користувачів з ЄС</li>
          <li>CCPA для користувачів з Каліфорнії</li>
          <li>Локальні закони про захист даних</li>
          <li>Політика конфіденційності</li>
          <li>Умови використання</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">6. Практичні рекомендації з впровадження</h2>
        <p>
          Для успішного впровадження заходів безпеки рекомендується:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Створити документацію з безпеки</li>
          <li>Навчати команду розробників</li>
          <li>Регулярно оновлювати залежності</li>
          <li>Проводити пентести</li>
          <li>Мати план реагування на інциденти</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">7. Майбутнє безпеки Telegram ботів</h2>
        <p>
          Технології безпеки постійно еволюціонують. Очікувані тренди:
        </p>
        <ul className="list-disc pl-6 space-y-3">
          <li>Використання AI для виявлення загроз</li>
          <li>Біометрична автентифікація</li>
          <li>Blockchain для захисту транзакцій</li>
          <li>Квантова криптографія</li>
        </ul>

        <h2 className="text-3xl font-bold mt-8 mb-4">Висновок</h2>
        <p>
          Безпека Telegram ботів - це комплексне завдання, яке вимагає постійної уваги та оновлення. Впроваджуючи описані вище заходи, ви значно підвищите захищеність вашого бота та даних користувачів. Пам'ятайте, що безпека - це не продукт, а процес, який вимагає постійного вдосконалення та адаптації до нових загроз.
        </p>

        <div className="bg-gray-100 p-6 rounded-lg mt-8">
          <h3 className="text-2xl font-bold mb-4">Ключові показники безпеки Telegram ботів:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>95% успішних атак можна запобігти базовими заходами безпеки</li>
            <li>60% витоків даних відбуваються через людський фактор</li>
            <li>40% ботів мають вразливості в налаштуваннях за замовчуванням</li>
            <li>30% атак націлені на викрадення конфіденційних даних</li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center mt-8">
        <a
          href="https://t.me/nowayrm"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="flex items-center justify-center text-white">
            Замовити розробку захищеного Telegram бота
          </Button>
        </a>
      </div>
    </div>
  );
};

export default BlogPost10;
