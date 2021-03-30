import React, {Component, useState} from "react"
import "./card.scss"
import ItemsCarousel from "react-items-carousel"

function Card({title, overview, runtime, release_date, src, image_src}) {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40
  return (
    <div style={{padding: 0, maxWidth: "100%", margin: "0"}}>
      <ItemsCarousel
        infiniteLoop={false}
        gutter={12}
        activePosition={"center"}
        chevronWidth={60}
        disableSwipe={false}
        alwaysShowChevrons={false}
        numberOfCards={4}
        slidesToScroll={3}
        outsideChevron={false}
        showSlither={false}
        firstAndLastGutter={true}
        activeItemIndex={activeItemIndex}
        requestToChangeActive={(value) => setActiveItemIndex(value)}
        rightChevron={">"}
        leftChevron={"<"}
      >
        <div style={{height: 200, background: "#EEE"}}>First card</div>
        <div style={{height: 200, background: "#EEE"}}>Second card</div>
        <div style={{height: 200, background: "#EEE"}}>Third card</div>
        <div style={{height: 200, background: "#EEE"}}>Fourth card</div>
        <div style={{height: 200, background: "#000"}}>Fifth card</div>
        <div style={{height: 200, background: "#AAA"}}>Sixth card</div>
        {/* {Array.from(new Array(10)).map((_, i) => (
          <div
            key={i}
            style={{
              height: 200,
              background: "url(https://placeimg.com/380/200/nature)",
            }}
          /> */}
        ))}
      </ItemsCarousel>
    </div>
    // <a className="carousel-item"><img src={image_src} weight="200" height="120" /></a>
    // <div className="item">
    //     <img src={image_src} alt={`Image of ${title}`} />
    //     <h2>{title}</h2>
    // </div>
    // <div >
    //     <div className="bg-img">
    //     </div>
    //     <a href="#">
    //         <div className="content">
    //             <h2>{title}</h2>
    //         </div>
    //     </a>
    // </div>
  )
}

export default Card
