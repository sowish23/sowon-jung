const en = {
  HELLO: 'Hello!',
  IAM: 'I am',
  SOWONJUNG: 'Sowon Jung',
  FE: 'Frontend Engineer',
  CAREER_TITLE: 'Let me introduce my',
  CAREER: 'CAREER',
}

const ko = {
  HELLO: '안녕하세요!',
  IAM: '저는',
  SOWONJUNG: 'Sowon Jung',
  FE: 'Frontend Engineer',
  FE_KO: '입니다!',
  CAREER_TITLE: '제',
  CAREER: '경력',
  CAREER_KO: '을 간단히 소개할게요',
}

const languageMap = {
  en,
  ko,
};

export const getString = (key, lang = 'ko') => {
  return languageMap[lang][key];
};