// ********************* Sensor ********************* //
Blockly.Msg.GOGO_COLOR_SENSOR = "#db3f8d"

Blockly.Msg.GOGO_SENSOR_SENSOR = "Sensor"

Blockly.Msg.GOGO_SENSOR_IS = "is"
Blockly.Msg.GOGO_SENSOR_COLOR_GREEN = "Green"
Blockly.Msg.GOGO_SENSOR_COLOR_YELLOW = "Yellow"
Blockly.Msg.GOGO_SENSOR_COLOR_RED = "Red"

// ********************* Motor ********************* //
Blockly.Msg.GOGO_COLOR_MOTOR = "#f3a73c"

Blockly.Msg.GOGO_MOTOR_TALK_TO = "talk to motor"
Blockly.Msg.GOGO_MOTOR_TALK_TO_TOOLTIP = "Selects specific motor(s) to control."
Blockly.Msg.GOGO_MOTOR_TURN = "turn"
Blockly.Msg.GOGO_MOTOR_ON = "on"
Blockly.Msg.GOGO_MOTOR_OFF = "off"
Blockly.Msg.GOGO_MOTOR_ONOFF_TOOLTIP = "Turns on/off selected motor(s)."
Blockly.Msg.GOGO_MOTOR_TURN_ON_FOR = "turn on for"
Blockly.Msg.GOGO_MOTOR_TURN_ON_FOR_TOOLTIP = "Turns on selected motor(s) for specified period of time."

Blockly.Msg.GOGO_MOTOR_TURN_CW = "turn Clockwise"
Blockly.Msg.GOGO_MOTOR_TURN_CCW = "turn Counter-Clockwise"
Blockly.Msg.GOGO_MOTOR_RD = "reverse direction"
Blockly.Msg.GOGO_MOTOR_RD_TOOLTIP = "Reverses direction of selected motor(s)."
Blockly.Msg.GOGO_MOTOR_SET_POWER = "set power"
Blockly.Msg.GOGO_MOTOR_SET_POWER_TOOLTIP = "Sets power level of selected motor(s). Values from 0-100."

Blockly.Msg.GOGO_MOTOR = "motor"
Blockly.Msg.GOGO_MOTOR_IS_ON = "is(are) on?"
Blockly.Msg.GOGO_MOTOR_IS_ON_TOOLTIP = "Returns True if the selected motors are on"

Blockly.Msg.GOGO_MOTOR_IS_CW = "direction is(are) CW?"
Blockly.Msg.GOGO_MOTOR_IS_CW_TOOLTIP = "Returns True if the selected motors direction are clock-wise"

// ********************* Servo ********************* //
Blockly.Msg.GOGO_COLOR_SERVO = "#c38328"

Blockly.Msg.GOGO_SERVO = "servo"
Blockly.Msg.GOGO_SERVO_TALK_TO = "talk to servo"
Blockly.Msg.GOGO_SERVO_SET_HEADING = "set servo heading"
Blockly.Msg.GOGO_MOTOR_SET_HEADING_TOOLTIP = "Sets servo angle of selected servo(s). Values from 0-180."
Blockly.Msg.GOGO_SERVO_CW_TURN = "turn servo CW"
Blockly.Msg.GOGO_SERVO_CCW_TURN = "turn servo CCW"

// ********************* Relay ********************* //
Blockly.Msg.GOGO_COLOR_RELAY = "#c38328"
Blockly.Msg.GOGO_RELAY_TURN = "turn relay"
Blockly.Msg.GOGO_RELAY_TALK_TO = "at output port #"
Blockly.Msg.GOGO_RELAY_END = "(Active Low)"

Blockly.Msg.GOGO_RELAY_TOOLTIP = "Turn on/off selected output (servo) port"


// ********************* Sensor ********************* //

