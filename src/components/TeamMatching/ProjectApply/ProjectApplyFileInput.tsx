import { Controller, useFormContext } from 'react-hook-form';
import { styles } from '../../../constants/IdeaRegister/ideaRegisterStyle.constants';
import FolderIcon from '../../../assets/imgs/FolderIcon.svg?react';

const ProjectApplyFileInput = () => {
  const {
    control,
    setValue,
    formState: { errors },
  } = useFormContext();

  const name = 'portfolioUrl';

  return (
    <div className="w-full flex flex-col gap-[10px]">
      <div className="w-full flex flex-col text-left font-600 text-32px">
        <span className={styles.text}>
          포트폴리오 파일을 업로드 해주세요. <span className="text-[#d5da40]">*</span>
        </span>
      </div>

      <Controller
        control={control}
        name={name}
        render={({ field }) => {
          const { value, onBlur, ref, name: fieldName } = field;

          const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
            const file = e.target.files?.[0] ?? null;
            setValue(fieldName, file, { shouldValidate: true, shouldDirty: true });

            // 같은 파일을 다시 선택해도 이벤트가 발생하도록 value 초기화 (선택 사항)
            e.target.value = '';
          };

          return (
            <div className="w-full h-[106px] rounded-[10px] bg-[#4f5e69] overflow-hidden">
              <label className="w-full h-full cursor-pointer flex flex-col items-center justify-center hover:opacity-90 transition-opacity">
                <div className="flex flex-col items-center justify-center px-4">
                  <FolderIcon className="text-darkblue w-[39px] h-[32px]" />

                  {value && (
                    <div className="mt-4 text-[#2f383f] text-[15px] text-600 truncate max-w-full text-center">
                      {value.name}
                    </div>
                  )}
                </div>

                {/* 재클릭 시 수정 가능 */}
                <input
                  type="file"
                  name={fieldName}
                  ref={ref}
                  onBlur={onBlur}
                  accept={'application/pdf'}
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </div>
          );
        }}
      />

      {errors[name] && <p style={{ color: 'red' }}>{String(errors[name]?.message)}</p>}
    </div>
  );
};

export default ProjectApplyFileInput;
