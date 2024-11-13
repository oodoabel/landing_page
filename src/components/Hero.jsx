// import { Button } from './Button';
import { arrowRight } from '../assets/icons';

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
      {/* <Button label="Shop now" iconURL ={arrowRight} /> */}
    </section>
    

  )
}

export default Hero