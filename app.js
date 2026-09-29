const lessons = [
  {
    topic: "1.0 DATA AS BIT PATTERN REPRESENTATIONS",
    subtopics: [
      {
        id: "1.1",
        title: "1.1 - 1.3 Bits & Bytes",
        notes: `
          <p>In computers, all data is encoded (represented) in the form of 0s and 1s, known as binary digits (bits)[cite: 1]. These bits are the basic language of computers, telling them what to do and how to represent data[cite: 1].</p>
          <h3>1.1 BIT</h3>
          <p>A bit is the smallest unit of data in computing, with only two possible states: 0 (Off or False) and 1 (On or True)[cite: 1].</p>
          <h3>1.2 BIT PATTERN</h3>
          <p>It is a series of 0s and 1s, like 1010 or 1101[cite: 1]. This is how computers understand and process data. So data is represented as bit patterns, using sequences of 0s and 1s to encode different types of information[cite: 1].</p>
          <h3>1.3 BYTE</h3>
          <p>It is 8 bits formed together. (8 bits = 1 byte)[cite: 1].</p>
        `
      },
      {
        id: "1.4",
        title: "1.4 Numeric Representation",
        notes: `
          <p>In computer science, numbers are represented in binary, which uses only two digits: 0 and 1[cite: 1].</p>
          <h3>1.4.1 DECIMAL TO BINARY</h3>
          <ul>
            <li>Divide the decimal number by 2 (divisor) and keep the remainder[cite: 1].</li>
            <li>Repeat the process until the quotient is 0[cite: 1].</li>
            <li>Write the remainders in reverse order to get the binary representation[cite: 1].</li>
          </ul>
          <p><strong>Example: Convert 16 to binary</strong><br>
          16 ÷ 2 = 8 remainder 0<br>
          8 ÷ 2 = 4 remainder 0<br>
          4 ÷ 2 = 2 remainder 0<br>
          2 ÷ 2 = 1 remainder 0<br>
          1 ÷ 2 = 0 remainder 1<br>
          Binary representation: 10000[cite: 1]</p>
        `
      },
      {
        id: "1.5",
        title: "1.5 Text Representation",
        notes: `
          <p>Computers use standard character encoding schemes to represent text characters[cite: 1]. The two main schemes are ASCII and Unicode[cite: 1].</p>
          <h3>1.5.1 ASCII</h3>
          <ul>
            <li>Uses 7-bit or 8-bit code to represent characters[cite: 1].</li>
            <li>Standard ASCII represents 128 characters (95 printable, 33 non-printable)[cite: 1].</li>
            <li>Each character has a unique ASCII code (e.g., 'A' = 01000001 or 65, 'a' = 1100001 or 97)[cite: 1].</li>
          </ul>
          <h3>1.5.2 UNICODE</h3>
          <ul>
            <li>A more recent standard that overcomes ASCII limitations[cite: 1].</li>
            <li>Assigns 16-bits per character and supports a global standard for text representation[cite: 1].</li>
            <li>Provides a unique number for every character, regardless of platform, program, or language[cite: 1].</li>
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
        title: "2.1 Boolean Logic",
        notes: `
          <p>Boolean Logic is a special kind of algebra where every result must be one of two values: True or False[cite: 1]. It is named after its inventor, the mathematician George Boole[cite: 1].</p>
          <p><strong>Physical States:</strong> Computer circuits and memory locations can only be in one of two physical states[cite: 1]:</p>
          <ul>
            <li>Charged (has an electrical signal). It is represented by the value 1 (or True)[cite: 1].</li>
            <li>Not Charged (no electrical signal). It is represented by the value 0 (or False)[cite: 1].</li>
          </ul>
        `
      },
      {
        id: "2.3",
        title: "2.3 Logic Operations",
        notes: `
          <p>Logic operations are the fundamental "decision-making" rules inside every digital device[cite: 1]. The three primary logical operators are AND, OR, and NOT[cite: 1].</p>
          <h3>2.3.2 AND OPERATION</h3>
          <p>The AND operator checks if both inputs are true. The output is 1 (True) only if A is 1 AND B is 1[cite: 1].</p>
          <h3>2.3.3 OR OPERATION</h3>
          <p>The OR operator checks if at least one input is true. The output is 1 (True) if A is 1 OR B is 1 (or both)[cite: 1].</p>
          <h3>2.3.4 NOT OPERATION</h3>
          <p>The NOT operator simply flips or negates the single input value. If the input is 0 (False), the output is 1 (True)[cite: 1].</p>
        `
      }
    ]
  },
  {
    topic: "3.0 CENTRAL PROCESSING UNIT (CPU)",
    subtopics: [
      {
        id: "3.1",
        title: "3.1 - 3.6 CPU Structure & Components",
        notes: `
          <p>The Central Processing Unit (CPU), often simply called the processor, is the part of a computer that manages all the work with data[cite: 1]. It is frequently referred to as the "brain" of the computer[cite: 1].</p>
          <h3>3.6 COMPONENTS OF A CPU</h3>
          <ul>
            <li><strong>Control Unit (CU):</strong> Acts as the manager or traffic controller of the CPU. It manages and directs all operations[cite: 1].</li>
            <li><strong>Arithmetic and Logic Unit (ALU):</strong> The computational core. It performs all calculations (addition, subtraction) and logical comparisons[cite: 1].</li>
            <li><strong>Registers:</strong> Small, very fast memory locations inside the CPU. Includes the Memory Address Register (MAR), Program Counter (PC), and Memory Data Register (MDR)[cite: 1].</li>
            <li><strong>Cache:</strong> A small amount of fast RAM located closer to or inside the CPU that temporarily stores frequently used data[cite: 1].</li>
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