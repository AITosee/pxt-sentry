Sentry.Begin(SentryId.Sentry00, sentry_mode_e.kI2CMode)
Sentry.VisionSetStatus(SentryId.Sentry00, SentryStatus.Enable, sentry_vision_e.kVisionQrCode)
Sentry.VisionSetStatus(SentryId.Sentry00, SentryStatus.Enable, sentry_vision_e.kVisionColor)
basic.forever(function () {
    basic.pause(5000)
    Sentry.VisionSetStatus(SentryId.Sentry00, SentryStatus.Disable, sentry_vision_e.kVisionColor)
    serial.writeNumber(Sentry.Cols(SentryId.Sentry00))
    serial.writeString(" ")
    serial.writeNumber(Sentry.Rows(SentryId.Sentry00))
    serial.writeLine("")
    basic.pause(5000)
    Sentry.VisionSetStatus(SentryId.Sentry00, SentryStatus.Enable, sentry_vision_e.kVisionColor)
})
