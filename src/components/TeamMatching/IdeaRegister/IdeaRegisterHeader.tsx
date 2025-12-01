import { useFormContext } from 'react-hook-form';
import RoundedSquareButton from '../../commons/RoundedSquareButton';
import { IdeaRegisterSchema } from './schema/ideaRegisterSchema';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Toast from '../../commons/Toast';
import useFileUploader from '../../../hooks/useFileUploader';

const IdeaRegisterHeader = () => {
  const {
    handleSubmit,
    formState: { isSubmitting },
  } = useFormContext<IdeaRegisterSchema>();
  const navigate = useNavigate();
  const { ideaRegister } = useFileUploader();

  const onSubmit = handleSubmit(
    (data) => {
      ideaRegister(data).then(() => {
        toast(<Toast message="아이디어 등록이 완료되었어요." />, {
          onClose: () => navigate('/team-matching'),
        });
      });
    },
    (errors) => console.log('❌ 유효성 에러:', errors)
  );

  return (
    <section className="sticky top-0 z-popup flex justify-between items-center w-full pt-80 pb-32 backdrop-blur-md">
      <h1 className="text-64 font-700 text-white">아이디어 등록하기</h1>
      <RoundedSquareButton disabled={isSubmitting} onClick={onSubmit}>
        완료하기
      </RoundedSquareButton>
    </section>
  );
};

export default IdeaRegisterHeader;
