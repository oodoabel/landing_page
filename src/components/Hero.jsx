import { arrowRight } from '../assets/icons';
import  Button  from './Button';
import  { shoes, statistics} from'../Constants'
import { bigShoe1 } from '../assets/images';
import ShoeCard from './ShoeCard';

const Hero = () => {
  return (
    <section
    id='home'
    className='w-full flex xl:flex-row justify-center flex-col max-container gap-10 min-h-screen p-2'
    >
      <div>
      <p className='text-xl font-montserrat text-coral-red'>Our summer Collection</p>
      <h1 className='mt-10 font-palanquin text-8xl max-sm:tex-[72px] max-sm:leading[82px] font-bold'> 
        <span className='xl:bg-white xl:whitespace-nowrap relative z-10 pr-10'>The New Arrival</span> <br /> 
        <span className='text-coral-red mt-3 iinline-block '>Nike</span> Shoes
      </h1>
      <p className='font-montserrat text-slate-gray text-lg leading-8 mt-6 mb-14 sm:max-w-sm'>
        Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
      </p>
      <Button label='Shop now' iconURL={arrowRight}/>
      <div className='flex justify-start items-start flex-wrap w-full mt-20 gap-16'>
        {statistics.map((stat) => (
          <div>
            <p className='text-4xl font-palanquin font-bold'>{stat.value}</p>
            <p className='leading-7 font-montserrat text-slate-gray '>{stat.label}</p>
          </div>
        ))}
      </div>
      </div>

      <div className='relative flex-1 flex justify-center items-center xl:min-h-screen max-xl:py-40 bg-primary bg-hero bg-center'>
        <img src={bigShoe1} alt="shoe collection"  width={610} height={500}
              className='object-contain relative z-10'
        />
          hello
        <div>
          {shoes.map((shoe) => (
            <div id={shoe}>
              <ShoeCard 
               imgURL={shoe}
               changeBigShoeImage={() => {}}
               bigSHoeImg=""
              />
            </div>
          ))}
        </div>
      </div>
    </section>
    

  )
}

export default Hero