import { useState } from 'react'

const ClickablePicture = (props) => {
    const { img, imgClicked } = props
    const [ picture, setPicture ] = useState(img)

    function changePicture() {
        (picture === img) ? setPicture(imgClicked) : setPicture(img);
    }

    return ( <div className="clickable-picture">
        <img src={picture} alt="" className='mx-auto w-40 cursor-pointer' onClick={() => changePicture()} />
    </div> );
}
 
export default ClickablePicture;