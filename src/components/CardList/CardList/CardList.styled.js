import styled from "styled-components";

export const List = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 40px 0;
`;

export const SwiperWrapper = styled.div`
  position: relative;
  max-width: 1200px;
  width: 100%;

  .swiper {
    padding: 0 40px;
  }

  .swiper-button-disabled {
    opacity: 0.3;
    pointer-events: none;
  }

  .swiper-pagination {
    bottom: -20px !important;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
`;

export const ArrowButton = styled.button`
  position: absolute;
  top: 45%;
  z-index: 10;
  width: 40px;
  height: 40px;
  background: #d9d9d9;
  color: #333;
  font-size: 22px;
  font-weight: bold;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: background 0.3s ease;

  &::after {
    display: none !important;
  }

  &.swiper-button-prev {
    left: 25px;
  }

  &.swiper-button-next {
    right: 25px;
  }

  &:hover {
    background-color: #9cec2cff;
  }
`;
