export const getLastPathComponent = (pathname: string | null) => {
  if (!pathname) return '';

  const parts = pathname.split('/');
  const matches = parts[parts.length - 1];

  return '/' + matches;
};
