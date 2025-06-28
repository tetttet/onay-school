// app/search/page.tsx
import SearchPage from "@/components/demo/SearchClient";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={<div>Загрузка...</div>}>
      <SearchPage />
    </Suspense>
  );
}
