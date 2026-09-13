type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  target?: React.HTMLAttributeAnchorTarget;
  rel?: string;
};

export default function Button({
  children,
  href,
  target,
  rel,
}: ButtonProps) {
  if (href) {
    return (
      <div className="button__glass">
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
    <div className="button__glass">
      <button className="button" type="button">
        <span className="button__text">
          {children}
        </span>
      </button>
    </div>
  );
}
