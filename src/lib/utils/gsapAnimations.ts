import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export const animateHeading = (
  h2: HTMLElement,
  speed: number,
  trigger: HTMLElement,
) => {
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
      markers: true,
    },
  })
}
