import { Link } from "react-router-dom";

export default function GalleryLink() {
  return (
    <header className="flex min-h-screen items-center justify-end bg-[#3A0CA3] px-8">
      <Link to="/gallery">
        <h3 className="text-3xl font-light text-[#F72585] lg:text-6xl">
          Galleri <span className="underline underline-offset-2">-&gt;</span>
        </h3>
      </Link>
    </header>
  );
}
