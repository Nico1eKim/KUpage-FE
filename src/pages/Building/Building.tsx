import FixIcon from '../../assets/imgs/Fix.svg?react';

const Building = () => {
  return (
    <div className="w-full h-[calc(100vh-141px)] text-white flex-center flex-col bg-gradient">
      <h1 className="font-700 text-48">더 멋진 페이지를 만들고 있어요!</h1>
      <p className="text-24 pt-32 pb-60">
        이 페이지는 아직 공사 중이에요.
        <br />곧 알찬 내용으로 꽉 채워서 찾아올게요!
      </p>
      <FixIcon className="size-240" />
    </div>
  );
};

export default Building;
