// ********************* Sensor ********************* //

Blockly.Python['gogo_bright_input_sensor'] = function(block) {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';

	return [
		'GoGo.readInput(' + block.getFieldValue('SENSOR') + ')',
		Blockly.Python.ORDER_ATOMIC
	];
};

Blockly.Python['gogo_bright_input_sensor_color_is'] = function (block) {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';

    // var dropdownSensor = this.getFieldValue('SENSOR')
	var dropdownColor = this.getFieldValue('COLOR');
	var sensorValue = 'GoGo.readInput(' + block.getFieldValue('SENSOR') + ')';
	var code = '';
	switch (dropdownColor) {
      case 'green':
        code = '(' + sensorValue + ' < 300)'
        break
      case 'yellow':
        code = '((' + sensorValue + ' >= 300) and (' + sensorValue + ' <= 700))'
        break
      case 'red':
        code = '(' + sensorValue + ' > 700)'
        break
      default:
        break
    }
    return [code, Blockly.Python.ORDER_ATOMIC];
  }


// ********************* Motor ********************* //

Blockly.Python['gogo_bright_action_motor'] = function () {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';

	var checkboxA = this.getFieldValue('a');
	var checkboxB = this.getFieldValue('b');
	var checkboxC = this.getFieldValue('c');
	var checkboxD = this.getFieldValue('d');

	var code = 'GoGo.talkToOutput("' + (checkboxA === 'TRUE' ? 'a' : '') +
		(checkboxB === 'TRUE' ? 'b' : '') +
		(checkboxC === 'TRUE' ? 'c' : '') +
		(checkboxD === 'TRUE' ? 'd' : '') +
		'");\n'
	if (code === 'GoGo.talkToOutput("");\n') { code = '\n' }
	return code;
}

Blockly.Python['gogo_bright_motor_action_turn'] = function () {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';

	var dropdownTurn = this.getFieldValue('turn');
	var code = 'GoGo.' + (dropdownTurn == 'on' ? 'turnOutputOn' : 'turnOutputOff') + '()\n';
	return code;
}

Blockly.Python['gogo_bright_motor_action_power'] = function (block) {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';

	var valuePower = Blockly.Python.valueToCode(block, 'power', Blockly.Python.ORDER_NONE);
	var code = `GoGo.setOutputPower(${valuePower})\n`;
	return code;
}

Blockly.Python['gogo_bright_motor_action_cw'] = function () {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';

	var dropdownThisway = this.getFieldValue('clockwise');
	var code = 'GoGo.' + (dropdownThisway == 'cw' ? 'turnOutputCW' : 'turnOutputCCW') + '()\n';
	return code;
}

Blockly.Python['gogo_bright_motor_action_rd'] = function () {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';

	var code = 'GoGo.reverseOutputDirection()\n';
	return code;
}

// ********************* Servo ********************* //

Blockly.Python['gogo_bright_action_servo'] = function () {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';

	var checkboxA = this.getFieldValue('a');
	var checkboxB = this.getFieldValue('b');
	var checkboxC = this.getFieldValue('c');
	var checkboxD = this.getFieldValue('d');

	var code = 'GoGo.talkToServo("' + (checkboxA === 'TRUE' ? '1' : '') +
		(checkboxB === 'TRUE' ? '2' : '') +
		(checkboxC === 'TRUE' ? '3' : '') +
		(checkboxD === 'TRUE' ? '4' : '') +
		'");\n'
	if (code === 'GoGo.talkToServo("");\n') { code = '' }
	return code;
}

Blockly.Python['gogo_bright_servo_seth'] = function (block) {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';

	var valueHeading = Blockly.Python.valueToCode(block, 'heading', Blockly.Python.ORDER_NONE);
	var code = `GoGo.setServoAngle(${valueHeading});\n`;
	return code;
}

Blockly.Python['gogo_bright_servo_turn_cw'] = function (block) {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';

	var valueHeading = Blockly.Python.valueToCode(block, 'heading', Blockly.Python.ORDER_NONE);
	var code = `GoGo.turnServoCW(${valueHeading});\n`;
	return code;
}

Blockly.Python['gogo_bright_servo_turn_ccw'] = function (block) {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';
	
	var valueHeading = Blockly.Python.valueToCode(block, 'heading', Blockly.Python.ORDER_NONE);
	var code = `GoGo.turnServoCCW(${valueHeading});\n`;
	return code;
}

// ********************* Other : Relay ********************* //

Blockly.Python['gogo_bright_action_relay'] = function(block) {
	Blockly.Python.definitions_['import_GoGO'] = 'import GoGO';
	
	var code = `GoGo.setServoDuty(${block.getFieldValue('PORT')}, ${(block.getFieldValue('turn')=='on') ? 0 : 100});\n`;
	return code;
};
