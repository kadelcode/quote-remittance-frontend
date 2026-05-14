const NotFoundPage = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-red-500">404</h1>

        <h2 className="mt-4 text-2xl font-semibold">Page Not Found</h2>

        <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>
      </div>
    </div>
  );
};

export default NotFoundPage;
