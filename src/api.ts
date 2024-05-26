import axios from "axios";
import qs from "qs";
import { ACCESS_TOKEN } from "./token";

const headerCommon = {
  accept: "*/*",
  "accept-language": "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5",
  authorization: "Bearer " + ACCESS_TOKEN,
  "content-type": "application/x-www-form-urlencoded",
  origin: "https://dd42189ft3pck.cloudfront.net",
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
};

export const hatchEgg = (nest_id: string) => {
  return axios({
    method: "POST",
    url: "https://api.quackquack.games/nest/hatch",
    headers: headerCommon,
    data: qs.stringify({
      nest_id: nest_id,
    }),
  });
};

export const collectDuck = (nest_id: string) => {
  return axios({
    method: "POST",
    url: "https://api.quackquack.games/nest/collect-duck",
    headers: headerCommon,
    data: qs.stringify({
      nest_id: nest_id,
    }),
  });
};

export const removeDuck = (duck_id: string) => {
  return axios({
    method: "POST",
    url: "https://api.quackquack.games/duck/remove",
    headers: headerCommon,
    data: qs.stringify({
      ducks: `{"ducks":[${duck_id}]}`,
    }),
  });
};

export const maxDuck = () => {
  const cloneObj: any = structuredClone(headerCommon);
  delete cloneObj["content-type"];
  return axios({
    method: "GET",
    url: "https://api.quackquack.games/nest/max-duck",
    headers: cloneObj,
  });
};

export const getTotalEgg = () => {
  const cloneObj: any = structuredClone(headerCommon);
  delete cloneObj["content-type"];
  return axios({
    method: "GET",
    url: "https://api.quackquack.games/balance/get",
    headers: cloneObj,
  });
};

export const getListReload = () => {
  const cloneObj: any = structuredClone(headerCommon);
  delete cloneObj["content-type"];
  return axios({
    method: "GET",
    url: "https://api.quackquack.games/nest/list-reload",
    headers: cloneObj,
  });
};

export const collect = (nest_id: string) => {
  return axios({
    method: "POST",
    url: "https://api.quackquack.games/nest/collect",
    headers: headerCommon,
    data: qs.stringify({
      nest_id: nest_id,
    }),
  });
};

export const layEgg = (nest_id: string, listDuck: string[]) => {
  const duck_id: string = listDuck[Math.floor(Math.random() * listDuck.length)];
  return axios({
    method: "POST",
    url: "https://api.quackquack.games/nest/lay-egg",
    headers: headerCommon,
    data: qs.stringify({
      nest_id: nest_id,
      duck_id: duck_id,
    }),
  });
};

export const checkIn = () => {
  let config = {
    method: "GET",
    maxBodyLength: Infinity,
    url: "https://api.quackquack.games/task/checkin-status",
    headers: {
      accept: "application/json, text/plain, */*",
      "accept-language":
        "vi-VN,vi;q=0.9,en-US;q=0.8,en;q=0.7,fr-FR;q=0.6,fr;q=0.5",
      authorization: "Bearer " + ACCESS_TOKEN,
      origin: "https://play.quackquack.games",
      priority: "u=1, i",
      referer: "https://play.quackquack.games/",
      "sec-ch-ua":
        '"Google Chrome";v="125", "Chromium";v="125", "Not.A/Brand";v="24"',
      "sec-ch-ua-mobile": "?0",
      "sec-ch-ua-platform": '"macOS"',
      "sec-fetch-dest": "empty",
      "sec-fetch-mode": "cors",
      "sec-fetch-site": "same-site",
      "user-agent":
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
    },
  };

  return axios(config);
};

// don't make it :((
export const claimEvent = () => {
  return axios({
    method: "POST",
    url: "https://api.quackquack.games/golden-duck/claim",
    headers: headerCommon,
    data: qs.stringify({
      type: 1,
    }),
  });
};

export const difference = (arrays: string[][]) => {
  return arrays.reduce((a: string[], b: string[]) =>
    a.filter((c) => !b.includes(c))
  );
};
