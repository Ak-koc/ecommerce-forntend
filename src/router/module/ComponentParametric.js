import React from 'react'
import {useParams} from 'react-router-dom'

export default function ComponentParametric() {
  
    const {id} = useParams();
    return (
    <div>
        <h6>Değiştirgen</h6>
        Özdeşlik {id}
        {console.log(id)}
    </div>
  )
}
