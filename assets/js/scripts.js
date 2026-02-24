const totalApp = document.getElementById("total-app");
const interviewApp = document.getElementById("interview-app");
const rejectedApp = document.getElementById("rejected-app");

const totalJobs = document.getElementById("total-jobs");

const allFilterBtn = document.getElementById("all-filter-btn");
const interviewFilterBtn = document.getElementById("interview-filter-btn");
const rejectedFilterBtn = document.getElementById("rejected-filter-btn");

const allJobs = document.getElementById("all-jobs");
const noJobs = document.getElementById("no-jobs");

let currentFilter = "all"; // Default Filter: All

// Get All Jobs
function getJobs() {
    allJobs.innerHTML = "";

    // Push Filtered Jobs
    let filteredJobs = [];
    for (let i = 0; i < jobs.length; i++) {
        if (currentFilter === "all" || jobs[i].status === currentFilter) {
            filteredJobs.push(jobs[i]);
        }
    }

    // Total Results Counter
    if (currentFilter === "all") {
        totalJobs.innerText = jobs.length;
    } else {
        if (filteredJobs.length === 0) {
            totalJobs.innerText = filteredJobs.length;
        } else {
            totalJobs.innerText = filteredJobs.length + " of " + jobs.length;
        }
    }

    // No Jobs Available
    if (filteredJobs.length === 0) {
        noJobs.classList.remove("hidden");
        noJobs.classList.add("flex");
    } else {
        noJobs.classList.add("hidden");
    }

    // Build Job Cards
    for (let i = 0; i < filteredJobs.length; i++) {
        let job = filteredJobs[i];

        // Style for Job Status
        let jobStatusStyle = "bg-[#eef4ff] text-[#002c5c]"; // Not Applied
        if (job.status === "interview") {
            jobStatusStyle = "bg-green-50 text-[#10b981]"; // Interview
        } else if (job.status === "rejected") {
            jobStatusStyle = "bg-red-50 text-[#EF4444]"; // Rejected
        }

        const newDiv = document.createElement("div");
        newDiv.className = "bg-white border border-[#f1f2f4] p-6 space-y-5 rounded-lg shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 hover:border-blue-500";

        newDiv.innerHTML = `
        <div class="flex justify-between items-center">
            <div class="space-y-1">
                <h4 class="text-[#002c5c] text-lg font-semibold leading-6.5">${job.company}</h4>
                <p class="text-[#64748b] leading-5.5">${job.position}</p>
            </div>
            <button data-id="${job.id}" class="delete-btn w-8 h-8 rounded-full border border-[#f1f2f4] flex justify-center items-center hover:bg-red-50 hover:border-red-200 transition-colors cursor-pointer">
                <img src="./assets/img/trash.svg" alt="">
            </button>
        </div>
        <p class="text-[#64748b] text-sm leading-5">${job.location} • ${job.type} • ${job.salary}</p>
        <div class="space-y-2">
            <span class="${jobStatusStyle} text-sm font-medium leading-5 uppercase inline-block py-2 px-3 rounded-md">${job.status === "" ? "Not Applied" : job.status}</span>
            <p class="text-[#323b49] text-sm leading-5">${job.description}</p>
        </div>
        <div class="flex items-center gap-2">
            <button data-id="${job.id}" data-status="interview" class="text-sm font-semibold leading-5 uppercase py-2 px-3 border border-[#10b981] rounded-md cursor-pointer bg-white text-[#10b981] hover:bg-green-50">Interview</button>
            <button data-id="${job.id}" data-status="rejected" class="text-sm font-semibold leading-5 uppercase py-2 px-3 border border-[#EF4444] rounded-md cursor-pointer bg-white text-[#EF4444] hover:bg-red-50">Rejected</button>
        </div>`;

        allJobs.appendChild(newDiv);
    }
}
getJobs();