const NavLink = ({ to, title }) => {
  return (
    <a
      href={`#${to}`}
      className="block py-2 pl-3 pr-4 text-text-title-light dark:text-text-title-dark sm:text-xl rounded md:p-0
      hover:text-text-title-hoverLight dark:hover:text-text-title-hoverDark"
    >
      {title}
    </a>
  );
};

export default NavLink;
