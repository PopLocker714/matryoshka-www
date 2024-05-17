import { ModeToggle } from "@/components/ModeToggle";

export default function Header() {
  return (
    <header className="bg-white rounded-lg shadow dark:bg-gray-900 m-4">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-2">
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
              <a href="/#feature" className="hover:underline me-4 md:me-6">
                Преимущества
              </a>
            </li>
            <li>
              <a href="/#" className="hover:underline me-4 md:me-6">
                Скриншоты
              </a>
            </li>
            <li>
              <a href="/#download" className="hover:underline me-4 md:me-6">
                Загрузить
              </a>
            </li>
            <li>
              <ModeToggle className="hidden lg:flex" />
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
