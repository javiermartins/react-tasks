import Toolbar from "../Toolbar";

interface Props {
  children: React.ReactNode;
}

export default function Layout(props: Props) {
  const { children } = props;

  return (
    <div className="main bg-dark text-white layout">
      <Toolbar />
      <div>{children}</div>
    </div>
  );
}
