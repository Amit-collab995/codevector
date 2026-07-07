const Navbar = ({ total }) => {
  return (
    <nav className="navbar">
      <a className="navbar-brand" href="/">
        <div className="navbar-logo">⚡</div>
        <span className="navbar-title">CodeVector</span>
      </a>
      <span className="navbar-count">{total.toLocaleString()} products</span>
    </nav>
  );
};

export default Navbar;
