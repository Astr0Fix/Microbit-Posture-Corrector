// Start Posture Program
input.onButtonPressed(Button.A, function () {
    start = 1
})
input.onGesture(Gesture.Shake, function () {
    if (start == 1) {
        shake = 1
        music.playTone(698, music.beat(BeatFraction.Whole))
        basic.showIcon(IconNames.No)
        basic.pause(300)
        basic.showIcon(IconNames.No)
        shake = 0
        basic.clearScreen()
    }
})
let shake = 0
let start = 0
start = 0
shake = 0
basic.showLeds(`
    . . . . .
    . . . . .
    . . # . .
    . . . . .
    . . . . .
    `)
basic.showIcon(IconNames.SmallDiamond)
basic.showIcon(IconNames.Diamond)
basic.clearScreen()
// First Step: Attach Micro:Bit to chest and make sure that the Micro USB Port is facing upwards
basic.showNumber(1)
basic.pause(2000)
// Step 2: Press the "A" Button to start the program
basic.showNumber(2)
basic.pause(2000)
basic.clearScreen()
basic.forever(function () {
    if (start == 1) {
        if (shake == 0) {
            basic.showIcon(IconNames.Yes)
            basic.pause(100)
            basic.clearScreen()
        }
    }
})
