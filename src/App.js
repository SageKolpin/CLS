import { CarouselCaption, CarouselItem } from 'react-bootstrap';
import './App.css';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
//import topOfPage from './components/header';

function App() {

  return (
    <>
    <div id='cursor'>
    <div className='header'>
    <header>Crooked Little Shack </header>
    <header id='co'>Collective</header>
    </div>
    <div id='img1'></div>
    </div>
    <div className='sec1'>
    <header id='about'>About Us.</header>
    <div className='info1'>
    <sec>
      Nesteled amongst sun-soaked hills and a small babbling creek, a house of artists decided to create something magical. A collective of humans who promote honesty, creativity, passion, and above all community. 
    </sec>
    </div>
    <div className="d-grid gap-2">
    <Button  variant='success' size='lg' id='buton'>Learn More</Button>{' '}
    </div>
    <div id='photos1'>
      <img id='threep' src='https://i.imgur.com/fDF1qME.jpeg' alt='3photos by Jess'/> 
      <img id='coffee' src='https://i.imgur.com/XSmWc6k.jpeg' alt='coffee by Midori'/>
    </div>


    <div id='about1'>
     <h1 id="events">events</h1>
     <Carousel>
      <Carousel.Item> 
      <div id="eventcard">
        <img id='evim1' src='https://images.pexels.com/photos/963486/pexels-photo-963486.jpeg?auto=compress&cs=tinysrgb&w=800'/>
      <CarouselCaption id='title2'> Most Massive Woman Wins</CarouselCaption>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div  id="eventcard">
        <img id='evim1' src='https://images.pexels.com/photos/4473610/pexels-photo-4473610.jpeg?auto=compress&cs=tinysrgb&w=800&lazy=load'/>
        <CarouselCaption id='title2'>Yoga and Mindfulness</CarouselCaption>
      </div>
      </Carousel.Item>
      <CarouselItem>
      <div  id="eventcard"> 
        <img id='evim1' src='https://images.pexels.com/photos/3855552/pexels-photo-3855552.jpeg?auto=compress&cs=tinysrgb&w=800'/>
    <CarouselCaption id='title2'>Anti-Racism Drawing</CarouselCaption></div>
      </CarouselItem>
      <CarouselItem>
      <div  id="eventcard"> 
        <img id='evim1' src='https://images.pexels.com/photos/4908146/pexels-photo-4908146.jpeg?auto=compress&cs=tinysrgb&w=800'/>
   <CarouselCaption id='title2'>Forest Dance Party</CarouselCaption></div>
      </CarouselItem>
      </Carousel>
      <div className="d-grid gap-2">
      <Button id='b2' variant='info' size='lg'>View our Events</Button>
      </div>
      </div>


    <div id='about2'>
      <h1 id='ca'>Featured artists</h1>
    <div id='jess'>
      <div>
      <img id='j1' src='https://i.imgur.com/3TEQ6E5.jpeg'/>
      <Button size='lg' variant='danger' id='buttons'>art</Button>
      </div>
      <div>
      <h3>Forest Creature Jess</h3>
      <h5 id='jab'>Jess pushes the boundries of art. Utalizing different techniques such as acting, painting, and dancing, she showcases just how personal growth and relinqishing norms liberate art.</h5>
      </div>
    </div>
    <div id='milan'>
    <div>
    <img id='m1' src='https://i.imgur.com/rTXOqqM.jpeg'/>
    <Button size='lg' variant='primary' id='buttons'>art</Button>
    </div>
    <div>
    <h3>Marvolous Milan</h3>
    <h5 id='jab'>Milan is a force of nature. A lifelong artist there are no boxes that can contain her, they continue to explore new passions whilst perfecting the crafts that have sparked joy, such as photography and acting.  </h5>
    </div>
    </div>
    </div>
    <div id='about3'>
      <h2 id='cc'>connect with us</h2>
    <img id='insta' src='https://cdn-icons-png.flaticon.com/128/1384/1384063.png'/>
    <img id='meet' src='https://cdn-icons-png.flaticon.com/128/3536/3536897.png'/>
    </div>
    </div>
    </>
  );
}

// needed : an about section for each artist, event page and get in touch seciton. 

export default App;