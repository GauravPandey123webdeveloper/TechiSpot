export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            TechiSpot
          </a>
          <div className="" id="">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">
                  TechNews
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TechMemes
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  TechNotes
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
