require("dotenv").config();
console.log(
  "GitHub Token:",
  process.env.REACT_APP_GITHUB_TOKEN ? "Loaded" : "Missing"
);
console.log(
  "GitHub Username:",
  process.env.GITHUB_USERNAME ? process.env.GITHUB_USERNAME : "Missing"
);

// Required modules
const fs = require("fs");
const https = require("https");

// Load environment variables
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_TOKEN;
const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const USE_GITHUB_DATA = process.env.USE_GITHUB_DATA;
const MEDIUM_USERNAME = process.env.MEDIUM_USERNAME;

const ERR = {
  noUserName:
    "GitHub Username was found to be undefined. Please set all relevant environment variables.",
  requestFailed:
    "The request to GitHub didn't succeed. Check if GitHub token in your .env file is correct.",
  requestFailedMedium:
    "The request to Medium didn't succeed. Check if Medium username in your .env file is correct."
};

if (USE_GITHUB_DATA === "true") {
  if (!GITHUB_USERNAME) {
    throw new Error(ERR.noUserName);
  }

  // Encode GitHub username
  const encodedGithubUsername = encodeURIComponent(GITHUB_USERNAME);
  console.log(`Fetching profile data for ${GITHUB_USERNAME}`);

  const data = JSON.stringify({
    query: `{
      user(login: "${encodedGithubUsername}") { 
        name
        bio
        avatarUrl
        location
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage
                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }`
  });

  const options = {
    hostname: "api.github.com",
    path: "/graphql",
    port: 443,
    method: "POST",
    headers: {
      Authorization: `Bearer ${GITHUB_TOKEN}`,
      "User-Agent": "developerFolio",
      "Content-Type": "application/json"
    }
  };

  const req = https.request(options, res => {
    let responseData = "";

    console.log(`GitHub API Response: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.error(ERR.requestFailed);
      return;
    }

    res.on("data", chunk => {
      responseData += chunk;
    });
    res.on("end", () => {
      fs.writeFile("./public/profile.json", responseData, err => {
        if (err) console.error("Error saving profile data:", err);
        else console.log("Profile data saved successfully.");
      });
    });
  });

  req.on("error", error => {
    console.error("Request error:", error);
  });

  req.write(data);
  req.end();
}

if (MEDIUM_USERNAME && false) {
  const encodedMediumUsername = encodeURIComponent(MEDIUM_USERNAME);
  console.log(`Fetching Medium blogs data for ${MEDIUM_USERNAME}`);

  const mediumOptions = {
    hostname: "api.rss2json.com",
    path: `/v1/api.json?rss_url=https://medium.com/feed/@${encodedMediumUsername}`,
    port: 443,
    method: "GET"
  };

  const req = https.request(mediumOptions, res => {
    let mediumData = "";

    console.log(`Medium API Response: ${res.statusCode}`);
    if (res.statusCode !== 200) {
      console.error(ERR.requestFailedMedium);
      return;
    }

    res.on("data", chunk => {
      mediumData += chunk;
    });
    res.on("end", () => {
      fs.writeFile("./public/blogs.json", mediumData, err => {
        if (err) console.error("Error saving blog data:", err);
        else console.log("Blog data saved successfully.");
      });
    });
  });

  req.on("error", error => {
    console.error("Request error:", error);
  });

  req.end();
}
