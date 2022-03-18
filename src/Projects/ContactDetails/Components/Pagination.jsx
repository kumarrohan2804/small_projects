import React from 'react';


const PaginationBox = ({value})=>{
    return(
        <div>
            <p>{value}</p>
        </div>
    )
}

const Pagination = ({noOfPages}) => {
    let arr=[];
    for(let i=1;i<=noOfPages;i++){
        arr.push(<div key={i}><PaginationBox value={i} /></div>);
    }
  return (
    <div style={{display:"flex"}}>
       {arr}
    </div>
  )
}

export default Pagination