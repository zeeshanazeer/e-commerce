import React from 'react'
import {Link} from "react-router-dom"

const rout = [{name: "Home", myPath: "/"}]

function Add(props){
    return(
        <>
            <div>
                <span>
                    {rout.map((item)=>(
                        <button>
                            <Link to={item.myPath}>{item.name}</Link>
                        </button>
                    ))}
                </span>
                <div>

                </div>
            </div>
        </>
    )
}

function CardAdd() {
  return (
    <>
      <div>
      <Add/>
      </div>
    </>
  )
}

export default CardAdd
