// 1️⃣ Initialize poll as a new Map
const poll = new Map();

// 2️⃣ Function to add options
function addOption(option) {
  if (!option || option.trim() === "") {
    return "Option cannot be empty.";
  }

  if (poll.has(option)) {
    return `Option "${option}" already exists.`;
  }

  poll.set(option, new Set());
  return `Option "${option}" added to the poll.`;
}

// 3️⃣ Function to vote
function vote(option, voterId) {
  if (!poll.has(option)) {
    return `Option "${option}" does not exist.`;
  }

  const voters = poll.get(option);

  if (voters.has(voterId)) {
    return `Voter ${voterId} has already voted for "${option}".`;
  }

  voters.add(voterId);
  return `Voter ${voterId} voted for "${option}".`;
}

// 4️⃣ Function to display results
function displayResults() {
  let results = "Poll Results:\n";

  for (const [option, voters] of poll) {
    results += `${option}: ${voters.size} votes\n`;
  }

  return results.trim();
}

// 5️⃣ Add at least three options
addOption("Turkey");
addOption("Morocco");
addOption("Spain");

// 6️⃣ Add at least three votes
vote("Turkey", "traveler1");
vote("Turkey", "traveler2");
vote("Morocco", "traveler3");
