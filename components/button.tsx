type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
  theme?: "default" | "dark";
};

export default function Button({
  children,
  href,
  target,
  rel,
  theme = "default",
}: ButtonProps) {
  const wrapperClassName = `button__glass${theme === "dark" ? " button__glass--dark" : ""}`;

  if (href) {
    return (
      <div className={wrapperClassName}>
        <a
          className="button"
          href={href}
          target={target}
          rel={rel}
        >
          <span className="button__text">
            {children}
          </span>
        </a>
      </div>
    );
  }

  return (
    <div className={wrapperClassName}>
      <button className="button" type="button">
        <span className="button__text">
          {children}
        </span>
      </button>
    </div>
  );
}
