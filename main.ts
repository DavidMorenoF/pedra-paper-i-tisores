let index = 0
input.onButtonPressed(Button.A, function () {
    index = 3
    for (let index2 = 0; index2 < 3; index2++) {
        basic.showNumber(index)
        index += -1
        basic.pause(500)
    }
    basic.showLeds(`
        . . # . .
        . # # # .
        # # # # #
        . # # # .
        . . # . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    index = 3
    for (let index2 = 0; index2 < 3; index2++) {
        basic.showNumber(index)
        index += -1
        basic.pause(500)
    }
    basic.showIcon(IconNames.Scissors)
})
input.onButtonPressed(Button.B, function () {
    index = 3
    for (let index2 = 0; index2 < 3; index2++) {
        basic.showNumber(index)
        index += -1
        basic.pause(500)
    }
    basic.showLeds(`
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        . # # # .
        `)
})
