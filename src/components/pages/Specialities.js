import React, { useEffect } from 'react'
import Banner from '../Organisms/Banner'
import img from '../../img/specialities.png'
import { startGetAllSpeacialities } from '../../redux/actions/actionCreators';
import { store } from '../../redux/store'
import { Card } from '../Organisms/Card';
import { useSelector } from 'react-redux';

export const Specialities = () => {
  const {specialities} = useSelector( state => state.speciality );
  useEffect(() => {
    store.dispatch(startGetAllSpeacialities())
  }, [])

  return (
    <>
      <Banner
        color="first-color"
        image={{
          src: img,
          alt: "Banner Especialidades"
        }}
        title="Especialidades"
        subtitle="Domina un tecnología con las rutas de aprendizaje que te ofrecemos"
      />
      {
        specialities &&
        <main className="ed-grid m-grid-3">
          {
            specialities.map(s => (
              <Card
              path="especialidades"
              picture={s.picture}
              name={s.name}
              key={s.id}
              card={s.id}/>
            ))
          }
        </main>
      }
    </>
  )
}
