"use client";
import Image from 'next/image';
import React from 'react';
export const config = { amp: true }
export default function Home() {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [storiesData, setStoriesData] = React.useState([
    {
      "id": "1",
      "title": "Sarah spent months training for a marathon, and finally ran it with her best friend by her side.",
      url : "https://i.ibb.co/gdDXKbj/1-3.jpg"
    },
    {
      "id": "2",
      "title": "John had always dreamed of becoming a chef, but struggled to get his foot in the door until he started his own food truck.",
      "url": "https://i.ibb.co/gMJCjPq/1-4.jpg",
    },
    {
      "id": "3",
      "title": "Maria had been saving for years to take a trip to Europe, and was finally able to visit all of the cities on her bucket list",
      "url": "https://i.ibb.co/qJLJgnp/1-5.jpg",
    },
    {
      "id": "4",
      "title": "Tom had been working in finance for years, but realized he wasn't happy with his career and decided to start his own business",
      "url": "https://i.ibb.co/Qvy9VsS/1.jpg",
    }
  ]);
  
  return (
    <div style={{display:"flex", justifyContent:"center", alignItems:"center"}} >
      <button className='prev-button' onClick={() => {
        if (currentIndex > 0) {
          setCurrentIndex(currentIndex - 1);
        }
      }}>
     <img 
     width="64" 
     height="64" 
     src="https://img.icons8.com/flat-round/64/000000/circled-chevron-right.png" 
     alt="circled-chevron-right"
     style={{
        transform: "rotate(180deg)",
        margin: "0 10px"
     }}
    
     />
      </button>

      <amp-story-player>
        <div style={{
          wordBreak: "break-word",
          position: "relative",
        }}>
      <img src={storiesData[currentIndex].url} loading="lazy" data-amp-story-player-poster-img className='image'
     
      
      >

        </img>
        <div className='overlay-text'
       
        >
          <h1>{storiesData[currentIndex].title}</h1>
        </div>
        <div className='share-button'
        >
          <img width="48" height="48" src="https://img.icons8.com/color/48/share--v1.png" alt="share--v1"/>
        </div>
        <div className='show-index'>
          {
            storiesData.map((item, index) => {
              return (
                <div className='index' key={index} style={{
                  backgroundColor: index === currentIndex ? "white" : "black",
                  width: "10px",
                  height: "10px",
                  borderRadius: "50%",
                  margin: "0 5px",
                  cursor: "pointer"
                }}
                onClick={() => {
                  setCurrentIndex(index);
                }}
                >
                </div>
              )
            }
            )
          }
        </div>
        </div>
      </amp-story-player>
      <button  className='next-button'  onClick={() => {
        if (currentIndex < storiesData.length - 1) {
          setCurrentIndex(currentIndex + 1);
        }
      }}> 
      
      <img width="64" 
      height="64" 
      src="https://img.icons8.com/flat-round/64/000000/circled-chevron-right.png" 
      alt="circled-chevron-right"
      style={{
        margin: "0 10px"
      }}
     />
      </button>
    </div>
  )
}


