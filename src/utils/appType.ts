// 앱 타입 변환 헬퍼 함수
export const getAppTypeDisplay = (type: string) => {
  if (type === 'Web_App') return 'Web';
  if (type === 'Native_App') return 'Android';
  return type; // 그 외의 경우는 그대로 표시
};
