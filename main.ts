let myCounter = sevenseg.createCounter(SegmentStyle.Thin, SegmentScale.Half, 2)
let myCounter2 = sevenseg.createCounter(SegmentStyle.Thin, SegmentScale.Half, 3)
myCounter.count = 60
myCounter2.x = 50
forever(function () {
    if (controller.up.isPressed()) {
        myCounter2.count += 1
        pause(5)
    }
    if (controller.down.isPressed()) {
        myCounter2.count += -1
        pause(5)
    }
    if (controller.right.isPressed()) {
        myCounter2.setDigitColor(7)
        myCounter.setDigitColor(9)
    }
    if (controller.left.isPressed()) {
        myCounter.setDigitColor(10)
        myCounter2.setDigitColor(4)
    }
    if (controller.A.isPressed()) {
        myCounter.setDigitColor(8)
        myCounter2.setDigitColor(9)
    }
    if (controller.B.isPressed()) {
        myCounter2.setDigitColor(11)
        myCounter.setDigitColor(5)
    }
})
forever(function () {
    for (let index = 0; index < 60; index++) {
        pause(999)
        myCounter.count += -1
    }
    myCounter.count = 60
    myCounter2.count += -1
})
