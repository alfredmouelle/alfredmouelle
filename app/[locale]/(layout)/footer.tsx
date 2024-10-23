import { getScopedI18n } from '@locales/server';

export const Footer = async () => {
  const t = await getScopedI18n('footer');

  return (
    <footer className="py-4">
      <div className="container">
        <p className="text-center text-xs md:text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {t('text')}
        </p>
      </div>
    </footer>
  );
};
