import { useState } from 'react'
import SingleColorPicker from './SingleColorPicker'

const RGBColorPicker = () => {

    const [ rValue, setRValue ] = useState(0)
    const [ gValue, setGValue ] = useState(0)
    const [ bValue, setBValue ] = useState(0)

    const handleRedChange = (e) => {
        setRValue(e.target.value)
        const rValue = Math.max(0, Math.min(255, Number(e.target.value)))
        setRValue(rValue.toString())
    }
    const handleGreenChange = (e) => {
        setGValue(e.target.value)
        const gValue = Math.max(0, Math.min(255, Number(e.target.value)))
        setGValue(gValue.toString())
    }
    const handleBlueChange = (e) => {
        setBValue(e.target.value)
        const bValue = Math.max(0, Math.min(255, Number(e.target.value)))
        setBValue(bValue.toString())
    }

    return ( <div className="color-picker my-10">
        <SingleColorPicker color="red" value={rValue} onChange={handleRedChange} />
        <SingleColorPicker color="green" value={gValue} onChange={handleGreenChange} />
        <SingleColorPicker color="blue" value={bValue} onChange={handleBlueChange} />
        <div className='flex justify-center mt-5'>
            <div className='w-10 h-10 my-auto border border-black' style={{background: `rgb(${rValue}, ${gValue}, ${bValue})`}} />
            <p className='my-auto ml-2'>rgb({rValue}, {gValue}, {bValue})</p>
        </div>
    </div> );
}
 
export default RGBColorPicker;