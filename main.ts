// Start Posture Program
input.onButtonPressed(Button.A, function () {
    start += 1
})
input.onGesture(Gesture.Shake, function () {
    if (start == 1) {
        music.playTone(698, music.beat(BeatFraction.Whole))
    } else {
        basic.showIcon(IconNames.Yes)
    }
})
let start = 0
start = 0
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
basic.pause(1000)
// Step 2: Press the "A" Button to start the program
basic.showNumber(2)
basic.forever(function () {
	
})
