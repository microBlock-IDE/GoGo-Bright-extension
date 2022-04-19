({
    name: "GoGo Bright", // Category Name
    description: "Go more with GoGo Bright",
    author: "microBlock",
    category: "Signal Input/Output",
    version: "1.0.0",
    icon: "/static/icon.png", // Category icon
    color: "#db3f8d", // Category color (recommend some blocks color)
    blocks: [ // Blocks in Category
        "gogo_bright_input_sensor",
        "gogo_bright_input_sensor_color_is",
        "gogo_bright_action_motor",
        "gogo_bright_motor_action_turn",
        {
            xml: `
                <block type="gogo_bright_motor_action_power">
                    <value name="power">
                        <shadow type="math_number">
                            <field name="NUM">100</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "gogo_bright_motor_action_cw",
        "gogo_bright_motor_action_rd",
        "gogo_bright_action_servo",
        {
            xml: `
                <block type="gogo_bright_servo_seth">
                    <value name="heading">
                        <shadow type="math_number">
                            <field name="NUM">90</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="gogo_bright_servo_turn_cw">
                    <value name="heading">
                        <shadow type="math_number">
                            <field name="NUM">90</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        {
            xml: `
                <block type="gogo_bright_servo_turn_ccw">
                    <value name="heading">
                        <shadow type="math_number">
                            <field name="NUM">90</field>
                        </shadow>
                    </value>
                </block>
            `
        },
        "gogo_bright_action_relay",
    ]
});
