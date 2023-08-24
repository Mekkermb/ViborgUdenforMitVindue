import { Link } from "react-router-dom";

export default function Back() {
  return (
    <nav className="absolute">
      <Link to="/">
        <h3 className="px-8 text-3xl font-light text-[#F72585] underline underline-offset-2 lg:text-6xl">
          &lt;-
        </h3>
      </Link>
    </nav>
  );
}
