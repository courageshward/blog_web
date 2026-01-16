import { BiEdit } from "react-icons/bi"
import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import { MdDelete } from "react-icons/md"



const PostDetails = () => {
  return (
    <div>
        <NavBar/>
        <div className="px-8 md:px-[200px] mt-8">
            <div className="flex justify-between items-center">
               <h1 className="text-2xl font-bold text-black md:text-3xl">Mastering Mern stack</h1>
               <div className="flex items-center justify-center space-x-2">
                <p><BiEdit/></p>
                <p><MdDelete/></p>
                </div> 
            </div>
                <div className="flex items-center justify-between mt-2 md:mt-4">
                    <p>@woodpeckers</p>
                    <div className="flex space-x-2">
                      <p>11/11/2025</p>
                      <p>05:36</p>
                  </div>
                    </div>
                     <img src="src/assets/pexels-realtoughcandy-11035473.jpg"   alt=""/>
                     <p className="mx-auto mt-8">But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"</p>
                     <div className="flex items-center mt-8 space-x-4 font-semibold">
                      <p>Categories:</p>
                      <div className="flex justify-center items-center space-x-2">
                        <div className="bg-gray-300 rounded-lg px-3 py-1">Node js</div>
                        <div className="bg-gray-300 rounded-lg px-3 py-1">React</div>

                      </div>

                     </div>
                     <div className="flex flex-col mt-4">
                      <h3 className="mt-6 mb-4 font-semibold">Comments</h3>
                      {/* comment */}
                      <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-600">@woodpeckers</h3>
                          <div className="flex justify-center items-center space-x-4">
                            <p className="text-gray-500 text-sm">11/11/2025</p>
                            <p className="text-gray-500 text-sm">05:36</p>
                            <div className="flex items-center justify-center space-x-2">
                            <p><BiEdit /></p>
                            <p><MdDelete/></p>
                          </div>
                            </div>
                            </div>
                        <p className="px-4 mt-2">nice information!!!</p>

        </div>
              {/* comment */}
                      <div className="px-2 py-2 bg-gray-200 rounded-lg my-2">
                        <div className="flex items-center justify-between">
                          <h3 className="font-bold text-gray-600">@woodpeckers</h3>
                          <div className="flex justify-center items-center space-x-4">
                            <p className="text-gray-500 text-sm">11/11/2025</p>
                            <p className="text-gray-500 text-sm">05:36</p>
                            <div className="flex items-center justify-center space-x-2">
                            <p><BiEdit /></p>
                            <p><MdDelete/></p>
                          </div>
                            </div>
                            </div>
                        <p className="px-4 mt-2">nice information!!!</p>

        </div>
        </div>
        {/* write a comment */}
        <div className="w-flex flex-col mt-4 md:flex-row">
          <input type="text" placeholder="Write a comment" className="md:w-[80%] outline-none px-4 mt-4 md:mt-0" />
          <button className="bg-black text-white px-4 py-2 md:w-[20%] mt-4 md:mt-0">Add Comment</button>

        </div>
        </div>
        <Footer/>

    </div>
  )
}

export default PostDetails
