import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const App = () => {
  const photo = [
    'https://images.pexels.com/photos/4393021/pexels-photo-4393021.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/15913452/pexels-photo-15913452/free-photo-of-poke-bowl-with-salmon.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/7441761/pexels-photo-7441761.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1640772/pexels-photo-1640772.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1998920/pexels-photo-1998920.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2664216/pexels-photo-2664216.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/3756498/pexels-photo-3756498.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/1813505/pexels-photo-1813505.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/2092906/pexels-photo-2092906.jpeg?auto=compress&cs=tinysrgb&w=400'
  ]
  let [currentPhoto, setPhoto] = useState(0);

  const handleNext = () => {
    if (currentPhoto === photo.length - 1) {
      setPhoto(currentPhoto = 0)
    } else {
      setPhoto(currentPhoto + 1)
    }
  }
  const handlePriv = () => {
    if (currentPhoto <= 0) {
      toast('এটাই প্রথম আপনি আরো এগিয়ে জান ')
    } else {
      setPhoto(currentPhoto - 1)
       
    }
  }
  return (
    <div>
       <ToastContainer
              position="top-center"
              autoClose={5000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
            />
      <h2 className="text-center mt-20 font-bold text-white text-2xl break-words uppercase">Food Img Gallery</h2>
      <div className='mt-20 flex justify-center'>
        <div className="card p-2 lg:card-side bg-base-100 shadow-xl">
          <figure><img src={photo[currentPhoto]} className='w-[500px] h-[300px]' alt="Album" /></figure>
          <div className="card-body">
            <h2 className="card-title">New Food album is released!</h2>
            <p className='capitalize'>Click the button to  change Photo.</p>
            <div className="card-actions justify-end">
              <button onClick={handlePriv} className="btn btn-primary">Privies</button>
              <button onClick={handleNext} className="btn btn-primary">Next</button>
            </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default App;