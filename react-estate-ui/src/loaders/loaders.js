import apiRequest from "../lib/apiRequest.js";
import { defer } from "react-router-dom";
export const singleLoader = async ({ request, params }) => {
  const resp = await apiRequest.get("/posts/" + params.id);
  return resp.data;
};
export const listLoader = async ({ request, params }) => {
  console.log(request);
  const query = request.url.split("?")[1];
  const postPromise = apiRequest.get("/posts?" + query);
  return defer({
    postResponse: postPromise,
  });
};
