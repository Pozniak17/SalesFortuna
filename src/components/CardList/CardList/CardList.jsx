import Card from "../Card/Card";
import { Item, List, ArrowButton, SwiperWrapper } from "./CardList.styled";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export default function CardList({ data }) {
  return (
    <List>
      <SwiperWrapper>
        <ArrowButton className="swiper-button-prev">&lt;</ArrowButton>
        <ArrowButton className="swiper-button-next">&gt;</ArrowButton>

        <Swiper
          modules={[Pagination, Autoplay, Navigation]}
          centeredSlidesBounds={true}
          spaceBetween={10}
          slidesPerView={1}
          direction="horizontal"
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            744: {
              slidesPerView: 2,
            },
            1440: {
              slidesPerView: 3,
            },
          }}
          className="custom-swiper"
        >
          {data.map(({ id, image, description, face, name, position }) => (
            <SwiperSlide key={id}>
              <Item>
                <Card
                  image={image}
                  description={description}
                  face={face}
                  name={name}
                  position={position}
                />
              </Item>
            </SwiperSlide>
          ))}
        </Swiper>
      </SwiperWrapper>
    </List>
  );
}
