// Sample Job Data
const jobs = [
  { title: "Frontend Developer", company: "Tech Corp", location: "Remote", salary: "$60,000" },
  { title: "Backend Developer", company: "Code Masters", location: "New York", salary: "$70,000" },
  { title: "UI/UX Designer", company: "Design Co", location: "San Francisco", salary: "$65,000" },
  { title: "Data Scientist", company: "Data Inc", location: "Chicago", salary: "$80,000" },
];

// Display Jobs
function displayJobs(jobs) {
  const jobsContainer = document.getElementById("jobs");
  jobsContainer.innerHTML = ""; // Clear previous listings

  jobs.forEach(job => {
    const jobElement = document.createElement("div");
    jobElement.classList.add("job-listing");
    jobElement.innerHTML = `
      <h3>${job.title}</h3>
      <p>${job.company}</p>
      <p>${job.location}</p>
      <p>Salary: ${job.salary}</p>
      <button>Apply Now</button>
    `;
    jobsContainer.appendChild(jobElement);
  });
}

// Search Functionality
document.getElementById("searchButton").addEventListener("click", () => {
  const query = document.getElementById("searchInput").value.toLowerCase();
  const filteredJobs = jobs.filter(job =>
    job.title.toLowerCase().includes(query) ||
    job.company.toLowerCase().includes(query) ||
    job.location.toLowerCase().includes(query)
  );
  displayJobs(filteredJobs);
});

// Login Form Submission
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // Simulate login (no backend in this example)
  alert(`Logged in as ${email}`);
  document.getElementById("loginForm").reset();
});

// Initial Job Display
displayJobs(jobs);