Blockly.Blocks["gogo_bright_input_sensor"] = {
	init: function () {

		var sensor_ports = [];
		for (var i = 1; i <= 4; i++) {
			sensor_ports.push([String(i), String(i)]);
		}
		this.appendDummyInput()
			.appendField(Blockly.Msg.GOGO_SENSOR_SENSOR)
			.appendField(new Blockly.FieldDropdown(sensor_ports), 'SENSOR');

		this.setOutput(true, 'Number');
		this.setInputsInline(true);
		this.setPreviousStatement(false);
		this.setNextStatement(false);
		this.setColour(Blockly.Msg.GOGO_COLOR_SENSOR)
		this.setHelpUrl('https://code.gogoboard.org/')
	}
};

Blockly.Blocks['gogo_bright_input_sensor_color_is'] = {
	init: function () {
		var sensor_ports = [];
		for (var i = 1; i <= 4; i++) {
			sensor_ports.push([String(i), String(i)]);
		}
		this.appendDummyInput()
			.appendField(Blockly.Msg.GOGO_SENSOR_SENSOR)
			.appendField(new Blockly.FieldDropdown(sensor_ports), 'SENSOR')
			.appendField(Blockly.Msg.GOGO_SENSOR_IS)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.GOGO_SENSOR_COLOR_GREEN, 'green'], [Blockly.Msg.GOGO_SENSOR_COLOR_YELLOW, 'yellow'], [Blockly.Msg.GOGO_SENSOR_COLOR_RED, 'red']]), 'COLOR')
		this.setOutput(true, 'Boolean')
		this.setColour(Blockly.Msg.GOGO_COLOR_SENSOR)
		this.setHelpUrl('https://code.gogoboard.org/')
	}
}

// ********************* Motor ********************* //

Blockly.Blocks['gogo_bright_action_motor'] = {
	init: function () {
		this.setColour(Blockly.Msg.GOGO_COLOR_MOTOR)
		this.appendDummyInput()
			.appendField(Blockly.Msg.GOGO_MOTOR_TALK_TO)
			.appendField(new Blockly.FieldCheckbox('FALSE'), 'a').appendField('A ')
			.appendField(new Blockly.FieldCheckbox('FALSE'), 'b').appendField('B ')
		// .appendField(new Blockly.FieldCheckbox('FALSE'), 'c').appendField('C ')
		// .appendField(new Blockly.FieldCheckbox('FALSE'), 'd').appendField('D')

		this.setPreviousStatement(true, null)
		this.setNextStatement(true, null)
		this.setTooltip(Blockly.Msg.GOGO_MOTOR_TALK_TO_TOOLTIP)
	}
}

Blockly.Blocks['gogo_bright_motor_action_turn'] = {
	init: function () {
		this.setColour(Blockly.Msg.GOGO_COLOR_MOTOR)
		this.appendDummyInput()
			.appendField(Blockly.Msg.GOGO_MOTOR_TURN)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.GOGO_MOTOR_ON, 'on'], [Blockly.Msg.GOGO_MOTOR_OFF, 'off']]), 'turn')
		this.setPreviousStatement(true, null)
		this.setNextStatement(true, null)
		this.setTooltip(Blockly.Msg.GOGO_MOTOR_ONOFF_TOOLTIP)
	}
};

Blockly.Blocks['gogo_bright_motor_action_power'] = {
	init: function () {
		this.setColour(Blockly.Msg.GOGO_COLOR_MOTOR)
		this.appendValueInput('power', Number)
			.appendField(Blockly.Msg.GOGO_MOTOR_SET_POWER)
		this.setInputsInline(true)
		this.setPreviousStatement(true, null)
		this.setNextStatement(true, null)
		this.setTooltip(Blockly.Msg.GOGO_MOTOR_SET_POWER_TOOLTIP)
	}
};

Blockly.Blocks['gogo_bright_motor_action_cw'] = {
	init: function () {
		this.setColour(Blockly.Msg.GOGO_COLOR_MOTOR)
		this.appendDummyInput()
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.GOGO_MOTOR_TURN_CW, 'cw'], [Blockly.Msg.GOGO_MOTOR_TURN_CCW, 'ccw']]), 'clockwise')
		this.setPreviousStatement(true, null)
		this.setNextStatement(true, null)
		this.setTooltip('')
	}
}

