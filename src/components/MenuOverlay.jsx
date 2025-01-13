import NavLink from "./NavLink";

function MenuOverlay({ link }) {
  return (
    <ul className="flex flex-col py-4 items-center">
      <li key={link.title}>
        {link.map((link) => (
          <NavLink key={link.id} to={`${link.id}`} title={link.title} />
        ))}
      </li>
    </ul>
  );
}

export default MenuOverlay;
