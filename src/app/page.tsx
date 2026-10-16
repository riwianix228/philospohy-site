'use client'

/**
 * Одностраничный сайт «Философия в эпоху алгоритмов».
 * Сам сайт — цельный HTML-файл (HTML+CSS+JS в одном файле):
 *   public/philosophy.html
 * Он подключён во весь экран через iframe, чтобы превью в панели
 * показывало его 1:1, как самостоятельную страницу.
 */
export default function Home() {
  return (
    <main className="fixed inset-0 bg-[#0a0a0f]">
      <iframe
        src="/philosophy.html"
        title="Философия в эпоху алгоритмов — карта великих идей"
        className="h-full w-full border-0"
        allow="autoplay"
      />
    </main>
  )
}
