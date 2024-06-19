import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateSloganGroup = (
  headings: NodeListOf<HTMLElement>,
  trigger: HTMLElement,
) => {
  headings.forEach((h2, index) => {
    const speed = 1 + index * 0.4
    gsap.to(h2, {
      x: -1.3 * window.innerWidth * speed,
      scale: 4.5,
      y: 200,
      delay: 1.5,
      opacity: h2.querySelector('span.z-50') ? 1 : 0,
      scrollTrigger: {
        fastScrollEnd: true,
        trigger: trigger,
        start: 'top top',
        end: () => '+=' + (trigger.scrollWidth - window.innerWidth),
        scrub: true,
        markers: false,
      },
    })
  })
}

export const initializeHeroAnimations = () => {
  gsap.to('#hero', { opacity: 1, delay: 2.9, duration: 2 })
  gsap.to('#cta', {
    opacity: 1,
    y: -150,
    delay: 2.9,
    duration: 1.5,
  })
}

export const verticalScrollTrigger = (trigger: HTMLElement) => {
  ScrollTrigger.create({
    trigger: trigger,
    start: 'top top',
    end: () => '+=' + (trigger.scrollWidth - window.innerWidth),
    pin: true,
    scrub: 1,
    invalidateOnRefresh: true,
    markers: false,
  })
}
