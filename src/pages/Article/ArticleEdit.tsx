import { useState } from 'react';
import { useParams } from 'react-router-dom';

const ToolbarButton = ({
  label,
  active = false,
  onClick,
}: {
  label: string;
  active?: boolean;
  onClick?: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        'px-[19px] py-[12px] rounded-[10px] h-[48px] border border-solid',
        active
          ? 'bg-main text-[#18232d] border-main'
          : 'bg-[#2c373f] text-white border-border hover:bg-[#3a464f]',
        'text-20 font-700',
      ].join(' ')}
    >
      {label}
    </button>
  );
};

const ArticleEdit = () => {
  const { id } = useParams();
  const [title, setTitle] = useState('');
  const [summary, setSummary] = useState('');
  const [sectionTitle, setSectionTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <div className="relative">
      <div className="flex flex-col items-center gap-40 bg-gray min-h-screen w-screen px-46 md:px-76 pt-[197px] pb-100">
        {/* Top toolbar */}
        <div className="flex gap-12 absolute top-[55px] left-[157px]">
          <ToolbarButton label="사진" />
          <ToolbarButton label="링크" />
          <ToolbarButton label="파일" />
          <ToolbarButton label="코드" />
          <ToolbarButton label="본문" active />
          <ToolbarButton label="소제목" />
        </div>
        <div className="flex gap-12 absolute top-[55px] right-[70px]">
          <ToolbarButton label="미리보기" />
          <ToolbarButton label="등록하기" />
        </div>

        {/* Title */}
        <div className="w-full max-w-[1351px]">
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="프롬프트 엔지니어링으로 메뉴 이미지 품질 검수하기: GPT 기반 업무 자동화"
            className="w-full bg-transparent outline-none text-48 font-700 text-main placeholder:text-main"
          />
        </div>

        {/* Divider */}
        <div className="w-full h-[9px] bg-[#2c373f]" />

        {/* Summary block */}
        <div className="w-full max-w-[1348px] border-3 border-solid border-[#4f5e69] rounded-[10px] p-28">
          <textarea
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="요약/소개를 입력하세요."
            className="w-full h-[160px] bg-transparent outline-none text-24 font-500 leading-[40px] text-white placeholder:text-[#4f5e69] resize-none"
          />
        </div>

        {/* Section title */}
        <div className="w-full max-w-[1348px] border-3 border-solid border-[#4f5e69] rounded-[10px] px-20 py-12">
          <input
            value={sectionTitle}
            onChange={(e) => setSectionTitle(e.target.value)}
            placeholder="이미지 검수에 GPT를 활용한 이유"
            className="w-full bg-transparent outline-none text-36 font-700 text-main placeholder:text-main"
          />
        </div>

        {/* Image placeholder */}
        <div className="w-full max-w-[1348px] h-[533px] bg-[#7f888b] rounded-[10px] flex items-center justify-center text-18 text-[#18242D]">
          이미지 영역
        </div>

        {/* Code block / body editor */}
        <div className="w-full max-w-[1348px] bg-[#121b23] rounded-[10px] p-20">
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder={`코드 또는 본문을 입력하세요.\n\n// 예시\nimport React from 'react';`}
            className="w-full h-[520px] bg-transparent outline-none text-white text-24 leading-[40px] font-[400] font-mono resize-none"
          />
        </div>

        {/* Debug id info (optional display) */}
        <div className="w-full max-w-[1348px] text-14 text-[#4f5e69]">편집 중인 글 ID: {id}</div>
      </div>
    </div>
  );
};

export default ArticleEdit;
