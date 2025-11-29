import { useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import ArrowDown from '../../assets/imgs/ArrowDown.svg';
import useUserStore from '../../hooks/useUserStore';

import LeaderIcon from '/Leader.svg';
import TutorIcon from '/Tutor.svg';
import MemberIcon from '/Member.svg';

type Role = '파트장' | '튜터' | '멤버';

const RoleIcon: Record<Role, string> = {
  파트장: LeaderIcon,
  튜터: TutorIcon,
  멤버: MemberIcon,
};

const getRole = (auths: string[]): Role => {
  const leaderRoles = ['파트장', '회장', '부장', '총무', '운영진'];
  if (auths.some((auth) => leaderRoles.some((role) => auth.includes(role)))) {
    return '파트장';
  }
  if (auths.some((auth) => auth.includes('튜터'))) {
    return '튜터';
  }
  return '멤버';
};

const LoginButton = () => {
  const dropdownRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const { isLoggedIn, logout, auths } = useUserStore();

  const role = getRole(auths);

  console.log(role);

  // 외부 클릭 시 드롭다운 닫기
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
    navigate('/');
    console.log('로그아웃 완료');
  };

  const handleMyPageClick = () => {
    navigate('/mypage');
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative z-floating" ref={dropdownRef}>
      {isLoggedIn ? (
        <>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center justify-between w-[123px] h-[69px] gap-8 pr-12 pl-8 py-8 border border-border rounded-full cursor-pointer hover:bg-[#203636] transition-colors"
          >
            {/* todo: 임시로 파트장 프로필 이미지 사용 */}
            <img src={RoleIcon[role]} alt="Profile" className="w-[55px] h-[55px] rounded-full" />
            <img
              src={ArrowDown}
              alt="Toggle"
              className={`w-6 h-6 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`}
            />
          </button>

          {/* 드롭다운 메뉴 */}
          {isDropdownOpen && (
            <div className="absolute right-0 top-[calc(100%+8px)] w-[160px] border border-border rounded-[8px] shadow-lg overflow-hidden z-floating bg-[#27373f]">
              <button
                onClick={handleMyPageClick}
                className="w-full px-16 py-12 text-left text-white text-16"
              >
                마이페이지
              </button>
              <button
                onClick={handleLogout}
                className="w-full px-16 py-12 text-left text-white text-16"
              >
                로그아웃
              </button>
            </div>
          )}
        </>
      ) : (
        <Link
          to="/login"
          className="px-40 py-12 rounded-full bg-gray border-2 border-border text-white font-700 text-20"
        >
          로그인
        </Link>
      )}
    </div>
  );
};

export default LoginButton;
