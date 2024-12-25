import React from 'react'

function Main(){
  return(
    <div className='w-[80%]'>
      <img src='https://i.imghippo.com/files/kwNP6168ts.webp' alt="" className='w-[100%] h-[550px] mt-10 mb-10' />
    </div>
  )
}

function Page(props){
  return(
    <>
       <section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center ml-24">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 w-[60%] ">
        {props.tit}
      </h1>
      <p className="mb-8 leading-relaxed w-[65%]">
        {props.para}
      </p>
      <div className="flex w-full md:justify-start justify-center items-end">
       
        <button className="inline-flex text-white bg-red-600 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
          {props.btn}
        </button>
      </div>
      <p className="text-sm mt-2 text-gray-500 mb-8 w-full">
        Neutra shabby chic ramps, viral fixie.
      </p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
        className="object-cover object-center rounded w-96"
        alt="hero"
        src={props.image}
      />
    </div>
  </div>
</section>

    </>
  )
}

function PageAbout() {
  return (
    <div>
      <div className='beaich'>
        <Main/>
      </div>
    <div className='beaich'>
     <Page image='https://i.imghippo.com/files/kwNP6168ts.webp'
      para="Video is the future of business in this digital-focuse world.
      Vidyard uses video to change the way companies connect and 
      communicate. We help organizations of all size humanize their
      communications and personalize their customer experiences."
      tit="Helping Businesses Succeed throught the power of video."
      btn="Login for Free"/>
    </div>
    </div>
  )
}

export default PageAbout
