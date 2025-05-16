/**
 * JavaScript代码生成器 - 为所有自定义积木生成JavaScript代码
 */

// 添加函数initJavaScriptGenerator，初始化名称数据库
function initJavaScriptGenerator() {
  if (!Blockly.JavaScript.nameDB_) {
    Blockly.JavaScript.init();
    Blockly.JavaScript.initNameDB();
  }
}

// 代码生成:发送步态动作命令
Blockly.JavaScript.forBlock['gait'] = function (block)
{
  initJavaScriptGenerator();
  const code = block.getFieldValue('COMMAND');
  const delay = block.getFieldValue('DELAY');
  const delayMs = Math.round(delay * 1000);
  return `onlyPrintNonEmpty(await httpRequest(deviceIP, "${code}", true));\n` +
    `await new Promise(resolve => setTimeout(resolve, ${delayMs}));\n`;
};

// 代码生成:发送姿势动作命令
Blockly.JavaScript.forBlock['posture'] = function (block)
{
  initJavaScriptGenerator();
  const code = block.getFieldValue('COMMAND');
  const delay = block.getFieldValue('DELAY');
  const delayMs = Math.round(delay * 1000);
  return `onlyPrintNonEmpty(await httpRequest(deviceIP, "${code}", true));\n` +
    `await new Promise(resolve => setTimeout(resolve, ${delayMs}));\n`;
};

// 代码生成:发送杂技动作命令
Blockly.JavaScript.forBlock['acrobatic_moves'] = function (block)
{
  initJavaScriptGenerator();
  const code = block.getFieldValue('COMMAND');
  const delay = block.getFieldValue('DELAY');
  const delayMs = Math.round(delay * 1000);
  return `onlyPrintNonEmpty(await httpRequest(deviceIP, "${code}", true));\n` +
    `await new Promise(resolve => setTimeout(resolve, ${delayMs}));\n`;
};

// 代码生成:设置马达角度代码生成器
Blockly.JavaScript.forBlock['set_motor_angle'] = function (block)
{
  initJavaScriptGenerator();
  const motorId = block.getFieldValue('MOTOR');
  const angle = block.getFieldValue('ANGLE');
  const delay = block.getFieldValue('DELAY');
  const delayMs = Math.round(delay * 1000);
  // 生成唯一的随机后缀，防止变量名冲突
  const uniqueSuffix = Math.floor(Math.random() * 10000);

  return `// 设置关节角度并获取响应
onlyPrintNonEmpty(await httpRequest(deviceIP, "m ${motorId} " + Math.min(125, Math.max(-125, ${angle})), true));\n` +
    `await new Promise(resolve => setTimeout(resolve, ${delayMs}));\n`;
};

