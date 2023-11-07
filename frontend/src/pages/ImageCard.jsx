import { useState } from "react";

function Card({ count }) {
  let cards = [];

  for (let i = 0; i < count; ++i) {
    cards.push(
      <div className="flex mx-2 my-2 bg-gray-200">
        <img
          src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80"
          alt="image from URL"
          className="object-contain max-w-[350px] rounded-lg m-4"
        />
      </div>
    );
  }

  return cards;
}

const ImageCard = () => {
  const [count, setCount] = useState();
  return (
    <div className="flex flex-col w-auto mx-auto">
      <h2 className="text-lg font-semibold">Image Card Repeat</h2>
      <div className="flex flex-wrap">
        <Card count={15} />
      </div>
    </div>
  );
};

export default ImageCard;
