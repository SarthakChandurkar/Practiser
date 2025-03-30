const data = [
  {
    question: "Which of the following is/are current challenges in IoT?",
    options: [
      "Large scale of co-operation",
      "Global heterogeneity",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    answer: 2,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "State True or False. Statement: “Interoperability is not a characteristic of a product or system.”",
    options: ["True", "False"],
    answer: 1,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "Interoperability is required because",
    options: [
      "There are different programming languages",
      "There are different communication protocols",
      "Both (a) and (b)",
      "Neither (a) nor (b)"
    ],
    answer: 2,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "State whether the following statement is true or false. Statement: “Use of different programming languages such as JavaScript, Python, JAVA, and others is an example of heterogeneity in IoT. This brings in the need for Interoperability.”",
    options: ["False", "True"],
    answer: 1,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "State True or False. Statement: “The Interoperability between devices and device users in terms of message formats is called Systematic Interoperability.”",
    options: ["True", "False"],
    answer: 1,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "What is the full form of UMB in IoT Interoperability?",
    options: [
      "Universal Meta Bridge",
      "Universal Main Bridge",
      "Universal Main Bracket",
      "None of these"
    ],
    answer: 3,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "State true or false. Arduino is an open-source electronic programmable board.",
    options: ["True", "False"],
    answer: 0,
    topic: "Arduino",
    week: 5
  },
  {
    question: "State true or false. Additional electronic circuits are essential to load a program into the Arduino controller board.",
    options: ["True", "False"],
    answer: 1,
    topic: "Arduino",
    week: 5
  },
  {
    question: "Arduino UNO has _________ number of Digital I/O pins.",
    options: ["8", "13", "14", "None of these"],
    answer: 2,
    topic: "Arduino",
    week: 5
  },
  {
    question: "What does the following code do?\n\nint ledPin = 13;\nvoid setup() {\npinMode(ledPin, OUTPUT);\nfor (int i = 0; i < 3; i++) {\ndigitalWrite(ledPin, HIGH);\ndelay(1000);\ndigitalWrite(ledPin, LOW);\ndelay(500);\n}\n}\nvoid loop() {\n// Do nothing\n}",
    options: [
      "Blink 3 times with 1000ms ON and 500ms OFF",
      "Blink 3 times with 500ms ON and 500ms OFF",
      "Blink 3 times with 1000ms ON and 1000ms OFF",
      "Stay ON continuously"
    ],
    answer: 0,
    topic: "Arduino",
    week: 5
  },
  {
    question: "How many types of loops will you find in Arduino Programming?",
    options: ["1", "2", "3", "4"],
    answer: 2,
    topic: "Arduino",
    week: 5
  },
  {
    question: "Choose the right option for if/conditional operator.",
    options: [
      "Val = (condition)?(Statement 1):(Statement 2)",
      "Val = (condition)?(Statement 2):(Statement 1)",
      "Val = (condition):(Statement 1)?(Statement 2)",
      "Val = (condition):(Statement 2)?(Statement 1)"
    ],
    answer: 0,
    topic: "Arduino",
    week: 5
  },
  {
    question: "What is the purpose of calling dht.begin(); in the setup() function?",
    options: [
      "To initialize the Serial Monitor",
      "To start communication with the DHT sensor",
      "To set the temperature and humidity values to zero",
      "To define the data pin for the sensor"
    ],
    answer: 1,
    topic: "Arduino",
    week: 5
  },
  {
    question: "What function is used to read the humidity value from the DHT sensor?",
    options: [
      "dht.getHumidity();",
      "dht.readTemp();",
      "dht.readHumidity();",
      "dht.getTemperature();"
    ],
    answer: 2,
    topic: "Arduino",
    week: 5
  },
  {
    question: "What function is used to set the servo motor to a specific angle?",
    options: [
      "ServoDemo.move()",
      "ServoDemo.rotate()",
      "ServoDemo.write()",
      "ServoDemo.setAngle()"
    ],
    answer: 2,
    topic: "Arduino",
    week: 5
  },
  {
    question: "Which of the following is/are current challenge/challenges in IoT?",
    options: [
      "Large scale of co-operation",
      "Global heterogeneity",
      "Unknown IoT device configuration",
      "All of these"
    ],
    answer: 3,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "When two IoT devices wish to communicate, semantic conflict in such a scenario in IoT interoperability refers to?",
    options: [
      "Two devices built by the same manufacturer",
      "Two devices having different processing and business logic",
      "Two devices sensing the same physical parameter",
      "Two devices having different deployment location"
    ],
    answer: 1,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "Which of the following issues needs to be addressed while solving user interoperability?",
    options: [
      "Device characterization and identification",
      "Syntactic interoperability",
      "Both (a) and (b)",
      "None of these"
    ],
    answer: 2,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "State whether the following statement is true or false: UMB core interoperability component is responsible for converting physical devices into virtually abstracted ones.",
    options: ["False", "True"],
    answer: 0,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "What is the full form of UMB in IoT interoperability?",
    options: [
      "Universal Middleware Bridge",
      "Universal Main Bridge",
      "Universal Main Bracket",
      "None of these"
    ],
    answer: 0,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "Which of the following is NOT a function available in the Servo library for Arduino?",
    options: ["kill()", "destroy()", "burn()", "All of these"],
    answer: 3,
    topic: "Arduino",
    week: 5
  },
  {
    question: "Arduino UNO Board is open source?",
    options: ["True", "False"],
    answer: 0,
    topic: "Arduino",
    week: 5
  },
  {
    question: "Arduino Uno board accepts which type of input/inputs?",
    options: ["Analog", "Digital", "Both (a) and (b)", "None of these"],
    answer: 2,
    topic: "Arduino",
    week: 5
  },
  {
    question: "Arduino boards are based on which of the following microcontroller/microcontrollers?",
    options: ["ATMEGA328", "ATMEGA32u4", "Both (a) and (b)", "None of these"],
    answer: 2,
    topic: "Arduino",
    week: 5
  },
  {
    question: "What is the clock speed of the Arduino Uno board?",
    options: ["16MHz", "17MHz", "8MHz", "None of these"],
    answer: 0,
    topic: "Arduino",
    week: 5
  },
  {
    question: "What must be inserted in the place of ‘??’ within the second pinMode() function in void setup()?",
    options: ["INPUT", "OUTPUT", "None of these", "Anyone of these is okay"],
    answer: 1,
    topic: "Arduino",
    week: 5
  },
  {
    question: "The “Verify” option in the Arduino IDE checks the code for?",
    options: [
      "Compilation errors",
      "Improper hardware connection",
      "Both (a) and (b)",
      "None of these"
    ],
    answer: 0,
    topic: "Arduino",
    week: 5
  },
  {
    question: "How many pins does the DHT Digital Humidity and Temperature sensor have?",
    options: ["2", "3", "4", "None of these"],
    answer: 2,
    topic: "Arduino",
    week: 5
  },
  {
    question: "What is the function of the delay() function in an Arduino program?",
    options: [
      "Initializes a sensor",
      "Introduces a delay for the specified time",
      "Stores the sensor value",
      "None of the above"
    ],
    answer: 1,
    topic: "Arduino",
    week: 5
  },
  {
    question: "What does the following code snippet do? Servo myservo;",
    options: [
      "Creates a variable to store the sensor value",
      "Instructs the sensor to sense data",
      "Creates an instance of servo to use it in the Arduino sketch",
      "None of these"
    ],
    answer: 2,
    topic: "Arduino",
    week: 5
  }
  ,
  {
    question: "Company ABC manufactures a room temperature monitor which sends data via protocol X and company MNO manufactures another kind of room temperature sensor which sends data via protocol Y. With respect to this, which among the following correctly captures the said scenario?",
    options: ["Homogeneity of IoT", "Heterogeneity of IoT"],
    answer: 1,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "When two IoT devices wish to communicate, semantic conflict in such a scenario in IoT interoperability refers to?",
    options: [
      "Two devices built by the same manufacturer",
      "Two devices sensing the same physical parameter",
      "Two devices having different deployment location",
      "Two devices having different processing and business logic"
    ],
    answer: 3,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "Which of the following issues needs to be addressed while solving user interoperability?",
    options: [
      "Device characterization and identification",
      "Syntactic interoperability",
      "Semantic interoperability",
      "All of these"
    ],
    answer: 3,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "Which UMB interoperability component is responsible for converting physical devices into virtually abstracted ones?",
    options: ["UMB Adaptor", "UMB Core", "UMB Hypervisor", "UMB Abstractor"],
    answer: 0,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "A Protocol Translation Unit (PTU) acts as a middleware between two IoT devices with different native protocols to enable them to communicate with each other by translating the language of one device to the other one and vice versa.",
    options: ["True", "False"],
    answer: 0,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "Suppose that a smart CCTV camera has been configured using C++ language. With respect to the device’s cosign identification as per the standard definition (A,B,C,D), which among the following the information “Configuration Lang:C++” will be most appropriately mapped?",
    options: ["A", "B", "C", "D"],
    answer: 3,
    topic: "Interoperability",
    week: 5
  },
  {
    question: "Which among the following are components of an Arduino UNO Board?",
    options: ["LED Power Indicator", "Digital I/O Pins", "Analog IN Pins", "All of these"],
    answer: 3,
    topic: "Arduino",
    week: 5
  },
  {
    question: "What is the series of microcontroller chips powering Arduino UNO boards?",
    options: ["ATM series", "X86 series", "ARM 64 series", "ATMEGA series"],
    answer: 3,
    topic: "Arduino",
    week: 5
  },
  {
    question: "In Arduino IDE the ‘Verify’ and ‘Upload’ buttons perform the exact same task.",
    options: ["False", "True"],
    answer: 0,
    topic: "Arduino",
    week: 5
  },
  {
    question: "Suppose that an Arduino UNO board is connected to a pneumatic sensor which sends tyre pressure as floating point numbers. Which among the functions will you use to read from the sensor?",
    options: ["digitalRead()", "analogWrite()", "analogRead()", "None of these"],
    answer: 2,
    topic: "Arduino",
    week: 5
  },
  {
    question: "Consider the following Arduino sketch. What must be inserted in the place of ‘??’ within the second pinMode() function in void setup()?",
    options: ["INPUT", "OUTPUT", "None of these", "Anyone of these is okay"],
    answer: 1,
    topic: "Arduino",
    week: 5
  },
  {
    question: "For integrating different types of sensors (such as DHT) with Arduino, you would need to install and #include the sensor specific libraries in your sketch.",
    options: ["True", "False"],
    answer: 0,
    topic: "Arduino",
    week: 5
  },
  {
    question: "Which of the following best describes the command given below? ServoDemo.write(180);",
    options: ["Creates an instance of the servo", "Pin writes 180 to the servo", "Servo moves 180 degrees", "All of these"],
    answer: 2,
    topic: "Arduino",
    week: 5
  },
  {
    question: "In an Arduino sketch, for the default function void setup(), which of the following is true?",
    options: [
      "Point where the code terminates.",
      "Point where the code starts.",
      "It iterates over the different tasks in the program.",
      "None of the above."
    ],
    answer: 1,
    topic: "Arduino",
    week: 5
  },
  {
    question: "Which among the following can also be described as a relay, which is an actuator?",
    options: ["Pneumatic actuator", "Motor type actuator", "Electro-mechanical switch", "Thermal switch"],
    answer: 2,
    topic: "Arduino",
    week: 5
  }


]
