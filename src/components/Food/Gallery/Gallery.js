import React from "react";
import { galleryData } from "./GalleryData";
import SingleGallery from "./SingleGallery";

const Gallery = () => {
  const topLeftImg =
    "https://giardino.axiomthemes.com/wp-content/uploads/2020/09/image-copyright-10-scaled-370x370.jpg";
  const topRightImg =
    "https://images.pexels.com/photos/2928377/pexels-photo-2928377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const bottomLeftImg =
    " https://images.pexels.com/photos/2122280/pexels-photo-2122280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  const bottomRightImg =
    "https://starbelly.bslthemes.com/wp-content/uploads/2022/05/menu-6-600x600.jpg";

  const rightData = [
    {
      id: 1,
      title: "Chocolate Coffee",
      numberOfItem: "35 Item",
      image: topLeftImg,
    },
    {
      id: 2,
      title: "Dessert",
      numberOfItem: "25 items",
      image: topRightImg,
    },
    {
      id: 3,
      title: "Fast Food",
      numberOfItem: "65 Fast Food items",
      image: bottomLeftImg,
    },
    {
      id: 4,
      title: "Drink",
      numberOfItem: "12 items of Drink",
      image: bottomRightImg,
    },
    {
      id: 5,
      title: "Chocolate Coffee",
      numberOfItem: "35 Item",
      image: topLeftImg,
    },
    {
      id: 6,
      title: "Dessert",
      numberOfItem: "25 items",
      image: topRightImg,
    },
    {
      id: 7,
      title: "Fast Food",
      numberOfItem: "65 Fast Food items",
      image: bottomLeftImg,
    },
    {
      id: 8,
      title: "Drink",
      numberOfItem: "12 items of Drink",
      image: bottomRightImg,
    },
  ];

  return (
    <div className="px-2 my-20">
      <div>
        <h1 className="text-orange-400 font-poppins font-medium text-3xl my-10 text-center">
          Food Gallery
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-6 gap-2">
        {galleryData.map((item) => (
          <SingleGallery key={item.id} foodRight={item} />
        ))}
      </div>
    </div>
  );
};

export default Gallery;
