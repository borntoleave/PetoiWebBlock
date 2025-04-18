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
          ['原地踏步', 'kvtf'],
          ['左转', 'kvtl'],
          ['右转', 'kvtr'],
          ['前进', 'kwkf'],
          ['左前进', 'kwkl'],
          ['右前进', 'kwkr'],
          ['后退', 'kbkf'],
          ['左后退', 'kbkl'],
          ['右后退', 'kbkr'],
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
          ['后空翻', 'kbkf'],
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
        name: "MOTOR",
        value: 0,
        min: 0,
        max: 11,
        precision: 1
      },
      {
        type: "field_number",
        name: "ANGLE",
        value: 90,
        min: 0,
        max: 180
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "设置指定马达的角度（0-11号，0-180度）",
    helpUrl: ""
  }
]);

// 代码生成:设置马达角度代码生成器
javascript.javascriptGenerator.forBlock['set_motor_angle'] = function (block)
{
  const motorId = block.getFieldValue('MOTOR');
  const angle = block.getFieldValue('ANGLE');
  return `httpRequest(deviceIP, "m ${motorId} " + Math.min(125, Math.max(-125, ${angle})));\n`;
};


// 定义获取关节角度积木块
Blockly.defineBlocksWithJsonArray([
  {
    type: 'get_joint_angle',
    message0: "获取关节 %1 的角度",
    args0: [
      {
        type: "field_dropdown",
        name: "JOINT",
        options: [
          ["0", "0"],
          ["1", "1"],
          ["2", "2"],
          ["3", "3"],
          ["4", "4"],
          ["5", "5"],
          ["6", "6"],
          ["7", "7"],
          ["8", "8"],
          ["9", "9"],
          ["10", "10"],
          ["11", "11"]
        ]
      }
    ],
    output: "Number",
    colour: 230,
    tooltip: "获取指定关节的当前角度值",
    helpUrl: ""
  }
]);

// 代码生成:获取关节角度的代码生成器
javascript.javascriptGenerator.forBlock['get_joint_angle'] = function (block)
{
  const jointId = block.getFieldValue('JOINT');
  return [`parseInt(httpRequest(deviceIP, "m ${jointId} ?", true)) || 0`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};


// 定义获取所有关节角度积木块
Blockly.defineBlocksWithJsonArray([
  {
    type: 'get_all_joint_angles',
    message0: "获取所有关节角度",
    output: "String",  // 改为返回字符串类型（JSON字符串）
    colour: 230,
    tooltip: "获取所有关节(1-16号)的当前角度值，返回JSON格式",
    helpUrl: ""
  }
]);

// 代码生成:获取所有关节角度的代码生成器
javascript.javascriptGenerator.forBlock['get_all_joint_angles'] = function (block)
{
  const code = `
    (function() {
      let angles = {};
      for(let i = 1; i <= 16; i++) {
        angles["joint" + i] = parseInt(httpRequest(deviceIP, "m " + i + " ?", true)) || 0;
      }
      return JSON.stringify(angles);
    })()
  `;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 定义关节旋转报告积木
Blockly.defineBlocksWithJsonArray([
  {
    type: 'joint_rotation_report',
    message0: "%1 到 %2 度",
    args0: [
      {
        type: "field_dropdown",
        name: "JOINT",
        options: [
          ["头偏转角", "0"],
          ["左前臂", "8"],
          ["右前臂", "9"],
          ["右后臂", "10"],
          ["左后臂", "11"],
          ["左前膝", "12"],
          ["右前膝", "13"],
          ["右后膝", "14"],
          ["左后膝", "15"]
        ]
      },
      {
        type: "field_number",
        name: "ANGLE",
        value: 30,
        min: -125,
        max: 125
      }
    ],
    output: "Number",  // 修改为Number类型以匹配数学积木的输入
    colour: '#4361EE',
    tooltip: "指定关节旋转到指定角度",
    helpUrl: ""
  }
]);

// 代码生成:关节旋转报告积木
javascript.javascriptGenerator.forBlock['joint_rotation_report'] = function (block) {
  const jointId = block.getFieldValue('JOINT');
  const angle = block.getFieldValue('ANGLE');
  // 返回命令部分，确保关节ID和角度之间有空格
  return [`' ${jointId} ${angle}'`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 定义堆叠积木
Blockly.defineBlocksWithJsonArray([
  {
    type: 'stacked_rotation',
    message0: "依次旋转 %1 后延时 %2 秒",
    args0: [
      {
        type: "input_value",
        name: "ROTATION",
        check: ["Number", "String"]  // 允许Number和String类型的输入
      },
      {
        type: "field_number",
        name: "DELAY",
        value: 1,
        min: 0,
        max: 10,
        precision: 0.1
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: '#4361EE',
    tooltip: "执行关节旋转并延时",
    helpUrl: ""
  }
]);

// 代码生成:堆叠积木
javascript.javascriptGenerator.forBlock['stacked_rotation'] = function (block) {
  const rotation = javascript.javascriptGenerator.valueToCode(block, 'ROTATION', Blockly.JavaScript.ORDER_FUNCTION_CALL) || "''";
  const delay = block.getFieldValue('DELAY');
  const delayMs = Math.round(delay * 1000); // 将秒转换为毫秒
  
  // 处理相加运算的情况
  if (rotation.includes('+')) {
    return `(async function() {
      const commands = ${rotation}.split('+');
      // 使用'm '作为前缀，后面直接拼接所有命令部分
      const fullCommand = 'm ' + commands.map(cmd => cmd.trim()).join('');
      console.log(httpRequest(deviceIP, fullCommand, true));
      await new Promise(resolve => setTimeout(resolve, ${delayMs}));
    })();\n`;
  } else {
    // 单个命令也使用'm '作为前缀
    return `console.log(httpRequest(deviceIP, 'm ' + ${rotation}.trim(), true));\nawait new Promise(resolve => setTimeout(resolve, ${delayMs}));\n`;
  }
};

// 修改数学相加积木的代码生成器
javascript.javascriptGenerator.forBlock['math_arithmetic'] = function (block) {
  const operator = block.getFieldValue('OP');
  const order = (operator === 'ADD' || operator === 'MINUS') ?
      Blockly.JavaScript.ORDER_ADDITION :
      Blockly.JavaScript.ORDER_MULTIPLICATION;
  const argument0 = javascript.javascriptGenerator.valueToCode(block, 'A', order) || '0';
  const argument1 = javascript.javascriptGenerator.valueToCode(block, 'B', order) || '0';
  
  // 如果是相加运算，并且两个参数都是命令部分，则进行特殊处理
  if (operator === 'ADD' && 
      !argument0.includes('m ') && 
      !argument1.includes('m ')) {
    return [`${argument0} + ${argument1}`, order];
  }
  
  // 其他情况使用默认的数学运算
  const code = {
    'ADD': ['(' + argument0 + ' + ' + argument1 + ')', order],
    'MINUS': ['(' + argument0 + ' - ' + argument1 + ')', order],
    'MULTIPLY': ['(' + argument0 + ' * ' + argument1 + ')', order],
    'DIVIDE': ['(' + argument0 + ' / ' + argument1 + ')', order],
    'POWER': ['Math.pow(' + argument0 + ', ' + argument1 + ')', order]
  };
  return code[operator];
};
