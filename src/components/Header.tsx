interface HeaderProps {
  title: string;
}

function Header({ title }: HeaderProps) {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
}

export { Header };
