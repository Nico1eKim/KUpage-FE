// prettier-ignore
import { useFormContext } from 'react-hook-form';
import { notification } from '../../../constants/ProjectApply/notification.constants';
import RoundedSquareButton from '../../commons/RoundedSquareButton';
import { ProjectApplySchema } from './schema/projectApplySchema';
import { useNavigate } from 'react-router-dom';
import useFileUploader from '../../../hooks/useFileUploader';
import { toast } from 'react-toastify';
import Toast from '../../commons/Toast';

const ProjectApplyHeader = ({ teamId }: { teamId: number }) => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<ProjectApplySchema>();
  const navigate = useNavigate();
  const { projectApply } = useFileUploader();

  const onSubmit = handleSubmit(
    (data) => {
      projectApply(teamId, data)
        .then(() => {
          toast(<Toast message="프로젝트 지원이 완료되었어요." />, {
            onClose: () => navigate('/team-matching'),
          });
        })
        .catch(() => {
          toast(<Toast message="프로젝트 지원에 실패했어요." />);
        });
    },
    (errors) => console.log('❌ 유효성 에러:', errors)
  );

  return (
    <div className="flex flex-col gap-36 p-48">
      <div className="flex flex-row justify-between items-center">
        <h1>Completion of application</h1>
        <RoundedSquareButton disabled={isSubmitting} onClick={onSubmit}>
          최종 제출하기
        </RoundedSquareButton>
      </div>
      <pre className="whitespace-pre-wrap font-sans text-[16px] leading-relaxed text-left">
        {notification}
      </pre>
    </div>
  );
};

export default ProjectApplyHeader;
