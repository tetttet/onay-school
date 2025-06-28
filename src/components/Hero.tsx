export default function Hero() {
  return (
    <div className="relative w-full pt-32 lg:pt-32 lg:pb-24">
      {/* Фоновый градиент */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black/55 dark:from-white/15 dark:to-black/40 z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/80 to-background/20 z-0" />

      {/* Контент */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-8 flex flex-col justify-center">
        <div className="max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/80 bg-clip-text text-transparent">
            Международная платформа образования и развития
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Актуальные программы, эффективные онлайн-курсы направленные на развитие знаний и достижение академических целей с гибким форматом и лучшими преподавателями.
          </p>
        </div>
      </div>
    </div>
  );
}
