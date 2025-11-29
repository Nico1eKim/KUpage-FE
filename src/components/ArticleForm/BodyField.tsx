import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';
import clsx from 'clsx';

export const BodyField = ({
  ...attrs
}: TextareaAutosizeProps & React.RefAttributes<HTMLTextAreaElement>) => {
  return (
    <div
      className={clsx(
        'w-full border-2 border-solid border-border-form rounded-[10px] p-20 h-[202px]',
        attrs.className
      )}
    >
      <TextareaAutosize
        {...attrs}
        className={clsx(
          'w-full h-full bg-transparent outline-none text-white text-24 leading-[40px] font-400 resize-none',
          attrs.className
        )}
        minRows={4}
        maxRows={4}
      />
    </div>
  );
};
