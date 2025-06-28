"use client";

import { useSearchParams } from "next/navigation";

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get("q");

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Результаты поиска</h1>

      {query ? (
        <p className="text-muted-foreground">
          Поиск по запросу: <strong>{query}</strong>
        </p>
      ) : (
        <p className="text-muted-foreground">Введите запрос для поиска.</p>
      )}

      {/* Здесь будет логика поиска/фильтрации */}
    </main>
  );
}
