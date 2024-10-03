import axios from "axios";
import qs from "qs";
import { ACCESS_TOKEN } from "./token";

const headerCommon = {
  "Content-Type": "application/json",
  Accept: "*/*",
  "Sec-Fetch-Site": "same-site",
  "Accept-Language": "en-GB,en-US;q=0.9,en;q=0.8",
  "Accept-Encoding": "gzip, deflate, br",
  "Sec-Fetch-Mode": "cors",
  Host: "zenegg-api.production.cryptokitties.dapperlabs.com",
  Origin: "https://zenegg-app.production.cryptokitties.dapperlabs.com",
  "User-Agent":
    "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko)",
  Referer: "https://zenegg-app.production.cryptokitties.dapperlabs.com/",
  Connection: "keep-alive",
  "Sec-Fetch-Dest": "empty",
  "x-id-token": ACCESS_TOKEN,
};

export const gentlyStrokeReGenesisEgg = () => {
  return axios({
    method: "POST",
    url: "https://zenegg-api.production.cryptokitties.dapperlabs.com/egg/api/den/gently-stroke-the-regenesis-egg",
    headers: headerCommon,
    maxBodyLength: Infinity,
  });
};

export const claimTaoApi = () => {
  return axios({
    method: "POST",
    url: "https://zenegg-api.production.cryptokitties.dapperlabs.com/egg/api/den",
    headers: headerCommon,
    maxBodyLength: Infinity,
  });
};

export const getDenApi = () => {
  return axios({
    method: "GET",
    url: "https://zenegg-api.production.cryptokitties.dapperlabs.com/egg/api/den/claim-tao",
    headers: headerCommon,
    maxBodyLength: Infinity,
  });
};

export const buyFancyEgg = (cat_category: string, quantity: number) => {
  return axios({
    method: "POST",
    url: "https://zenegg-api.production.cryptokitties.dapperlabs.com/egg/api/den/buy-fancy-egg",
    headers: headerCommon,
    data: qs.stringify({
      cat_category,
      quantity,
    }),
  });
};
