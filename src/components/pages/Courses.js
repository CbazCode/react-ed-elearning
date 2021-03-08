import React, { useEffect, useState } from 'react'
import { getAllCourses } from '../../redux/actions/actionCreators'
import { store } from '../../redux/store'
import img from '../../img/courses.jpg'
import Banner from '../Organisms/Banner'
import { useSelector } from 'react-redux'
import { Card } from '../Organisms/Card'

export const Courses = () => {
  const {courses} = useSelector( state => state.course );
  useEffect(() => {
    store.dispatch(getAllCourses())
  }, [])

  return (
    <>
      <Banner
        color="dark-color"
        image={{
          src: img,
          alt: "Banner Especialidades"
        }}
        title="Nuestros cursos"
        subtitle="Comienza desde cero hoy mismo en tu camino a dominar la tecnología"
      />
      {
        courses &&
        <main className="ed-grid m-grid-5">
          {
            courses.map(c => (
              <Card
                path="cursos"
                picture={c.picture}
                name={c.name}
                key={c.id}
                card={c.id}
              />
            ))
          }
        </main>
      }
    </>
  )
}
