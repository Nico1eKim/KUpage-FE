import clsx from 'clsx';

export const SectionTitleField = ({
  ...attrs
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  return (
    <div
      className={clsx(
        'w-full border-2 border-solid border-border-form rounded-[10px] px-20 py-12',
        attrs.className
      )}
    >
      <input
        {...attrs}
        className={clsx(
          'w-full bg-transparent outline-none text-main text-[36px] font-700',
          attrs.className
        )}
      />
    </div>
  );
};
