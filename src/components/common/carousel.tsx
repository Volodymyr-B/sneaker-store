"use client";

import { FC } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper";
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { Container } from "@/components/common/container";
import { AppImage } from "@/components/common/app-image";
import type { ProductShort } from "@/types/dto-in";
import "swiper/swiper.min.css";

interface CarouselProps {
  list: ProductShort[];
}

export const Carousel: FC<CarouselProps> = ({ list }) => {
  return (
    <Container>
      <div className="relative flex px-6">
        <button className="prev absolute top-1/3 -left-4">
          <IoIosArrowBack size={40} />
        </button>
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={5}
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 7000, pauseOnMouseEnter: true }}
          navigation={{ nextEl: ".next", prevEl: ".prev" }}
          breakpoints={{
            500: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 4, spaceBetween: 30 },
          }}
        >
          {list.map((product) => (
            <SwiperSlide
              className="hover:bg-gray-200 hover:shadow-lg rounded-lg p-4"
              key={product.id}
            >
              <Link href={`/shop/${product.id}`}>
                <div className="flex flex-col items-center gap-2 text-center">
                  <AppImage
                    className="md:w-full h-28 md:h-auto max-w-[190px]"
                    src={product.cover}
                    alt={product.name}
                  />
                  <p>{product.name}</p>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="next absolute top-1/3 -right-4">
          <IoIosArrowForward size={40} />
        </button>
      </div>
    </Container>
  );
};
