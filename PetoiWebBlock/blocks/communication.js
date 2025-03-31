// 添加全局变量
let deviceIP = '';
let deviceModel = '';

// 设置IP地址的函数
function setDeviceIP(ip)
{
  deviceIP = ip;
}

// 获取IP地址的函数
function getDeviceIP()
{
  return deviceIP;
}

// 设置型号的函数
function setDeviceModel(model)
{
  deviceModel = model;
}

// 获取型号的函数
function getDeviceModel()
{
  return deviceModel;
}

// 声明连接机器人积木
Blockly.defineBlocksWithJsonArray([
  {
    type: 'make_connection',
    message0: "Connect with IP %1",
    args0: [
      {
        type: "field_input",
        name: "IP_ADDRESS",
        text: "x.x.x.x"
      }
    ],
    nextStatement: null,
    colour: 230,
    tooltip: "Init connection test to the robot with IP address",
    helpUrl: ""
  },
]);

// 连接机器人函数实现
function makeConnection(ip)
{
  const model = httpRequest(ip, '?', true);
  if (model && model.length > 0)
  {
    setDeviceIP(ip);
    setDeviceModel(model);
    console.log("Model:\n" + model);
  } else
  {
    alert('连接机器人失败！');
  }
}

// 连接机器人代码生成
javascript.javascriptGenerator.forBlock['make_connection'] = function (block)
{
  const ip = block.getFieldValue('IP_ADDRESS');

  return `makeConnection("${ip}");`;
};

// 数字输入积木
Blockly.defineBlocksWithJsonArray([
  {
    type: 'get_digital_input',
    message0: "获取数字输入 %1",
    args0: [
      {
        type: "field_dropdown",
        name: "PIN",
        options: [
          ["34", "34"],
          ["35", "35"],
          ["36", "36"],
          ["39", "39"],
          ["BackTouch(38)", "38"],
          ["Rx2(9)", "9"],
          ["Tx2(10)", "10"],
          // ["D1", "D1"],
          // ["D2", "D2"],
          // ["D3", "D3"],
          // ["D4", "D4"],
          // ["D5", "D5"],
          // ["D6", "D6"],
          // ["D7", "D7"],
          // ["D8", "D8"]
        ]
      }
    ],
    output: true,
    outputType: "Number",
    colour: 230,
    tooltip: "读取数字输入引脚的状态（0或1）",
    helpUrl: ""
  }
]);

