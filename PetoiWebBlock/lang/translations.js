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

    // 积木文本
    "connectWithIP": "连接IP地址 %1",
    "getDigitalInput": "获取数字输入 %1",
    "getAnalogInput": "获取模拟输入 %1",
    "getSensor": "获取传感器 %1",
    "setMotorAngle": "设置马达 %1 角度为 %2",
    "getServoAngle": "获取舵机 %1 的角度",
    "getAllServoAngles": "获取所有舵机角度",
    "directionAction": "运动方向 %1",
    "localAction": "原地动作 %1",
    "highDifficultyAction": "高难度特技动作(小心使用) %1",
    "gyroControl": "陀螺仪 %1",
    
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
    "sit": "坐下",
    "balance": "平衡",
    "urinate": "尿尿",
    "defecate": "拉屎",
    "backflip": "后空翻",
    "roll": "翻身",
    "jump": "跳跃",
    "rotate": "旋转",
    
    // 传感器选项
    "ultrasonic": "超声波",
    "touch": "触摸",
    "distance": "距离",
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

    // Block text
    "connectWithIP": "Connect with IP %1",
    "getDigitalInput": "Get Digital Input %1",
    "getAnalogInput": "Get Analog Input %1",
    "getSensor": "Get Sensor %1",
    "setMotorAngle": "Set Motor %1 Angle to %2",
    "getServoAngle": "Get Servo %1 Angle",
    "getAllServoAngles": "Get All Servo Angles",
    "directionAction": "Move Direction %1",
    "localAction": "Static Action %1",
    "highDifficultyAction": "High Difficulty Action (Use with Caution) %1",
    "gyroControl": "Gyroscope %1",
    
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
    "balance": "Balance",
    "urinate": "Urinate",
    "defecate": "Defecate",
    "backflip": "Backflip",
    "roll": "Roll",
    "jump": "Jump",
    "rotate": "Rotate",
    
    // Sensor options
    "ultrasonic": "Ultrasonic",
    "touch": "Touch",
    "distance": "Distance",
    "gyroEnable": "Enable",
    "gyroDisable": "Disable"
  }
};

let currentLang = 'zh'; // 默认语言

function setLanguage(lang) {
  currentLang = lang;
  updateBlocklyTranslations();
  updateUITranslations();
}

function getText(key) {
  return TRANSLATIONS[currentLang][key] || key;
}

function updateBlocklyTranslations() {
  // 更新所有积木的文本
  workspace.getAllBlocks().forEach(block => {
    block.render();
  });
}

function updateUITranslations() {
  // 更新UI元素的文本
  document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    if (element.tagName === 'INPUT' && element.type === 'placeholder') {
      element.placeholder = getText(key);
    } else {
      element.textContent = getText(key);
    }
  });
} 