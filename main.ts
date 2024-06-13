radio.onReceivedValue(function (name, value) {
    if (name == "x") {
        wuKong.setMotorSpeed(wuKong.MotorList.M1, value)
    } else if (name == "y") {
        wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S1, value)
    }
})
basic.showIcon(IconNames.Diamond)
radio.setGroup(1)
wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 180)
