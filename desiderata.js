const desiredTemperatures = [
    // Client would like it coldish from midnight for better sleep
    [0, 20.0],
    // From 9:00 in the morning make it nice an comfortable
    [900, 23.0],
    // Client likes it nice and toasty in the late evening
    [2000, 25.0],
]

export function getDesiredTemperature(time) {
    const index = desiredTemperatures.findIndex(pair => time < pair[0])
    return desiredTemperatures[Math.max(index - 1, 0)][1]
}
