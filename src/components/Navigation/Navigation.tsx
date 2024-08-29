import { Link, useLocation } from 'react-router-dom';

const navigationLinks = [
  { name: 'Генерировать QR код', path: '/qr-code/generate' },
  { name: 'Сканировать QR код', path: '/qr-code/scan' },
];

export const Navigation = () => {
  const { pathname } = useLocation();
  return (
    <nav className="flex justify-center gap-3 mt-2 mb-2 flex-wrap">
      {navigationLinks.map((link) => (
        <Link
          key={link.path}
          className={`navigation-link ${link.path === pathname && 'navigation-link-active'}`}
          to={link.path}
        >
          {link.name}
        </Link>
      ))}
    </nav>
  );
};
