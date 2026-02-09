import Link from 'next/link'

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center px-16 bg-white dark:bg-black sm:items-start">
        <div className="flex flex-col space-y-3 py-10 text-blue-500">
          <Link href="/">Home page</Link>
          <Link href="/another-page">Another page</Link>
        </div>
      </main>
    </div>
  );
}
