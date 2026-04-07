'use client';

type Props = {
  error: Error & { digest?: string };
  reset: () => void;
};

export default function Error({ reset }: Props) {
  return (
    <main className="mx-auto max-w-3xl px-4 py-16">
      <div className="rounded-2xl border border-red-200 bg-red-50 p-6">
        <h2 className="text-xl font-semibold text-red-900">
          Something went wrong
        </h2>

        <p className="mt-2 text-sm text-red-800">
          We couldn’t load the products right now. Please try again.
        </p>

        <button
          type="button"
          onClick={() => reset()}
          className="mt-4 rounded-lg bg-red-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-800"
        >
          Try again
        </button>
      </div>
    </main>
  );
}