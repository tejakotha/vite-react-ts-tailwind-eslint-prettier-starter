function NotFound() {
  return (
    <div className="flex h-screen flex-col items-center justify-center gap-8 leading-relaxed">
      <h1 className="text-center text-4xl font-bold text-slate-900">
        404 Error: Unicorns Ate the Page!
      </h1>
      <p className="max-w-2xl text-center text-lg text-slate-600">
        Oh no! A mischievous herd of unicorns devoured our page. We've sent our
        finest wizards to charm them away. In the meantime, grab some rainbow
        popcorn, relax, and witness the magical showdown. We apologize for the
        whimsical inconvenience! 🦄✨
      </p>
    </div>
  );
}

export default NotFound;