Blockly.Blocks['gogo_bright_motor_action_rd'] = {
	init: function () {
		this.setColour(Blockly.Msg.GOGO_COLOR_MOTOR)
		this.appendDummyInput()
			.appendField(Blockly.Msg.GOGO_MOTOR_RD)
		this.setPreviousStatement(true, null)
		this.setNextStatement(true, null)
		this.setTooltip(Blockly.Msg.GOGO_MOTOR_RD_TOOLTIP)
	}
}

// ********************* Servo ********************* //

Blockly.Blocks['gogo_bright_action_servo'] = {
	init: function () {
		this.setColour(Blockly.Msg.GOGO_COLOR_SERVO)
		this.appendDummyInput()
			.appendField(Blockly.Msg.GOGO_SERVO_TALK_TO)
			.appendField(new Blockly.FieldCheckbox('FALSE'), 'a').appendField('1 ')
			.appendField(new Blockly.FieldCheckbox('FALSE'), 'b').appendField('2 ')
			.appendField(new Blockly.FieldCheckbox('FALSE'), 'c').appendField('3 ')
			.appendField(new Blockly.FieldCheckbox('FALSE'), 'd').appendField('4 ')

		this.setPreviousStatement(true, null)
		this.setNextStatement(true, null)
		this.setTooltip(Blockly.Msg.GOGO_MOTOR_TALK_TO_TOOLTIP)
	}
}

Blockly.Blocks['gogo_bright_servo_seth'] = {
	init: function () {
		this.setColour(Blockly.Msg.GOGO_COLOR_SERVO)
		this.appendValueInput('heading', Number)
			.appendField(Blockly.Msg.GOGO_SERVO_SET_HEADING)
		this.setInputsInline(true)
		this.setPreviousStatement(true)
		this.setNextStatement(true)
		this.setTooltip(Blockly.Msg.GOGO_MOTOR_SET_HEADING_TOOLTIP)
	}
}

Blockly.Blocks['gogo_bright_servo_turn_cw'] = {
	init: function () {
		this.setColour(Blockly.Msg.GOGO_COLOR_SERVO)
		this.appendValueInput('heading', Number)
			.appendField(Blockly.Msg.GOGO_SERVO_CW_TURN)
		this.setInputsInline(true)
		this.setPreviousStatement(true)
		this.setNextStatement(true)
		this.setTooltip('')
	}
}

Blockly.Blocks['gogo_bright_servo_turn_ccw'] = {
	init: function () {
		this.setColour(Blockly.Msg.GOGO_COLOR_SERVO)
		this.appendValueInput('heading', Number)
			.appendField(Blockly.Msg.GOGO_SERVO_CCW_TURN)
		this.setInputsInline(true)
		this.setPreviousStatement(true)
		this.setNextStatement(true)
		this.setTooltip('')
	}
}

// ********************* Other : Relay ********************* //

Blockly.Blocks['gogo_bright_action_relay'] = {
	init: function () {

		var servo_ports = [];
		for (var i = 1; i <= 4; i++) {
			servo_ports.push([String(i), String(i)]);
		}

		this.setColour(Blockly.Msg.GOGO_COLOR_RELAY)
		this.appendDummyInput()
			.appendField(Blockly.Msg.GOGO_RELAY_TURN)
			.appendField(new Blockly.FieldDropdown([[Blockly.Msg.GOGO_MOTOR_ON, 'on'], [Blockly.Msg.GOGO_MOTOR_OFF, 'off']]), 'turn')
			.appendField(Blockly.Msg.GOGO_RELAY_TALK_TO)
			.appendField(new Blockly.FieldDropdown(servo_ports), 'PORT')
			.appendField(Blockly.Msg.GOGO_RELAY_END);
			
		this.setPreviousStatement(true, null)
		this.setNextStatement(true, null)
		this.setTooltip(Blockly.Msg.GOGO_RELAY_TOOLTIP)
	}
}
