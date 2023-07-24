import { useState } from 'react'

const LikeButton = () => {

    const colors = ['purple','blue','green','yellow','orange','red'];

    const [ color, setColor ] = useState(colors[0])
    const [ counter, setCounter ] = useState(0)
    const backgroundColor = color;

    function updateButton() {
        const randomColor = Math.floor(Math.random() * colors.length)
        console.log(color)
        setColor(colors[randomColor])
        setCounter(counter + 1)
    }

    return ( <div className="like-button mb-5">
        <button onClick={() => updateButton()} style={{backgroundColor}} className='py-2 px-4 rounded-md'>
           {counter} Likes
        </button>
    </div> );
}
 
export default LikeButton;