import { arrowRight } from '../assets/icons';
// import { Button } from './Button'

const Hero = () => {
  return (
    <section
    id='home'
    className='w-full flex xl:flex-row justify-center flex-col max-container gap-10 min-h-screen p-2'
    >
      <p>Our summer Collection</p>
      <h1> 
        <span>The New Arrival</span> <br /> <span>Nike</span> Shoes
      </h1>
      <p>
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
      </p>
      <button className='bg-coral-red h-10 w-[6rem] rounded-full'>Shop me <img src="../assets/icons/arrow-right.svg" alt="" /></button>

    </section>
    

  )
}

export default Hero