import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { startGetAllPosts } from '../../redux/actions/actionCreators'
import { store } from '../../redux/store';
import Banner from '../Organisms/Banner';
import Publication from '../Organisms/Publication';
import img from '../../img/specialities.png'


export const Home = () => {

  const {posts} = useSelector( state => state.post );

  useEffect(() => {
    store.dispatch(startGetAllPosts())
  }, [])
  
  return (
    <>
      <Banner
        color="dark-color"
        image={img}
        title="Bienvenido a la expericia más increible en educación online. Comienza hoy mismo a aprender"
        subtitle="Nuestro equipo ha desarrollado esta plataforma pensando en ti. Sabemos que estás buscando contenido de calidad. Aquí lo encontrás"
        home
        poster={img}
      />
      <main className="ed-grid m-grid-3">
        <div className="l-section m-cols-2">
          <h2>Ultimas publicaciones</h2>
          {
            posts ?
            <div>
              { 
                posts.map(p =>
                <Publication
                  title={p.title}
                  author={p.author}
                  fecha={p.fecha}
                  content={p.content}
                  key={p.id}
                />)
                
              
              }
            </div> :
            <p>No existen publicaciones en la BD</p>
          }
        </div>
        <div>
          <h3> Lista de categorías </h3>
          <ul className="data-list">
            <li><span>React.js</span></li>
            <li><span>React native</span></li>
            <li><span>Angular</span></li>
            <li><span>Vue.js</span></li>
            <li><span>HTML</span></li>
            <li><span>CSS</span></li>
          </ul>
        </div>
      </main>
    </>
  )
}
