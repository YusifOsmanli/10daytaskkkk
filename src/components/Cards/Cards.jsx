import React from 'react'
import "./Cards.css"
import { useSelector } from 'react-redux'
import Card from '../Card/Card'

const Cards = () => {
  const {data,loading }=useSelector(state=>state.data)
  return (
    <div>
      {
        data.map((item,index)=>{
          return <Card item={item} key={index}/>
        })
      }

    </div>
  )
}

export default Cards