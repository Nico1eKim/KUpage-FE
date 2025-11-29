import TextareaAutosize, { TextareaAutosizeProps } from 'react-textarea-autosize';
import clsx from 'clsx';

export const CodeField = ({
  ...attrs
}: TextareaAutosizeProps & React.RefAttributes<HTMLTextAreaElement>) => {
  return (
    <div className="w-full bg-[#121b23] rounded-[10px] px-[20px] py-[14px] h-[500px]">
      <TextareaAutosize
        {...attrs}
        className={clsx(
          'w-full bg-transparent outline-none text-white text-[24px] leading-[40px] font-400 font-mono resize-none',
          attrs.className
        )}
        minRows={12}
        maxRows={12}
      />
    </div>
  );
};
