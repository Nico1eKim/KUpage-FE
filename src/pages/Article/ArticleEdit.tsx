import TextareaAutosize from 'react-textarea-autosize';
import clsx from 'clsx';

import { BodyField } from '../../components/ArticleForm/BodyField';
import { CodeField } from '../../components/ArticleForm/CodeField';
import { SectionTitleField } from '../../components/ArticleForm/SectionTitleField';
import FileField from '../../components/form/FileField';
import ImageField from '../../components/form/ImageField';
import LinkField, { LinkModal, LinkModalTrigger } from '../../components/form/LinkField';

import KUITLogo from '/KUITLogo.svg';

const ToolbarButton = ({ label, onClick }: { label: string; onClick?: () => void }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={clsx(
        'px-[19px] py-[12px] rounded-[10px] h-[48px] border border-border flex-center bg-gray text-white',
        'hover:bg-main hover:text-[#18232d] hover:border-bg-main',
        'text-[20px] font-700 font-bold tracking-[0]'
      )}
    >
      {label}
    </button>
  );
};

const HORIZONTAL_PADDING = 'px-[47px] pr-[44px]';

const ArticleEdit = () => {
  return (
    <div className="relative bg-signup-gradient min-h-screen">
      {/* Top toolbar */}
      <header
        className={clsx(
          'w-full h-[141px] flex items-center justify-between bg-gray sticky top-0',
          HORIZONTAL_PADDING,
          'pt-[55px] pb-[38px]'
        )}
      >
        <div className="flex gap-[47px]">
          <img src={KUITLogo} alt="KUIT Logo" width={63} height={55} />
          <div className="flex gap-[14px]">
            <ToolbarButton label="사진" />
            <ToolbarButton label="링크" />
            <ToolbarButton label="파일" />
            <ToolbarButton label="코드" />
            <ToolbarButton label="본문" />
            <ToolbarButton label="소제목" />
          </div>
        </div>
        <div className="flex gap-12">
          <ToolbarButton label="미리보기" />
          <ToolbarButton label="등록하기" />
        </div>
      </header>
      <form>
        <TextareaAutosize
          name="title"
          placeholder="제목을 입력해주세요."
          className={clsx(
            HORIZONTAL_PADDING,
            'text-[48px] font-700 text-main w-full bg-transparent outline-none pt-[56px] pb-[40px]'
          )}
        />
        <hr className="w-full h-[9px] bg-[#2c373f]" />
        <div
          className={clsx(
            HORIZONTAL_PADDING,
            'w-full flex flex-col gap-[27px] pt-[40px] pb-[180px]'
          )}
        >
          <SectionTitleField name="sectionTitle" placeholder="소제목을 입력해주세요." />
          <BodyField name="body" placeholder="본문을 입력해주세요." />
          <CodeField name="code" placeholder="코드를 입력해주세요." />
          <LinkField link="">
            <LinkModalTrigger />
            <LinkModal />
          </LinkField>
          <ImageField />
          <FileField />
        </div>
      </form>
    </div>
  );
};

export default ArticleEdit;
