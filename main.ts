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
sprite = game.createSprite(2, 2)
soundExpression.giggle.playUntilDone()
basic.forever(function () {
    if (sprite.isTouchingEdge()) {
        sprite.ifOnEdgeBounce()
    }
})
