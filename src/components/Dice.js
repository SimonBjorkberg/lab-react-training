import diceEmpty from '../assets/images/dice-empty.png'
import diceOne from '../assets/images/dice1.png'
import diceTwo from '../assets/images/dice2.png'
import diceThree from '../assets/images/dice3.png'
import diceFour from '../assets/images/dice4.png'
import diceFive from '../assets/images/dice5.png'
import diceSix from '../assets/images/dice6.png'
import { useState } from 'react'

const allDice = [diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix]

const Dice = () => {
    const [ dice, setDice ] = useState(diceThree)
    const randomNum = Math.floor(Math.random() * allDice.length)

    function randomDice() {
        setDice(diceEmpty)
        setTimeout(() => {
            setDice(allDice[randomNum])
        }, 1000);
    }

    return ( <div className="dice">
        <img src={dice} alt="" className='w-40 mx-auto my-5 cursor-pointer' onClick={randomDice} />
    </div> );
}
 
export default Dice;