// 代码生成:获取关节角度的代码生成器
Blockly.JavaScript.forBlock['get_joint_angle'] = function (block)
{
  initJavaScriptGenerator();
  const jointId = block.getFieldValue('JOINT');
  return [`parseInt(await httpRequest(deviceIP, "m ${jointId} ?", true)) || 0`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 代码生成:获取所有关节角度的代码生成器
Blockly.JavaScript.forBlock['get_all_joint_angles'] = function (block)
{
  initJavaScriptGenerator();
  const code = `
    (async function() {
      let angles = {};
      for(let i = 0; i <= 11; i++) {
        angles["joint" + i] = parseInt(await httpRequest(deviceIP, "m " + i + " ?", true)) || 0;
      }
      return JSON.stringify(angles);
    })()
  `;
  return [code, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 代码生成:延时代码生成器
Blockly.JavaScript.forBlock['delay_ms'] = function (block)
{
  initJavaScriptGenerator();
  const delay = block.getFieldValue('DELAY');
  return `await new Promise(resolve => setTimeout(resolve, ${delay}));\n`;
};

// 代码生成:陀螺仪控制代码生成器
Blockly.JavaScript.forBlock['gyro_control'] = function (block)
{
  initJavaScriptGenerator();
  const state = block.getFieldValue('STATE');
  // 根据操作使用不同的命令：enable=启用(gB)，disable=禁用(gb)
  const command = state === 'enable' ? 'gB' : 'gb';
  // 根据操作使用不同的消息文本
  const messageKey = state === 'enable' ? 'gyroEnabled' : 'gyroDisabled';
  return `await httpRequest(deviceIP, "${command}", true);\n` +
         `await asyncLog(getText("${messageKey}"));\n`;
};

// 添加辅助函数makeConnection，用于在生成的代码中实现连接逻辑
async function makeConnection(ip, timeout = 2000)
{
  try
  {
    let connected = false;
    let response = "";
    
    // 使用 "?" 命令测试连接
    try {
      response = await httpRequest(ip, '?', true);
      if (response && response.length > 0 && response !== '?') {
        // 成功连接但不打印信息
        connected = true;
      }
    } catch (e) {
      // 不打印连接失败信息
    }
    
    if (connected) {
      return true;
    } else {
      console.error("连接失败：设备未返回有效响应");
      return false;
    }
  } catch (err)
  {
    console.error("连接错误: " + err.message);
    return false;
  }
}

// 代码生成:连接代码生成器
Blockly.JavaScript.forBlock['make_connection'] = function (block)
{
  initJavaScriptGenerator();
  const ip = block.getFieldValue('IP_ADDRESS');
  return `// ${getText("connectingIPAddress")}
try {
const connectionResult = await makeConnection("${ip}");
if(connectionResult) {
  deviceIP = "${ip}";
    console.log(getText("connectedToDevice") + deviceIP);
} else {
    alert(getText("connectionFailedCheck") + '\\n\\n' + getText("programExecutionStopped"));
  return; // ${getText("executionStoppedComment")}
  }
} catch(e) {
  alert(getText("connectionErrorDetails").replace("{error}", e.message) + '\\n\\n' + getText("programExecutionStopped"));
  return; // 停止执行
}\n`;
};

// 代码生成:获取数字输入代码生成器
Blockly.JavaScript.forBlock['get_digital_input'] = function (block)
{
  initJavaScriptGenerator();
  const pin = block.getFieldValue('PIN');
  return [`parseInt(await httpRequest(deviceIP, "Rd" + String.fromCharCode(${pin}) + "\\n", true)) || 0`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 代码生成:获取模拟输入代码生成器
Blockly.JavaScript.forBlock['get_analog_input'] = function (block)
{
  initJavaScriptGenerator();
  const pin = block.getFieldValue('PIN');
  return [`parseInt(await httpRequest(deviceIP, "Ra" + String.fromCharCode(${pin}) + "\\n", true)) || 0`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 代码生成:获取传感器输入代码生成器
Blockly.JavaScript.forBlock['get_sensor_input'] = function (block)
{
  initJavaScriptGenerator();
  const sensor = block.getFieldValue('SENSOR');
  return [`parseInt(await httpRequest(deviceIP, "i ${sensor}", true)) || 0`, Blockly.JavaScript.ORDER_FUNCTION_CALL];
};

// 代码生成:设置数字输出代码生成器
Blockly.JavaScript.forBlock['set_digital_output'] = function (block)
{
  initJavaScriptGenerator();
  const pin = block.getFieldValue('PIN');
  const state = block.getFieldValue('STATE');
  return `onlyPrintNonEmpty(await httpRequest(deviceIP, "o ${pin} d ${state}", true));\n`;
};

// 代码生成:设置模拟输出代码生成器
Blockly.JavaScript.forBlock['set_analog_output'] = function (block)
{
  initJavaScriptGenerator();
  const pin = block.getFieldValue('PIN');
  const value = block.getFieldValue('VALUE');
  return `onlyPrintNonEmpty(await httpRequest(deviceIP, "o ${pin} a ${value}", true));\n`;
};

// 代码生成:发送自定义命令代码生成器
Blockly.JavaScript.forBlock['send_custom_command'] = function (block)
{
  initJavaScriptGenerator();
  const command = block.getFieldValue('COMMAND');
  return `onlyPrintNonEmpty(await httpRequest(deviceIP, "${command}", true));\n`;
};

// 代码生成:控制台输出变量代码生成器
Blockly.JavaScript.forBlock['console_log_variable'] = function (block)
{
  initJavaScriptGenerator();
  const variable = Blockly.JavaScript.valueToCode(block, 'VARIABLE', Blockly.JavaScript.ORDER_NONE) || '""';
  return `console.log(${variable});\n`;
};

// 代码生成:播放音符代码生成器
Blockly.JavaScript.forBlock['play_note'] = function (block)
{
  initJavaScriptGenerator();
  const note = block.getFieldValue('NOTE');
  const duration = block.getFieldValue('DURATION');
  return `onlyPrintNonEmpty(await httpRequest(deviceIP, "b ${note} ${duration}", true));\n`;
};

// HTTP请求函数，用于在生成的代码中使用 - 仅供模拟测试
function mockHttpRequest(ip, command, returnResult = false)
{
  // 在命令前添加标识前缀，用于调试，但不改变原始命令行为
  const debugCommand = "[MOCK]" + command;
  // console.log(getText("mockRequest") + `${debugCommand} -> ${ip}`);

  // 针对不同命令返回不同模拟值
  if (returnResult)
  {
    // 模拟设备型号查询
    if (command === '?')
    {
      // console.warn(getText("usingMockHttpRequest"));
      return "PetoiModel-v1.0";
    }

    // 模拟传感器、数字和模拟输入的响应
    if (command.startsWith("Ra") || command.startsWith("Rd") || command.startsWith("i ") || command.includes(" ?"))
    {
      return "123";
    }
  }

  return returnResult ? "0" : true; // 默认返回值
}

// 调试时可以通过以下方式启用模拟请求
// window.httpRequest = mockHttpRequest;
