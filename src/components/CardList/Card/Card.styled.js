import styled from "styled-components";

export const Wrapper = styled.div`
  width: 380px;
  height: 502px;
  border-radius: 12px;
  border: 1px solid #b6b1b1;
  background: #fff;
  padding: 49px 19px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
`;

export const LogoImg = styled.img`
  width: 120px;
  margin-bottom: 15px;
`;

export const TextWrapper = styled.div`
  position: relative;
  flex-grow: 1;
`;

export const Text = styled.p`
  color: #9b9a99;
  font-family: "Space Grotesk";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 35px;
`;

export const QuoteMark = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  font-size: 48px;
  font-weight: bold;
  color: #d9d9d9;
  line-height: 1;
`;

export const SecondWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-top: 24px;
`;

export const FaceImg = styled.img`
  border-radius: 50%;
  width: 77px;
  height: 77px;
  border: none;
  outline: none;
  box-shadow: none;
`;

export const Name = styled.h3`
  color: #000;
  font-family: "Space Grotesk";
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: 35px;
`;

export const Position = styled.p`
  color: #000;
  font-family: "Space Grotesk";
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
`;
