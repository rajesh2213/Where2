import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'
    id="CardScroll"
    >
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Explore the hidden waterfall deep inside the Sundarbans'
              label='Adventure'
              path='/flights'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Travel to the Islands of Bali'
              label='Luxury'
              path='/flights'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Indian Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/flights'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/flights'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Thar Desert on a guided camel tour'
              label='Adrenaline'
              path='/flights'
            />
          </ul>
          <u1 className='cards__items'>
          <iframe src="https://www.google.com/maps/d/embed?mid=1oiOVwByhhTCeHC-5g7It079NhfU" width={1260} height={480} />
          </u1>    
        </div>
      </div>
    </div>
  );
}

export default Cards;