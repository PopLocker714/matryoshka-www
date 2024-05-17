export default function Footer() {
  return (
    <footer className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src="logo.png" alt="Матрешка логотип" className="h-16" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Матрешка</span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/#" className="hover:underline me-4 md:me-6">
                О нас
              </a>
            </li>
            <li>
              <a href="/privacy" className="hover:underline me-4 md:me-6">
                Политика Конфиденциальности
              </a>
            </li>
            <li>
              <a href="/user-agreements" className="hover:underline me-4 md:me-6">
                Пользовательское соглашение
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="http://distira.ru/" className="hover:underline">
            OOO Дистира™
          </a>
          . Все права защищены.
        </span>
      </div>
    </footer>
  );
}
