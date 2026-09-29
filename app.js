const lessons = [
  {
    topic: "1.0 Data Representation",
    subtopics: [
      {
        id: "1.1",
        title: "1.1 & 1.2 Bit, Byte & Bit Patterns",
        notes: "<p>A bit is the smallest unit of data (0 or 1). A byte is 8 bits. Bits combine in patterns to represent characters, numbers, images, and audio.</p>",
        pdf: "media/data_rep.pdf",
        audio: "media/bit_patterns.mp3",
        video: "media/bit_patterns.mp4"
      },
      {
        id: "1.4",
        title: "1.4 Numeric Representation",
        notes: "<p>Decimal to Binary: Divide by 2 repeatedly and record remainders in reverse order. Binary to Decimal: Multiply each digit by its power of 2 place value.</p>",
        pdf: "",
        audio: "",
        video: ""
      },
      {
        id: "1.5",
        title: "1.5 Text Representation (ASCII & Unicode)",
        notes: "<p>Standard ASCII uses 7/8 bits for 128 characters ('A' = 65, 'a' = 97). Unicode uses 16 bits to provide a universal global standard.</p>",
        pdf: "",
        audio: "",
        video: ""
      }
    ]
  },
  {
    topic: "2.0 Boolean Logic & Binary",
    subtopics: [
      {
        id: "2.3",
        title: "2.3 Logic Operations (AND, OR, NOT)",
        notes: "<p>AND requires all true inputs. OR requires at least one true input. NOT negates/inverts the single input.</p>",
        pdf: "",
        audio: "",
        video: ""
      },
      {
        id: "2.7",
        title: "2.7 Primary & Secondary Memory",
        notes: "<p>RAM is volatile working memory. ROM holds permanent boot code. Secondary storage (SSD, HDD) provides long-term non-volatile storage.</p>",
        pdf: "",
        audio: "",
        video: ""
      }
    ]
  },
  {
    topic: "3.0 CPU & Machine Cycle",
    subtopics: [
      {
        id: "3.6",
        title: "3.6 CPU Components (CU, ALU, Registers)",
        notes: "<p>Control Unit manages instruction timing. ALU carries out math and comparisons. Registers provide ultra-fast temporary storage.</p>",
        pdf: "",
        audio: "",
        video: ""
      },
      {
        id: "4.2",
        title: "4.2 Machine Cycle (FDES)",
        notes: "<p>Steps: Fetch instruction from RAM, Decode through Control Unit, Execute via ALU, Store result back to memory.</p>",
        pdf: "",
        audio: "",
        video: ""
      }
    ]
  },
  {
    topic: "13.0 Algorithms & SDLC",
    subtopics: [
      {
        id: "13.2",
        title: "13.2 Program Development Cycle",
        notes: "<p>The core cycle stages are Analysis, Design (Pseudocode & Flowcharts), Coding (Python), and Testing.</p>",
        pdf: "",
        audio: "",
        video: ""
      }
    ]
  },
  {
    topic: "15.0 Data Structures",
    subtopics: [
      {
        id: "16.0",
        title: "16.0 Arrays (1D and 2D)",
        notes: "<p>Contiguous memory storage accessible via index starting from 0. 1D arrays form a single row; 2D arrays form rows and columns (matrix).</p>",
        pdf: "",
        audio: "",
        video: ""
      },
      {
        id: "17.0",
        title: "17.0 Stacks & Linked Lists",
        notes: "<p>Stacks use LIFO (Last-In, First-Out) with push/pop operations. Linked lists use nodes containing data and pointers.</p>",
        pdf: "",
        audio: "",
        video: ""
      },
      {
        id: "18.0",
        title: "18.0 Queues, Binary Trees & Graphs",
        notes: "<p>Queues follow FIFO (First-In, First-Out). Trees and Graphs are non-linear structures representing hierarchical and networked data.</p>",
        pdf: "",
        audio: "",
        video: ""
      }
    ]
  }
];

const select = document.getElementById("lessonSelect");

function initDropdown() {
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
  renderLesson();
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

  // Render PDF
  document.getElementById("pdfContainer").innerHTML = active.pdf 
    ? `<iframe src="${active.pdf}"></iframe>` 
    : "<p><i>No PDF attached for this subtopic.</i></p>";

  // Render Audio
  document.getElementById("audioContainer").innerHTML = active.audio 
    ? `<audio controls src="${active.audio}"></audio>` 
    : "";

  // Render Video
  document.getElementById("videoContainer").innerHTML = active.video 
    ? `<video controls src="${active.video}"></video>` 
    : "";
}

window.onload = initDropdown;