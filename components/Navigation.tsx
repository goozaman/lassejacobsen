import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

export const Navigation = () => {
  return (
    <nav className="flex justify-center gap-10 p-12">
      <NavItem href="/">Articles</NavItem>
      <NavItem href="/about">About</NavItem>
      {/* <NavItem href="/contact">Contact</NavItem> */}
    </nav>
  );
};

interface NavItemProps extends PropsWithChildren {
  href: string;
}

const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  const { pathname } = useRouter();
  return (
    <div className={pathname === href ? "underline underline-offset-4" : ""}>
      <Link href={href}>{children}</Link>
    </div>
  );
};
