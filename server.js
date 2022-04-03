const DOCKER_USERNAME = process.env.DOCKER_USERNAME;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
  while(true) {
    console.log("Microservices rock!");
    console.log("DOCKER_USERNAME: " + DOCKER_USERNAME)
    await sleep(5000);
  }
}

main();
