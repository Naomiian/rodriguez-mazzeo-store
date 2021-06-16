const CatComponent = ({ name, href }) => {
  return (
    <a className="nav-link" href={href}>
      {name}
    </a>
  );
};

export default CatComponent;
