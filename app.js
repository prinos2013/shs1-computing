const lessons = [
  {
    topic: "1.0 - 2.0 DATA & BOOLEAN LOGIC",
    subtopics: [
      {
        id: "1.0",
        title: "1.0 Data as Bit Pattern Representations",
        notes: `
          <h3>1.1 - 1.3 Bits & Bytes</h3>
          <p>In computers, all data is encoded (represented) in the form of 0s and 1s, known as binary digits (bits)[cite: 2]. These bits are the basic language of computers, telling them what to do and how to represent data[cite: 2]. A bit is the smallest unit of data in computing, with only two possible states: 0 (Off or False) and 1 (On or True)[cite: 2]. A byte is 8 bits formed together[cite: 2].</p>
          <h3>1.4 Numeric Representation</h3>
          <p>In computer science, numbers are represented in binary, which uses only two digits: 0 and 1[cite: 2]. To convert a decimal number to binary, divide the decimal number by 2 and keep the remainder, repeat until the quotient is 0, and write the remainders in reverse order[cite: 2].</p>
          <h3>1.5 Text Representation</h3>
          <p>Computers use standard character encoding schemes to represent text characters, mainly ASCII and Unicode[cite: 2]. Standard ASCII uses 7-bit or 8-bit code to represent 128 characters[cite: 2]. Unicode is a more recent standard that assigns 16-bits per character and supports a global standard for text representation[cite: 2].</p>
          <h3>1.6 - 1.8 Media Representation</h3>
          <p>Computers represent images using tiny units called pixels[cite: 2]. A bitmap is a grid of binary data that represents the color values of pixels[cite: 2]. Sound occurs as an analog signal, so to store sound, computers take rapid "snapshots" (samples) of the sound wave at fixed intervals to convert it to digital[cite: 2]. Digital video is a collection of still images (frames) arranged in a specific order and displayed at high speed[cite: 2].</p>
          <h3>1.9 - 1.10 Files and Transmission</h3>
          <p>A file format is a standard way that information is encoded for storage, dictating how bits are arranged and read by software[cite: 2]. When transmitting data over a network, the computer splits the data into smaller, manageable chunks called Packets to prevent clogging the network[cite: 2].</p>
        `
      },
      {
        id: "2.0",
        title: "2.0 Boolean Logic and Binary",
        notes: `
          <h3>2.1 Boolean Logic</h3>
          <p>Boolean Logic is a special kind of algebra where every result must be one of two values: True or False[cite: 2]. It is the fundamental system that controls how all modern digital devices work[cite: 2].</p>
          <h3>2.3 Logic Operations</h3>
          <p>Logic operations manipulate binary values (0s and 1s) to perform logical tasks[cite: 2].</p>
          <ul>
            <li><strong>AND Operation:</strong> The output is 1 (True) only if input A is 1 AND input B is 1[cite: 2].</li>
            <li><strong>OR Operation:</strong> The output is 1 (True) if at least one input is 1 (True)[cite: 2].</li>
            <li><strong>NOT Operation:</strong> Simply flips or negates the single input value (e.g., 0 becomes 1)[cite: 2].</li>
          </ul>
          <h3>2.7 Types of Computer Memory</h3>
          <p>Primary memory is where the CPU actively works, including RAM (volatile storage for active data) and ROM (non-volatile instructions for booting)[cite: 2]. Secondary memory is used for long-term, permanent storage (like HDDs and SSDs)[cite: 2]. Cache Memory is a small, high-speed memory that acts as a buffer between the CPU and slower RAM[cite: 2].</p>
        `
      }
    ]
  },
  {
    topic: "3.0 - 7.0 HARDWARE & ARCHITECTURE",
    subtopics: [
      {
        id: "3.0",
        title: "3.0 Central Processing Unit (CPU) & 4.0 Machine Cycle",
        notes: `
          <h3>3.0 Central Processing Unit (CPU)</h3>
          <p>The CPU is the "brain" of the computer that manages all work with data, executing instructions and performing calculations[cite: 2]. It includes microscopic transistors that act as tiny electronic switches[cite: 2].</p>
          <ul>
            <li><strong>Control Unit (CU):</strong> Acts as the manager or traffic controller, directing all operations within the CPU[cite: 2].</li>
            <li><strong>Arithmetic and Logic Unit (ALU):</strong> Performs all calculations and logical comparisons[cite: 2].</li>
            <li><strong>Registers:</strong> Small, very fast memory locations inside the CPU, including the Memory Address Register and Program Counter[cite: 2].</li>
          </ul>
          <h3>4.0 Machine Cycle and Embedded Systems</h3>
          <p>The CPU executes instructions through a repeating Fetch-Decode-Execute-Store (FDES) cycle[cite: 2]. Embedded systems are special-purpose computers enclosed within the devices they control (like microwaves or digital watches), operating quickly using ROM-based software[cite: 2].</p>
        `
      },
      {
        id: "5.0",
        title: "5.0 Hardware, Storage & 7.0 Motherboard",
        notes: `
          <h3>5.0 Categories of Computer Hardware</h3>
          <p>Hardware consists of physical devices including Input devices (keyboards, scanners), Output devices (monitors, printers), and Storage devices[cite: 2]. Storage is categorized into Magnetic (HDDs), Optical (CDs), and Flash (SSDs, USB drives)[cite: 2].</p>
          <h3>6.0 Network Storage</h3>
          <p>Network storage includes Cloud Storage (remote servers accessed via the internet) and Network-Attached Storage (NAS) devices connected to local networks for centralized data sharing[cite: 2].</p>
          <h3>7.0 Motherboard Structure</h3>
          <p>The motherboard is a large circuit board that connects all essential computer parts[cite: 2]. Key components include the CPU Socket, RAM Slots, Expansion Slots, and the Chipset (which manages data flow between parts)[cite: 2]. Computers also require cooling systems, like fans, heatsinks, or liquid cooling, to remove heat generated during operation[cite: 2].</p>
        `
      }
    ]
  },
  {
    topic: "8.0 - 12.0 SOFTWARE & NETWORKING",
    subtopics: [
      {
        id: "8.0",
        title: "8.0 Categories of Computer Software",
        notes: `
          <h3>8.0 Software Categories</h3>
          <p>Software is a set of programs that tell the computer hardware what to do[cite: 2].</p>
          <ul>
            <li><strong>Application Software:</strong> Programs designed to carry out specific tasks for the user, such as Productivity (Word, Excel), Multimedia (Photoshop), and Educational software[cite: 2].</li>
            <li><strong>System Software:</strong> Programs that govern hardware, including Operating Systems (Windows, Android), Device Drivers (hardware translators), and Utility Software (antivirus, disk defragmentation)[cite: 2].</li>
          </ul>
        `
      },
      {
        id: "9.0",
        title: "9.0 - 12.0 Computer Networks",
        notes: `
          <h3>9.0 Introduction to Networks</h3>
          <p>A computer network connects two or more computers to facilitate communication and share resources like printers and internet access[cite: 2]. Components include Switches, Routers, Network Interface Cards (NICs), and Firewalls[cite: 2].</p>
          <h3>10.0 Network Systems & Topologies</h3>
          <p>Networks are classified by geography: PAN (Personal), LAN (Local), MAN (Metropolitan), and WAN (Wide Area)[cite: 2]. Topologies define the physical arrangement, including Bus, Star, Ring, Mesh, and Tree[cite: 2].</p>
          <h3>11.0 Architecture & OSI Model</h3>
          <p>Network architectures are generally Client-Server (centralized management) or Peer-to-Peer (decentralized equal devices)[cite: 2]. The OSI Model standardizes communication into 7 layers: Application, Presentation, Session, Transport, Network, Data Link, and Physical[cite: 2].</p>
          <h3>12.0 Network Connections</h3>
          <p>Wireless connections include Bluetooth, NFC, Wi-Fi, and Cellular[cite: 2]. Wired connections utilize Twisted Pair Cables (UTP/STP), Coaxial Cables, or high-bandwidth Fibre Optic Cables made of glass[cite: 2]. Power Line Communication (PLC) uses existing electrical systems to transmit data[cite: 2].</p>
        `
      }
    ]
  },
  {
    topic: "13.0 - 18.0 ALGORITHMS & DATA STRUCTURES",
    subtopics: [
      {
        id: "13.0",
        title: "13.0 Algorithms & 14.0 SDLC",
        notes: `
          <h3>13.0 Algorithms</h3>
          <p>An algorithm is a step-by-step set of well-defined instructions used to solve a specific problem[cite: 2]. They break complex problems down and can be written as Pseudocode (plain English) or visualized using Flowcharts (graphical symbols)[cite: 2].</p>
          <h3>14.0 Program Development Cycle (SDLC)</h3>
          <p>The Software Development Life Cycle ensures software meets client requirements efficiently[cite: 2]. The stages are:</p>
          <ul>
            <li><strong>Analysis:</strong> Understanding functional requirements (inputs, processes, outputs)[cite: 2].</li>
            <li><strong>Design:</strong> Planning via algorithms, flowcharts, and user interface wireframes[cite: 2].</li>
            <li><strong>Coding (Implementation):</strong> Writing the program and debugging Syntax, Run-Time, or Logic errors[cite: 2].</li>
            <li><strong>Testing:</strong> Checking the program using Normal, Extreme (Boundary), and Exceptional data[cite: 2].</li>
          </ul>
        `
      },
      {
        id: "15.0",
        title: "15.0 - 18.0 Data Structures (Arrays, Lists, Trees)",
        notes: `
          <h3>15.0 Data Structures Overview</h3>
          <p>A data structure organizes and stores data efficiently[cite: 2]. They are classified into Linear (sequential access like Arrays, Stacks, Queues) and Non-Linear (hierarchical access like Trees, Graphs)[cite: 2].</p>
          <h3>16.0 Arrays</h3>
          <p>An array is a collection of elements of the same data type stored in contiguous memory locations and accessed via indexes starting from 0[cite: 2]. They can be One-Dimensional (single row) or Two-Dimensional (matrix of rows and columns)[cite: 2].</p>
          <h3>17.0 Linked Lists & Stacks</h3>
          <p>A Linked List is made of nodes containing data and a pointer to the next node, allowing dynamic resizing[cite: 2]. A Stack follows the LIFO (Last In, First Out) principle, using PUSH and POP operations[cite: 2].</p>
          <h3>18.0 Queues, Binary Trees & Graphs</h3>
          <p>A Queue follows the FIFO (First In, First Out) principle[cite: 2]. Binary Trees are non-linear structures where each node has a maximum of two children[cite: 2]. Graphs consist of vertices and edges that can form cycles and multiple connections[cite: 2].</p>
        `
      }
    ]
  },
  {
    topic: "19.0 - 24.0 PYTHON & WEB DEVELOPMENT",
    subtopics: [
      {
        id: "19.0",
        title: "19.0 - 21.0 Python Programming",
        notes: `
          <h3>19.0 Programming Basics</h3>
          <p>Python is a high-level language requiring an Integrated Development Environment (IDE)[cite: 2]. Core functions include <code>print()</code> for output and <code>input()</code> for user data entry[cite: 2]. Comparison operators (==, !=, >, <) evaluate to True or False[cite: 2].</p>
          <h3>20.0 Algorithm Implementation</h3>
          <p>Implementation translates logical steps into actual code[cite: 2]. The Swap Algorithm requires a temporary variable (temp = a, a = b, b = temp) so data is not lost[cite: 2].</p>
          <h3>21.0 Arrays in Python</h3>
          <p>Python uses lists to implement arrays[cite: 2]. Common methods include <code>len()</code> to check size, <code>reverse()</code>, <code>count()</code>, and <code>copy()</code>[cite: 2].</p>
        `
      },
      {
        id: "22.0",
        title: "22.0 - 24.0 Web Technologies & Design",
        notes: `
          <h3>22.0 Web Technologies</h3>
          <p>Web development is split into Front-end (what the user sees) and Back-end (server logic)[cite: 2]. Front-end utilizes HTML for structure, CSS for styling, and JavaScript for interactivity[cite: 2]. A web page includes headings, navigation menus, hyperlinks, forms, and widgets[cite: 2].</p>
          <h3>23.0 Planning & Sitemaps</h3>
          <p>A Web Outline Plan is a blueprint created before coding, involving goal identification and user personas[cite: 2]. A Sitemap is a visual diagram showing the hierarchy and relationships between website pages[cite: 2].</p>
          <h3>24.0 Wireframes & Prototypes</h3>
          <p>Wireframes are grayscale visual sketches focusing on the placement of navigation, text, and media[cite: 2]. Prototypes are interactive representations that demonstrate how the site will function before expensive development begins[cite: 2].</p>
        `
      }
    ]
  }
];

const select = document.getElementById("lessonSelect");

function initDropdown() {
  const defaultOption = document.createElement("option");
  defaultOption.text = "Select a Topic...";
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  lessons.forEach((grp) => {
    const optgroup = document.createElement("optgroup");
    optgroup.label = grp.topic;
    grp.subtopics.forEach((sub) => {
      const opt = document.createElement("option");
      opt.value = sub.id;
      opt.textContent = sub.title;
      optgroup.appendChild(opt);
    });
    select.appendChild(optgroup);
  });
}

function renderLesson() {
  const selectedId = select.value;
  let active = null;
  
  lessons.forEach(grp => {
    const found = grp.subtopics.find(s => s.id === selectedId);
    if (found) active = found;
  });

  if (!active) return;
  
  document.getElementById("lessonTitle").innerText = active.title;
  document.getElementById("lessonContent").innerHTML = active.notes;
}

window.onload = initDropdown;
