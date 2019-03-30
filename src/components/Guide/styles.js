import styled from 'styled-components';

export const Tab = styled.div`
  width: 60px;
  height: 50px;
  position: fixed;
  right: -10px;
  padding-right: 10px;
  top: 75px;
  background-color: #1d9bfb;
  display: flex;
  color: white;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 5px 0 0 5px;
  -webkit-box-shadow: -13px 2px 29px -15px rgba(171,171,171,1);
  -moz-box-shadow: -13px 2px 29px -15px rgba(171,171,171,1);
  box-shadow: -13px 2px 29px -15px rgba(171,171,171,1);
  transition: all 0.25s ease;

  &:hover {
    cursor: pointer;
    right: 0;
  }
`;

export const GuideContainer = styled.div`
  height: 100vh;
  width: 100vw;
  background-color: rgba(0, 0, 0, 0.7);
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const GuideBox = styled.div`
  width: 70%;
  height: 70%;
  background-color: white;
  border-radius: 5px;
  -webkit-box-shadow: -13px 2px 29px -15px rgba(171,171,171,1);
  -moz-box-shadow: -13px 2px 29px -15px rgba(171,171,171,1);
  box-shadow: -13px 2px 29px -15px rgba(171,171,171,1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const CloseText = styled.p`
  color: white;
  margin-top: 10px;
`;

export const Heading = styled.h2`
  font-size: 30px;
  margin-bottom: 15px;
`;

export const Table = styled.table`
  margin-top: 10px;
  width: 100%;
`;

export const TRow = styled.tr`
  width: 100%;
`;

export const THeader = styled.th`
  width: 16%;
  padding: 15px 8px;
  text-align: center;
`;

export const TCell = styled.td`
  width: 16%;
  padding: 15px 8px;
  border-bottom: 1px solid gray;
  text-align: center;
  border-right: 1px solid gray;
  font-weight: normal;

  &:first-child {
    font-weight: bold;
  }

  &:last-child {
    border-right: none;
  }
`;
