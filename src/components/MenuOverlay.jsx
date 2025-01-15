import { useTranslation } from "react-i18next";
import NavLink from "./NavLink";

function MenuOverlay({ link }) {
  const { t } = useTranslation("global");

  return (
    <ul>
      <li key={link.title}>
        {link.map((link) => (
          <NavLink key={link.id} to={`${link.id}`} title={t(link.titleKey)} />
        ))}
      </li>
    </ul>
  );
}

export default MenuOverlay;
