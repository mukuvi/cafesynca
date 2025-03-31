export const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-light text-dark">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-xl">Page not found</p>
      <a
        href="/"
        className="mt-6 px-6 py-2 bg-primary text-light rounded-lg hover:bg-dark transition-custom"
      >
        Go Home
      </a>
    </div>
  );
};
