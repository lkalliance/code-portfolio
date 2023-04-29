interface NavProps {
  page: string;
  onChoice: (newPage: string) => void
}



function Nav( { page, onChoice }: NavProps ) {
  const tabs = [ "About", "Portfolio", "Résumé", "Contact Me" ];
  const handleClick = (tab:string) => {
    onChoice(tab);
  }

  return (
    <nav>
      { tabs.map((tab, index) => { return tab===page ? tab : <button key={index} onClick={() => handleClick(tab)}>{tab}</button> })}
    </nav>
  )
}

export { Nav };
