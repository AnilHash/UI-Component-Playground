const ComingSoon = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-100 text-yellow-600">
          🚧
        </div>

        <h1 className="text-xl font-semibold text-gray-900">Coming Soon</h1>

        <p className="mt-2 text-sm text-gray-600">
          This feature is currently under development. Please check back later.
        </p>
      </div>
    </div>
  );
};
export default ComingSoon;
