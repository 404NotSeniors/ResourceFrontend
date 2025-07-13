// import Footer from "./footer";
// import styles from "@/styles/layout/AuthLayout.module.scss";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="">
      {/* Left panel */}
      <div className="">
        <div className="">{children}</div>
      </div>
      {/* Right panel */}
      <div className=""></div>
    </div>
  );
}
