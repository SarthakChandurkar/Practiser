const data = [
    // ************************************** Week 9 ****************************************************
    {
      question: "Which component of OpenStack do you use to access all the other components?",
      options: ["Horizon", "Glance", "Neutron", "None of these"],
      answer: 0,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which among the following is NOT a component of OpenStack?",
      options: ["Horizon", "Heat", "Plasma", "Neutron"],
      answer: 2,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Sensor cloud is simply dumping and organizing of sensor data on cloud computing platforms.",
      options: ["True", "False"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which among the following are limitations of traditional Wireless Sensor Networks (WSNs)?",
      options: ["Procurement Issues", "Deployment Issues", "Maintenance Issues", "All of the given"],
      answer: 3,
      topic: "Cloud",
      week: 9
    },
    {
      question: "In a typical sensor cloud architecture, the sensor cloud infrastructure that provides the virtualization lies ______________________________",
      options: ["At the same layer as physical sensor devices", "At the application layer", "In between the physical sensor layer and the application layer", "Sensor cloud does not support virtualization"],
      answer: 2,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Generally speaking, Sensor Cloud Service Providers (SCSPs) are also always the owners of the physical sensors",
      options: ["Yes", "No"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "In a typical sensor cloud architecture with virtualization, one virtual sensor can be associated with how many physical sensors?",
      options: ["Only one", "One or more than one", "None", "Only two"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Sensor virtualization aims to achieve more _________________________ in providing sensor based services",
      options: ["Complexity", "Flexibility"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Suppose that you want to start a business to provide some IoT based application, but you do not have the means to develop the application layer logic, neither you have the means to purchase and deploy physical sensors. You can however, rent cloud servers for use and write interface logic for interfacing with other modules. Which among the following actors will be the most suitable for you?",
      options: ["Physical sensor owner", "Application layer developer", "Sensor Cloud Service Provider (SCSP)", "You cannot start the business"],
      answer: 2,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which among the following is implemented along with sensor cloud to make its services and performance better?",
      options: ["Cashing", "Caching", "Casing", "Calling"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which among the following cases is most likely to reduce the overall price of sensor-cloud implementation provided that the data traverses through multiple sensor hops starting from the origin sensor to the sink node, and provided that all owners are honest and charge for only what is required?",
      options: ["If physical sensors are owned by multiple owners with high profit margin", "If all physical sensors are owned by a single owner with uniform profit margin"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Fog computing is aimed to replace cloud computing completely and has no scope for integration with cloud",
      options: ["True", "False"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Suppose data from an IoT device first goes to Fog layer for some basic processing, after which it goes to Cloud layer for advanced processing, then the processed data comes back to the Fog layer and then, it finally comes back to the origin sensor node. In the return journey no processing of data takes place anywhere, just transfer of data takes place. If ‘Tf’ is the time taken by the data to travel from sensor to fog and vice versa, and ‘Tc’ is the time taken by the data to travel from fog to cloud and vice versa, ‘Tfp’ is the data processing time at fog and ‘Tcp’ is the data processing time at cloud, what is the total round trip time ‘T’ taken by data starting from the origin sensor node, processing the data and then back to the sensor node after being processed.",
      options: ["T = Tf + Tc + Tfp + Tcp", "T = Tf + Tc", "T = 2(Tf + Tc) + Tfp + Tcp", "T = 4(Tf + Tc + Tfp + Tcp)"],
      answer: 2,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Consider the standard Fog computing architecture. In which of the following layer will ‘very time sensitive data’ be processed?",
      options: ["Nearest fog node", "Distant aggregate fog node", "Cloud", "Does not matter"],
      answer: 0,
      topic: "Cloud",
      week: 9
    },
    {
      question: "“Network, Accelerator, Compute and Storage” constitute the part of which view of fog computing architecture, as defined by OpenFog Consortium Architecture Working Group?",
      options: ["System View", "Node View", "Software View", "None of these"],
      answer: 1,
      topic: "Cloud",
      week: 9
    }  
  ,
    {
      question: "Which of the following is not a component of OpenStack?",
      options: ["Suse", "Nova", "Swift", "All of these"],
      answer: 0,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Where is the sensed data sent for further processing in WSNs?",
      options: ["Client node", "Central node", "Collect node", "Sink node"],
      answer: 3,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Select the statement(s) that denote the advantages of cloud computing. Statement I: Elasticity Statement II: Pay-per-use Statement III: Self Service",
      options: ["Statement I", "Statement II", "Statements I, II, and III", "None of these"],
      answer: 2,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which of the following is a limitation of WSN?",
      options: ["Price", "Post deployment maintenance", "Battery lifetime", "All of these"],
      answer: 3,
      topic: "Cloud",
      week: 9
    },
    {
      question: "The managerial role is played by __________ in sensor-cloud architecture.",
      options: ["End-users", "Sensor-Cloud Service Provider", "None of these", "All of these"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "The optimal composition of __________ is a management issue in sensor-cloud.",
      options: ["Logistics", "Pricing", "Caching", "Virtual sensor nodes"],
      answer: 3,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Who coined the term Fog computing?",
      options: ["IBM", "CISCO", "All of these", "None of these"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "What are the issues related to the current cloud model?",
      options: ["Volume", "Latency", "All of these", "None of these"],
      answer: 2,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Sensor data is processed in the cloud before it is sent to the fog.",
      options: ["True", "False"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "What is the type of received data according to which Fog nodes work?",
      options: ["Non-time sensitive data", "Very time-sensitive data", "Less time-sensitive data", "All of these"],
      answer: 3,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which of the following are the advantages of Fog?",
      options: ["Quick decision making", "Nodes can be mobile", "Reduces the risk of latency", "All of these"],
      answer: 3,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which of the following requires the analysis at the nearest node?",
      options: ["Non-time sensitive data", "Most time-sensitive data", "Less time-sensitive data", "None of these"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Fog nodes cannot connect and leave the network when necessary.",
      options: ["True", "False"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which of the following is used by the fog applications to increase the speed of service accessibility?",
      options: ["Low power", "Good network connection", "Accelerators", "Analytics"],
      answer: 2,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Fill in the blank. The concept of ________ enables physical hardware to be shared among multiple entities.",
      options: ["Hardware virtualization", "Software virtualization", "Module virtualization", "All of these"],
      answer: 0,
      topic: "Cloud",
      week: 9
    }  
  ,
    {
      question: "Which of the following is/are the advantages of cloud computing?",
      options: ["Elasticity", "Pay-per-use", "Self Service", "All of the above"],
      answer: 3,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Fill in the blanks. Fog computing is an intermediate layer between __________ and _________.",
      options: ["Dew and devices", "Cloud and devices", "Cloud and server", "None of these"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "The managerial role is played by __________ in sensor-cloud architecture.",
      options: ["End-users", "Sensor-Cloud Service Provider", "Neither a nor b", "Both a and b"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which of the following is not a component of OpenStack?",
      options: ["Suse", "Nova", "Swift", "All of these"],
      answer: 0,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Who coined the term Fog computing?",
      options: ["IBM", "CISCO", "All of these", "None of these"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Fill in the blank. The concept of ________ enables physical hardware to be shared among multiple entities.",
      options: ["Hardware virtualization", "Software virtualization", "Module virtualization", "All of these"],
      answer: 0,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Openstack is a free open source software for cloud framework simulation and experimentation with various cloud applications.",
      options: ["True", "False"],
      answer: 0,
      topic: "Cloud",
      week: 9
    },
    {
      question: "In IoT, temporal sensitivity of data DOES NOT play an important role",
      options: ["True", "False"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which among the following is NOT a component of OpenStack.",
      options: ["Horizon", "Heat", "Stellar", "Neutron"],
      answer: 2,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which among the following is the principal feature of sensor clouds, with respect to sensor nodes?",
      options: ["Sensor monitoring", "Sensor instantiation", "Sensor virtualization", "Sensor collection"],
      answer: 2,
      topic: "Cloud",
      week: 9
    },
    {
      question: "The optimal composition of __________ is a management issue in sensor-cloud.",
      options: ["Logistics", "Pricing", "Caching", "Virtual sensor nodes"],
      answer: 3,
      topic: "Cloud",
      week: 9
    },
    {
      question: "How many different types of caching mechanism are there in sensor cloud?",
      options: ["1", "4", "2", "3"],
      answer: 2,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Data from an IoT device is transferred to cloud via a network, which is then processed at the cloud and then a response is sent back to the IoT device from the cloud after processing. The time it takes for one-way data transfer between the node and cloud is 10s and the data processing time at the cloud is ‘x’ seconds. It takes a total of 25s for the entire to and fro transfer of data between the sensor and cloud along with processing at the cloud. What is the value of x?",
      options: ["10s", "5s", "15s", "20s"],
      answer: 1,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which among the following is true?",
      options: [
        "Fog computing acts as a complement to cloud computing.",
        "Fog computing is a replacement for cloud computing.",
        "Fog computing and cloud computing are the same.",
        "Fog computing is more powerful than cloud computing (with respect to resources)."
      ],
      answer: 0,
      topic: "Cloud",
      week: 9
    },
    {
      question: "Which component of OpenStack do you use to access all the other components?",
      options: ["Horizon", "Glance", "Neutron", "None of these"],
      answer: 0,
      topic: "Cloud",
      week: 9
    }
  ,  
  // ********************************** Week 2 *******************************************************
    {
      question: "The full form of MQTT is",
      options: [
        "Message Queue Telemetry Transport",
        "Message Query Telemetry Transport",
        "Message Queue Telemedicine Transport",
        "None of these"
      ],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "In MQTT, a ________________ controls the publish-subscribe messaging pattern.",
      options: [
        "Publishers",
        "Message Broker",
        "Subscribers",
        "All of these"
      ],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "Which of the following is NOT a component of MQTT?",
      options: [
        "Publishers",
        "Users",
        "Brokers",
        "None of these"
      ],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "______________ is an extension of MQTT which uses lightweight attribute-based encryption. It has ___________ main stages.",
      options: [
        "SMQTT, three",
        "BMQTT, three",
        "SMQTT, four",
        "None of these"
      ],
      answer: 2,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "Which of the following is based on the Request-Response model between end-points?",
      options: [
        "MQTT",
        "CoAP",
        "Both (a) and (b)",
        "Neither (a) nor (b)"
      ],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "The two sub-layers of CoAP are -",
      options: [
        "Messaging and Holding",
        "Messaging and Backoff",
        "Messaging and Teardown",
        "Messaging and Request/response"
      ],
      answer: 3,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "Which of the following is used for real-time exchange of structured data?",
      options: [
        "MQTT",
        "SMQTT",
        "XMPP",
        "CoAP"
      ],
      answer: 2,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "XMPP uses the ________________ architecture.",
      options: [
        "Publish-subscribe",
        "Client-server",
        "Both (a) and (b)",
        "Neither (a) nor (b)"
      ],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "With respect to AMQP, which of the following message delivery guarantees allow for each message to be delivered certainly as well as to be delivered multiple times?",
      options: [
        "At-least-once",
        "At-most-once",
        "Exactly-once",
        "Both (a) and (b)"
      ],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "Which of the following is/are NOT an AMQP frame type?",
      options: [
        "Open",
        "Close",
        "End",
        "None of these"
      ],
      answer: 3,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "Which of the following is/are NOT the function/functions of the Bindings component of the AMQP protocol?",
      options: [
        "Receives messages and routes them to queues",
        "Separate queues for separate business process",
        "Consumer receive messages from queues",
        "All of these"
      ],
      answer: 3,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "Which of the following is/are NOT exchange types in AMQP?",
      options: [
        "Direct",
        "Indirect",
        "Fan-out",
        "Topic"
      ],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "State whether the following statement is True or False.\nStatement: The IEEE 802.15.4 is a well-known standard for low data-rate Wireless Personal Area Network (WPAN).",
      options: [
        "True",
        "False"
      ],
      answer: 0,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "The networking topologies supported in the IEEE 802.15.4 are -",
      options: [
        "Only Star",
        "Star and Mesh",
        "Only Mesh",
        "None of these"
      ],
      answer: 1,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "State whether the following statement is True or False.\nStatement: Periodic transmission of beacon messages does not occur in beacon enabled networks (IEEE 802.15.4).",
      options: [
        "False",
        "True"
      ],
      answer: 0,
      topic: "Connectivity technologies",
      week: 2
    }  
  ,
    {
      question: "The full form of MQTT is",
      options: [
        "Message Query Telemetry Transport",
        "Message Queue Telemetry Transport",
        "Message Queue Telemedicine Transport",
        "None of these"
      ],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "In MQTT, a ________________ controls the publish-subscribe messaging pattern.",
      options: ["Message Broker", "Publishers", "Subscribers", "All of these"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "Which of the following is NOT a Data Protocol in IoT?",
      options: ["MQTT", "CoAP", "Websocket", "None of these"],
      answer: 3,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "In MQTT for IoT, the Publishers are ______________.",
      options: ["Lightweight sensors", "Actuators", "Processing units", "None of these"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "Which of the following is NOT a method in MQTT?",
      options: ["Break", "Connect", "Disconnect", "None of these"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "Which of the following protocols in IoT have been designed for Machine to Machine (M2M) applications such as smart energy and building automation?",
      options: ["MQTT", "CoAP", "Websocket", "All of these"],
      answer: 1,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "Similar to HTTP, CoAP utilizes which of the following for operation?",
      options: ["GET", "PUT", "PUSH", "All of these"],
      answer: 3,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "What is the full form of XMPP in IoT?",
      options: [
        "Extensible Markup Page Processing",
        "Extensible Messaging and Presence Protocol",
        "Both (a) and (b)",
        "Neither (a) nor (b)"
      ],
      answer: 1,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "State whether the following statement is True or False.\n\nStatement: XMPP is an open standard protocol.",
      options: ["True", "False"],
      answer: 0,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "What is the full form of AMQP in the context of IoT protocol?",
      options: [
        "Another Message Queuing Protocol",
        "Anchored Message Queuing Protocol",
        "Advanced Message Queuing Protocol",
        "None of these"
      ],
      answer: 2,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "What is the basic unit of data in the AMQP protocol?",
      options: ["Chunk", "Byte", "Frame", "None of these"],
      answer: 2,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "Which of the following is/are exchange types in AMQP?",
      options: ["Direct", "Fan-out", "Topic", "All of these"],
      answer: 3,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "IoT networks can be classified in which of the following type/types?",
      options: ["Non-Beacon Enabled", "Beacon Enabled", "None of these", "Both (a) and (b)"],
      answer: 3,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "The OSI model has __________ layers.",
      options: ["6", "7", "4", "8"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "The “Destination Address” in the IPv4 packet represents which of the following?",
      options: [
        "The destination node address of the packet",
        "The intermediate hop in the network",
        "Both (a) and (b)",
        "None of these"
      ],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    }  
  ,
    {
      question: "Based on functionality, MQTT is a _______ protocol.",
      options: ["Transport", "Data", "Semantic", "None of these"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "MQTT is designed for -",
      options: ["Remote connections", "Limited bandwidth", "Both (a) and (b)", "Neither (a) nor (b)"],
      answer: 2,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "MQTT protocol follows _____________ paradigm for exchanging messages.",
      options: ["Client-Server", "Publish-Subscribe", "Both (a) and (b)", "None of these"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "State True or False.\n\nStatement: “In MQTT, the Subscribers are Lightweight Sensors.”",
      options: ["True", "False"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "Which of the following is an MQTT component?",
      options: ["Middleman", "Mules", "Both (a) and (b)", "None of these"],
      answer: 3,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "State True or False.\n\nA topic in MQTT can only be numbers.",
      options: ["False", "True"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "State True or False.\n\nThere are only two methods specified by the MQTT protocol.",
      options: ["False", "True"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "The Publish/Subscribe architecture in MQTT is __________ driven.",
      options: ["Event", "Pulse", "Sound", "None of these"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "State True or False.\n\nThe topic is the routing information for the broker.",
      options: ["True", "False"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "CoAP is _____________ and ____________.",
      options: ["Based on HTTP", "Is designed for M2M applications", "None of these", "Both (a) and (b)"],
      answer: 3,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "In CoAP, client-server interaction is asynchronous over a datagram transport protocol such as ____________.",
      options: ["UDP", "TCP", "IP", "XMP"],
      answer: 0,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "What is the full form of AMQP?",
      options: [
        "Advanced Message Querying Protocol",
        "Advanced Message Quality Protocol",
        "Advanced Message Queuing Protocol",
        "None of these"
      ],
      answer: 2,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "AMQP has _______ number of frame types.",
      options: ["6", "3", "5", "9"],
      answer: 3,
      topic: "Connectivity technologies",
      week: 2
    },
    {
      question: "State True or False.\n\nStatement: “The OSI model has 7 layers.”",
      options: ["True", "False"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 2
    },
    {
      question: "The “Destination Address” in the IPv4 packet represents which of the following?",
      options: [
        "The source node address of the packet",
        "The intermediate hop in the network",
        "Both (a) and (b)",
        "Neither (a) nor (b)"
      ],
      answer: 3,
      topic: "Basics of IoT networking",
      week: 2
    }
  ,  
  // ****************************** Week 1 ************************************************
    {
      question: "Which of the following are the enablers of IoT?",
      options: ["RFID", "Nanotechnology", "Sensors", "All of the these"],
      answer: 3,
      topic: "Basics of IoT",
      week: 1
    },
    {
      question: "Which of the following is/are NOT a characteristic of IoT?",
      options: [
        "Efficient, scalable and associated architecture.",
        "Ambiguous naming and addressing.",
        "Abundance of sleeping nodes, mobile and non-IP devices.",
        "None of these"
      ],
      answer: 1,
      topic: "Basics of IoT",
      week: 1
    },
    {
      question: "State whether the following statement is True or False.\n\nStatement: The increasing number of devices in IoT is expected to result in an address crunch.",
      options: ["True", "False"],
      answer: 0,
      topic: "Basics of IoT",
      week: 1
    },
    {
      question: "State whether the following statement is True or False.\n\nStatement: The gateway has a unique network prefix, which can be used to identify them globally.",
      options: ["True", "False"],
      answer: 0,
      topic: "Basics of IoT",
      week: 1
    },
    {
      question: "Sometimes, when there is a need for the nodes to communicate directly to the Internet, ________________ can be used.",
      options: ["Sensors", "Actuators", "Tunneling", "None of these"],
      answer: 2,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "In _______________ a node/network is connected to multiple networks for improved reliability.",
      options: ["Transparent roaming", "Multi-homing", "None of these", "Both (a) and (b)"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "The IPv6 notation uses ___________________ values.",
      options: ["Roman", "Hexadecimal", "Both (a) and (b)", "None of these"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "A _____________ detects (senses) changes in the ambient conditions or in the state of another device or a system, and forwards or processes this information in a certain manner.",
      options: ["Sensor", "Actuator", "Both (a) and (b)", "None of these"],
      answer: 0,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "A microphone is an example of an _____________.",
      options: ["Input device and actuator", "Only actuator", "Only Transducer", "Input device and transducer"],
      answer: 3,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "The ________________ of a sensor is the smallest change it can detect in the quantity that it is measuring.",
      options: ["Resolution", "Bias", "Noise", "None of these"],
      answer: 0,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "Based on the data type, sensors are classified as _______________________.",
      options: ["Scalar and Vector/Multimedia", "Only scalar", "Both (a) and (b)", "Only vector"],
      answer: 0,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "Solenoid valve is an example of ______________________.",
      options: ["Sensor", "Actuator", "Processing unit", "None of these"],
      answer: 1,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "An actuator requires a ______________________ and ______________________.",
      options: ["Control signal and a bias signal", "Control signal and a source of energy", "Noise signal and a source of energy", "None of these"],
      answer: 1,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "State whether the following statement is True or False.\n\nStatement: Pneumatic rack and pinion actuators are used for valve controls of water pipes.",
      options: ["True", "False"],
      answer: 0,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "Which of the following is NOT a function of an IoT gateway?",
      options: ["Switching", "Routing", "Protocol conversion", "Generating noise"],
      answer: 3,
      topic: "Basics of IoT networking",
      week: 1
    }  
  ,
    {
      question: "What is the full form of IoT?",
      options: ["Internet of Tasks", "Internet of Things", "Internet of Tasks", "None of these"],
      answer: 1,
      topic: "Basics of IoT",
      week: 1
    },
    {
      question: "Which of the following technologies have unified and has resulted in the evolution of IoT?",
      options: ["Low-power embedded systems", "Cloud Computing", "Machine Learning", "All of these"],
      answer: 3,
      topic: "Basics of IoT",
      week: 1
    },
    {
      question: "Which of the following are the enablers of IoT?",
      options: ["RFID", "Nanotechnology", "Sensors", "All of these"],
      answer: 3,
      topic: "Basics of IoT",
      week: 1
    },
    {
      question: "Which of the following is/are a function of an IoT Gateway?",
      options: ["Connects the IoT LAN to a WAN", "Can implement several LAN and WAN", "Forwards packets between LAN and WAN on the IP layer", "All of these"],
      answer: 3,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "State whether the following statement is True or False. Statement: “The same address of an IoT device may be repeated in the domain of another gateway. The gateway has a unique network prefix, which can be used to identify them globally.”",
      options: ["True", "False"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "In _______________ a node/network is connected to multiple networks for improved reliability.",
      options: ["Transparent roaming", "Multi-homing", "None of these", "Both (a) and (b)"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "The IPv4 notation uses ___________________ number of bits to represent an address.",
      options: ["33", "32", "Both (a) and (b)", "None of these"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "The “Source Address” field in the IPv6 header is of __________ bits in length.",
      options: ["32", "64", "128", "None of these"],
      answer: 2,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "A device which detects or measures a physical property and records, indicates, or otherwise responds to it is called _________________?",
      options: ["A sensor", "An actuator", "A Transducer", "A processor"],
      answer: 0,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "A microphone is an example of an _____________.",
      options: ["Input device and actuator", "Only actuator", "Only Transducer", "Input device and transducer"],
      answer: 3,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "State whether the following statement is True or False. Statement: A sensor is only sensitive to the measured property for which it has been made (e.g., A temperature sensor senses the ambient temperature of a room.)",
      options: ["True", "False"],
      answer: 0,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "Based on the data type, sensors are classified as _______________________",
      options: ["Only scalar", "Only vector", "Scalar and Vector/Multimedia", "None of these"],
      answer: 2,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "State whether the following statement is True or False. Statement: The more the resolution of a sensor, the less accurate its precision.",
      options: ["True", "False"],
      answer: 1,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "The sensitivity of a sensor under real conditions may differ from the value specified. This is called ____________________.",
      options: ["Physical error", "Sensitivity error", "Rounding error", "None of these"],
      answer: 1,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "A sensor node is made up of which of the following?",
      options: ["Sensor/Sensing units", "A processing unit", "A power unit", "All of these"],
      answer: 3,
      topic: "Sensors and Actuators",
      week: 1
    }
    ,  
    {
      question: "IoT stands for ____________.",
      options: ["Internet of Tasks", "Internet of Tuples", "Internet of Things", "None of these"],
      answer: 2,
      topic: "Basics of IoT",
      week: 1
    },
    {
      question: "Which of the following technologies have unified and has resulted in the evolution of IoT?",
      options: ["High-power embedded systems", "Super Computing", "Engine Technology", "None of these"],
      answer: 3,
      topic: "Basics of IoT",
      week: 1
    },
    {
      question: "Which of the following are the enables of IoT?",
      options: ["RFID", "Nanotechnology", "Sensors", "All of these"],
      answer: 3,
      topic: "Basics of IoT",
      week: 1
    },
    {
      question: "Which of the following is NOT a function of an IoT LAN?",
      options: ["Long range communication, global", "World wide connections", "Both (a) and (b)", "Neither (a) Nor (b)"],
      answer: 2,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "State whether the following statement is True or False. Statement: The integration of existing devices, smart devices, and constrained nodes in a singular framework is one of the reasons for the address crunch in IoT.",
      options: ["True", "False"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "State True or False. Statement: “In Multi-homing, a node/network is connected to a single network for improved reliability.",
      options: ["True", "False"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "Which of the following is/are the approach/approaches for multi-homing?",
      options: ["Proxy-based approach", "Gateway-based approach", "Both (a) and (b)", "None of these"],
      answer: 2,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "IPv6 uses ____________ notation for its representation.",
      options: ["Hexadecimal", "Binary", "Decimal", "None of these"],
      answer: 0,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "State True or False. The parameters sensed by a sensor may be sent to the cloud for further processing.",
      options: ["False", "True"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "The IPv6 notation uses ___________________ number of bits to represent an address.",
      options: ["64", "128", "Both (a) and (b)", "Neither (a) nor (b)"],
      answer: 1,
      topic: "Basics of IoT networking",
      week: 1
    },
    {
      question: "A sensor is -",
      options: [
        "Only sensitive to the measured property",
        "Insensitive to any other property that what the sensor is made to sense",
        "Both (a) and (b)",
        "None of these"
      ],
      answer: 2,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "We classify sensors based on -",
      options: ["Output", "Data type", "Both (a) and (b)", "None of these"],
      answer: 2,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "Which of the following is correct statement?",
      options: [
        "Controlling AC loads using low DC signals",
        "Relays are electromechanical",
        "Relays are actuators",
        "All of these"
      ],
      answer: 3,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "Based on the output, sensors are classified as ____________________.",
      options: ["Analog", "Digital", "Both (a) and (b)", "Neither (a) nor (b)"],
      answer: 2,
      topic: "Sensors and Actuators",
      week: 1
    },
    {
      question: "Soft actuators are -",
      options: ["Polymer-based", "Mechanical", "Electromechanical", "None of these"],
      answer: 0,
      topic: "Sensors and Actuators",
      week: 1
    }  
  ,
  // ****************************** Week 8 ************************************************
  {
    question: "Traditional Wireless Mobile Networks are cost expensive in terms of _____________?",
    options: ["Only CAPEX", "Only OPEX", "Both CAPEX and OPEX", "Neither CAPEX and OPEX"],
    answer: 2,
    topic: "SDN",
    week: 8
  },
  {
    question: "High mobility of users is one of the key challenges in rule placement for software defined wireless mobile networks.",
    options: ["True", "False"],
    answer: 0,
    topic: "SDN",
    week: 8
  },
  {
    question: "Which among the following is a solution for mobility-aware flow rule placement in SDIoT?",
    options: ["Mobility-Flow", "Mobile-Flow", "Mobi-Flow", "M-Flow"],
    answer: 2,
    topic: "SDN",
    week: 8
  },
  {
    question: "Cloud, Utility, Grid and ______________________ have been the major trends in computing.",
    options: ["Clone", "Cluster", "Closure", "Cloud"],
    answer: 1,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Cloud computing models allow different users to share the same physical resources?",
    options: ["True", "False"],
    answer: 0,
    topic: "Cloud",
    week: 8
  },
  {
    question: "As per NIST Visual Model of Cloud Computing, ‘Hybrid Cloud’ model and PaaS model both fall in the same category.",
    options: ["True", "False"],
    answer: 1,
    topic: "Cloud",
    week: 8
  },
  {
    question: "When you are accessing Google Docs or Microsoft Word online for document writing without installing them, which cloud service model are you using?",
    options: ["SaaS", "PaaS", "IaaS", "DaaS"],
    answer: 0,
    topic: "Cloud",
    week: 8
  },
  {
    question: "An organization wants to store general data in global cloud servers while keeping sensitive data on-premise. Which cloud model should it use?",
    options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Any of these"],
    answer: 2,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Cloud services and resources should be rapidly ______________ in order to achieve their required performance.",
    options: ["Entrusted", "Elastic", "Enterprise", "None of the given"],
    answer: 1,
    topic: "Cloud",
    week: 8
  },
  {
    question: "A startup wants to develop an online book delivery app but lacks storage and networking infrastructure. Which cloud service model should it use?",
    options: ["Only SaaS", "Neither PaaS nor IaaS", "Both PaaS and IaaS can be adopted", "Neither SaaS, PaaS, or IaaS"],
    answer: 2,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Data security and client authentication is an issue in which of the following cloud service models?",
    options: ["SaaS", "SaaS and PaaS", "IaaS", "All of them"],
    answer: 3,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Network, ___________________ and application level securities are the three aspects of cloud infrastructure security.",
    options: ["Client", "Web", "Host", "Wireless"],
    answer: 2,
    topic: "Cloud",
    week: 8
  },
  {
    question: "When a new user logs into a cloud framework, the first thing that needs to be done is ______________________________.",
    options: ["User should be authenticated", "User should immediately be granted all the resources", "User should log off", "User should be penalized"],
    answer: 0,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Service Level Agreements (SLAs) are mutually agreed by the client and cloud service provider. What views do SLAs provide?",
    options: ["Customer Point of View", "CSP Point of View", "Both Customer and CSP Point of View", "Neither Customer nor CSP Point of View"],
    answer: 2,
    topic: "Cloud",
    week: 8
  },
  {
    question: "CloudAnalyst simulation tool provides GUI and is written on top of CloudSim modules.",
    options: ["Yes", "No"],
    answer: 0,
    topic: "Cloud",
    week: 8
  }
  ,
  {
    question: " ___________________ refers to heterogeneous computing nodes distributed over a wide area to perform very large tasks.",
    options: ["Cluster Computing", "Utility Computing", "Grid Computing", "None of these"],
    answer: 2,
    topic: "Cloud",
    week: 8
  }
  ,
  {
    question: "Which of these is used for efficient base-station coordination for addressing inter-cell interference?",
    options: [
      "Path management",
      "Routing protocols",
      "Flow-table paradigm",
      "Logically centralized control"
    ],
    answer: 3,
    topic: "SDN",
    week: 8
  },
  {
    question: "Which of these takes last k-th location instances to predict the next location in Mobi-Flow?",
    options: [
      "Order-K Markov predictor",
      "Flow-rule placement",
      "All of these",
      "None of these"
    ],
    answer: 0,
    topic: "SDN",
    week: 8
  },
  {
    question: "What are the two components of ODIN?",
    options: [
      "Odin server and agent",
      "Odin server and client",
      "Odin agent and master",
      "None of these"
    ],
    answer: 2,
    topic: "SDN",
    week: 8
  },
  {
    question: "Which of the following is placed to deal with mice-flows?",
    options: [
      "Flow rules",
      "Exact rules",
      "Match rules",
      "Wild card rules"
    ],
    answer: 3,
    topic: "SDN",
    week: 8
  },
  {
    question: "Which of the following is a property of cloud computing?",
    options: [
      "On-demand network access",
      "High level generalization of computation",
      "On-demand services",
      "All of these"
    ],
    answer: 3,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Which of the following statements are true about the different types of cloud?",
    image: "images/ass8que72024.png",
    options: [
      "Statements I and II",
      "Statements I and III",
      "Statements II and III",
      "Statement I, II and III"
    ],
    answer: 3,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Fill in the blank. ____________ means independent of device or location.",
    options: [
      "Scalable",
      "Reliability",
      "Agile",
      "Ubiquitous"
    ],
    answer: 3,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Fill in the blank. ____________ represents the on-demand delivery of computing infrastructure in the cloud.",
    options: [
      "Software-as-a-Service",
      "Storage-as-a-Service",
      "Network-as-a-Service",
      "Infrastructure-as-a-Service"
    ],
    answer: 3,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Fill in the blank. Hybrid cloud is a blend of ____________ cloud.",
    options: [
      "Public and private",
      "SaaS and PaaS",
      "All of these",
      "None of these"
    ],
    answer: 0,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Software-as-a-Service does not support a fully pay-as-you-go model.",
    options: [
      "True",
      "False"
    ],
    answer: 1,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Which of the following describes the quality of services expected by the customer?",
    options: [
      "Mass production",
      "Internet evolution",
      "Automation",
      "Service Level Agreement"
    ],
    answer: 3,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Which of the following are the accesses enabled by the access control layers in the cloud?",
    options: [
      "Service access",
      "Server access",
      "Database access",
      "All of these"
    ],
    answer: 3,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Reputation refers to the belief of an entity’s standing by the community.",
    options: [
      "True",
      "False"
    ],
    answer: 0,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Which of the following is true about GreenCloud?",
    options: [
      "GreenCloud monitors the energy consumption of servers, switches, etc.",
      "GreenCloud was developed as an extension of NS2.",
      "All of these",
      "None of these"
    ],
    answer: 2,
    topic: "Cloud",
    week: 8
  }
  ,
  {
    question: "What is Sensor Openflow?",
    options: [
      "A traditional routing protocol",
      "A queue management protocol",
      "An SDN protocol tailored for IoT devices",
      "A physical connectivity protocol."
    ],
    answer: 2,
    topic: "SDN",
    week: 8
  },
  {
    question: "With respect to Mobi-Flow, how does Mobi-Flow fare in comparison to Conventional networking in terms of message overhead?",
    options: [
      "Mobi-Flow > Conventional",
      "Mobi-Flow < Conventional",
      "Mobi-Flow = Conventional",
      "None of the given"
    ],
    answer: 1,
    topic: "SDN",
    week: 8
  },
  {
    question: "Virtual Machines came before Cloud Computing.",
    options: ["True", "False"],
    answer: 0,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Private cloud services cannot provide Software-as-a-Service (SaaS).",
    options: ["True", "False"],
    answer: 1,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Which among the following is a solution for mobility-aware flow rule placement in SDIoT?",
    options: ["Mobility-Flow", "Mobile-Flow", "Mobi-Flow", "M-Flow"],
    answer: 2,
    topic: "SDN",
    week: 8
  },
  {
    question: "An organization A wants to deploy a cloud infrastructure, whereby it wants to push majority of the data to a cloud whose servers can be situated anywhere within the globe, but it wants certain private data to be pushed only to cloud servers that are present on-premise and are accessible by only authenticated members of the organization. In this context which among the following deployment model should be used?",
    options: ["Private Cloud", "Public Cloud", "Hybrid Cloud", "Any of these"],
    answer: 2,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Which among the following is the most on-premise cloud deployment model?",
    options: ["Private Cloud", "Public cloud", "IaaS", "PaaS"],
    answer: 0,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Which of the following type of client requires constant communication/connection with the cloud server?",
    options: ["Thin client", "Thick client", "Both thin and thick clients", "None of these"],
    answer: 0,
    topic: "Cloud",
    week: 8
  },
  {
    question: "What does ‘CIA’ in cloud data security stand for?",
    options: [
      "Confidentiality, Integrity, Availability",
      "Confidentiality, Inheritance, Automation",
      "Congestion, Integrity, Authentication",
      "Criticality, Integrity, Accountability"
    ],
    answer: 0,
    topic: "Cloud",
    week: 8
  },
  {
    question: "When you are accessing Spotify online for listening to music from your browser without specifically installing them, which among the following cloud service models is the most appropriate one that you are using.",
    options: ["SaaS", "PaaS", "IaaS", "DaaS"],
    answer: 0,
    topic: "Cloud",
    week: 8
  },
  {
    question: "With respect to Cloud Computing security, which of the following are necessary?",
    options: [
      "Network Level Security but not Host Level Security",
      "Application Level Security but not Host Level Security",
      "Host Level Security but not Network Level Security",
      "All of Network, Host and Application Level Security."
    ],
    answer: 3,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Data security and client authentication is an issue in which of the following cloud service models?",
    options: ["SaaS", "SaaS and PaaS", "IaaS", "All of them"],
    answer: 3,
    topic: "Cloud",
    week: 8
  },
  {
    question: "What is the role of a Hypervisor (most probable answer)?",
    options: [
      "To facilitate installation of a router",
      "To provide a platform for executing virtual machines",
      "To facilitate sensor fabrication",
      "To communicate between switches themselves."
    ],
    answer: 1,
    topic: "Cloud",
    week: 8
  },
  {
    question: "Which of the following is a limitation of SaaS?",
    options: ["Remote software execution", "Platform independence", "Centralized control", "None of these."],
    answer: 2,
    topic: "Cloud",
    week: 8
  },
  {
    question: "____________ means independent of device or location.",
    options: ["Scalable", "Reliability", "Agile", "Ubiquitous"],
    answer: 3,
    topic: "Cloud",
    week: 8
  }

  ,

  // ****************************** Week 7 ************************************************
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
    image: "images/ass6que72024.png",
    options: ["Correct", "Incorrect"],
    answer: 0,
    topic: "RaspberryPi",
    week: 6
  },
  {
    question: "State whether the following statement is correct for creating a socket ‘s’ in python.",
    image: "images/ass6que82024.png",
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


// ****************************** Week 5 ************************************************
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
    image: "images/ass5que10.png",
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
    image: "images/ass5que112023.png",
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
    image: "images/ass5que112023.png",
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
  // ****************************** Week 6 ************************************************
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
    image: "images/ass6que5.png",
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
    image: "images/ass6que7.png",
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
    image: "images/ass6que9.png",
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
    image: "images/ass6que15.png",
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
