import ItemsCarousel from "react-items-carousel"
import Card from "../components/Card";
import { useState } from 'react'



export default function CallItemsCarousel({ movies, setMovie }) {
    const [activeItemIndex, setActiveItemIndex] = useState(0)
    const chevronWidth = 40

    return (
        <div
            className="row"
            style={{ padding: 0, maxWidth: "100%", margin: "0" }}
        >
            {/* <h3 className="row-text">Now Playing</h3> */}
            <ItemsCarousel
                infiniteLoop={false}
                gutter={12}
                activePosition={"center"}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={5}
                slidesToScroll={4}
                outsideChevron={false}
                showSlither={false}
                firstAndLastGutter={true}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={(value) => setActiveItemIndex(value)}
                rightChevron={">"}
                leftChevron={"<"}
            >
                {movies.map((movie) => (
                    <Card movie={movie} setMovie={setMovie} key={movie.id} />
                ))}
            </ItemsCarousel>
        </div>
    )
}









{/* <div className="homepage">
<div>
  <Hilight />
</div>

<div style={{ padding: 0, maxWidth: "100%", margin: "0" }}>
            <ItemsCarousel
                infiniteLoop={false}
                gutter={12}
                activePosition={"center"}
                chevronWidth={60}
                disableSwipe={false}
                alwaysShowChevrons={false}
                numberOfCards={5}
                slidesToScroll={4}
                outsideChevron={false}
                showSlither={false}
                firstAndLastGutter={true}
                activeItemIndex={activeItemIndex}
                requestToChangeActive={(value) => setActiveItemIndex(value)}
                rightChevron={">"}
                leftChevron={"<"}
            >
                
            </ItemsCarousel>
</div> */}
