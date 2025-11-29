import { createContext, useContext, useState } from 'react';

import LinkBtn from '../../assets/imgs/LinkBtn.svg';
import Modal from '../commons/Modal';

interface LinkFieldContextProps {
  /**
   * 링크 텍스트
   */
  link: string;
  isOpen: boolean;
  /**
   * 모달 닫기
   */
  onClose: () => void;
  /**
   * 모달 열기
   */
  onOpen: () => void;
  // 모달 완료 버튼 누를 때(Modal.onClick): 지금은 필요 없을 듯?
  // onComplete: () => void;
}

const LinkFieldContext = createContext<LinkFieldContextProps>({
  link: '',
  isOpen: false,
  onClose: () => {},
  onOpen: () => {},
});

export interface LinkFieldProps {
  children: React.ReactNode;
  link: string;
}

/**
 * ```
 * <LinkField>
 *   <LinkModalTrigger />
 *   <LinkModal />
 * </LinkField>
 * ```
 * 와 같이 사용, 추후 필요에 따라 더 쪼갤 수 있음
 */
const LinkField = ({ children, link }: LinkFieldProps) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <LinkFieldContext.Provider
      value={{ link, isOpen: open, onOpen: handleOpen, onClose: handleClose }}
    >
      {children}
    </LinkFieldContext.Provider>
  );
};

export const LinkModalTrigger = ({
  onClick,
}: {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}) => {
  const { link, onOpen } = useContext(LinkFieldContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClick?.(e);
    onOpen();
  };

  return link.length == 0 ? (
    <button
      type="button"
      className="w-full h-108 flex justify-center items-center rounded-[10px] bg-deepGray cursor-pointer"
      onClick={handleClick}
    >
      <img src={LinkBtn} alt="링크 추가" />
    </button>
  ) : (
    <button
      type="button"
      className="w-full h-104 rounded-10 border-3 border-solid border-deepGray bg-deepGray px-32 text-white text-32 font-500"
      onClick={handleClick}
    >
      {link}
    </button>
  );
};

/**
 * props는 input의 attributes를 다 지원
 */
export const LinkModal = ({
  ...attr
}: React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>) => {
  const { isOpen, onClose } = useContext(LinkFieldContext);

  return (
    <Modal isOpen={isOpen} onClick={onClose} onClose={onClose}>
      <div className="w-full flex flex-col gap-28">
        <p className="w-full text-white text-36 font-700 text-start">URL을 입력해주세요.</p>
        <input
          type="text"
          className="w-full h-56 rounded-4 border-2 border-solid border-border bg-gray text-white text-20 font-500 px-16"
          {...attr}
        />
      </div>
    </Modal>
  );
};

export default LinkField;
