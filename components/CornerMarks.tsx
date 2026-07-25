export function CornerMarks({ className = "" }: { className?: string }) {
  const mark =
    "absolute w-4 h-4 border-crimson pointer-events-none";
  return (
    <div className={`absolute inset-0 ${className}`} aria-hidden>
      <span className={`${mark} top-0 left-0 border-t-2 border-l-2`} />
      <span className={`${mark} top-0 right-0 border-t-2 border-r-2`} />
      <span className={`${mark} bottom-0 left-0 border-b-2 border-l-2`} />
      <span className={`${mark} bottom-0 right-0 border-b-2 border-r-2`} />
    </div>
  );
}
