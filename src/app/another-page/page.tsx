import AnotherPageComponent from '@/components/AnotherPageComponent'

// указываем что нужно каждый раз рендерить страницу на сервере а не кешировать как по умолчанию
export const dynamic = 'force-dynamic';

export default function AnotherPage() {
  return (
      <div className="font-sans dark:bg-black px-10">
        Another page
        <div>
          Дата запроса: {new Date().toLocaleTimeString()}
          <AnotherPageComponent />
        </div>
      </div>
    );
  }
