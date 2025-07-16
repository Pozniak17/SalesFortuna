import {
  FaceImg,
  LogoImg,
  Name,
  Position,
  Text,
  TextWrapper,
  Wrapper,
  QuoteMark,
  SecondWrapper,
} from "./Card.styled";

export default function Card({ image, description, face, name, position }) {
  return (
    <Wrapper>
      <LogoImg src={image} alt="Company logo" />
      <TextWrapper>
        <Text>{description}</Text>
        <QuoteMark>”</QuoteMark>
      </TextWrapper>
      <SecondWrapper>
        <FaceImg src={face} alt={name} />
        <div>
          <Name>{name}</Name>
          <Position>{position}</Position>
        </div>
      </SecondWrapper>
    </Wrapper>
  );
}
