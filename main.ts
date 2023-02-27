basic.forever(function () {
    game.addLife(1)
})
basic.forever(function () {
    basic.showString("Hello SLG4")
    basic.showLeds(`
        . # . # .
        # . # . #
        # . . . #
        . # . # .
        . . # . .
        `)
})
