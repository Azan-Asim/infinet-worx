import React from 'react'
import '../css/Testing.css'



const Testing = () => {
    const data=[
        {
            id:1,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:2,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:3,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:4,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:5,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:6,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:7,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:8,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:9,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:10,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:11,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
        {
            id:12,
            heading: "box1",
            paragraph: "Stock level table modification ref order table"
        },
    ]
  return (
    <div className='main-testing'>
        {data.map((box)=>(
            <div key={box.id} className='box-div'>

                <h1>{box.heading}</h1>
                <p>{box.paragraph}</p>
            </div>
        ))
        }
         
    </div>
  )
}

export default Testing