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
                     <img src="src/assets/pexels-realtoughcandy-11035473.jpg"  className="w-full mx-auto mt-8"  alt=""   />
                     
        </div>
        <Footer/>

    </div>
  )
}

export default PostDetails
