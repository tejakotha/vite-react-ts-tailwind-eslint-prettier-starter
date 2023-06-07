function NotFound() {
  return (
    <div className="h-screen flex flex-col items-center justify-center leading-relaxed gap-8">
      <h1 className="text-4xl font-bold text-slate-900 text-center">
        404 Error: Unicorns Ate the Page!
      </h1>
      <p className="max-w-2xl text-lg text-center text-slate-600">
        Oh no! A mischievous herd of unicorns devoured our page. We've sent our
        finest wizards to charm them away. In the meantime, grab some rainbow
        popcorn, relax, and witness the magical showdown. We apologize for the
        whimsical inconvenience! 🦄✨
      </p>
    </div>
  );
}

export default NotFound;
