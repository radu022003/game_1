input.onGesture(Gesture.LogoUp, function () {
    sprite.change(LedSpriteProperty.Y, 1)
})
input.onGesture(Gesture.TiltLeft, function () {
    sprite.change(LedSpriteProperty.X, -1)
})
input.onGesture(Gesture.TiltRight, function () {
    sprite.change(LedSpriteProperty.X, 1)
})
input.onGesture(Gesture.LogoDown, function () {
    sprite.change(LedSpriteProperty.Y, -1)
})
let sprite: game.LedSprite = null
led.setDisplayMode(DisplayMode.Greyscale)
game.setLife(5)
let spriteMoved = 0
sprite = game.createSprite(2, 2)
soundExpression.giggle.play()
for (let index = 0; index < 3; index++) {
    led.plot(0, 1)
    basic.pause(500)
    led.unplot(0, 1)
    basic.pause(500)
}
basic.forever(function () {
    if (sprite.isTouchingEdge()) {
        if (sprite.get(LedSpriteProperty.X) == 0 && sprite.get(LedSpriteProperty.Y) == 1) {
            game.gameOver()
        }
        game.removeLife(1)
        soundExpression.sad.playUntilDone()
        basic.pause(200)
    }
    if (sprite.get(LedSpriteProperty.X) == 3 && sprite.get(LedSpriteProperty.Y) == 1 && spriteMoved == 0) {
        game.addScore(1)
        basic.pause(200)
        spriteMoved = 1
    }
    if (sprite.get(LedSpriteProperty.X) != 3 || sprite.get(LedSpriteProperty.Y) != 1) {
        spriteMoved = 0
    }
})
