

const HomePosts = () => {
  return (
    <div className="w-full flex mt-8 space-x-2">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img src="src/assets/pexels-realtoughcandy-11035473.jpg" alt="" className="h-40 w-60 object-scale-down ..." />
    </div>

        {/* right */}
        <div className="flex flex-col w-[65%] space-x-2">
          <h1 className="text-xl font-bold md:mb-2 mb-1 md:text-2xl">
              Mastering Mern Stack
            </h1>
                <div className="flex mb-2 text-sm font-semibold text-gray-500 items-center justify-between md:mb-4">
               <p>@woodpeckers</p>
               <div className="flex space-x-2">
                <p>11/11/2025</p>
                <p>05:36</p>


              </div>

            </div>
            <p className="text-sm md:text-sm  ">The MERN stack—MongoDB, Express.js, React, and Node.js—offers a full JavaScript-based framework for efficient web development. It enables fast, scalable, and flexible applications with seamless data flow between front-end and back-end. Its open-source nature, reusable components, and active community support make development cost-effective and easier to maintain.</p>

        

          </div>
        
        </div>
  )
}

export default HomePosts
