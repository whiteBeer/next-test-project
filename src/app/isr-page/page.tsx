import IsrDataComponent from '@/components/ISRComponent';

export default function IsrPage() {
  return (
    <div className="font-sans dark:bg-black min-h-screen px-10 py-5">
      <h1 className="text-2xl font-bold mb-4">Incremental Static Regeneration</h1>
      <p className="mb-4 text-gray-600 dark:text-gray-400 max-w-2xl">
        Этот компонент получает данные на сервере. Если вы обновите страницу, данные не изменятся,
        пока не пройдет 15 секунд с момента последнего обновления кеша.
      </p>
      Дата запроса: {new Date().toLocaleTimeString()}
      <IsrDataComponent />
    </div>
  );
}