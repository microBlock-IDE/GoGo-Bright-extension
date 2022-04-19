from machine import Pin, I2C
from os import uname

machine = uname().machine
if ("KidBright32" in machine) or ("KidMotor V4" in machine):
    i2c1 = I2C(1, scl=Pin(5), sda=Pin(4), freq=100000)
elif "Mbits" in machine:
    i2c1 = I2C(0, scl=Pin(21), sda=Pin(22), freq=100000)
else:
    i2c1 = I2C(0, scl=Pin(22), sda=Pin(21), freq=100000)

GOGO_ADDR = 0x42

def readInput(port):


def talkToOutput(output_port):

def setOutputPower(power):

def turnOutputOn():
def turnOutputOff():

def turnOutputCW():
def turnOutputCCW():
def reverseOutputDirection():

def talkToServo(servo_port):

def setServoAngle(head_angle):

def setServoDuty(port, percentage):

def turnServoCW(cw_angle):

def turnServoCCW(ccw_angle):
