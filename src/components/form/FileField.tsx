import { ChangeEvent, useState } from 'react';

import FileBtn from '../../assets/imgs/FileBtn.svg';

const MAX_SIZE = 20 * 1024 * 1024;

const FileField = ({
  onChange,
  ...attr
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files;
    if (file && MAX_SIZE > file[0].size) setFileName(file[0].name);
    onChange?.(e);
  };

  return (
    <div>
      <label
        htmlFor="pdfFile"
        className="w-full h-264 flex flex-col justify-center items-center rounded-[10px] bg-deepGray cursor-pointer gap-12"
      >
        <img src={FileBtn} alt="파일 추가 버튼" />
        <span className="text-16 font-600 text-[#2F383F]">
          {fileName ? fileName : '최대 20MB까지 업로드가 가능해요.'}
        </span>
      </label>
      <input
        id="pdfFile"
        type="file"
        className="hidden"
        accept=".pdf"
        onChange={(e) => handleChange(e)}
        {...attr}
      />
    </div>
  );
};

export default FileField;
