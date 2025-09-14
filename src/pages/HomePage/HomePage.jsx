import React from 'react'
import Hero from '../../components/Hero/Hero'
import CardList from '../../components/Cards/CardList'

const HomePage = () => {
  return (
    <div className="p-0">
      <Hero />
      <CardList title="Now Playing" category="now_playing" />
      <CardList title="Top Rated" category="top_rated" />
      <CardList title="Popular" category="popular" />
      <CardList title="Upcoming" category="upcoming" />
    </div>
  );
}

export default HomePage