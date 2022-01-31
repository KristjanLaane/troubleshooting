import {interval, map, share, Subject} from "rxjs"

const times = [1300, 1330, 1400, 1430, 1500, 1530, 1600, 1630, 1700, 1730, 1800, 1830, 1900, 1930, 2000, 2030, 2100, 2130, 2200, 2230, 2300, 2330, 0, 30, 100, 130, 200, 230, 300, 330, 400, 430, 500, 530, 600, 630, 700, 730, 800, 830, 900, 930, 1000, 1030, 1100, 1130, 1200, 1230]

let currentIndex = 0

export let currentTime = times[currentIndex]
let lastTime = currentTime

export const circadianRhythm = new Subject()

export const elapsedTime = circadianRhythm.pipe(map(time => {
    let elapsed = time - lastTime
    if (elapsed < 0) elapsed += 2400
    if (elapsed === 70) elapsed = 30
    lastTime = time
    return [elapsed, time]
}), share())

export function startTime() {
    interval(1000).subscribe(i => {
        currentIndex++
        if (currentIndex >= times.length) currentIndex = 0
        currentTime = times[currentIndex]
        circadianRhythm.next(currentTime)
    })
}