const NavLink = ({ to, title }) => {
  return (
    <a
      href={`#${to}`}
      className="block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white"
    >
      {title}
    </a>
  );
};

export default NavLink;
