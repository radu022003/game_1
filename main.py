def on_gesture_logo_up():
    sprite.change(LedSpriteProperty.Y, 1)
input.on_gesture(Gesture.LOGO_UP, on_gesture_logo_up)

def on_gesture_tilt_left():
    sprite.change(LedSpriteProperty.X, -1)
input.on_gesture(Gesture.TILT_LEFT, on_gesture_tilt_left)

def on_gesture_tilt_right():
    sprite.change(LedSpriteProperty.X, 1)
input.on_gesture(Gesture.TILT_RIGHT, on_gesture_tilt_right)

def on_gesture_logo_down():
    sprite.change(LedSpriteProperty.Y, -1)
input.on_gesture(Gesture.LOGO_DOWN, on_gesture_logo_down)

sprite: game.LedSprite = None
led.set_display_mode(DisplayMode.GREYSCALE)
game.set_life(5)
spriteMoved = 0
sprite = game.create_sprite(2, 2)
soundExpression.giggle.play()
for index in range(3):
    led.plot(0, 1)
    basic.pause(500)
    led.unplot(0, 1)
    basic.pause(500)

def on_forever():
    global spriteMoved
    if sprite.is_touching_edge():
        if sprite.get(LedSpriteProperty.X) == 0 and sprite.get(LedSpriteProperty.Y) == 1:
            game.game_over()
        game.remove_life(1)
        soundExpression.sad.play_until_done()
        basic.pause(200)
    if sprite.get(LedSpriteProperty.X) == 3 and sprite.get(LedSpriteProperty.Y) == 1 and spriteMoved == 0:
        game.add_score(1)
        basic.pause(200)
        spriteMoved = 1
    if sprite.get(LedSpriteProperty.X) != 3 or sprite.get(LedSpriteProperty.Y) != 1:
        spriteMoved = 0
basic.forever(on_forever)
