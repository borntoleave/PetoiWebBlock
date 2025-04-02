const TRANSLATIONS = {
  zh: {
    // 按钮和标题
    "showCode": "显示代码",
    "runCode": "运行代码",
    "saveProgram": "保存程序",
    "loadProgram": "载入程序",
    "clearConsole": "清除日志",
    "consoleLog": "控制台日志",
    "serialConnect": "使用串口有线连接",
    "quickConnect": "快速联网",
    "closeSerial": "关闭串口连接",
    "clearDisplay": "清空显示",
    "send": "发送",
    "wifiConfig": "WiFi配置",
    "resetPrompt": "请按下重置（RESET）按钮后配置WiFi",
    "ssidPlaceholder": "请输入WiFi名称(SSID)",
    "passwordPlaceholder": "请输入WiFi密码",
    "cancel": "取消",
    "confirm": "确定",
    "scanWifi": "扫描WiFi网络",
    "scanning": "正在扫描...",
    "serialConfiguredIP": "串口配置IP：",
    "serialReadError": "读取串口数据错误:",
    "serialSendError": "发送数据错误:",
    "serialConnectionError": "串口连接错误:",
    "enterWifiName": "请输入WiFi名称",
    "wifiCommandError": "发送WiFi命令错误:",
    "wifiCommandFailed": "发送WiFi命令失败",
    "connectedToDevice": "连接到设备: ",

    // 命令消息
    "sendingCommand": "发送命令: ",
    "commandFailed": "命令执行失败:",
    "httpError": "HTTP错误: ",

    // 显示代码窗口
    "generatedCode": "生成的JavaScript代码",
    "copyCode": "复制代码",
    "codeCopied": "复制成功！",

    // 积木分类
    "categoryLogic": "逻辑",
    "categoryLoops": "循环",
    "categoryMath": "数学",
    "categoryText": "文本",
    "categoryVariables": "变量",
    "categoryFunctions": "函数",
    "categoryNetwork": "网络",
    "categoryHardware": "设备",
    "categoryControl": "控制",
    "categoryConsole": "控制台",

    // 积木文本 - 通信
    "connectWithIP": "连接IP地址 %1",
    "getDigitalInput": "获取数字输入 %1",
    "getAnalogInput": "获取模拟输入 %1",
    "getSensorInput": "获取传感器 %1",
    "setDigitalOutput": "设置数字输出 引脚 %1 状态 %2",
    "setAnalogOutput": "设置模拟输出 引脚 %1 数值 %2",
    "sendCustomCommand": "发送自定义命令 %1",

    // 积木文本 - 动作
    "setMotorAngle": "设置关节 %1 角度为 %2",
    "getJointAngle": "获取关节 %1 的角度",
    "getAllJointAngles": "获取所有关节角度",
    "directionAction": "运动方向 %1",
    "localAction": "原地动作 %1",
    "highDifficultyAction": "高难度特技动作(小心使用) %1",

    // 积木文本 - 控制
    "delayMs": "延时 %1 毫秒",

    // 积木文本 - 传感器
    "gyroControl": "陀螺仪 %1",

    // 积木文本 - 控制台
    "consoleLogVariable": "在控制台输出变量 %1",

    // 动作选项
    "forward": "前进",
    "backward": "后退",
    "left": "左转",
    "right": "右转",
    "leftForward": "左前",
    "leftBackward": "左后",
    "rightForward": "右前",
    "rightBackward": "右后",
    "stop": "停止",
    "stand": "站立",
    "sit": "坐下",
    "rest": "休息",
    "pee": "尿尿",
    "backflip": "后空翻",
    "roll": "翻身",
    "jump": "跳跃",
    "rotate": "旋转",

    // 传感器选项
    "ultrasonic": "超声波",
    "touch": "触摸",
    "distance": "距离",
    "light": "光线",
    "temperature": "温度",
    "humidity": "湿度",
    "gyroEnable": "启用",
    "gyroDisable": "禁用"
  },

  en: {
    // Buttons and titles
    "showCode": "Show Code",
    "runCode": "Run Code",
    "saveProgram": "Save Program",
    "loadProgram": "Load Program",
    "clearConsole": "Clear Log",
    "consoleLog": "Console Log",
    "serialConnect": "Connect Serial Port",
    "quickConnect": "Quick Connect",
    "closeSerial": "Close Serial",
    "clearDisplay": "Clear Display",
    "send": "Send",
    "wifiConfig": "WiFi Configuration",
    "resetPrompt": "Please press RESET button before configuring WiFi",
    "ssidPlaceholder": "Enter WiFi SSID",
    "passwordPlaceholder": "Enter WiFi Password",
    "cancel": "Cancel",
    "confirm": "Confirm",
    "scanWifi": "Scan WiFi",
    "scanning": "Scanning...",
    "serialConfiguredIP": "Serial Configured IP: ",
    "serialReadError": "Error reading serial data:",
    "serialSendError": "Error sending data:",
    "serialConnectionError": "Serial connection error:",
    "enterWifiName": "Please enter WiFi name",
    "wifiCommandError": "Error sending WiFi command:",
    "wifiCommandFailed": "Failed to send WiFi command",
    "connectedToDevice": "Connected to device: ",

    // Command messages
    "sendingCommand": "Sending command: ",
    "commandFailed": "Command execution failed:",
    "httpError": "HTTP error: ",

    // Code Display Window
    "generatedCode": "Generated JavaScript Code",
    "copyCode": "Copy Code",
    "codeCopied": "Copied!",

    // Block categories
    "categoryLogic": "Logic",
    "categoryLoops": "Loops",
    "categoryMath": "Math",
    "categoryText": "Text",
    "categoryVariables": "Variables",
    "categoryFunctions": "Functions",
    "categoryNetwork": "Network",
    "categoryHardware": "Hardware",
    "categoryControl": "Control",
    "categoryConsole": "Console",

    // Block text - Communication
    "connectWithIP": "Connect with IP %1",
    "getDigitalInput": "Get Digital Input %1",
    "getAnalogInput": "Get Analog Input %1",
    "getSensorInput": "Get Sensor %1",
    "setDigitalOutput": "Set Digital Output Pin %1 State %2",
    "setAnalogOutput": "Set Analog Output Pin %1 Value %2",
    "sendCustomCommand": "Send Custom Command %1",

    // Block text - Motion
    "setMotorAngle": "Set Joint %1 Angle to %2",
    "getJointAngle": "Get Joint %1 Angle",
    "getAllJointAngles": "Get All Joint Angles",
    "directionAction": "Move Direction %1",
    "localAction": "Static Action %1",
    "highDifficultyAction": "High Difficulty Action (Use with Caution) %1",

    // Block text - Control
    "delayMs": "Delay %1 milliseconds",

    // Block text - Sensors
    "gyroControl": "Gyroscope %1",

    // Block text - Console
    "consoleLogVariable": "Log variable to console %1",

    // Action options
    "forward": "Forward",
    "backward": "Backward",
    "left": "Left",
    "right": "Right",
    "leftForward": "Left Forward",
    "leftBackward": "Left Backward",
    "rightForward": "Right Forward",
    "rightBackward": "Right Backward",
    "stop": "Stop",
    "sit": "Sit",
    "stand": "Stand",
    "rest": "Rest",
    "pee": "Pee",
    "backflip": "Backflip",
    "roll": "Roll",
    "jump": "Jump",
    "rotate": "Rotate",

    // Sensor options
    "ultrasonic": "Ultrasonic",
    "touch": "Touch",
    "distance": "Distance",
    "light": "Light",
    "temperature": "Temperature",
    "humidity": "Humidity",
    "gyroEnable": "Enable",
    "gyroDisable": "Disable"
  }
};

let currentLang = 'en'; // 默认语言

function setLanguage(lang)
{
  currentLang = lang;
  updateBlocklyTranslations();
  updateUITranslations();
}

function getText(key)
{
  return TRANSLATIONS[currentLang][key] || key;
}

function updateBlocklyTranslations()
{
  // 更新所有积木的文本
  workspace.getAllBlocks().forEach(block =>
  {
    block.render();
  });
}

function updateUITranslations()
{
  // 更新UI元素的文本
  document.querySelectorAll('[data-i18n]').forEach(element =>
  {
    const key = element.getAttribute('data-i18n');
    if (element.tagName === 'INPUT' && element.type === 'placeholder')
    {
      element.placeholder = getText(key);
    } else
    {
      element.textContent = getText(key);
    }
  });
} 
