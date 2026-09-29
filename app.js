const lessons = [
  {
    topic: "1.0 DATA AS BIT PATTERN REPRESENTATIONS",
    subtopics: [
      {
        id: "1.1",
        title: "1.1 - 1.3 Bits & Bytes",
        notes: `
          <p>In computers, all data is encoded (represented) in the form of 0s and 1s, known as binary digits (bits)[cite: 1]. These bits are the basic language of computers, telling them what to do and how to represent data[cite: 1]. Bits combine in patterns to represent: Characters in alphabets (e.g., h-e-l-l-o), Numeric values, Images, and Sound[cite: 1].</p>
          <h3>1.1 BIT</h3>
          <p>A bit is the smallest unit of data in computing, with only two possible states: i. 0 (Off or False) ii. 1 (On or True)[cite: 1].</p>
          <h3>1.2 BIT PATTERN</h3>
          <p>It is a series of 0s and 1s, like 1010 or 1101[cite: 1]. This is how computers understand and process data[cite: 1]. So data is represented as bit patterns, using sequences of 0s and 1s to encode different types of information[cite: 1].</p>
          <h3>1.3 BYTE</h3>
          <p>It is 8 bits formed together[cite: 1]. (8 bits = 1 byte)[cite: 1].</p>
        `
      },
      {
        id: "1.4",
        title: "1.4 Numeric Representation",
        notes: `
          <p>In computer science, numbers are represented in binary, which uses only two digits: 0 and 1[cite: 1].</p>
          <h3>1.4.1 DECIMAL TO BINARY</h3>
          <p>To convert a decimal number to binary:</p>
          <ul>
            <li>i. Divide the decimal 16 (dividend) number by 2 (divisor) and keep the remainder[cite: 1].</li>
            <li>ii. Repeat the process until the quotient is 0[cite: 1].</li>
            <li>iii. Write the remainders in reverse order to get the binary representation[cite: 1].</li>
          </ul>
          <p><strong>Example: Convert 16 to binary</strong><br>
          16 ÷ 2 = 8 remainder 0[cite: 1]<br>
          8 ÷ 2 = 4 remainder 0[cite: 1]<br>
          4 ÷ 2 = 2 remainder 0[cite: 1]<br>
          2 ÷ 2 = 1 remainder 0[cite: 1]<br>
          1 ÷ 2 = 0 remainder 1[cite: 1]<br>
          Binary representation: 10000[cite: 1]</p>
          
          <h3>1.4.2 BINARY TO DECIMAL</h3>
          <p>To convert a binary number to decimal:</p>
          <ul>
            <li>Multiply each binary digit by its place value[cite: 1].</li>
            <li>Add the results to get the decimal equivalent[cite: 1].</li>
          </ul>
          <p><strong>Example: Convert 10110 to decimal</strong><br>
          1 × 2⁴ = 16[cite: 1]<br>
          0 × 2³ = 0[cite: 1]<br>
          1 × 2² = 4[cite: 1]<br>
          1 × 2¹ = 2[cite: 1]<br>
          0 × 2⁰ = 0[cite: 1]<br>
          Decimal equivalent: 16 + 0 + 4 + 2 + 0 = 22[cite: 1]</p>
        `
      },
      {
        id: "1.5",
        title: "1.5 Text Representation",
        notes: `
          <p>Computers use standard character encoding schemes to represent text characters[cite: 1]. The two main schemes are ASCII and Unicode[cite: 1].</p>
          <h3>1.5.1 ASCII (AMERICAN STANDARD CODE FOR INFORMATION INTERCHANGE)</h3>
          <ul>
            <li>i. Uses 7-bit or 8-bit code to represent characters[cite: 1].</li>
            <li>ii. Standard ASCII represents 128 characters (95 printable, 33 non-printable)[cite: 1].</li>
            <li>iii. Extended ASCII represents 256 characters (includes additional symbols and characters)[cite: 1].</li>
            <li>iv. Each character has a unique ASCII code (e.g., 'A' = 01000001 or 65, 'a' = 1100001 or 97)[cite: 1]. Therefore, the ASCII code for upper case 'A' is 65, which is represented as 01000001 in binary[cite: 1]. Also the ASCII code for lower case 'a' is 97, which is represented as 1100001 in binary[cite: 1].</li>
          </ul>
          <h3>1.5.2 UNICODE</h3>
          <ul>
            <li>i. A more recent standard that overcomes ASCII limitations[cite: 1].</li>
            <li>ii. Assigns 16-bits per character[cite: 1].</li>
            <li>iii. Supports a global standard for text representation[cite: 1].</li>
            <li>iv. Includes Extended ASCII as a subset (first 256 characters)[cite: 1].</li>
            <li>v. Provides a unique number for every character, regardless of platform, program, or language[cite: 1].</li>
          </ul>
          <h3>1.5.3 WHY ASCII AND UNICODE ARE IMPORTANT</h3>
          <ul>
            <li>i. Allow computers to understand and communicate with each other[cite: 1].</li>
            <li>ii. Enable us to interact with computers through text[cite: 1].</li>
            <li>iii. Provide a standard way to represent text characters[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "1.6",
        title: "1.6 - 1.8 Media Representation",
        notes: `
          <h3>1.6 IMAGE REPRESENTATION</h3>
          <p>Computers represent images using tiny units called pixels[cite: 1].</p>
          <h4>1.6.1 PIXEL</h4>
          <p>A pixel is the smallest unit of a digital image or display[cite: 1]. An image is made up of many pixels, each with a binary code representing its color[cite: 1].</p>
          <ul>
            <li>Each pixel is represented by a binary code (1 or 0)[cite: 1].</li>
            <li>1 bit per pixel allows for 2 possible colors (e.g., black and white)[cite: 1].</li>
            <li>More bits per pixel allow for more colors and a more detailed image[cite: 1].</li>
          </ul>
          <h4>1.6.2 BITMAP</h4>
          <p>A bitmap is a grid of binary data that represents the color values of pixels in an image or display[cite: 1]. A bitmap is like a set of instructions that says "this pixel is black, this one is white, this one is red," and so on[cite: 1].</p>
          
          <h3>1.7 AUDIO REPRESENTATION</h3>
          <p>Sound naturally occurs as an analog signal (a continuous wave)[cite: 1]. However, computers process information in binary (0s and 1s)[cite: 1]. To store sound on a computer, we must convert it from Analog to Digital (sequence of numerical values)[cite: 1]. The computer does not record the sound continuously[cite: 1]. Instead, it takes rapid "snapshots" of the sound wave at fixed intervals[cite: 1]. This is similar to how a video camera takes many still pictures to create a moving image[cite: 1]. Every sample records the amplitude of the wave[cite: 1].</p>
          <h4>1.7.1 SAMPLE</h4>
          <p>It is the measurement of the amplitude (height/loudness) of the sound wave at specific moments in time[cite: 1].</p>
          
          <h3>1.8 VIDEO REPRESENTATION</h3>
          <p>Digital video is not a continuous recording of moving objects[cite: 1]. Instead, it is a collection of still images arranged in a specific order[cite: 1].</p>
          <h4>1.8.1 FRAMES</h4>
          <p>These are the individual images that make up a video[cite: 1]. The frames are lined up in a sequence[cite: 1]. The computer displays the frames one after another at high speed (Frame Rate)[cite: 1]. Because the images change so quickly, the human eye blends them together to create the illusion of smooth movement[cite: 1].</p>
        `
      },
      {
        id: "1.9",
        title: "1.9 File Representation",
        notes: `
          <p>Since all files look like 0s and 1s to the computer, the computer needs a way to know which 0s represent a colour and which 0s represent a letter[cite: 1]. This is where File Formats come in[cite: 1].</p>
          <h3>1.9.1 FILE FORMAT</h3>
          <p>A file format is a standard way that information is encoded for storage[cite: 1]. The format dictates:</p>
          <ul>
            <li>How the bits are arranged[cite: 1].</li>
            <li>How the software should read (interpret) and display the data to the user[cite: 1]. For instance, if you try to open a song file in a photo viewer, it won't work because the software is trying to interpret audio bits as colour bits[cite: 1].</li>
          </ul>
          <h3>1.9.2 SOME COMMON FILE FORMATS</h3>
          <table>
            <tr><th>CATEGORY</th><th>COMMON EXTENSIONS</th><th>DESCRIPTION</th></tr>
            <tr><td>Images</td><td>.JPEG / .JPG</td><td>Used for photographs[cite: 1]</td></tr>
            <tr><td>Word Processing</td><td>.DOC / .DOCX</td><td>Used by Microsoft Word. Stores text, formatting, and images[cite: 1].</td></tr>
            <tr><td>Spreadsheets</td><td>.XLS / .XLSX</td><td>Used by Microsoft Excel. Stores grids, formulas, and charts[cite: 1].</td></tr>
            <tr><td>Video</td><td>.MP4 (MPEG-4)</td><td>The most widely used format today[cite: 1].</td></tr>
          </table>
        `
      },
      {
        id: "1.10",
        title: "1.10 Data Transmission",
        notes: `
          <p>When we send files (like an email, a photo, or a video) over a network or the Internet, the computer does not send the entire file in one single, long continuous stream[cite: 1]. Doing so would clog up the network[cite: 1]. To solve the traffic problem, the computer splits the data into same-size smaller, manageable chunks (pieces) called Packets[cite: 1].</p>
          <h3>1.10.1 PACKET</h3>
          <p>It is a small unit of data transmitted over a network[cite: 1].</p>
          <h3>1.10.2 HOW DATA IS TRANSMITTED</h3>
          <p>The packets are sent out onto the network wires or Wi-Fi[cite: 1]. When the packets arrive at the destination computer, the computer puts them back together[cite: 1]. The computer checks to make sure all pieces have arrived[cite: 1]. If a piece is missing, it asks for it to be resent[cite: 1].</p>
          <h3>1.10.3 ANALOGY FOR UNDERSTANDING</h3>
          <p>Think of sending a large jigsaw puzzle to a friend through the post office[cite: 1].</p>
          <ul>
            <li>You cannot send the completed puzzle in one giant box[cite: 1].</li>
            <li>Breaking it up: You break the puzzle into small pieces (Packets)[cite: 1].</li>
            <li>Sending: You put the pieces into many small envelopes and mail them[cite: 1].</li>
            <li>Reassembling: Your friend receives the envelopes, opens them, and puts the puzzle pieces back together to see the full picture[cite: 1].</li>
          </ul>
        `
      }
    ]
  },
  {
    topic: "2.0 BOOLEAN LOGIC AND BINARY",
    subtopics: [
      {
        id: "2.1",
        title: "2.1 - 2.2 Boolean Logic & Bits",
        notes: `
          <h3>2.1 BOOLEAN LOGIC</h3>
          <p>Boolean Logic is a special kind of algebra where every result must be one of two values: True or False[cite: 1]. It is named after its inventor, the mathematician George Boole[cite: 1]. Boolean logic is the fundamental system that controls how all modern digital devices (computers, phones, etc.) work[cite: 1]. Boolean logic is used to understand the physical parts of a computer:</p>
          <p><strong>Physical States:</strong> Computer circuits and memory locations can only be in one of two physical states[cite: 1]:</p>
          <ul>
            <li>Charged (has an electrical signal). It is represented by the value 1 (or True)[cite: 1].</li>
            <li>Not Charged (no electrical signal). It is represented by the value 0 (or False)[cite: 1].</li>
          </ul>
          <p>Example: Think of a simple light switch[cite: 1]. It is either ON (1/True) or OFF (0/False)[cite: 1]. It cannot be halfway[cite: 1]. This simple two-way choice is the core of Boolean Logic[cite: 1].</p>
          
          <h3>2.2 BITS AND STORAGE (THE FOUNDATION OF DATA)</h3>
          <p>A bit is the most basic unit of information in computing[cite: 1].</p>
          <h4>2.2.1 BOOLEAN OPERATIONS</h4>
          <p>Any calculations or commands that change or use these True/False values (1s and 0s)[cite: 1].</p>
        `
      },
      {
        id: "2.3",
        title: "2.3 Logic Operations",
        notes: `
          <p>Logic operations are the fundamental "decision-making" rules inside every digital device, from mobile phone to a powerful computer[cite: 1]. They manipulate binary values (0s and 1s) to perform logical tasks[cite: 1]. They are based on Boolean Logic, a type of mathematics developed by George Boole[cite: 1].</p>
          <h4>2.3.1 USES OF LOGIC OPERATIONS</h4>
          <ul>
            <li>Writing programs (programming)[cite: 1].</li>
            <li>Designing digital circuits (electronics)[cite: 1].</li>
            <li>Processing data in a computer[cite: 1]. The three primary logical operators are AND, OR, and NOT[cite: 1].</li>
          </ul>
          
          <h4>2.3.2 AND OPERATION (WEDGE)</h4>
          <p>The AND operator checks if both inputs are true[cite: 1]. The output is 1 (True) only if A is 1 AND B is 1[cite: 1]. It requires all conditions to be met for the result to be True[cite: 1].</p>
          <table>
            <tr><th>Input A</th><th>Input B</th><th>Output (A AND B)</th></tr>
            <tr><td>0 (False)</td><td>0 (False)</td><td>0 (False)</td></tr>
            <tr><td>0 (False)</td><td>1 (True)</td><td>0 (False)</td></tr>
            <tr><td>1 (True)</td><td>0 (False)</td><td>0 (False)</td></tr>
            <tr><td>1 (True)</td><td>1 (True)</td><td>1 (True)</td></tr>
          </table>
          <p>Example: For the statement: "The dog is black AND you are the dog's owner."[cite: 1]</p>
          <ul>
            <li>If the dog is not black (0), the statement is False (0), even if you are the owner (1)[cite: 1].</li>
            <li>The statement is only True (1) if the dog is black (1) and you are the owner (1)[cite: 1].</li>
          </ul>

          <h4>2.3.3 OR OPERATION (VEE)</h4>
          <p>The OR operator checks if at least one input is true[cite: 1]. The output is 1 (True) if A is 1 OR B is 1 (or both)[cite: 1]. The output is 0 (False) only when both inputs are 0 (False)[cite: 1].</p>
          <table>
            <tr><th>Input A</th><th>Input B</th><th>Output (A OR B)</th></tr>
            <tr><td>0 (False)</td><td>0 (False)</td><td>0 (False)</td></tr>
            <tr><td>0 (False)</td><td>1 (True)</td><td>1 (True)</td></tr>
            <tr><td>1 (True)</td><td>0 (False)</td><td>1 (True)</td></tr>
            <tr><td>1 (True)</td><td>1 (True)</td><td>1 (True)</td></tr>
          </table>
          <p>Example: You get permission to go to the market (1) if your mother says OR your father says yes[cite: 1]. You only stay home (0) if neither says yes[cite: 1].</p>

          <h4>2.3.4 NOT OPERATION (NEG)</h4>
          <p>The NOT operator simply flips or negates the single input value[cite: 1]. If the input is 0 (False), the output is 1 (True)[cite: 1]. If the input is 1 (True), the output is 0 (False)[cite: 1]. It gives you the opposite of the input[cite: 1].</p>
          <table>
            <tr><th>Input A</th><th>Output (NOT A)</th></tr>
            <tr><td>0 (False)</td><td>1 (True)</td></tr>
            <tr><td>1 (True)</td><td>0 (False)</td></tr>
          </table>
          <p>Example: If a circuit state is ON (1), the NOT operation makes it OFF (0)[cite: 1].</p>

          <h4>2.3.5 TRUTH TABLE</h4>
          <p>A Truth Table is a tool used to clearly show all possible outcomes (outputs) for a logic operation based on all possible inputs[cite: 1]. They are essential for designing reliable programs and digital circuits[cite: 1].</p>
        `
      },
      {
        id: "2.4",
        title: "2.4 - 2.6 Computer Structure & Memory",
        notes: `
          <h3>2.4 COMPUTER MEMORY</h3>
          <h4>2.4.1 UNITS OF MEMORY</h4>
          <p>Memory is measured in bytes, which tells you how much data a computer can store[cite: 1].</p>

          <h3>2.5 STRUCTURE OF A COMPUTER SYSTEM</h3>
          <p>A computer is made up of several parts working together[cite: 1].</p>
          <ul>
            <li>Central Processing Unit (CPU)[cite: 1]. The CPU (Processor) is the brain of the computer[cite: 1].</li>
            <li>Main (Primary) Memory[cite: 1]. This is the computer's working space and is made up of a set of memory chips (like RAM)[cite: 1].</li>
            <li>Input and Output (I/O) Devices[cite: 1]. These are the equipment used for communication between the user and the computer[cite: 1].</li>
            <li>Secondary (Backing) Storage[cite: 1]. This is for long-term data saving[cite: 1].</li>
          </ul>

          <h3>2.6 MEMORY AS BIT STORAGE</h3>
          <p>The bit (0 or 1) is the foundation of all data[cite: 1]. The computer uses special circuits to hold these bits[cite: 1].</p>
          <h4>2.6.1 FLIP-FLOP</h4>
          <p>This is a basic electronic circuit that serves as the fundamental unit of computer memory[cite: 1]. A single flip-flop can store exactly one bit of data (either a 0 or a 1)[cite: 1]. Some types of main memory (like SRAM—a type of RAM) are built using these flip-flop circuits[cite: 1]. When you save a letter, it is stored as a series of 1s and 0s, and each 1 or 0 is held by a tiny flip-flop circuit[cite: 1].</p>
        `
      },
      {
        id: "2.7",
        title: "2.7 - 2.8 Memory Types & Hierarchy",
        notes: `
          <h3>2.7 TYPES OF COMPUTER MEMORY</h3>
          <p>Computer systems use different types of memory, each with a specific role, speed, and capacity[cite: 1]. They are categorized based on whether the CPU accesses them directly (Primary/Main Memory) or indirectly (Secondary Storage)[cite: 1].</p>
          
          <h4>2.7.1 PRIMARY/MAIN MEMORY (FAST ACCESS)</h4>
          <p>Primary memory is where the CPU actively works[cite: 1].</p>
          <p><strong>A. Random Access Memory (RAM):</strong> RAM is the primary storage location for data and instructions that the CPU is actively working on or needs to access quickly[cite: 1]. It acts as the computer's "workbench."[cite: 1]</p>
          <ul>
            <li>It is directly accessible by the CPU[cite: 1].</li>
            <li>Measured in Gigabytes (GB) or Terabytes (TB)[cite: 1]. More RAM means the computer can run multiple programs simultaneously[cite: 1].</li>
            <li>Storage locations in RAM are identified using binary numbers called memory addresses[cite: 1].</li>
            <li>RAM is volatile, meaning it requires power to retain data[cite: 1].</li>
            <li>When the computer is turned off, all data stored in RAM is lost[cite: 1].</li>
          </ul>
          <p><strong>B. Read-Only Memory (ROM):</strong> ROM is another type of primary memory, but it holds permanent instructions needed to start up (boot) the computer[cite: 1].</p>
          <ul>
            <li>ROM is non-volatile, meaning it retains its data even when the power is switched off[cite: 1].</li>
            <li>Data can be read from ROM, but it cannot be easily written to or modified by normal programs[cite: 1].</li>
          </ul>

          <h4>2.7.2 HIGHEST SPEED MEMORY</h4>
          <p>These types of memory are the fastest but smallest in capacity[cite: 1].</p>
          <p><strong>C. Cache Memory (CPU Cache):</strong></p>
          <ul>
            <li>Cache is a small, high-speed memory that acts as a buffer between the CPU and the slower RAM[cite: 1].</li>
            <li>It is located directly on the CPU chip or very close to it[cite: 1].</li>
            <li>It holds frequently used data and instructions that the processor is likely to need next[cite: 1].</li>
            <li>This prevents the CPU from having to wait for slower data retrievals from RAM[cite: 1].</li>
          </ul>
          <p><strong>D. Registers:</strong></p>
          <ul>
            <li>Registers are the fastest access and smallest capacity storage units[cite: 1].</li>
            <li>They are located within the CPU itself[cite: 1].</li>
            <li>They serve as temporary storage for the data, instructions, and memory addresses that the CPU is currently processing at that exact moment[cite: 1].</li>
          </ul>

          <h4>2.7.3 SECONDARY MEMORY/STORAGE (PERMANENT STORAGE)</h4>
          <p><strong>E. Secondary memory:</strong> It is used for long-term, permanent storage of data and programs[cite: 1].</p>
          <ul>
            <li>It is external, non-volatile memory where data can be stored permanently[cite: 1].</li>
            <li>Data is retained even when the computer is powered off[cite: 1].</li>
            <li>Secondary storage has a much larger capacity than main memory (RAM) but is slower[cite: 1].</li>
          </ul>
          <p>Examples: Internal/External Hard Disk Drives (HDDs), Solid-State Drives (SSDs), Pen drives (Flash drives), CDs and DVDs[cite: 1].</p>

          <h3>2.8 THE MEMORY HIERARCHY (THE SPEED LADDER)</h3>
          <p>The memory hierarchy is the way different types of computer memory are arranged (like a pyramid or ladder) based on their speed, capacity (size), and cost[cite: 1].</p>
          <table>
            <tr><th>Level</th><th>Type of Memory</th><th>Speed (Access Time)</th><th>Capacity (Size)</th><th>Proximity to CPU</th></tr>
            <tr><td>Top</td><td>Registers (CPU)</td><td>Fastest</td><td>Smallest</td><td>Inside CPU</td></tr>
            <tr><td>2nd</td><td>Cache Memory</td><td>Very Fast</td><td>Small</td><td>Near CPU</td></tr>
          </table>
        `
      },
      {
        id: "2.9",
        title: "2.9 Cache Memory",
        notes: `
          <h3>2.9 CACHE</h3>
          <p>A cache is a component (hardware or software) that stores data temporarily so that future requests for that data can be served faster[cite: 1].</p>
          
          <h4>2.9.1 CPU CACHE (HARDWARE COMPONENT)</h4>
          <p>Cache Memory (or CPU Cache) is a small, high-speed memory located on or near the CPU[cite: 1]. It holds frequently used instructions to prevent the CPU from waiting for slower RAM[cite: 1].</p>
          
          <h4>2.9.2 BROWSER CACHE / WEB CACHE (SOFTWARE COMPONENT)</h4>
          <p>The browser cache is a temporary storage area, usually on your computer's disk or in RAM, that holds the most recently downloaded parts of web pages (like images and styles)[cite: 1]. How it Works:</p>
          <ul>
            <li>When you visit a page, the browser downloads and caches the data[cite: 1].</li>
            <li>When you visit the page again, the browser compares the date of the cached page with the live page online[cite: 1].</li>
            <li>If the page has not changed, the browser displays the fast cached page immediately[cite: 1].</li>
            <li>If the page has changed, the browser downloads the new version, displays it, and then replaces the old cached version[cite: 1].</li>
          </ul>
          
          <h4>2.9.3 ERRORS AND CLEARING THE CACHE</h4>
          <p>Sometimes, the cache can cause problems:</p>
          <ul>
            <li><strong>Corrupt Cache:</strong> A damaged or incomplete file in the cache can lead to a run-time error message[cite: 1].</li>
            <li><strong>Outdated Data:</strong> If a website owner makes an update, but your browser tries to use an old stored file, you will be unable to see the latest version[cite: 1]. Solution: A common fix is to clear the browser cache[cite: 1]. This forces the browser to download a fresh version of the website[cite: 1].</li>
          </ul>
        `
      }
    ]
  }
];

const select = document.getElementById("lessonSelect");

function initDropdown() {
  // Add a default placeholder option
  const defaultOption = document.createElement("option");
  defaultOption.text = "Select a Topic...";
  defaultOption.value = "";
  defaultOption.disabled = true;
  defaultOption.selected = true;
  select.appendChild(defaultOption);

  // Populate categories
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
  
  // Render text directly to the screen
  document.getElementById("lessonTitle").innerText = active.title;
  document.getElementById("lessonContent").innerHTML = active.notes;
}

// Initialize on load
window.onload = initDropdown;
