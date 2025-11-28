export interface StaffMember {
  name: string;
  position: string;
  role: string;
  description?: string;
  imageUrl: string;
  githubLink?: string;
  siteLink?: string;
}

const STAFFS: { [key: number]: StaffMember[] } = {
  6: [
    // 운영팀
    {
      name: '조익성',
      position: '운영팀',
      role: '회장',
      description: '4학년 1학기 재학 중\n재밌게 해봅시당',
      imageUrl: '/staff/jo_ikseong.jpg',
      githubLink: 'https://github.com/ikseong00',
    },
    {
      name: '이지유',
      position: '운영팀',
      role: '부회장',
      description: '4학년 2학기 재학 중\n하나둘셋 PM 파이팅',
      imageUrl: '/staff/lee_jiyoo_6.png',
      siteLink: 'https://jeeyoegu0510.notion.site/',
    },
    {
      name: '정윤아',
      position: '운영팀',
      role: '총무',
      description: '3학년 2학기 재학 중\n잘 부탁드려요~~',
      imageUrl: '/staff/jung_yuna.png',
      githubLink: 'https://github.com/yuna569',
    },
    // PM
    {
      name: '김재훈',
      position: 'PM',
      role: 'PM 파트장',
      description: '3학년 2학기 재학 중\n최강 PM 화이팅!',
      imageUrl: '/staff/kim_jaehun.png',
      siteLink: 'https://shrub-crowd-46c.notion.site/2276196331d2804989f5f9b37268c2ed',
    },
    {
      name: '김효민',
      position: 'PM',
      role: 'PM 파트장',
      description: '2학년 2학기 재학 중\nPM 화이팅!',
      imageUrl: '/staff/kim_hyomin.png',
      siteLink: 'https://drive.google.com/file/d/1q1XJ1elqdqXPV3cC_jmf58M3O2iCNbal/view',
    },
    // Design
    {
      name: '김다솜',
      position: 'Designer',
      role: 'Design 파트장',
      description:
        '3학년 1학기 마치고 휴학 중\n좋은 경험이 되셨으면 좋겠습니다 :)\n디자이너 파이팅!',
      imageUrl: '/staff/kim_dasom.png',
      siteLink: ' https://dasom.myportfolio.com/work',
    },
    {
      name: '김효정',
      position: 'Designer',
      role: 'Design 파트장',
      description: '3학년 2학기 재학 중\n디자이너들 파이티잉~~~~~:)))))))',
      imageUrl: '/staff/kim_hyojeong.png',
      siteLink: 'https://clammy-buckthorn-168.notion.site/1fe334782ceb8066b062e745b571d2cf',
    },
    // WEB
    {
      name: '김별찬',
      position: 'Web',
      role: 'Web 파트장',
      description:
        '졸업\n좋은 추억 많이 쌓아가셨으면 좋겠습니다.\n커피챗 / 질문 / 잡담 뭐든지 환영해요!',
      imageUrl: '/staff/kim_byeolchan.png',
      githubLink: 'https://github.com/algoORgoal',
    },
    {
      name: '나윤상',
      position: 'Web',
      role: 'Web 파트장',
      description: '4학년 2학기 재학 중\n모두 잘 지내봅시다.',
      imageUrl: '/staff/na_yoonnsang.png',
      githubLink: 'https://github.com/nayounsang',
    },
    {
      name: '박태희',
      position: 'Web',
      role: 'Web 파트장',
      description: '2학년 2학기 재학 중\n같이 성장해 나가는 파트장이 되겠습니다~',
      imageUrl: '/staff/park_taehee.png',
      githubLink: 'https://github.com/qkrxogmla',
    },
    {
      name: '최준서',
      position: 'Web',
      role: 'Web 파트장',
      description: '3학년 1학기 재학 중\n다같이 성장하는 쿠잇이 되면 좋겠습니다.',
      imageUrl: '/staff/choi_junseo.png',
      githubLink: 'https://github.com/JunSeochoi',
    },
    // Server
    {
      name: '김상균',
      position: 'Server',
      role: 'Server 파트장',
      description: '4학년 2학기 재학 중\n한 학기 다들 화이팅입니다',
      imageUrl: '/staff/kim_sangkyun.png',
      githubLink: 'https://github.com/ksg1227',
    },
    {
      name: '김지현',
      position: 'Server',
      role: 'Server 파트장',
      description: '3학년 2학기 재학 중\n~끝까지~ 화이팅이에요 !',
      imageUrl: '/staff/kim_jihyun.png',
      githubLink: 'https://github.com/jyun-KIM',
    },
    {
      name: '조동현',
      position: 'Server',
      role: 'Server 파트장',
      description: '3학년 2학기 재학 중\n한학기 열심히 해봅시다!!',
      imageUrl: '/staff/jo_donghyun.png',
      githubLink: 'https://github.com/mr8356',
    },
    // Android
    {
      name: '이성준',
      position: 'Android',
      role: 'Android 파트장',
      description: '1학년 2학기 재학 중\n부족하지만 잘 부탁드립니다 !!',
      imageUrl: '/staff/lee_sungjun.png',
      githubLink: 'https://github.com/protossmanse',
    },
    {
      name: '조규빈',
      position: 'Android',
      role: 'Android 파트장',
      description: '4학년 2학기 재학 중\n한 학기 동안 잘 부탁드립니다!',
      imageUrl: '/staff/cho_kyubin.png',
      githubLink: 'https://github.com/rbqks529',
    },
    {
      name: '채민지',
      position: 'Android',
      role: 'Android 파트장',
      description: '3학년 2학기 재학 중\n한 학기 동안 안드로이드 뿌셔봅시다 !!!',
      imageUrl: '/staff/chae_minji.png',
      githubLink: 'https://github.com/alswlekk',
    },
  ],
  4: [
    // 운영팀
    {
      name: '조하상',
      position: '운영팀',
      role: '회장',
      description:
        '안녕하세요, KUIT 4기 회장을 맡은 조하상입니다.\n\n웹 프론트엔드 개발자를\n희망하고 있습니다.\n\n잘 부탁드립니다!',
      imageUrl: '/staff/cho_hasang.jpg',
      githubLink: 'https://github.com/crohasang',
    },
    {
      name: '김민우',
      position: '운영팀',
      role: '부회장',
      description:
        '안녕하세요!\n\n쿠잇 부회장을 맡은 김민우입니다!\n\n한 학기 동안 여러분의\n든든한 운영진이 되고 \n싶습니다! 감사합니다😊',
      imageUrl: '/staff/kim_minwoo.jpg',
      githubLink: 'https://github.com/kmw10693',
    },
    {
      name: '김윤서',
      position: '운영팀',
      role: '관리부',
      description:
        '안녕하세요, KUIT 4기 관리부장을 맡은 김윤서입니다.\n저는 KUIT을 하면서 개발에 대한 열정과 흥미를 많이 키울 수 있었습니다.\n\nKUIT과 함께 하여 좋은 추억과 프로젝트 경험을 쌓고 가셨으면 좋겠습니다!',
      imageUrl: '/staff/kim_yoonseo.jpg',
      githubLink: 'https://github.com/yskim6772',
    },
    {
      name: '이현희',
      position: '운영팀',
      role: '관리부',
      description: '안녕하세요!\n\n관리부 이현희입니다.\n잘 부탁드립니다!',
      imageUrl: '',
      githubLink: 'https://github.com/nonaninona',
    },
    {
      name: '김현주',
      position: '운영팀',
      role: '홍보부',
      description: '안녕하세요!\n홍보부 김현주입니다.\n\n한 학기 동안\n잘 부탁드려요 :)',
      imageUrl: '/staff/kim_hyunjoo.jpg',
    },
    {
      name: '박원희',
      position: '운영팀',
      role: '홍보부',
      description: '안녕하세요!\n운영팀 박원희 입니다.',
      imageUrl: '/staff/park_wonhee.jpg',
      // githubLink: 'https://github.com/parkwonhee1219',
    },
    {
      name: '김채린',
      position: '운영팀',
      role: '홍보부',
      description:
        '안녕하세요, KUIT 4기\n홍보부 김채린입니다.\n\nAndroid 개발자로서\n다양한 도전을 하고\n있습니다.\n\n잘 부탁드립니다 :)',
      imageUrl: '/staff/kim_chaerin.jpg',
      githubLink: 'https://github.com/chrin05',
    },
    // Android
    {
      name: '김나은',
      position: 'Android',
      role: 'Android 파트장',
      description: '안드 빠샤 👊🔥',
      imageUrl: '/staff/kim_naeun.jpg',
      githubLink: 'https://github.com/Nico1eKim',
    },
    {
      name: '조익성',
      position: 'Android',
      role: 'Android 파트장',
      description: '궁금한 것 있으면\n뭐든 물어봐주세요~',
      imageUrl: '/staff/jo_ikseong.jpg',
      githubLink: 'https://github.com/ikseong00',
    },
    {
      name: '박성현',
      position: 'Android',
      role: 'Android 파트장',
      description: '아직 많이 부족하니,\n잘 부탁드려요!🫡',
      imageUrl: '/staff/park_seonghyun.png',
      githubLink: 'https://github.com/sh1220',
    },
    // Web
    {
      name: '김지환',
      position: 'Web',
      role: 'Web 파트장',
      description: "Even if it's slow,\nkeep going like a turtle.",
      imageUrl: '/staff/kim_jihwan.png',
      githubLink: 'https://github.com/Turtle-Hwan',
    },
    {
      name: '전진호',
      position: 'Web',
      role: 'Web 파트장',
      description: '안녕하세요,\n\n토스코어 프론트엔드\n개발자 전진호입니다.\n\n잘 부탁드려요 🙏',
      imageUrl: '/staff/jeon_jinho.jpg',
      githubLink: 'https://github.com/jinho1011',
    },
    {
      name: '지호준',
      position: 'Web',
      role: 'Web 파트장',
      description: '안녕하세요!\n\n소통하는 개발자\n지호준입니다.',
      imageUrl: '/staff/ji_hojun.jpg',
      githubLink: 'https://github.com/ho0010',
    },
    // Server
    {
      name: '이윤정',
      position: 'Server',
      role: 'Server 파트장',
      description: '한 학기 같이\n재밌게 개발해요😁😁\n\n잘 부탁드립니다!',
      imageUrl: '/staff/lee_yoonjeong.jpg',
      githubLink: 'https://github.com/yunjeongiya',
    },
    {
      name: '이영선',
      position: 'Server',
      role: 'Server 파트장',
      description: '안녕하세요, KUIT 4기\n서버 파트장 이영선입니다.\n\n잘 부탁드립니다!',
      imageUrl: '/staff/lee_youngsun.jpg',
      githubLink: 'https://github.com/lyouxsun',
    },
    {
      name: '함형주',
      position: 'Server',
      role: 'Server 파트장',
      description: '안녕하세요! KUIT 4기\n서버 파트장 함형주입니다.\n\n잘 부탁드립니다!',
      imageUrl: '/staff/ham_hyeongju.jpg',
      githubLink: 'https://github.com/hamhyeongju',
    },
    // PM
    {
      name: '송채영',
      position: 'PM',
      role: 'PM 파트장',
      description:
        "안녕하세요!\n\nKUIT 3기에 \n'아워메뉴'를 기획하고\n\n4기에 운영진을 맡게 된\nPM 송채영입니다.",
      imageUrl: '/staff/song_chaeyoung.jpg',
      // githubLink: 'https://github.com/JerrySong23',
    },
    {
      name: '이지유',
      position: 'PM',
      role: 'PM 파트장',
      description: '안녕하세요! KUIT 4기\nPM 파트장 이지유입니다.\n\n잘 부탁드립니다!',
      imageUrl: '',
      // githubLink: 'https://github.com/scrtzuzdoyou',
    },
  ],
  5: [
    // 운영팀
    {
      name: '이윤정',
      position: '운영팀',
      role: '회장',
      description:
        '@yunjeongiya\n깃헙인스타블로그 맞팔해요😚\n\n궁금한거 있으시면 편하게\n연락하세요~\n\n맛있는거 사드릴지도?',
      imageUrl: '/staff/lee_yoonjeong.jpg',
      githubLink: 'https://github.com/yunjeongiya',
    },
    {
      name: '김지환',
      position: '운영팀',
      role: '부회장',
      description: '303 See Other',
      imageUrl: '/staff/kim_jihwan.png',
      githubLink: 'https://github.com/Turtle-Hwan',
    },
    {
      name: '이영선',
      position: '운영팀',
      role: '부회장',
      description: '안녕하세요, KUIT 5기\n부회장 이영선입니다.\n\n잘 부탁드립니다!',
      imageUrl: '/staff/lee_youngsun.jpg',
      githubLink: 'https://github.com/lyouxsun',
    },
    {
      name: '김나은',
      position: '운영팀',
      role: '총무',
      description:
        '안녕하세요, KUIT 5기 총무\n김나은입니다. \n\n한 학기 동안 잘부탁드립니다! 파이팅 💪🔥',
      imageUrl: '/staff/kim_naeun_5.jpeg',
      githubLink: 'https://github.com/Nico1eKim',
    },
    {
      name: '양석준',
      position: '운영팀',
      role: '인사부',
      description: '영업 뛰는 개발자,\n양석준입니다',
      imageUrl: '/staff/yang_seokjun.png',
      githubLink: 'https://github.com/YangJJune',
    },
    {
      name: '김민우',
      position: '운영팀',
      role: '홍보부',
      description: '쿠잇 파이팅!',
      imageUrl: '/staff/kim_minwoo.jpg',
      githubLink: 'https://github.com/kmw10693',
    },
    {
      name: '정연우',
      position: '운영팀',
      role: '홍보부',
      description: '한학기동안 잘부탁드립니다!!',
      imageUrl: '/staff/jeong_yeonwoo.jpeg',
      githubLink: 'https://github.com/woo319',
    },
    {
      name: '조하상',
      position: '운영팀',
      role: '운영팀',
      description: 'Keep Calm and Carry On',
      imageUrl: '/staff/cho_hasang_5.jpg',
      githubLink: 'https://github.com/crohasang',
      siteLink: 'https://crohasang.com',
    },
    // Android
    {
      name: '김윤서',
      position: 'Android',
      role: 'Android 파트장',
      description:
        '안녕하세요,\nKUIT 5기 안드로이드 파트장을 맡은 김윤서입니다.\n\n같이 컴포즈 함 뿌셔봐요 !!\n화이팅 🍀✨',
      imageUrl: '/staff/kim_yoonseo_5.jpeg',
      githubLink: 'https://github.com/yskim6772',
    },
    {
      name: '조익성',
      position: 'Android',
      role: 'Android 파트장',
      description: '한 학기 잘 부탁드립니다!',
      imageUrl: '/staff/jo_ikseong.jpg',
      githubLink: 'https://github.com/ikseong00',
    },
    {
      name: '현재우',
      position: 'Android',
      role: 'Android 파트장',
      description: '잘 부탁드립니다!🤖🔥',
      imageUrl: '/staff/hyun_jaewoo.jpeg',
      githubLink: 'https://github.com/casper-jr',
    },
    // WEB

    {
      name: '권동희',
      position: 'Web',
      role: 'Web 파트장',
      description: '🍀',
      imageUrl: '/staff/kwon_donghee.jpeg',
    },
    {
      name: '김지환',
      position: 'Web',
      role: 'Web 파트장',
      description: '303 See Other',
      imageUrl: '/staff/kim_jihwan.png',
      githubLink: 'https://github.com/Turtle-Hwan',
    },
    {
      name: '전진호',
      position: 'Web',
      role: 'Web 파트장',
      description: '안녕하세요,\n\n토스코어 프론트엔드\n개발자 전진호입니다.\n\n잘 부탁드려요 🙏',
      imageUrl: '/staff/jeon_jinho.jpg',
      githubLink: 'https://github.com/jinho1011',
    },
    {
      name: '지호준',
      position: 'Web',
      role: 'Web 파트장',
      description: '안녕하세요!\n\n소통하는 개발자\n지호준입니다.',
      imageUrl: '/staff/ji_hojun.jpg',
      githubLink: 'https://github.com/ho0010',
    },
    // Server
    {
      name: '박지원',
      position: 'Server',
      role: 'Server 파트장',
      description: '안녕하세요 KUIT 5기\n서버 파트장 박지원입니다.\n\n잘 부탁드립니다!',
      imageUrl: '/staff/park_jiwon.jpeg',
      githubLink: 'https://github.com/david-parkk',
    },
    {
      name: '임제형',
      position: 'Server',
      role: 'Server 파트장',
      description: '한 학기 동안 같이 성장해 나갔으면 좋겠습니다.\n\n잘 부탁드립니다!!!',
      imageUrl: '/staff/lim_jehyeong.jpg',
      githubLink: 'https://github.com/kisusu115',
    },
    {
      name: '장현준',
      position: 'Server',
      role: 'Server 파트장',
      description: '한 학기 화이팅해봅시다~ 🔥',
      imageUrl: '/staff/jang_hyunjun.jpeg',
      githubLink: 'https://github.com/buzz0331',
    },
    {
      name: '함형주',
      position: 'Server',
      role: 'Server 파트장',
      description: '안녕하세요! KUIT 5기\n서버 파트장 함형주입니다.\n\n잘 부탁드립니다!',
      imageUrl: '/staff/ham_hyeongju.jpg',
      githubLink: 'https://github.com/hamhyeongju',
    },
    // PM
    {
      name: '송채영',
      position: 'PM',
      role: 'PM 파트장',
      description: '안녕하세요 KUIT 5기 파트장 송채영입니다!\n\n밥약, 커피챗 환영합니당',
      imageUrl: '/staff/song_chaeyoung.jpg',
      siteLink: 'https://my.surfit.io/w/630184441',
    },
    {
      name: '이지유',
      position: 'PM',
      role: 'PM 파트장',
      description:
        '안녕하세요, KUIT 5기 PM\n파트장을 맡은 이지유입니다!\n\n한 학기 동안 재미있게 기획,\n개발하며 성장하는 PM이 되고\n싶습니다.\n\n잘 부탁드립니다!',
      imageUrl: '/staff/lee_jiyoo_5.jpg',
      siteLink: 'https://ambiguous-patio-117.notion.site/175fabc2141a80f6ae1cd4e23bedc5cb',
    },
  ],
};

export default STAFFS;
