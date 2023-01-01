module.exports = {
  // 날짜 변환 함수
  elapsedTime(date) {
    const start = new Date(date);
    const end = new Date(); // 현재 날짜
    const diff = end - start; // 경과 시간
    const times = [
      { time: '분', milliSeconds: 1000 * 60 },
      { time: '시간', milliSeconds: 1000 * 60 * 60 },
      { time: '일', milliSeconds: 1000 * 60 * 60 * 24 },
      { time: '개월', milliSeconds: 1000 * 60 * 60 * 24 * 30 },
      { time: '년', milliSeconds: 1000 * 60 * 60 * 24 * 365 },
    ].reverse();
    // 년 단위부터 알맞는 단위 찾기
    for (const value of times) {
      const betweenTime = Math.floor(diff / value.milliSeconds);
      // 큰 단위는 0보다 작은 소수 단위 나옴
      if (betweenTime > 0) {
        return `${betweenTime}${value.time} 전`;
      }
    }
    // 모든 단위가 맞지 않을 시
    return '방금 전';
  },

  changeHyphen(string) {
    // 공백과 특수문자를 "-"로 치환
    const regex = /[\s\{\}\[\]\/?.,;:|\)*~`!^\-_+<>@\#$%&\\\=\(\'\"]+/g;
    const regex2 = string.replace(regex, '-');
    const title = regex2.replace(/-$/, '');
    return title;
  },

  randomStr() {
    return Math.random().toString(36).substring(2, 8);
  },

  location() {
    return process.env.NODE_ENV === 'production'
      ? process.env.API_ADDRESS
      : 'http://localhost:5000';
  },
};
