import { FolderHeart, Globe, Headset, MessagesSquare, Palette, Shield, ShieldCheck } from "lucide-react";
import React from "react";

export default function Feature() {
  return (
    <section id="feature" className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md mb-8 lg:mb-16">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Мы гордимся Матрешкой</h2>
          <p className="text-gray-500 sm:text-xl dark:text-gray-400">Эти преимущества подчеркивают полезность мессенджера для вас.</p>
        </div>
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <ShieldCheck />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Безопасность и конфиденциальность</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Мы придаем высший приоритет безопасности и конфиденциальности ваших данных. Все сообщения и данные зашифрованы, чтобы
              обеспечить вашу приватность.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <MessagesSquare />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Групповые чаты и каналы</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Создавайте групповые чаты для общения с друзьями, семьей или коллегами. Кроме того, наши каналы позволяют вам следить за
              новостями и общаться на различные темы.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Globe />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Мультиплатформенность</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Матрешка доступна на различных платформах, включая веб, мобильные устройства и настольные компьютеры. Общайтесь с кем угодно,
              где угодно.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Palette />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Пользовательские настройки и темы</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Настраивайте интерфейс Матрешки по своему вкусу с помощью различных тем и настроек. Сделайте его уникальным и удобным для
              себя.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <FolderHeart />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Интеграция с облачными сервисами</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Обменивайтесь файлами с легкостью, используя интеграцию с популярными облачными сервисами. Храните и делитесь документами,
              фотографиями и видео без проблем.
            </p>
          </div>
          <div>
            <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
              <Headset />
            </div>
            <h3 className="mb-2 text-xl font-bold dark:text-white">Поддержка</h3>
            <p className="text-gray-500 dark:text-gray-400">
              Наша команда поддержки всегда готова помочь вам с любыми вопросами или проблемами. Мы стремимся обеспечить наших пользователей
              лучшим опытом общения.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
