export const Spinner = ({ size = 40, color = 'border-main' }) => {
  return (
    <div
      className={`animate-spin rounded-full border-4 border-t-transparent ${color}`}
      style={{ width: size, height: size }}
    />
  );
};
