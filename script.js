function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".phone-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const teamMembers = [
  {
    name: "Fatima",
    role: "Chefen",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/024/822/642/original/cute-cartoon-sunflower-isolated-on-transparent-background-ai-generated-digital-illustration-png.png",
  },
  {
    name: "Theodor",
    role: "Scrum Master",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/022/948/153/non_2x/cute-happy-blackberry-character-ai-generated-free-png.png",
  },
  {
    name: "Ruth",
    role: "Developer",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/025/037/881/non_2x/cute-watercolor-peony-flower-illustration-ai-generative-png.png",
  },
  {
    name: "Oscar",
    role: "Den super snälla, vackra och roliga",
    imageUrl:
      "https://i.pinimg.com/originals/70/5d/ee/705dee71a624137356a93efa53267977.png",
  },
  {
    name: "Kim",
    role: "Developer",
    imageUrl:
      "https://www.creativefabrica.com/wp-content/uploads/2020/09/28/cute-flower-kawaii-illustrations-Graphics-5731329-1-1-580x387.png",
  },
  {
    name: "Saina",
    role: "Developer",
    imageUrl:
      "https://static.vecteezy.com/system/resources/previews/026/793/223/original/cute-watermelon-watercolor-ai-generative-png.png",
  },
  {
    name: "Emil",
    role: "Developer",
    imageUrl: "https://cdn-icons-png.freepik.com/512/6813/6813248.png",
  },
  {
    name: "Isac",
    role: "Developer",
    imageUrl:
      "https://www.creativefabrica.com/wp-content/uploads/2021/02/14/Kawaii-Cute-Carrot-Vegetable-Graphics-8601699-1.png",
  },
];

// Function to create HTML elements for team members
function createTeamMemberElement(member) {
  const memberDiv = document.createElement("div");
  memberDiv.classList.add("image-item");

  const img = document.createElement("img");
  img.src = member.imageUrl;
  img.alt = member.name;
  memberDiv.appendChild(img);

  const name = document.createElement("p");
  name.textContent = member.name;
  memberDiv.appendChild(name);

  const role = document.createElement("p");
  role.textContent = member.role;
  memberDiv.appendChild(role);

  return memberDiv;
}

// Function to render team members
function renderTeamMembers() {
  const teamContainer = document.getElementById("team-container");

  teamMembers.forEach((member) => {
    const memberElement = createTeamMemberElement(member);
    teamContainer.appendChild(memberElement);
  });
}

// Call the function to render team members
renderTeamMembers();  