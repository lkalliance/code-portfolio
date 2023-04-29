import { Nav } from './Nav';

interface HeaderProps {
  page: string;
  title: string;
  onChoice: (newPage:string) => void
}

function Header( { page, title, onChoice }: HeaderProps ) {
  return (
    <div>
      <h1>{title}</h1>
      <Nav page={page} onChoice={(newPage:string) => {
        onChoice(newPage)}} />
    </div>
  )
}

export { Header };
