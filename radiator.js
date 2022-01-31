const efficiency = 0.02

export let currentLevel = 0

export function setHeatingLevel(level) {
    currentLevel = Math.round(Math.max(0, Math.min(level, 5)))
}

export function getGains(elapsed) {
    return efficiency * currentLevel * elapsed
}