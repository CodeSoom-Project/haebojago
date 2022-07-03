import { Link } from 'react-router-dom';

export default function MissionList() {
  const missionItems = JSON.parse(localStorage.getItem('newData'));

  return (
    <div>
      목표 리스트
      <br />
      {missionItems ? (
        <div>
          <p>목표 : {missionItems.title}</p>
          <p>포부한마디 : {missionItems.saying}</p>
          <p>인증 : 인증횟수 /  {missionItems.count}</p>
        </div>
      ) : (
        '새로운 목표를 등록해주세요.'
      )}
      <Link to="/writemission">목표 등록하기</Link>
    </div>
  );
}
