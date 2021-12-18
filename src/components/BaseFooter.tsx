const BaseFooter = () => {
  const year = new Date().getFullYear();

  return (
    <div className="container">
      <div className="nav d-flex justify-content-around">
        <ul className="nav">
          <li className="nav-item">
            <a href="#" className="nav-link disabled">
              &copy;{year} USA Dance #2006 (Cincinnati, OH)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BaseFooter;
