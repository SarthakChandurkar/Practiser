const data = [
    {
      question: "Raspberry Pi is like a mini computer which can perform a wide range of general purpose tasks.",
      options: ["True", "False"],
      answer: 0,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "What is the complete form of GPIO pins on Raspberry Pi devices?",
      options: [
        "General Public Input/Output",
        "Generative Purpose Input/Output",
        "General Purpose Input/Output",
        "Global Purpose Input/Output"
      ],
      answer: 2,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "The Python program which you execute on Raspberry Pi to read data from sensors and control actuators has the same syntax and style as any other Python program.",
      options: ["False", "True"],
      answer: 1,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
      options: [
        "Only IP address of server",
        "Only port number",
        "Both server IP address and port number",
        "Client’s IP address"
      ],
      answer: 2,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "Which among the following are valid data processing activities?",
      options: ["Data Splitting", "Data filtering", "Data plotting", "All of the given"],
      answer: 3,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "Consider the following Python code snippet. Assume the syntax is correct and all required libraries are imported. What will be the output (See every detail, including the apostrophes carefully)?",
      image: "images/ass7que62023.png",
      options: [
        "['Sensor','Actuator','Arduino']",
        "['Sensor@Actuator','Arduino']",
        "['Sensor','Actuator%Arduino']",
        "['Sensor@Actuator%Arduino']"
      ],
      answer: 1,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "Which among the following functions do you use while using MATPLOTLIB to add a title to a plot?",
      options: ["plot()", "add()", "label()", "title()"],
      answer: 3,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "In traditional non-software-defined networks consisting of a network of switches, suppose OSPF is being used as the routing protocol. Which among the following is true?",
      options: [
        "All the switches execute OSPF distributively",
        "Only one switch executes OSPF",
        "No switch executes OSPF",
        "All of these are true"
      ],
      answer: 0,
      topic: "SDN",
      week: 7
    },
    {
      question: "In SDN, the Operating System (OS) is separated (i.e., not strongly coupled) from the physical hardware for each switch.",
      options: ["True", "False"],
      answer: 0,
      topic: "SDN",
      week: 7
    },
    {
      question: "Which among the following is a popular protocol implementing SDN?",
      options: ["OpenSwitch", "OpenStack", "OpenFlow", "OpenEdge"],
      answer: 2,
      topic: "SDN",
      week: 7
    },
    {
      question: "With respect to Software Defined Networking (SDN), which among the following is true?",
      options: [
        "SDN couples the data plane and control plane.",
        "SDN has no relation to either data plane or control plane.",
        "SDN separates the data plane and control plane.",
        "None of the stated."
      ],
      answer: 2,
      topic: "SDN",
      week: 7
    },
    {
      question: "Consider the following figure below. To which issue of SDN does this particular figure relate?",
      image: "images/ass7que12.png",
      options: [
        "Controller placement issue",
        "Flow Rule placement issue",
        "Hardware placement issue",
        "Analysis placement issue"
      ],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "Suppose that there are two LANs, each configured to be SDN enabled with their own set of switches and controllers. Which among the following directional APIs will be used for communication between the two controllers?",
      options: ["Northbound API", "East-Westbound API", "Southbound API", "Northeastbound API"],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "Which among the following is true?",
      options: [
        "Backup Controllers have no use in SDN",
        "There is no difference between the main controller and backup controller",
        "Backup controllers take over when the main controller goes down",
        "It is not a good idea to keep backup controllers."
      ],
      answer: 2,
      topic: "SDN",
      week: 7
    },
    {
      question: "IoT being data-intensive and having a lot of security concerns, it is a good idea to integrate SDN with IoT to mitigate many of these issues.",
      options: ["True", "False"],
      answer: 0,
      topic: "SDN",
      week: 7
    }  
  ,
    {
      question: "DHTSensor refers to Digital Humidity and Temperature Sensor.",
      options: ["True", "False"],
      answer: 0,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "Fill in the blanks. __________ is a python library used for plotting the data in 2D.",
      options: ["List", "Numpy", "Pandas", "Matplotlib"],
      answer: 3,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "Fill in the blanks. __________ makes a scatter plot of the given points.",
      options: ["ion()", "figure()", "Scatter()", "None of these"],
      answer: 2,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "What are the two main challenges of SDN?",
      options: [
        "File placement and Node placement",
        "Rule placement and Controller placement",
        "All of these",
        "None of these"
      ],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "In soft-timeout, all the rules are deleted from the switch.",
      options: ["True", "False"],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "Which of the following is a component of SDN?",
      options: ["Hardware switches", "Flow-rules", "None of these", "All of these"],
      answer: 3,
      topic: "SDN",
      week: 7
    },
    {
      question: "What is introduced if a controller is down in SDN?",
      options: ["Backup controller", "Intro controller", "All of these", "None of these"],
      answer: 0,
      topic: "SDN",
      week: 7
    },
    {
      question: "Southbound API is used to communicate between control layer and application layer.",
      options: ["True", "False"],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "SDN is OpenFlow.",
      options: ["True", "False"],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "Which of the following forwards the sensed data based on the ID of the source node?",
      options: [
        "Value-centric data forwarding",
        "ID-centric data forwarding",
        "All of these",
        "None of these"
      ],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "Does integrating SDN in IoT provide intelligent routing decisions?",
      options: ["Yes", "No"],
      answer: 0,
      topic: "SDN",
      week: 7
    },
    {
      question: "Are Indigo and LINC Open source?",
      options: ["Yes", "No"],
      answer: 0,
      topic: "SDN",
      week: 7
    },
    {
      question: "Which of the following is used to communicate among multiple controllers in the control layer?",
      options: ["East-Westbound APIs", "Northbound APIs", "All of these", "None of these"],
      answer: 0,
      topic: "SDN",
      week: 7
    },
    {
      question: "How many requests can a controller handle through a single thread?",
      options: ["200/sec", "50/sec", "None of these", "All of these"],
      answer: 0,
      topic: "SDN",
      week: 7
    },
    {
      question: "Size of the ternary content-addressable memory is not limited at the switches.",
      options: ["True", "False"],
      answer: 1,
      topic: "SDN",
      week: 7
    }  
  ,
    {
      question: "In Python socket programming, while defining a socket, SOCK_STREAM refers to a type of",
      options: ["SocketFamily", "SocketType", "SocketName", "SocketProtocol"],
      answer: 1,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "If you want to change the label of the Y-axis while plotting a graph using matplotlib in Python, what among the following functions do you use? Suppose you have imported matplotlib as plt.",
      options: ["plt.show()", "plt.plot()", "plt.ylabel()", "plt.yaxis()"],
      answer: 2,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "In Socket programming, the parameter AF_INET stands for ___________.",
      options: ["Unix protocols", "Internet Protocol (IP)", "File sharing", "Time slicing"],
      answer: 1,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "Suppose a Python server is receiving data from a socket as follows, What kind of socket ‘sock’ is being considered here?",
      image: "images/ass7que4.png",
      options: ["TCP socket", "UDP socket", "TAP socket", "None of the given"],
      answer: 1,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "What is the use of the Mobi-Flow protocol?",
      options: ["Enabling static SDN", "Enabling SDN to incorporate mobility", "Enabling Odin Master", "Enabling traditional BGP"],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "During remote server access using socket programming what is the utility of the .<socket_name>.listen() function?",
      options: ["To create a new socket", "To bind the socket to connection", "To wait for clients to connect", "To close the connection"],
      answer: 2,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "Which among the following is the correct direction for PACKET_OUT type messages in SDN?",
      options: ["From controller to switch", "From switch to controller", "Between two switches", "Between two controllers"],
      answer: 0,
      topic: "SDN",
      week: 7
    },
    {
      question: "Which among the following is a limitation of the traditional non-SDN networks?",
      options: ["Switches do not possess routing table", "Switches are unable to forward traffic", "Switches do not have a global view of the network.", "All of the given"],
      answer: 2,
      topic: "SDN",
      week: 7
    },
    {
      question: "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
      options: ["Only IP address of server", "Only port number", "Both server IP address and port number", "Client’s IP address"],
      answer: 2,
      topic: "RaspberryPi",
      week: 7
    },
    {
      question: "With respect to the concept of soft time-out and hard time-out in SDN switches, which of the following relations hold?",
      options: ["Soft time-out >= hard time-out", "Hard time-out >= soft time-out", "Soft time-out = hard time-out always", "None of the given"],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "Which of the following is true?",
      options: [
        "Traditional Network: Routing Table, Software Defined Network: Routing Table",
        "Traditional Network: Flow Table, Software Defined Network: Routing Table",
        "Traditional Network: Routing Table, Software Defined Network: Flow Table",
        "Traditional Network: Flow Table, Software Defined Network: Flow Table"
      ],
      answer: 2,
      topic: "SDN",
      week: 7
    },
    {
      question: "Consider the following figure below. To which issue of SDN does this particular figure relate?",
      image: "images/ass7que12.png",
      options: ["Controller placement issue", "Flow Rule placement issue", "Hardware placement issue", "Analysis placement issue"],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "With respect to the directional APIs in SDN, what is the functionality of East-Westbound APIs?",
      options: ["To communicate between the controller and switches", "To communicate among multiple controllers", "East-Westbound APIs do not exist", "To communicate between switches themselves."],
      answer: 1,
      topic: "SDN",
      week: 7
    },
    {
      question: "Hierarchical SDN architecture is also known as __________ architecture.",
      options: ["Tree", "Flat", "Mesh", "Line"],
      answer: 0,
      topic: "SDN",
      week: 7
    },
    {
      question: "Integrating SDN with IoT is not recommended and is not a suitable approach to follow.",
      options: ["False", "True"],
      answer: 0,
      topic: "SDN",
      week: 7
    }  
  ,
    {
      question: "Python doesn’t support strict rules for syntax and static variable declaration like C.",
      options: ["True", "False"],
      answer: 0,
      topic: "Python",
      week: 6
    },
    {
      question: "Fill in the blanks. __________ is a data-type in Python.",
      options: ["List", "Tuple", "Dictionary", "All of these"],
      answer: 3,
      topic: "Python",
      week: 6
    },
    {
      question: "Fill in the blanks. __________ are the variables declared inside a function.",
      options: ["Immediate variables", "Global variables", "Local variables", "None of these"],
      answer: 2,
      topic: "Python",
      week: 6
    },
    {
      question: "What does the open() function return for file operations?",
      options: ["File mode", "File object", "File name", "None of these"],
      answer: 1,
      topic: "Python",
      week: 6
    },
    {
      question: "Python does not follow rigid indentation.",
      options: ["True", "False"],
      answer: 1,
      topic: "Python",
      week: 6
    },
    {
      question: "Which of the following is used to display an image in Python?",
      options: ["image.show()", "image.open()", "image.name()", "image.mode()"],
      answer: 0,
      topic: "Python",
      week: 6
    },
    {
      question: "Which of the following models does Python follow for networking?",
      options: ["Client-server", "P2P", "All of these", "None of these"],
      answer: 0,
      topic: "Python",
      week: 6
    },
    {
      question: "In Python, 'with' ensures the file is closed after the operation is completed, but not when an exception occurs.",
      options: ["True", "False"],
      answer: 1,
      topic: "Python",
      week: 6
    },
    {
      question: "In Raspberry Pi, GPIO acts only as a digital output.",
      options: ["True", "False"],
      answer: 1,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Which of the following exits the nano editor in the terminal?",
      options: ["Ctrl+O", "Ctrl+X", "Ctrl+A", "None of these"],
      answer: 1,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Does Raspberry Pi provide configuration options for cameras?",
      options: ["Yes", "No"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Does Python provide a module for Pi-camera?",
      options: ["Yes", "No"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Which of the following converts energy to motion?",
      options: ["Actuator", "Raspberry Pi", "All of these", "None of these"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Which of the following is a property of a Relay?",
      options: ["Mechanical switch", "Electrochemical switch", "None of these", "All of these"],
      answer: 3,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Sensors can be neither analog nor digital.",
      options: ["True", "False"],
      answer: 1,
      topic: "RaspberryPi",
      week: 6
    }
    
    
  ,
    {
      question: "Python can only be used to build small applications.",
      options: ["True", "False"],
      answer: 1,
      topic: "Python",
      week: 6
    },
    {
      question: "Which of the following is NOT a Python IDE?",
      options: ["Spyder", "PyCharm", "Both (a) and (b)", "None of these"],
      answer: 3,
      topic: "Python",
      week: 6
    },
    {
      question: "To indicate different blocks of code, Python follows rigid indentation.",
      options: ["False", "True"],
      answer: 1,
      topic: "Python",
      week: 6
    },
    {
      question: "Which of the following is not a data-type in Python?",
      options: ["List", "Branch", "Tuple", "None of these"],
      answer: 1,
      topic: "Python",
      week: 6
    },
    {
      question: "Python allows us to read and write files.",
      options: ["True", "False"],
      answer: 0,
      topic: "Python",
      week: 6
    },
    {
      question: "Which of the following is NOT a mode to open a file?",
      options: ["Read mode", "Write mode", "Append mode", "None of these"],
      answer: 3,
      topic: "Python",
      week: 6
    },
    {
      question: "State whether the following command to install the PIL library in Linux is correct or not.",
      image:"images/ass6que72024.png",
      options: ["Correct", "Incorrect"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "State whether the following statement is correct for creating a socket ‘s’ in python.",
      image:"images/ass6que82024.png",
      options: ["Correct", "Incorrect"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "What is a Raspberry Pi?",
      options: [
        "A computer on your palm",
        "Single board computer",
        "Low cost",
        "All of these"
      ],
      answer: 3,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Which of the following are required for a basic setup of Raspberry Pi?",
      options: ["Monitor", "Keyboard", "Mouse", "All of these"],
      answer: 3,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Which of the following keyboard key combination writes (i.e saves) the code to the file in nano editor?",
      options: ["Ctrl+O", "Ctrl+X", "Both (a) and (b)", "None of these"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "A relay module for Raspberry Pi has how many terminals?",
      options: ["3", "2", "4", "5"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Adafruit provides a library to work with the DHT22 sensor.",
      options: ["True", "False"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "What is the function of the close() function in python programming while handling files?",
      options: [
        "This function does not exist in python",
        "It closes the current connection to the file and ensures that the file is free to use for other resources",
        "None of these",
        "Both (a) and (b)"
      ],
      answer: 1,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Where is the Raspbian image found?",
      options: [
        "It is not available on the Internet",
        "It is available as image file from the Raspberry Pi official website",
        "It can only be purchased from offline vendor",
        "None of these"
      ],
      answer: 1,
      topic: "RaspberryPi",
      week: 6
    },
    
    

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
    question: "What does the following code do?",
    image:"images/ass5que10.png",
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
    image:"images/ass5que112023.png",
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
    image:"images/ass5que112023.png",
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
  ,
    {
      question: "Python is popular for embedded application development as it is a very lightweight programming language.",
      options: ["True", "False"],
      answer: 0,
      topic: "Python",
      week: 6
    },
    {
      question: "Adafruit provides a library to work with DHT22 Sensor.",
      options: ["True", "False"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Consider the following piece of Python code. What is the output?",
      image: "images/ass6que3.png",
      options: ["5", "12", "Code", "&Code"],
      answer: 2,
      topic: "Python",
      week: 6
    },
    {
      question: "To indicate different blocks of code, Python follows rigid indentation.",
      options: ["True", "False"],
      answer: 0,
      topic: "Python",
      week: 6
    },
    {
      question: "What is the output of the following line of code in Python?",
      image:"images/ass6que5.png",
      options: [
        "Hi, Welcome to python!",
        "“Hi, Welcome to python!”",
        "Hi, Welcome to python",
        "None of these"
      ],
      answer: 0,
      topic: "Python",
      week: 6
    },
    {
      question: "During remote server access by a Raspberry Pi, where the Raspberry Pi acts as a client, the client needs the following?",
      options: [
        "Only IP address of server",
        "Only port number",
        "Both server IP address and port number",
        "Client’s IP address"
      ],
      answer: 2,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "State whether the following command to install the PIL library is correct or not.",
      image:"images/ass6que7.png",
      options: ["Correct", "Incorrect"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "What is the purpose of the 'w' mode in the open() function in Python?",
      options: [
        "To read a file",
        "To write data to a file, overwriting existing content",
        "To append data to a file",
        "To open a file in read and write mode"
      ],
      answer: 1,
      topic: "Python",
      week: 6
    },
    {
      question: "What will be the output of the given Python program when reading from the file?",
      image:"images/ass6que9.png",
      options: [
        "Writing data",
        "Reading from the file\nWriting data",
        "Error: File not found",
        "None of the above"
      ],
      answer: 1,
      topic: "Python",
      week: 6
    },
    {
      question: "Can we configure Raspberry Pi as a File Server?",
      options: ["Yes", "No"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Which command is used to configure the Raspberry Pi for the camera module?",
      options: [
        "sudo camera-config",
        "sudo raspi-config",
        "sudo enable-camera",
        "sudo pi-setup"
      ],
      answer: 1,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "What is the final step after enabling the camera in the Raspberry Pi configuration?",
      options: [
        "Restart the camera service",
        "Run a camera test command",
        "Reboot the Raspberry Pi",
        "Reinstall the Raspberry Pi OS"
      ],
      answer: 2,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "Which command exits the nano editor?",
      options: ["Ctrl + X", "Ctrl + O", "Ctrl + K", "None of these"],
      answer: 0,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "In a temperature-controlled fan system using a relay, when should the fan turn on?",
      options: [
        "When the relay is manually triggered",
        "When the surrounding temperature is lower than a predefined threshold",
        "When the surrounding temperature exceeds a predefined threshold",
        "When the battery voltage drops below a certain level"
      ],
      answer: 2,
      topic: "RaspberryPi",
      week: 6
    },
    {
      question: "What does the following line of code do?\n\nraspistillcapture -o image.jpg",
      image:"images/ass6que15.png",
      options: [
        "Captures video feed",
        "Captures still image",
        "Both (a) and (b)",
        "None of these"
      ],
      answer: 3,
      topic: "RaspberryPi",
      week: 6
    }  

]
