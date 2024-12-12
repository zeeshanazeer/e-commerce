import React from 'react'
import watch from "../assets/card-icon/icon-smart.png"
import camera from "../assets/card-icon/iconcamera.png"
import game from "../assets/card-icon/icongame.png"
import headphone from "../assets/card-icon/iconhead.png"
import computer from "../assets/card-icon/iconcomputer.png"
import phone from "../assets/card-icon/iconphone.png"


function Head(){
    return (
        <>
            <div className='beaich gap-2 h-60 w-[100%]'>
                <div className=' w-[80%]'>
                <div className='w-[10%] h-14 beaich'>
                <div className='w-8 h-16'>
          <div className='w-5 h-12 bg-red-600 rounded-md float-left'></div>
          </div>
            <span className='text-red-600 font-medium ml-1 mb-5'>Categories</span>
            </div>
                    <div className='float-left'>
                        <p className='text-4xl font-semibold mt-5'>Browse By Category</p>
                    </div>
                </div>
            </div>
        </>
      )
}

function Card( props){
    return(
        <>
            <div className=' w-[150px] mx-auto max-w-7xl sm:px-6 lg:px-8'>
                <div className='w-[130px] h-32 border-2 '>
                    <div  className='w-[80%] h-16 beaich ml-3 mt-4'>
                         <img src={props.image} alt=""/>
                    </div>
                    <div className='block beaich'>
                        <p>{props.name}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function List() {
  return (
    <>
        <Head/>
        <div className='gap-5 beaich pb-12 border-b-2 w-[100%] mr-5'>
            <Card image={phone} name="Phone"/>
            <Card image={watch} name="Smart-Watch"/>
            <Card image={headphone} name="Head-Phone"/>
            <Card image={camera} name="Camera"/>
            <Card image={game} name="Game"/>
            <Card image={computer} name="Computer"/>
        </div>
    </>
  )
}
