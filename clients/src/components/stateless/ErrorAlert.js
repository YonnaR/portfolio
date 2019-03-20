import React from 'react'

export default (props) => {
  return (
    <div className="alert alert-danger" role="alert" onClick={props.click}>
        <h5 style={{textAlign:"center"}}>{ props.msg }</h5>
    </div>
  )
}