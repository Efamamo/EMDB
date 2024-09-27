'use client';
export default function ErrorBoundary({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="text-center">
      <h3>Something went wrong. Please Try Again</h3>
      <button className="bg-blue-600 py-1 px-2 mt-2 text-white" onClick={reset}>
        Try Again
      </button>
    </div>
  );
}
