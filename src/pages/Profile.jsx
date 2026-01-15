import Footer from "../components/Footer"
import NavBar from "../components/NavBar"
import ProfilePosts from "../components/ProfilePosts"

const Profile = () => {
  return (
    <div>
      <NavBar />

      <div className="px-8 md:px-[200px] mt-8 flex md:flex-row flex-col-reverse gap-8">


        {/* Posts */}
        <div className="flex flex-col md:w-[70%] w-full">
          <h1 className="text-xl font-bold mb-4">Your posts:</h1>
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
          <ProfilePosts />
        </div>
{/* Profile info */}
<div className="flex md:w-[30%] w-full justify-start items-start ml-20">
  <div className="flex flex-col space-y-4 w-full sticky top-8">
    <h1 className="text-xl font-bold mb-4">Profile</h1>

    <input
      className="outline-none px-4 py-2 text-gray-500 border rounded"
      placeholder="Your username"
      type="text"
    />

    <input
      className="outline-none px-4 py-2 text-gray-500 border rounded"
      placeholder="Your email"
      type="email"
    />

    <input
      className="outline-none px-4 py-2 text-gray-500 border rounded"
      placeholder="Your password"
      type="password"
    />

    <div className="flex space-x-4 pt-4">
      <button className="bg-black text-white px-4 py-2 rounded">
        Update
      </button>
      <button className="bg-red-600 text-white px-4 py-2 rounded">
        Delete
      </button>
    </div>
  </div>
</div>

            </div>


      <Footer />
    </div>
  )
}

export default Profile
