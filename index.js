import fetch from "node-fetch";

const ACCESS_TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjI3MDI0NCwidGltZXN0YW1wIjoxNzE2Njg5NDgwMzgxLCJ0eXBlIjoxLCJpYXQiOjE3MTY2ODk0ODAsImV4cCI6MTcxNzI5NDI4MH0.5tly6ASREnRqE-adVtvR6xusEBSsDP2oHOE_rN_zLkQ";
let listColect = [];
let listDuck = [];
let listNest = [];

Array.prototype.random = function () {
  return this[Math.floor(Math.random() * this.length)];
};

function rewardGoldenDuck() {
  fetch("https://api.quackquack.games/golden-duck/reward", {
    headers: {
      accept: "*/*",
      "accept-language":
        "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5",
      authorization: "Bearer " + ACCESS_TOKEN,
      "if-none-match": 'W/"36-+OxO+FdzxsIHf1uprC0D8TxXVCw"',
      origin: "https://dd42189ft3pck.cloudfront.net",
      priority: "u=1, i",
      referer: "https://dd42189ft3pck.cloudfront.net/",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    },
    body: null,
    method: "GET",
  })
    .then((response) => response.json())
    .then((res) => {
      console.log("reward: " + JSON.stringify(res));
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}

function hatchEgg(nest_id) {
  fetch("https://api.quackquack.games/nest/hatch", {
    headers: {
      accept: "*/*",
      "accept-language":
        "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5",
      authorization: "Bearer " + ACCESS_TOKEN,
      "content-type": "application/x-www-form-urlencoded",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://dd42189ft3pck.cloudfront.net/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: `nest_id=${nest_id}`,
    method: "POST",
  })
    .then((response) => response.json())
    .then((res) => {
      console.log("ấp trứng: " + nest_id);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}

function collectDuck(nest_id) {
  fetch("https://api.quackquack.games/nest/collect-duck", {
    headers: {
      accept: "*/*",
      "accept-language":
        "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5",
      authorization: "Bearer " + ACCESS_TOKEN,
      "content-type": "application/x-www-form-urlencoded",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://dd42189ft3pck.cloudfront.net/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: `nest_id=${nest_id}`,
    method: "POST",
  })
    .then((response) => response.json())
    .then((res) => {
      console.log("nhận vịt: " + nest_id);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}

function removeDuck(duck_id) {
  fetch("https://api.quackquack.games/duck/remove", {
    headers: {
      accept: "*/*",
      "accept-language":
        "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5",
      authorization: "Bearer " + ACCESS_TOKEN,
      "content-type": "application/x-www-form-urlencoded",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://dd42189ft3pck.cloudfront.net/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: `ducks={"ducks":[${duck_id}]}"`,
    method: "POST",
  })
    .then((response) => response.json())
    .then((res) => {
      console.log("xoá vịt: " + nest_id);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}

function maxDuck() {
  fetch("https://api.quackquack.games/nest/max-duck", {
    headers: {
      accept: "*/*",
      "accept-language":
        "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5",
      authorization: "Bearer " + ACCESS_TOKEN,
      "if-none-match": 'W/"28-B0TmwhSNIzaTpMH0Y69eFlC1QdY"',
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://dd42189ft3pck.cloudfront.net/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  })
    .then((response) => response.json())
    .then((res) => {
      console.log("max vịt: " + res);
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}

function getTotalEgg() {
  fetch("https://api.quackquack.games/balance/get", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,vi;q=0.8",
      authorization: "Bearer " + ACCESS_TOKEN,
      "if-none-match": 'W/"1a9-I7Onn3jBU9AHo0MlzSY8mMECNvQ"',
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://dd42189ft3pck.cloudfront.net/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  })
    .then((response) => response.json())
    .then((res) => {
      // console.log(res);
      res.data.data.map((item) => {
        if (item.symbol === "EGG") {
          console.log("");
          console.log("Da thu thap", Number(item.balance), "trung");
          console.log("");
        }
      });
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}

function getListReload() {
  fetch("https://api.quackquack.games/nest/list-reload", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,vi;q=0.8",
      authorization: "Bearer " + ACCESS_TOKEN,
      "if-none-match": 'W/"1218-LZvWPzXbQkzjfWJ5mauEo0z3f9c"',
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://dd42189ft3pck.cloudfront.net/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: null,
    method: "GET",
  })
    .then((response) => response.json())
    .then((res) => {
      // console.log(res);

      // listDuck = structuredClone(res.data.duck.map((item) => item.id));
      // listColect = structuredClone(res.data.nest.map((item) => item.id));
      if (listDuck.length === 0) {
        res.data.duck.map((item) => {
          listDuck.push(item.id);
        });
      }

      res.data.nest.map((item) => {
        // console.log(item);
        if (item.type_egg) listColect.push(item.id);
      });

      console.log("So trung co the thu thap:", listColect.length);
      console.log(listColect);
      console.log("");
    })
    .catch((error) => {
      console.log("ERROR", error);
    });
}

function collect() {
  if (listColect.length === 0) return setTimeout(collect, 1e3);

  const egg = listColect[0];

  fetch("https://api.quackquack.games/nest/collect", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,vi;q=0.8",
      authorization: "Bearer " + ACCESS_TOKEN,
      "content-type": "application/x-www-form-urlencoded",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://dd42189ft3pck.cloudfront.net/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: "nest_id=" + egg,
    method: "POST",
  })
    .then((response) => response.json())
    .then((res) => {
      console.log("Thu thap thanh cong trung", egg);
      layEgg(egg);
    })
    .catch((error) => {
      console.log("ERROR", error);
      setTimeout(() => collect(egg), 1e3);
    });
}

function layEgg(egg) {
  const duck = listDuck.random();
  //   console.log(duck);
  fetch("https://api.quackquack.games/nest/lay-egg", {
    headers: {
      accept: "*/*",
      "accept-language": "en-US,en;q=0.9,vi;q=0.8",
      authorization: "Bearer " + ACCESS_TOKEN,
      "content-type": "application/x-www-form-urlencoded",
      priority: "u=1, i",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"Windows"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "cross-site",
      Referer: "https://dd42189ft3pck.cloudfront.net/",
      "Referrer-Policy": "strict-origin-when-cross-origin",
    },
    body: "nest_id=" + egg + "&duck_id=" + duck,
    method: "POST",
  })
    .then((response) => response.json())
    .then((res) => {
      //   console.log(res);
      getTotalEgg();
      listColect.shift();
      setTimeout(collect, 1e3);
    })
    .catch((error) => {
      console.log("ERROR", error);
      setTimeout(() => layEgg(egg), 1e3);
    });
}

getTotalEgg();
getListReload();

setInterval(() => {
  getListReload();
}, 5e3);

setInterval(() => {
  rewardGoldenDuck();
}, 10e3);

// setInterval(() => {
//   collect();
// }, 15 * 60000);

collect();
