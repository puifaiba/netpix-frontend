import React, { Component, useState } from "react"
// import "./card.scss"


function Card({ movie: { id, title, image_src }, setMovie }) {

  return (
    <div className="card" onClick={_ => setMovie(id)} style={{
      backgroundImage: `url(${image_src})`,
    }}>
      {title}
    </div >
  )
}

export default Card




//  // <div style={{height: 200, background: "#EEE"}}>Second card</div>
//         // <div style={{height: 200, background: "#EEE"}}>Third card</div>
//         // <div style={{height: 200, background: "#EEE"}}>Fourth card</div>
//         // <div style={{height: 200, background: "#000"}}>Fifth card</div>
//         // <div style={{height: 200, background: "#AAA"}}>Sixth card</div>
//         {/* {Array.from(new Array(10)).map((_, i) => (
//           <div
//             key={i}
//             style={{
//               height: 200,
//               background: "url(https://placeimg.com/380/200/nature)",
//             }}
//           /> */}
//     // <a className="carousel-item"><img src={image_src} weight="200" height="120" /></a>
//     // <div className="item">
//     //     <img src={image_src} alt={`Image of ${title}`} />
//     //     <h2>{title}</h2>
//     // </div>
//     // <div >
//     //     <div className="bg-img">
//     //     </div>
//     //     <a href="#">
//     //         <div className="content">
//     //             <h2>{title}</h2>
//     //         </div>
//     //     </a>
//     // </div>