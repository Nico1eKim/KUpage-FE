import { useNavigate } from 'react-router-dom';
import GreenButton from '../../components/commons/GreenButton';

const ErrorPage = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  return (
    <div className="w-full h-[calc(100vh-141px)] text-white flex-center flex-col bg-gradient">
      <h1 className="font-700 text-48">존재하지 않는 화면이에요!</h1>
      <p className="text-24 pt-32 pb-60">홈으로 돌아가세요</p>
      <GreenButton text="홈으로 돌아가기 ->" isBig onClick={handleGoHome} />
    </div>
  );
};

export default ErrorPage;
