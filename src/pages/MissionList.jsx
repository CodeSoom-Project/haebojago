import { Link } from 'react-router-dom';

export default function MissionList() {
  return (
    <div>
      목표 리스트
      <Link to="/writemission">목표 등록하기</Link>
    </div>
  );
}
