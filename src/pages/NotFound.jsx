import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <Link className="text-sm font-semibold text-zinc-900 underline" to="/">
        Go to Home
      </Link>
    </div>
  );
}
