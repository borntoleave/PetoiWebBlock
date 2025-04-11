const TRANSLATIONS = {
  zh: {
    // 按钮和标题
    "appTitle": "陪拓网页编程积木",
    "showCode": "显示代码",
    "runCode": "运行代码",
    "saveProgram": "保存程序",
    "loadProgram": "加载程序",
    "clearAll": "清除全部",
    "clearConsole": "清除日志",
    "consoleLog": "控制台日志",
    "serialConnect": "连接串口",
    "quickConnect": "快速连接",
    "closeSerial": "关闭连接",
    "clearDisplay": "清除输出",
    "send": "发送",
    "serialOutput": "串口监视器",
    "serialInputPlaceholder": "输入要发送的内容",
    "wifiConfig": "WiFi配置",
    "resetPrompt": "请在配置WiFi前按下RESET按钮",
    "ssidPlaceholder": "输入WiFi名称",
    "passwordPlaceholder": "输入WiFi密码",
    "cancel": "取消",
    "confirm": "确认",
    "scanWifi": "扫描WiFi",
    "scanning": "扫描中...",
    "serialConfiguredIP": "IP地址: ",
    "serialReadError": "读取串口数据错误:",
    "serialSendError": "发送数据错误:",
    "serialConnectionError": "串口连接错误:",
    "enterWifiName": "请输入WiFi名称",
    "wifiCommandError": "发送WiFi命令错误:",
    "wifiCommandFailed": "发送WiFi命令失败",
    "connectedToDevice": "已连接到设备: ",
    "textCopied": "文本已复制到剪贴板",
    "serialPortBusy": "串口已被占用，请关闭其他正在使用此串口的程序",
    "taskEnded": "任务结束",
    "showSentCommands": "显示发送指令",
    "commandCompleted": "指令已完成",
    "commandNoReturnWarning": "警告：未收到预期的返回值：",
    "fileLoaded": "已加载：{filename}",
    "loadFileFailed": "无法载入文件",
    "currentFileLabel": "当前文件：",

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
    "categoryMusic": "音乐",

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
    "gait": "步态 %1",
    "posture": "姿势 %1",
    "acrobatic_moves": "杂技动作(小心使用) %1",
    "directionAction": "运动方向 %1",
    "localAction": "原地动作 %1",
    "highDifficultyAction": "高难度特技动作(小心使用) %1",
    "setMotorAngleWithDelay": "设置关节 %1 角度为 %2 后延时 %3 秒",
    "gaitWithDelay": "步态 %1 后延时 %2 秒",
    "postureWithDelay": "姿势 %1 后延时 %2 秒",
    "acrobaticWithDelay": "杂技动作(小心使用) %1 后延时 %2 秒",

    // 积木文本 - 控制
    "delayMs": "延时 %1 秒",
    "delayMessage": "延时 {delay} 秒...",

    // 积木文本 - 传感器
    "gyroControl": "陀螺仪 %1",

    // 积木文本 - 控制台
    "consoleLogVariable": "在控制台输出变量 %1",

    // 积木文本 - 音乐
    "playNote": "播放音符 %1 时长 %2 拍",

    // 动作选项
    "stand": "站立",
    "sit": "坐下",
    "rest": "休息",
    "pee": "尿尿",
    "backflip": "后空翻",
    "jump": "跳跃",
    "handstand": "倒立",
    "boxing": "打拳",
    "frontflip": "前空翻",
    "step": "原地踏步",
    "rotateLeft": "左旋",
    "rotateRight": "右旋",
    "walkForward": "向前走",
    "walkLeft": "向左走",
    "walkRight": "向右走",
    "walkBackward": "向后走",
    "backLeft": "向左后走",
    "backRight": "向右后走",
    "trotForward": "向前跑",
    "trotLeft": "向左跑",
    "trotRight": "向右跑",
    "crawlForward": "向前爬",
    "crawlLeft": "向左爬",
    "crawlRight": "向右爬",
    "gapForward": "向前跨",
    "gapLeft": "向左跨",
    "gapRight": "向右跨",
    "moonwalk": "太空步",

    // 传感器选项
    "ultrasonic": "超声波",
    "touch": "触摸",
    "distance": "距离",
    "light": "光线",
    "temperature": "温度",
    "humidity": "湿度",
    "gyroEnable": "启用",
    "gyroDisable": "禁用",

    // 连接和错误相关消息
    "connectingDevice": "正在连接设备: ",
    "deviceResponseInfo": "设备返回信息: ",
    "deviceModelInfo": "设备型号: ",
    "errorMockData": "错误：使用了模拟数据而非真实请求！",
    "connectionFailedMock": "连接失败：系统使用了模拟数据而非真实网络请求。请检查网络设置。",
    "connectionFailedCheck": "连接机器人失败！请确认IP地址正确并且设备已开启。",
    "connectionError": "连接出错: ",
    "connectionTimeout": "连接超时：无法连接到 {ip}，请检查设备是否开启并在同一网络中。",
    "networkError": "网络错误：无法连接到 {ip}，请检查网络连接。",
    "connectionErrorDetails": "连接机器人出错: {error}",
    "programExecutionStopped": "程序已中断执行，后续指令将不会运行。",
    "errorInvalidIP": "错误：无效的IP地址",
    "receivedResponse": "收到响应: ",
    "requestFailedStatusCode": "请求失败，状态码: {status}",
    "requestError": "请求错误: ",
    "invalidIPAddress": "无效的IP地址",
    "requestTimeout": "请求超时",
    "asyncSendingCommand": "异步发送命令: ",
    "asyncReceivedResponse": "异步收到响应: ",
    "networkRequestError": "网络请求错误",
    "programEndingRestCommand": "程序结束，自动发送休息指令...",
    "restCommandFailed": "发送休息指令失败: ",

    // 代码生成器注释
    "connectingIPAddress": "连接IP地址",
    "connectionFailedComment": "连接失败时中断后续程序执行，但不再抛出异常，因为makeConnection函数已经显示了错误提示",
    "executionStoppedComment": "直接返回，中断后续代码执行",
    "mockRequest": "模拟请求: ",
    "usingMockHttpRequest": "注意：使用了模拟HTTP请求，返回的是假设备型号",
  },

  en: {
    // Buttons and titles
    "appTitle": "Petoi Web Coding Blocks",
    "showCode": "Show Code",
    "runCode": "Run Code",
    "saveProgram": "Save Program",
    "loadProgram": "Load Program",
    "clearAll": "Clear All",
    "clearConsole": "Clear Log",
    "consoleLog": "Console Log",
    "serialConnect": "Connect Serial Port",
    "quickConnect": "Quick Connect",
    "closeSerial": "Close Serial",
    "clearDisplay": "Clear Output",
    "send": "Send",
    "serialOutput": "Serial Monitor",
    "serialInputPlaceholder": "Enter content to send",
    "wifiConfig": "WiFi Configuration",
    "resetPrompt": "Please press RESET button before configuring WiFi",
    "ssidPlaceholder": "Enter WiFi SSID",
    "passwordPlaceholder": "Enter WiFi Password",
    "cancel": "Cancel",
    "confirm": "Confirm",
    "scanWifi": "Scan WiFi",
    "scanning": "Scanning...",
    "serialConfiguredIP": "IP address: ",
    "serialReadError": "Serial read error: ",
    "serialSendError": "Serial send error: ",
    "serialConnectionError": "Serial connection error: ",
    "enterWifiName": "Please enter WiFi name",
    "wifiCommandError": "WiFi command error:",
    "wifiCommandFailed": "Failed to send WiFi command",
    "connectedToDevice": "Connected to device: ",
    "textCopied": "Text copied to clipboard",
    "serialPortBusy": "Serial port is busy, please close other programs using this serial port",
    "taskEnded": "Task ended",
    "showSentCommands": "Show Sent Commands",
    "commandCompleted": "Command completed",
    "commandNoReturnWarning": "Warning: Expected return value not received: ",
    "fileLoaded": "Loaded: {filename}",
    "loadFileFailed": "Failed to load file",
    "currentFileLabel": "Current file:  ",

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
    "categoryMusic": "Music",

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
    "gait": "Gait %1",
    "posture": "Posture %1",
    "acrobatic_moves": "Acrobatic Moves (Use with Caution) %1",
    "directionAction": "Move Direction %1",
    "localAction": "Static Action %1",
    "highDifficultyAction": "High Difficulty Action (Use with Caution) %1",
    "setMotorAngleWithDelay": "Set Joint %1 Angle to %2 then delay %3 sec",
    "gaitWithDelay": "Gait %1 then delay %2 sec",
    "postureWithDelay": "Posture %1 then delay %2 sec",
    "acrobaticWithDelay": "Acrobatic Moves (Use with Caution) %1 then delay %2 sec",

    // Block text - Control
    "delayMs": "Delay %1 seconds",
    "delayMessage": "Delay {delay} seconds...",

    // Block text - Sensors
    "gyroControl": "Gyroscope %1",

    // Block text - Console
    "consoleLogVariable": "Log variable to console %1",

    // Block text - Music
    "playNote": "Play note %1 for %2 beat",

    // Action options
    "sit": "Sit",
    "stand": "Stand",
    "rest": "Rest",
    "pee": "Pee",
    "backflip": "Backflip",
    "jump": "Jump",
    "handstand": "Handstand",
    "boxing": "Boxing",
    "frontflip": "Frontflip",
    "step": "Step",
    "rotateLeft": "Rotate Left",
    "rotateRight": "Rotate Right",
    "walkForward": "Walk Forward",
    "walkLeft": "Walk Left",
    "walkRight": "Walk Right",
    "walkBackward": "Walk Backward",
    "backLeft": "Back Left",
    "backRight": "Back Right",
    "trotForward": "Trot Forward",
    "trotLeft": "Trot Left",
    "trotRight": "Trot Right",
    "crawlForward": "Crawl Forward",
    "crawlLeft": "Crawl Left",
    "crawlRight": "Crawl Right",
    "gapForward": "Gap Forward",
    "gapLeft": "Gap Left",
    "gapRight": "Gap Right",
    "moonwalk": "Moonwalk",

    // Sensor options
    "ultrasonic": "Ultrasonic",
    "touch": "Touch",
    "distance": "Distance",
    "light": "Light",
    "temperature": "Temperature",
    "humidity": "Humidity",
    "gyroEnable": "Enable",
    "gyroDisable": "Disable",

    // Connection and error related messages
    "connectingDevice": "Connecting to device: ",
    "deviceResponseInfo": "Device response info: ",
    "deviceModelInfo": "Device model: ",
    "errorMockData": "Error: Using mock data instead of real request!",
    "connectionFailedMock": "Connection failed: System used mock data instead of real network request. Please check network settings.",
    "connectionFailedCheck": "Failed to connect to the robot! Please verify the IP address is correct and the device is powered on.",
    "connectionError": "Connection error: ",
    "connectionTimeout": "Connection timeout: Unable to connect to {ip}, please check if the device is on and in the same network.",
    "networkError": "Network error: Unable to connect to {ip}, please check your network connection.",
    "connectionErrorDetails": "Robot connection error: {error}",
    "programExecutionStopped": "Program execution has been stopped, subsequent instructions will not run.",
    "errorInvalidIP": "Error: Invalid IP address",
    "receivedResponse": "Received response: ",
    "requestFailedStatusCode": "Request failed, status code: {status}",
    "requestError": "Request error: ",
    "invalidIPAddress": "Invalid IP address",
    "requestTimeout": "Request timeout",
    "asyncSendingCommand": "Async sending command: ",
    "asyncReceivedResponse": "Async received response: ",
    "networkRequestError": "Network request error",
    "programEndingRestCommand": "Program ended, sending rest command...",
    "restCommandFailed": "Failed to send rest command: ",

    // Code generator comments
    "connectingIPAddress": "Connecting to IP address",
    "connectionFailedComment": "Stop execution on connection failure, without throwing exception as makeConnection function already showed error",
    "executionStoppedComment": "Return directly to stop subsequent code execution",
    "mockRequest": "Mock request: ",
    "usingMockHttpRequest": "Note: Using mock HTTP request, returning fake device model",
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
    if (element.tagName.toLowerCase() === 'input')
    {
      element.placeholder = getText(key);
    } else
    {
      // 特殊处理currentFileLabel，在英文模式下使用不间断空格
      if (key === 'currentFileLabel' && currentLang === 'en')
      {
        element.innerHTML = 'Current file:&nbsp;&nbsp;';
      } else
      {
        element.textContent = getText(key);
      }
    }
  });
} 
