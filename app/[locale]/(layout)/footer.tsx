import { getScopedI18n } from '@locales/server';

export const Footer = async () => {
  const t = await getScopedI18n('footer');

  return (
    <footer className="h-20 py-4">
      <div className="container">
        <p className="text-center text-sm text-gray-500">
          &copy; {new Date().getFullYear()} {t('text')}
        </p>
      </div>
    </footer>
  );
};
