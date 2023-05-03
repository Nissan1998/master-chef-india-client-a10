import React from "react";
import Marquee from "react-fast-marquee";

const BottomSection = () => {
  return (
    <div>
      <div className="p-5 w-100">
        <h1 className="text-center mt-5">OUR CHEF SECRET FOODS</h1>
        <Marquee>
          <img
            style={{ width: 510 }}
            src="https://media.istockphoto.com/id/1161996776/photo/stack-of-pancakes-with-maple-syrup-and-fresh-blueberries.jpg?b=1&s=170667a&w=0&k=20&c=Q6BDtDtY5rTNWkiGQydVctdafv2rZh3V2MWL8UmDR04="
            alt=""
          />

          <img
            style={{ width: 510, height: 340 }}
            src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
            alt=""
          />
          <img
            style={{ width: 510 }}
            src="https://loveincorporated.blob.core.windows.net/contentimages/gallery/70bc81c8-b277-407d-8c3a-5c1a3e501732-4-hamburger.jpg"
            alt=""
          />
          <img
            style={{ width: 510, height: 340 }}
            src="https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8ZGVsaWNpb3VzJTIwZm9vZHxlbnwwfHwwfHw%3D&w=1000&q=80"
            alt=""
          />
          <img
            style={{ width: 510, height: 340 }}
            src="https://www.koreanbapsang.com/wp-content/uploads/2017/09/DSC_1863-1.jpg"
            alt=""
          />
          <img
            style={{ width: 510, height: 340 }}
            src="https://media.istockphoto.com/id/1161996776/photo/stack-of-pancakes-with-maple-syrup-and-fresh-blueberries.jpg?b=1&s=170667a&w=0&k=20&c=Q6BDtDtY5rTNWkiGQydVctdafv2rZh3V2MWL8UmDR04="
            alt=""
          />
        </Marquee>
      </div>
    </div>
  );
};

export default BottomSection;
