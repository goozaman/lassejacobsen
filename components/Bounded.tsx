import clsx from "clsx";
import { FunctionComponent, PropsWithChildren } from "react";

interface BoundedProps extends PropsWithChildren {
  as?: keyof JSX.IntrinsicElements;
  size?: "base" | "small" | "wide" | "widest";
  className?: string;
  innerClassName?: string;
}

export const Bounded: FunctionComponent<BoundedProps> = ({
  as: Comp = "div",
  size = "base",
  className,
  innerClassName,
  children,
}) => {
  return (
    <Comp className={clsx("px-4 py-8 md:py-10 md:px-6 lg:py-12", className)}>
      <div
        className={clsx(
          "mx-auto w-full",
          size === "small" && "max-w-xl",
          size === "base" && "max-w-3xl",
          size === "wide" && "max-w-4xl",
          size === "widest" && "max-w-6xl",
          innerClassName
        )}
      >
        {children}
      </div>
    </Comp>
  );
};
