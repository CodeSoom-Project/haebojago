import { Link } from 'react-router-dom';

import styled from '@emotion/styled';

import CommonStyledComponents from '../shared/styles/CommonStyledComponents';

const { CommonTitle } = CommonStyledComponents;

const MissionItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  min-height: 200px;
  border-radius: 10px;
  line-height: 1.3;
  padding: 20px 15px;
  box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.05);
`;
const MissionTitle = styled.p`
  margin-bottom: 20px;
  font-weight: 700;
  font-size: 18px;
`;
const MissionSaying = styled.p`
  color: #333;
`;
const MissionCount = styled.p`
  margin-top: auto;
`;
const MissionNoContents = styled.p`
  margin: 60px 0;
  font-size: 14px;
  color: #888;
  text-align: center;
`;
const ButtonItems = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 60px;
  width: 120px;
  height: 50px;
  background-color: #ace;
`;

export default function MissionList() {
  const missionItems = JSON.parse(localStorage.getItem('newData'));

  return (
    <div>
      <CommonTitle>목표 리스트</CommonTitle>

      {missionItems ? (
        <MissionItem>
          <MissionTitle>{missionItems.title}</MissionTitle>
          <MissionSaying>{missionItems.saying}</MissionSaying>
          <MissionCount>인증횟수 / {missionItems.count}</MissionCount>
        </MissionItem>
      ) : (
        <MissionNoContents>새로운 목표를 등록해주세요.</MissionNoContents>
      )}

      <ButtonItems>
        <Button to="/writemission">목표 등록하기</Button>
      </ButtonItems>
    </div>
  );
}
