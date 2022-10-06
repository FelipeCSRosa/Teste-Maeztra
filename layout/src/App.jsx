import './App.css'
import HeaderNotification from './components/HeaderNotification'
import HeaderMain from './components/HeaderMain'
import HeaderNav from './components/HeaderNav'
import Banner from './components/Banner'
import ProductsCarousel from './components/ProductsCarousel'
import Carousel from 'react-elastic-carousel'

function App() {
  return (
    <>
      <HeaderNotification/>
      <HeaderMain/>
      <HeaderNav/>
      <Carousel>
        <Banner/>
        <Banner/>
        <Banner/>
        <Banner/>
        <Banner/>
      </Carousel>
      <ProductsCarousel/>
    </>
  )
}

export default App
