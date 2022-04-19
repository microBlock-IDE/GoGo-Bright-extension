from machine import Pin, I2C
from os import uname

machine = uname().machine
if ("KidBright32" in machine) or ("KidMotor V4" in machine):
    i2c1 = I2C(1, scl=Pin(5), sda=Pin(4), freq=100000)
elif "Mbits" in machine:
    i2c1 = I2C(0, scl=Pin(21), sda=Pin(22), freq=100000)
else:
    i2c1 = I2C(0, scl=Pin(22), sda=Pin(21), freq=100000)

ADDR = 0x42

# Register map
REG_GOGOBRIGHT_ID = 0
REG_INPUT_PORT_START = 1
REG_SERVO_ACTIVE = 9
REG_SERVO_ANGLE = 10
REG_MOTOR_ACTIVE = 14
REG_MOTOR_STATUS = 15
REG_MOTOR_DIR = 16
REG_MOTOR_PWR = 17

# Commands I2C
CATEGORY_CMD = 0
# servo
CMD_SERVO_SETH = 9
CMD_SERVO_ACTIVE = 14
CMD_SERVO_CCW = 15
CMD_SERVO_CW = 16
CMD_SERVO_SET_ANGLE = 17
CMD_SERVO_SET_DUTY = 19

# motor
CMD_MOTOR_ACTIVE = 7
CMD_MOTOR_ONOFF = 2
# CMD_MOTOR_OFF = 51
CMD_MOTOR_DIR = 3
# CMD_MOTOR_CW = 53
CMD_MOTOR_RD = 4
CMD_MOTOR_PWR = 6

def _limit(v, v_max, v_min=0):
    return max(min(v, v_max), v_min)

def _writeCmd(cmd, param):
    i2c1.writeto(ADDR, bytearray([ CATEGORY_CMD, cmd ] + param))

def _bitSet(v, b):
    return v | (1 << b)

def readInput(port):
    port = _limit(port - 1, 3)
    x = i2c1.readfrom_mem(ADDR, 1 + (port * 2), 1)[0]
    y = i2c1.readfrom_mem(ADDR, 1 + (port * 2) + 1, 1)[0]
    return (x << 8 | y)

def talkToOutput(output_port):
    motorBits = 0
    if 'a' in output_port:
        motorBits = _bitSet(motorBits, 0)
    if 'b' in output_port:
        motorBits = _bitSet(motorBits, 1)
    if 'c' in output_port:
        motorBits = _bitSet(motorBits, 2)
    if 'd' in output_port:
        motorBits = _bitSet(motorBits, 3)
    _writeCmd(CMD_MOTOR_ACTIVE, [ motorBits ])

def setOutputPower(power):
    power = _limit(power, 100)
    _writeCmd(CMD_MOTOR_PWR, [ 0, 0, power ])

def turnOutputOn():
    _writeCmd(CMD_MOTOR_ONOFF, [ 0, 1 ])

def turnOutputOff():
    _writeCmd(CMD_MOTOR_ONOFF, [ 0, 0 ])

def turnOutputCW():
    _writeCmd(CMD_MOTOR_DIR, [ 0, 1 ])

def turnOutputCCW():
    _writeCmd(CMD_MOTOR_DIR, [ 0, 0 ])

def reverseOutputDirection():
    _writeCmd(CMD_MOTOR_RD, [ 0 ])

def talkToServo(servo_port):
    servoBits = 0
    if '1' in servo_port:
        servoBits = _bitSet(servoBits, 0)
    if '2' in servo_port:
        servoBits = _bitSet(servoBits, 1)
    if '3' in servo_port:
        servoBits = _bitSet(servoBits, 2)
    if '4' in servo_port:
        servoBits = _bitSet(servoBits, 3)
    _writeCmd(CMD_SERVO_ACTIVE, [ servoBits ])

def setServoAngle(head_angle):
    head_angle = _limit(head_angle, 180)
    _writeCmd(CMD_SERVO_SET_ANGLE, [ 0, 0, head_angle ])

def setServoDuty(port, percentage):
    port = _limit(port - 1, 3)
    percentage = _limit(percentage, 100)
    _writeCmd(CMD_SERVO_SET_DUTY, [ 1 << port, 0, percentage ])

def turnServoCW(cw_angle):
    cw_angle = _limit(cw_angle, 180)
    _writeCmd(CMD_SERVO_CW, [ 0, 0, cw_angle ])

def turnServoCCW(ccw_angle):
    ccw_angle = _limit(ccw_angle, 180)
    _writeCmd(CMD_SERVO_CCW, [ 0, 0, ccw_angle ])
