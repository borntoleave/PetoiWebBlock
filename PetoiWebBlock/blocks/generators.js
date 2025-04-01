/**
 * JavaScript代码生成器 - 为所有自定义积木生成JavaScript代码
 */

// 代码生成:发送方向动作命令
Blockly.JavaScript.forBlock['direction_action'] = function (block)
{
  const code = block.getFieldValue('ACTION');
  return `httpRequest(deviceIP, "${code}");\n`;
};

// 代码生成:发送原地动作命令
Blockly.JavaScript.forBlock['local_action'] = function (block)
{
  const code = block.getFieldValue('ACTION');
  return `httpRequest(deviceIP, "${code}");\n`;
};

// 代码生成:发送高难度特技动作命令
Blockly.JavaScript.forBlock['high_difficulty_action'] = function (block)
{
  const code = block.getFieldValue('ACTION');
  return `httpRequest(deviceIP, "${code}");\n`;
};

// 代码生成:设置马达角度代码生成器
Blockly.JavaScript.forBlock['set_motor_angle'] = function (block)
{
  const motorId = block.getFieldValue('MOTOR');
  const angle = block.getFieldValue('ANGLE');
  return `httpRequest(deviceIP, "m ${motorId} " + Math.min(125, Math.max(-125, ${angle})));\n`;
};

// 代码生成:获取舵机角度的代码生成器
Blockly.JavaScript.forBlock['get_servo_angle'] = function (block)
{
  const servoId = block.getFieldValue('SERVO');
  return [`(function() { var _temp = httpRequest(deviceIP, "m ${servoId} ?", true); return parseInt(_temp) || 0; })()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 代码生成:获取所有舵机角度的代码生成器
Blockly.JavaScript.forBlock['get_all_servo_angles'] = function (block)
{
  const code = `
    (function() {
      let angles = {};
      for(let i = 0; i <= 11; i++) {
        angles["servo" + i] = parseInt(httpRequest(deviceIP, "m " + i + " ?", true)) || 0;
      }
      return JSON.stringify(angles);
    })()
  `;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 代码生成:延时代码生成器
Blockly.JavaScript.forBlock['delay_ms'] = function (block)
{
  const delay = block.getFieldValue('DELAY');
  return `await new Promise(resolve => setTimeout(resolve, ${delay}));\n`;
};

// 代码生成:陀螺仪控制代码生成器
Blockly.JavaScript.forBlock['gyro_control'] = function (block)
{
  const state = block.getFieldValue('STATE');
  return `httpRequest(deviceIP, "g ${state}");\n`;
};

// 代码生成:连接代码生成器
Blockly.JavaScript.forBlock['make_connection'] = function (block)
{
  const ip = block.getFieldValue('IP_ADDRESS');
  return `deviceIP = "${ip}";\nconsole.log("连接到设备: " + deviceIP);\n`;
};

// 代码生成:获取数字输入代码生成器
Blockly.JavaScript.forBlock['get_digital_input'] = function (block)
{
  const pin = block.getFieldValue('PIN');
  return [`(function() { var _temp = httpRequest(deviceIP, "Rd" + String.fromCharCode(${pin}) + "\\n", true); return parseInt(_temp) || 0; })()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 代码生成:获取模拟输入代码生成器
Blockly.JavaScript.forBlock['get_analog_input'] = function (block)
{
  const pin = block.getFieldValue('PIN');
  return [`(function() { var _temp = httpRequest(deviceIP, "Ra" + String.fromCharCode(${pin}) + "\\n", true); return parseInt(_temp) || 0; })()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 代码生成:获取传感器输入代码生成器
Blockly.JavaScript.forBlock['get_sensor_input'] = function (block)
{
  const sensor = block.getFieldValue('SENSOR');
  return [`(function() { var _temp = httpRequest(deviceIP, "i ${sensor}", true); return parseInt(_temp) || 0; })()`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 代码生成:设置数字输出代码生成器
Blockly.JavaScript.forBlock['set_digital_output'] = function (block)
{
  const pin = block.getFieldValue('PIN');
  const state = block.getFieldValue('STATE');
  return `httpRequest(deviceIP, "o ${pin} d ${state}");\n`;
};

// 代码生成:设置模拟输出代码生成器
Blockly.JavaScript.forBlock['set_analog_output'] = function (block)
{
  const pin = block.getFieldValue('PIN');
  const value = block.getFieldValue('VALUE');
  return `httpRequest(deviceIP, "o ${pin} a ${value}");\n`;
};

// 代码生成:发送自定义命令代码生成器
Blockly.JavaScript.forBlock['send_custom_command'] = function (block)
{
  const command = block.getFieldValue('COMMAND');
  return `httpRequest(deviceIP, "${command}");\n`;
};

// 代码生成:控制台输出变量代码生成器
Blockly.JavaScript.forBlock['console_log_variable'] = function (block)
{
  const variable = Blockly.JavaScript.valueToCode(block, 'VARIABLE', Blockly.JavaScript.ORDER_NONE) || '""';
  return `console.log(${variable});\n`;
};

// HTTP请求函数，用于在生成的代码中使用
function httpRequest(ip, command, returnResult = false)
{
  // 更新请求URL格式以使用?cmd=参数
  console.log(`请求: http://${ip}/?cmd=${command}`);
  return "0"; // 默认返回值
}
