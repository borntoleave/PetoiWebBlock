// 发送方向动作
Blockly.defineBlocksWithJsonArray([
  {
    type: 'direction_action',
    message0: "方向动作 %1",
    args0: [
      {
        type: "field_dropdown",
        name: "COMMAND",
        options: [
          ['原地踏步', 'kvtF'],
          ['左转', 'kvtL'],
          ['右转', 'kvtR'],
          ['前进', 'kwkF'],
          ['左前进', 'kwkL'],
          ['右前进', 'kwkR'],
          ['后退', 'kbkF'],
          ['左后退', 'kbkL'],
          ['右后退', 'kbkR'],
        ]
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "方向动作",
    helpUrl: ""
  },
]);

// 代码生成:发送方向动作命令
javascript.javascriptGenerator.forBlock['direction_action'] = function (block)
{
  const code = block.getFieldValue('COMMAND');
  return `httpRequest(deviceIP, "${code}");\n`;
};

// 发送原地动作
Blockly.defineBlocksWithJsonArray([
  {
    type: 'local_action',
    message0: "原地动作 %1",
    args0: [
      {
        type: "field_dropdown",
        name: "COMMAND",
        options: [
          ['站立', 'kup'],
          ['坐下', 'ksit'],
          ['休息', 'd'],
          ['尿尿', 'kpee'],
        ],
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "Send HTTP request with command parameter",
    helpUrl: ""
  },
]);

// 代码生成:发送原地动作命令
javascript.javascriptGenerator.forBlock['local_action'] = function (block)
{
  const code = block.getFieldValue('COMMAND');
  return `httpRequest(deviceIP, "${code}");\n`;
};

// 发送高难度特技动作
Blockly.defineBlocksWithJsonArray([
  {
    type: 'high_difficulty_action',
    message0: "高难度特技动作(小心使用) %1",
    args0: [
      {
        type: "field_dropdown",
        name: "COMMAND",
        options: [
          ['后空翻', 'kbkF'],
          ['跳跃', 'kjmp'],
        ],
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "Send HTTP request with command parameter",
    helpUrl: ""
  },
]);

// 代码生成:发送高难度特技动作命令
javascript.javascriptGenerator.forBlock['high_difficulty_action'] = function (block)
{
  const code = block.getFieldValue('COMMAND');
  return `httpRequest(deviceIP, "${code}");\n`;
};

// 定义设置马达角度积木块
Blockly.defineBlocksWithJsonArray([
  {
    type: 'set_motor_angle',
    message0: "设置马达 %1 角度为 %2",
    args0: [
      {
        type: "field_number",
        name: "MOTOR_ID",
        value: 0,
        min: 0,
        max: 11,
        precision: 1
      },
      {
        type: "input_value",
        name: "ANGLE"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "设置指定马达的角度（0-11号，-125 ~ 125度）",
    helpUrl: ""
  }
]);

// 代码生成:设置马达角度代码生成器
javascript.javascriptGenerator.forBlock['set_motor_angle'] = function (block)
{
  const motorId = block.getFieldValue('MOTOR_ID');
  const angle = Blockly.JavaScript.valueToCode(block, 'ANGLE', Blockly.JavaScript.ORDER_ATOMIC);
  return `httpRequest(deviceIP, "m ${motorId} " + Math.min(125, Math.max(-125, ${angle})));\n`;
};


// 定义获取舵机角度积木块
Blockly.defineBlocksWithJsonArray([
  {
    type: 'get_servo_angle',
    message0: "获取舵机 %1 的角度",
    args0: [
      {
        type: "field_dropdown",
        name: "SERVO_ID",
        options: [
          ["1号", "1"], ["2号", "2"], ["3号", "3"], ["4号", "4"],
          ["5号", "5"], ["6号", "6"], ["7号", "7"], ["8号", "8"],
          ["9号", "9"], ["10号", "10"], ["11号", "11"], ["12号", "12"],
          ["13号", "13"], ["14号", "14"], ["15号", "15"], ["16号", "16"]
        ]
      }
    ],
    output: "Number",
    colour: 230,
    tooltip: "获取指定舵机的当前角度值",
    helpUrl: ""
  }
]);

// 代码生成:获取舵机角度的代码生成器
javascript.javascriptGenerator.forBlock['get_servo_angle'] = function (block)
{
  const servoId = block.getFieldValue('SERVO_ID');
  return [`parseInt(httpRequest(deviceIP, "m ${servoId} ?", true)) || 0`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


// 定义获取所有舵机角度积木块
Blockly.defineBlocksWithJsonArray([
  {
    type: 'get_all_servo_angles',
    message0: "获取所有舵机角度",
    output: "String",  // 改为返回字符串类型（JSON字符串）
    colour: 230,
    tooltip: "获取所有舵机(1-16号)的当前角度值，返回JSON格式",
    helpUrl: ""
  }
]);

// 代码生成:获取所有舵机角度的代码生成器
javascript.javascriptGenerator.forBlock['get_all_servo_angles'] = function (block)
{
  const code = `
    (function() {
      let angles = {};
      for(let i = 1; i <= 16; i++) {
        angles["servo" + i] = parseInt(httpRequest(deviceIP, "m " + i + " ?", true)) || 0;
      }
      return JSON.stringify(angles);
    })()
  `;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};
