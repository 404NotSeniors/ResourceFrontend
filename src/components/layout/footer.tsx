export default function Footer({
  variant = "left",
}: {
  variant?: "left" | "right";
}) {
  if (variant === "left") {
    return (
      <footer className="mt-4 text-sm text-blue-200 pb-6">
        © 2025 Resource APP. All rights reserved.
      </footer>
    );
  }
  return (
    <footer className="absolute bottom-6 left-0 w-full flex justify-center items-center text-blue-400 text-sm gap-6">
      <span>© 2025 Resource APP</span>
      <nav className="flex gap-5 ml-6">
        <a href="#" className="hover:underline">
          Terms
        </a>
        <a href="#" className="hover:underline">
          Privacy
        </a>
        <a href="#" className="hover:underline">
          Help
        </a>
      </nav>
    </footer>
  );
}
