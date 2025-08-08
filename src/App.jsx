import './App.css'
import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'

function App() {


  return (
    <>
     <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-200 via-pink-300 to-pink-400 relative overflow-hidden sm:w-full px-4">

  {/* Floating Hearts & Flowers */}
  <div className="absolute top-10 left-4 sm:left-10 text-pink-500 text-2xl sm:text-3xl animate-bounce">❤️</div>
  <div className="absolute top-48 left-20 sm:left-40 text-pink-500 text-2xl sm:text-3xl animate-bounce">❤️</div>
  <div className="absolute top-20 right-10 sm:right-20 text-red-400 text-xl sm:text-2xl animate-pulse">💖</div>
  <div className="absolute top-40 right-20 sm:right-40 text-red-400 text-xl sm:text-2xl animate-pulse">💖</div>
  <div className="absolute bottom-20 left-1/4 text-pink-500 text-xl sm:text-2xl animate-ping">💝</div>
  <div className="absolute bottom-40 left-1/3 text-pink-500 text-xl sm:text-2xl animate-ping">💝</div>
  <div className="absolute bottom-16 right-1/3 text-pink-600 text-2xl sm:text-3xl animate-pulse">🌸</div>
  <div className="absolute bottom-24 right-1/4 text-pink-600 text-2xl sm:text-3xl animate-pulse">🌸</div>

  {/* Birthday Message */}
  <div className="text-center bg-white/40 backdrop-blur-md rounded-2xl shadow-2xl px-6 sm:px-10 py-10 sm:py-12 w-full max-w-md sm:max-w-lg">
    <h1 className="text-2xl sm:text-4xl font-bold text-rose-600 typewriter-loop">
      Happy Birthday, Beautiful ❤️
    </h1>
    <p className="text-base sm:text-lg text-gray-700 mt-4">
      Today is all about celebrating you and the joy you bring to my life
    </p>
  </div>

</div>
      {/* image boxes */}
      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="w-full max-w-sm h-auto mx-auto overflow-hidden">
          <img className='rounded-3xl w-full h-full object-cover' src={image1}alt="" />
        </div>
        <div className=" w-full max-w-sm h-auto mx-auto overflow-hidden">
          <img className='rounded-3xl w-full h-full object-cover' src={image2} alt="" />
          </div>
        <div className="w-full max-w-sm h-auto mx-auto overflow-hidden">
          <img className='rounded-3xl w-full h-full object-cover' src={image3} alt="" /></div>
        <div className="w-full max-w-sm h-auto mx-auto overflow-hidden">
          <img className='rounded-3xl w-full h-full object-cover' src={image4} alt="" /></div>
        <div className="w-full max-w-sm h-auto mx-auto overflow-hidden ">
          <img className='rounded-3xl w-full h-full object-cover' src={image5} alt="" /></div>
      </div>

      {/* describtion_section */}
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-300 
     via-purple-400 to-purple-600 relative overflow-hidden px-4">

        {/* Floating Emojis */}
        <div className="absolute top-10 left-10 text-pink-500 text-3xl animate-bounce">❤️</div>
        <div className="absolute top-48 left-40 text-pink-500 text-3xl animate-bounce">❤️</div>
        <div className="absolute top-20 right-20 text-red-400 text-2xl animate-pulse">💖</div>
        <div className="absolute top-40 right-40 text-red-400 text-2xl animate-pulse">💖</div>
        <div className="absolute top-10 left-20 text-pink-500 text-3xl animate-pulse">❤️</div>
        <div className="absolute top-48 left-20 text-pink-500 text-3xl animate-pulse">❤️</div>
        <div className="absolute top-20 right-10 text-red-400 text-2xl animate-pulse">💖</div>
        <div className="absolute top-40 right-20 text-red-400 text-2xl animate-pulse">💖</div>

        {/* Message Box */}
        <div className="w-full max-w-xl px-4 py-6 mx-auto bg-white/30 rounded-xl shadow-lg backdrop-blur-lg 
       flex flex-col items-center justify-start space-y-6">

          <h1 className="text-2xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r 
       from-pink-400 via-red-500 to-yellow-500 drop-shadow-lg animate-fade-in">
            A Special Message for You
          </h1>

          <p className="text-base sm:text-lg text-white text-center leading-relaxed">
            Happy Birthday! 🎉 Today is all about celebrating the amazing person you are and the joy you bring to everyone around you.
            May your day be filled with laughter, love, and unforgettable moments. Here's to another year of chasing dreams,
            making memories, and growing stronger. Wishing you endless happiness and success in everything you do.
            Have the most magical birthday ever! 🥳
          </p>
          <img
            src="https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExdnd0OHVuM3QxN3gyaXl0b3E5cWFiajBjamJ2aHdlcDR6MXU5Z3ByNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/V2JgPXdvuCKrDo9uem/giphy.gif"
            alt="Birthday Wishes GIF"
            className="w-64 h-auto rounded-lg shadow-md"
          />

        </div>
      </div>
    </>
  )
}

export default App
