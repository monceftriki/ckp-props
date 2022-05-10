import React from 'react'

const Data = ({moncef,children,showName}) => {
  
   return (
    <div>
     <h1>{moncef.fullName} </h1> 
     <h2>{moncef.bio} </h2>
     <h2>{moncef.profession} </h2>
     <button onClick={()=>showName(moncef.fullName)}>show user name</button>
     {children}
      </div>
  )
}

export default Data