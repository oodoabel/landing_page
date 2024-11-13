import Hero from "./components/Hero";
import Nav from "./components/nav";
import CustomerReviews from "./components/CustomerReviews";
import Footer from "./components/footer";
import SpecialOffer from "./components/SpecialOffer";
import Services from "./components/Services";
import Subscribe from "./components/Subscribe";
import SuperQuality from "./components/SuperQuality";
import PopularProducts from "./components/PopularProducts";

const App = () => (
  <main className="relative px-9">
    <Nav/>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero/>
    </section>
    <section className='padding'>
      <PopularProducts/>
    </section>
    <section className='padding'>
      <SuperQuality/>
    </section>    
    <section className='padding-x py-10'>
      <Services/>
    </section>    
    <section className='padding'>
      <SpecialOffer/>
    </section><section className='bg-pale-blue padding'>
      <CustomerReviews/>
    </section><section className='padding-x sm:py-32 py-16 w-full'>
      <Subscribe/>
    </section><section className='bg-black padding-t pb-8 padding- text-white'>
      <Footer/> 
    </section>
    




    
  </main>
)

export default App;