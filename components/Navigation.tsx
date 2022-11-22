import Link from "next/link";
import { useRouter } from "next/router";
import { PropsWithChildren } from "react";

export const Navigation = () => {
  return (
    <nav className="flex justify-between max-w-6xl mx-auto p-4 md:p-12">
      <div className="font-sans font-semibold tracking-tighter text-slate-800 text-l">Christian Lebeck</div>

      <div className="flex gap-10">
        <NavItem href="/">About</NavItem>
        {/* <NavItem href="/articles">Articles</NavItem> */}
        <NavItem href="/contact">Contact</NavItem>
      </div>
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
