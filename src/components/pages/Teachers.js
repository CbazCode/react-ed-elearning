import React, { useEffect, useState } from 'react';
import Banner from '../Organisms/Banner';
import {store} from '../../redux/store';
import img from '../../img/teachers.jpg'
import { getAllTeachers } from '../../redux/actions/actionCreators';
import { connect, useSelector } from 'react-redux';
import { Teacher } from '../Organisms/Teacher';

// import { connect } from "react-redux"
// import Teacher from '../Organisms/Teacher';


export const Teachers = () => {


  useEffect(() => {
    store.dispatch(getAllTeachers())
  }, [])
  const {teachers} = useSelector( state => state.teacher );
  


  return (
    <>
      <Banner
        color="third-color"
        image={{
          src: img,
          alt: "Banner profesores"
        }}
        title="Nuestros profesores"
        subtitle="Este plantel docente está altamente calificado para guiarte en tu educación."
      />
      {
        teachers && 
        <main className="ed-grid m-grid-3 lg-grid-4 row-gap">
          { 
            teachers.map(t => (
              <Teacher
               key={t.id}
               picture={t.picture}
               name={t.name}
               country={t.country}
              />
            ))
          }
        </main>

      }
           
    </>
    
  )
  
}



