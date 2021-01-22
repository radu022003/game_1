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
game.setLife(5)
sprite = game.createSprite(2, 2)
soundExpression.giggle.playUntilDone()
basic.forever(function () {
    if (sprite.isTouchingEdge()) {
        game.removeLife(1)
        soundExpression.sad.playUntilDone()
        basic.pause(200)
    }
    if (sprite.get(LedSpriteProperty.X) == 3 && sprite.get(LedSpriteProperty.Y) == 1) {
        game.addScore(1)
        basic.pause(200)
    }
})
