/* eslint-disable @next/next/no-img-element */
import React, { useEffect } from 'react'
import styles from '../styles/ghibli.module.scss'

const ghibli = () => {

        // const cards = document.querySelector(".cards")
        // const images = document.querySelectorAll(".card__img")
        // const backgrounds = document.querySelectorAll(".card__bg")
        // const range = 40

        // // const calcValue = (a, b) => (((a * 100) / b) * (range / 100) -(range / 2)).toFixed(1)
        // const calcValue = (a, b) => (a / b * range - range / 2).toFixed(1) // thanks @alice-mx

        // let timeout
        // document.addEventListener('mousemove', ({ x, y }) => {
        //     if (timeout) {
        //         window.cancelAnimationFrame(timeout)
        //     }

        //     timeout = window.requestAnimationFrame(() => {
        //         const yValue = calcValue(y, window.innerHeight)
        //         const xValue = calcValue(x, window.innerWidth)

        //         cards.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`

        //         images.map(image => image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`)

        //         backgrounds.map(background => background.style.backgroundPosition = `${xValue * .45}px ${-yValue * .45}px`)
        //     })
        // }, false)


    return (
        <div className={styles.cards}>
            <h3>project 1</h3>
            <h1>Alexwwe</h1>
            <div className={styles.card + styles.card__one}>
                <div className={styles.card__bg}></div>
                <img alt="image" className={styles.card__img} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png" />
                <div className={styles.card__text}>
                    <p className={styles.card__title}>Princess Mononoke</p>
                </div>
            </div>
            <div className={styles.card + styles.card__two}>
                <div className={styles.card__bg}></div>
                <img alt="image" className={styles.card__img} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png" />
                <div className={styles.card__text}>
                    <p className={styles.card__title}>Spirited Away</p>
                </div>
            </div>
            <div className={styles.card + styles.card__three}>
                <div className={styles.card__bg}></div>
                <img alt="image" className={styles.card__img} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png" />
                <div className={styles.card__text}>
                    <p className={styles.card__title}>Howls Moving Castle</p>
                </div>
            </div>
        </div>

    )
}

export default ghibli
