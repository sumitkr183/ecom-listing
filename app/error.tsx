"use client";

export default function Error({
  error,
}: {
  error: Error & { digest?: string };
}) {
  return (
    <div className="w-full h-full flex justify-center items-center">
      <h2>Something went wrong!</h2>
    </div>
  );
}
