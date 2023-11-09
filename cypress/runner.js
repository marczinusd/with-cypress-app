const cypress = require("cypress");
const tesults = require("cypress-tesults-reporter");

const token = process.env.TESULTS_E2E;
if (token === undefined) {
  throw new Error(
    "Tesults token was not found -- please set the TESULTS_TOKEN environment variable."
  );
}

cypress
  .run({
    reporter: "junit",
    browser: "electron",
    config: {
      baseUrl: "http://localhost:3000",
      video: true,
    },
  })
  .then((results) => {
    const args = {
      target: token,
    };
    tesults.results(results, args);
  })
  .catch((err) => {
    console.error(err);
  });
