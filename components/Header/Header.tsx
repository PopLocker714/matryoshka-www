import { ModeToggle } from "@/components/ModeToggle";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const navigation = [
  { name: "Продукт", href: "#" },
  { name: "Преимущества", href: "#" },
  { name: "Скачать", href: "#" },
  { name: "Компания", href: "#" },
];

export default function Header() {
  return (
    <header className="border-b-[0.5px] border-secondary/10 border-gray-200 dark:border-gray-600">
      <nav className="mx-auto flex max-w-7xl items-center justify-between py-2 lg:px-8 px-6" aria-label="Global">
        <div className="flex">
          <a href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Your Company</span>
            <img className="h-16 w-auto" src="logo.png" alt="Матрешка" />
          </a>
        </div>
        <div className="flex lg:hidden">
          <Menu />
        </div>
        <div className="hidden lg:flex lg:gap-x-12 mr-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="text-sm font-semibold leading-6 text-gray-900 dark:text-slate-100">
              {item.name}
            </a>
          ))}
        </div>
        <ModeToggle className="hidden lg:flex" />
      </nav>
    </header>
  );
}
