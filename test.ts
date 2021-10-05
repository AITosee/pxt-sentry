Sentry.Begin(SentryId.Sentry00, sentry_mode_e.kI2CMode)
Sentry.VisionSetStatus(SentryId.Sentry00, SentryStatus.Enable, sentry_vision_detected.kVisionQrCode)
Sentry.LedSetColor(SentryId.Sentry00, sentry_led_color_e.kLedBlue, sentry_led_color_e.kLedGreen, 1)
basic.forever(function () {
    for (let index = 0; index <= Sentry.Detected(SentryId.Sentry00, sentry_vision_detected.kVisionQrCode) - 1; index++) {
        serial.writeValue("x", Sentry.QrRcgValue(SentryId.Sentry00, QrParams.Horizontal))
        serial.writeValue("y", Sentry.QrRcgValue(SentryId.Sentry00, QrParams.Vertical))
        serial.writeValue("w", Sentry.QrRcgValue(SentryId.Sentry00, QrParams.Width))
        serial.writeValue("h", Sentry.QrRcgValue(SentryId.Sentry00, QrParams.Height))
        serial.writeLine(Sentry.GetQrCodeValue(SentryId.Sentry00))
    }
    basic.pause(2000)

    let num:number[] = [];
    for (let i = 0; i < 10; i++) {
        num.push(i)
    }
    serial.writeValue("num -1", num[-1])
})
