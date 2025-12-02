// prettier-ignore
import { FieldErrors, useFormContext } from 'react-hook-form';
import RoundedSquareButton from '../../commons/RoundedSquareButton';
import { ProjectApplySchema } from './schema/projectApplySchema';
import { useNavigate } from 'react-router-dom';
import useFileUploader from '../../../hooks/useFileUploader';
import { toast } from 'react-toastify';
import Toast from '../../commons/Toast';

const ProjectApplyHeader = ({ teamId }: { teamId: number }) => {
  const {
    handleSubmit,
    formState: { isSubmitting, isValid },
  } = useFormContext<ProjectApplySchema>();
  const navigate = useNavigate();
  const { projectApply } = useFileUploader();

  const onSubmit = (data: ProjectApplySchema) => {
    projectApply(teamId, data)
      .then(() => {
        toast(<Toast message="프로젝트 지원이 완료되었어요." />, {
          onClose: () => navigate('/team-matching'),
        });
      })
      .catch(() => {
        toast(<Toast message="프로젝트 지원에 실패했어요." />);
      });
  };

  const onError = (errors: FieldErrors<ProjectApplySchema>) => {
    const firstError = Object.values(errors)[0];

    if (firstError && firstError.message) {
      toast(<Toast message={firstError.message} />);
    } else {
      toast(<Toast message="입력되지 않은 정보가 있어요. 확인해주세요." />);
    }

    console.log('❌ 유효성 에러:', errors);
  };

  return (
    <div className="sticky top-0 z-popup flex justify-between items-center w-full pt-80 pb-32 px-48 backdrop-blur-md">
      <h1 className="text-64 font-700">Completion of application</h1>
      <RoundedSquareButton
        disabled={isSubmitting}
        onClick={handleSubmit(onSubmit, onError)}
        className={`transition-colors duration-200 ${isValid ? 'bg-main border-main text-[#1A272F]' : ''}`}
      >
        최종 제출하기
      </RoundedSquareButton>
    </div>
  );
};

export default ProjectApplyHeader;
