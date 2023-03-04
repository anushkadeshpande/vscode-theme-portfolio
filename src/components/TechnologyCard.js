import React from 'react'
import './TechnologyCard.css'

const TechnologyCard = (dataItem) => {
    
  return (
    <div className="TechnologyCard">
        <img src={dataItem.data.logo} />
        <p>{dataItem.data.name}</p>
    </div>
  )
}

export default TechnologyCard