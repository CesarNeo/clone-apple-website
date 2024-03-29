import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useState } from 'react'

import { MODELS, SIZES } from '../utils/constants'
import IPhoneCanvas from './iphone-canvas'

const Model = () => {
  const [size, setSize] = useState('small')

  const [model, setModel] = useState({
    title: 'iPhone 15 Pro in Natural Titanium',
    colors: ['#8F8A81', '#FFE7B9', '#6F6C64'],
    image: '/assets/images/yellow.jpg',
  })

  useGSAP(() => {
    gsap.to('#heading', { y: 0, opacity: 1 })
  }, [])

  return (
    <section className="common-padding">
      <div className="screen-max-width">
        <h1 id="heading" className="section-heading">
          Take a closer look.
        </h1>

        <div className="mt-5 flex flex-col items-center">
          <IPhoneCanvas model={model} size={size} />

          <div className="mx-auto w-full">
            <p className="mb-5 text-center text-sm font-light">{model.title}</p>
            <div className="flex-center">
              <ul className="color-container">
                {MODELS.map((item, i) => (
                  <li
                    key={i}
                    className="mx-2 h-6 w-6 cursor-pointer rounded-full"
                    style={{ backgroundColor: item.colors[0] }}
                    onClick={() => setModel(item)}
                  />
                ))}
              </ul>

              <div className="size-btn-container">
                {SIZES.map(({ label, value }) => (
                  <button
                    key={label}
                    className="size-btn"
                    style={{
                      backgroundColor: size === value ? 'white' : 'transparent',
                      color: size === value ? 'black' : 'white',
                    }}
                    onClick={() => setSize(value)}
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Model
