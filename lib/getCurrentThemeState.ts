'use client';
export function getCurrentTheme() {
  if (typeof window === 'undefined') {
    console.log(typeof window === 'undefined');
    
    // Если код выполняется на сервере, возвращаем значение по умолчанию
    return 'system'; // или 'dark' или 'system', в зависимости от ваших потребностей
  }
  // Проверяем, поддерживается ли медиа-запрос prefers-color-scheme
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark'; // Если текущая тема темная
  } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
    return 'light'; // Если текущая тема светлая
  } else {
    return 'system'; // Если текущая тема определяется системными настройками
  }
}
