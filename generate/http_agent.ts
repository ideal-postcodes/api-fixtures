import fetch from "node-fetch";
import { RequestInit } from "node-fetch";

import {
  HttpOptions,
  Definition,
  StringMap,
} from "../lib/index";

import {
  Fixture,
  HttpAgent,
} from "./index";

const host = "https://api.ideal-postcodes.co.uk";

const defaultHeaders = (): StringMap => {
  return {
    "Content-Type": "application/json",
  };
};

const encode = encodeURIComponent;

/**
 * Encodes a flat object into a querystring
 */
const toQueryString = (query: StringMap): string => {
  return Object
    .keys(query)
    .reduce((qs, key) => `${qs}&${encode(key)}=${encode(query[key])}`, "");
};

const toUrl = (url: string, query: StringMap): string => {
  const base = `${host}${url}`;
  const queryString = toQueryString(query);
  if (queryString.length > 0) return `${base}?${queryString}`
  return base;
};

export const httpAgent: HttpAgent = (request) => { 
  const {
    method = "GET",
    headers = {},
    query = {},
    url,
  } = request;

  // Create new headers object with defaults and override with custom headers
  const requestHeaders = {
    ...defaultHeaders(),
    ...headers,
  };

  const options: RequestInit = {
    method,
    headers: requestHeaders,
  };

  // Append body if provided
  if (request.body) options.body = JSON.stringify(request.body);

  const uri = toUrl(url, query);

  return fetch(uri, options)
    .then(async (response) => {
      const httpStatus = response.status;
      const body = await response.json();
      return { body, httpStatus };
    });
};