// 代码生成:数字输入积木 untested
javascript.javascriptGenerator.forBlock['get_digital_input'] = function (block)
{
  var pin = block.getFieldValue('PIN');
  var code = `(function() { 
    const result = httpRequest(deviceIP, "Rd"+'\\${String.fromCharCode(pin)}'+"\\n", true); 
    // 尝试解析结果中的数字
    if (result) {
      const lines = result.split('\\n');
      for (const line of lines) {
        const num = parseInt(line.trim());
        if (!isNaN(num)) {
          return num;
        }
      }
    }
    return 0; // 如果无法解析，返回默认值
  })()`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 模拟输入积木
Blockly.defineBlocksWithJsonArray([
  {
    type: 'get_analog_input',
    message0: "获取模拟输入 %1",
    args0: [
      {
        type: "field_dropdown",
        name: "PIN",
        options: [
          ["34", "34"],
          ["35", "35"],
          ["36", "36"],
          ["39", "39"],
          ["BackTouch(38)", "38"],
          ["Rx2(9)", "9"],
          ["Tx2(10)", "10"],
          //          ["A1", "A1"],
          //          ["A2", "A2"],
          //          ["A3", "A3"],
          //          ["A4", "A4"],
          //          ["A5", "A5"],
          //          ["A6", "A6"],
          //          ["A7", "A7"],
          //          ["A8", "A8"]
        ]
      }
    ],
    output: true,
    outputType: "Number",
    colour: 230,
    tooltip: "读取模拟输入引脚的值（0-4095）",
    helpUrl: ""
  }
]);

// 代码生成:模拟输入积木
javascript.javascriptGenerator.forBlock['get_analog_input'] = function (block)
{
  var pin = block.getFieldValue('PIN');
  var code = `(function() { 
    const result = httpRequest(deviceIP, "Ra"+'\\${String.fromCharCode(pin)}'+"\\n", true); 
    // 尝试解析结果中的数字
    if (result) {
      const lines = result.split('\\n');
      for (const line of lines) {
        const num = parseInt(line.trim());
        if (!isNaN(num)) {
          return num;
        }
      }
    }
    return 0; // 如果无法解析，返回默认值
  })()`;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 设置模拟输出积木
Blockly.defineBlocksWithJsonArray([
  {
    type: 'set_analog_output',
    message0: "设置模拟输出 引脚 %1 数值 %2",
    args0: [
      {
        type: "field_dropdown",
        name: "PIN",
        options: [
          ["25", "25"],
          ["26", "26"]
        ]
      },
      {
        type: "field_number",
        name: "VALUE",
        value: 0,
        min: 0,
        max: 255,
        precision: 1
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "设置模拟输出引脚的数值（0-255）",
    helpUrl: ""
  }
]);

// 代码生成:设置模拟输出积木
javascript.javascriptGenerator.forBlock['set_analog_output'] = function (block)
{
  const pin = block.getFieldValue('PIN');
  const value = block.getFieldValue('VALUE');

  return `httpRequest(deviceIP, "AnalogWrite(${pin},${value})");`;
};

// 定义设置数字输出积木块
Blockly.defineBlocksWithJsonArray([
  {
    type: 'set_digital_output',
    message0: "设置数字输出 引脚 %1 数值 %2",
    args0: [
      {
        type: "field_number",
        name: "PIN",
        value: 0,
        min: 0,
        max: 40,  // 设置最大引脚数
        precision: 1
      },
      {
        type: "field_dropdown",
        name: "VALUE",
        options: [
          ["高电平", "1"],
          ["低电平", "0"]
        ]
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "设置数字输出引脚的高低电平（1为高电平，0为低电平）",
    helpUrl: ""
  }
]);

// 代码生成:设置数字输出的代码
javascript.javascriptGenerator.forBlock['set_digital_output'] = function (block)
{
  const pin = block.getFieldValue('PIN');
  const value = block.getFieldValue('VALUE');

  return `httpRequest(deviceIP, "DigitalWrite(${pin},${value})");`;
};

// 发送自定义命令积木
Blockly.defineBlocksWithJsonArray([
  {
    type: 'send_custom_command',
    message0: "发送自定义命令 %1",
    args0: [
      {
        type: "field_input",
        name: "CUSTOM_COMMAND",
        text: "命令"
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "发送自定义HTTP命令",
    helpUrl: ""
  }
]);

// 控制台打印积木
Blockly.defineBlocksWithJsonArray([
  {
    type: 'console_log_variable',
    message0: "控制台打印 变量名 %1 数值 %2",
    args0: [
      {
        type: "field_input",
        name: "VAR_NAME",
        text: "变量名"
      },
      {
        type: "input_value",
        name: "VALUE",
        check: null  // 接受任何类型的输入，移除类型限制
      }
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 290,  // 紫色系
    tooltip: "在控制台打印变量名和对应的数值",
    helpUrl: ""
  }
]);

// 代码生成:控制台打印积木
javascript.javascriptGenerator.forBlock['console_log_variable'] = function (block)
{
  const varName = block.getFieldValue('VAR_NAME');
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_NONE) || '0';

  // 使用asyncLog函数确保消息立即显示并且按顺序执行
  return `await asyncLog("${varName}: " + (${value}));`;
};
/*
发送命令，不需要响应
httpRequest('192.168.1.100', 'walk');

获取数据，需要响应
const value = httpRequest('192.168.1.100', 'query', true);
*/
function httpRequest(ip, cmd, needResponse = true)
{
  const url = `http://${ip}/?cmd=${encodeURIComponent(cmd)}`;

  try
  {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);  // false for synchronous request
    xhr.withCredentials = false
    xhr.send();

    if (xhr.status === 200)
    {
      const value = xhr.responseText.trim();
      return needResponse ? value : true;
    } else
    {
      throw new Error(`Request failed with status ${xhr.status}`);
    }
  } catch (error)
  {
    console.error('Request error:', error);
    return needResponse ? '' : false;
  }
}









