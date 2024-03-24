export const CopyRightMeta: React.FC = () => {
  const currentYear = new Date().getUTCFullYear();

  return <meta name="copyright" content={`${currentYear} | Codist`} />;
};
