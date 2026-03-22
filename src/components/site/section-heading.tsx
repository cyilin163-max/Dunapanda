import { ReactNode } from "react";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  action,
}: {
  eyebrow?: string;
  title: string;
  description: string;
  align?: "left" | "center";
  action?: ReactNode;
}) {
  return (
    <div
      className={`mb-6 flex flex-col gap-4 ${
        align === "center" ? "items-center text-center" : ""
      }`}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <div className="flex w-full flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div className={align === "center" ? "mx-auto max-w-2xl" : "max-w-2xl"}>
          <h2 className="display-title text-balance text-4xl text-[var(--color-ink)] md:text-[3.4rem] md:leading-[1.02]">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-sm leading-8 text-[var(--muted)] md:text-base">
            {description}
          </p>
        </div>
        {action}
      </div>
    </div>
  );
}
