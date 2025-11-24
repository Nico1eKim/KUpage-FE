import { useId, useState } from 'react';

import ImgBtn from '../../assets/imgs/ImgBtn.svg';

type ImageFieldProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

const ImageField = ({ onChange, ...attr }: ImageFieldProps) => {
  const id = useId();
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;

    if (files?.length) {
      const reader = new FileReader();
      reader.readAsDataURL(files[0]);
      reader.onload = (e) => {
        if (typeof e.target?.result === 'string') {
          setPreviewImg(e.target.result);
        }
      };
    }
    onChange?.(e);
  };
  return (
    <div className="w-full h-500">
      <label
        htmlFor={id}
        className="w-full h-full flex justify-center items-center rounded-10 bg-deepGray cursor-pointer"
      >
        {previewImg ? (
          <img src={previewImg} alt="사진 미리보기" className="w-full h-full" />
        ) : (
          <img src={ImgBtn} alt="사진 추가 버튼" />
        )}
      </label>
      <input
        id={id}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={handleChange}
        {...attr}
      />
    </div>
  );
};

export default ImageField;
