import React, {useState} from 'react';
import pic from './pic.jpg';
import pic2 from './pic2.jpg';

function App() {

  const [dogPic, setDogPic] = useState(pic);

  function getPic(){
    if(dogPic === pic){
      setDogPic(pic2);
    }
    else{
      setDogPic(pic);
    }
    
  }

  return (
    <>
      <button onClick={getPic}>Next image</button>
      <div>
      <img src={dogPic} alt='Very important picture'/>
      </div>
    </>
  );
}

export default App;
