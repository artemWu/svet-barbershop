type ButtonProps = {
  children: React.ReactNode;
  href?: string;
};

export default function Button({
  children,
  href,
}: ButtonProps) {
  if (href) {
    return (
      <div className="button__glass">
        <a className="button" href={href}>
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