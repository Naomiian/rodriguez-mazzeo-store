import { NAME_CAT_1, NAME_CAT_2, NAME_CAT_3, NAME_CAT_4 } from "../../utils/const"


export const NavbarComponent = () => {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="#">HOME</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div className="navbar-nav">

        {/* <CatComponent/> */}

        <a className="nav-link" href="https://media.tenor.com/images/a199dabf8ed6b49b2bfd100aa629e4ae/tenor.gif">{NAME_CAT_1}</a>
        <a className="nav-link" href="https://media.tenor.com/images/48570e6388ba1ccc702c005fe943e94b/tenor.gif">{NAME_CAT_2}</a>
        <a className="nav-link" href="https://media1.tenor.com/images/46734e53d1e2d9121ffbd873a6947973/tenor.gif">{NAME_CAT_3}</a>
        <a className="nav-link" href="https://media1.tenor.com/images/7820eec661baee6b08122f41e31de4b9/tenor.gif">{NAME_CAT_4}</a>

        
      </div>
    </div>
  </div>
</nav>
  )
}