import React from 'react'

export default function Filter(props) {
  const handleOnChange = (e) => {
    const selectedVal = e.target.value;
    props.changeSortVal(selectedVal);
  }

  return (
    <div className="row ui menu"> 

      <div className="item">
        <div className="ui">
          <label htmlFor="hidden">Hide Hogs</label>
          <input 
            className="ui toggle checkbox"
            type="checkbox" 
            name="hidden" 
            checked={props.isHidden}
            onChange={props.toggleIsHidden}></input>
        </div>  
      </div>

      <div className="item">
        <div className="ui">
          <label htmlFor="greased">Greased Hogs</label>
          <input 
            className="ui toggle checkbox"
            type="checkbox" 
            name="greased" 
            checked={props.isGreased}
            onChange={props.toggleIsGreased}></input>
        </div>  
      </div>

      <div className="item">
        <label htmlFor="sort">Sort Hogs</label>
        <select className="ui dropdown" name="sort" onChange={handleOnChange}>
          <option value="none">None</option>
          <option value="name">Name</option>
          <option value="weight">Weight</option>
        </select>
      </div>
    </div>
  )
}
