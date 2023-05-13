export default async function createRequest(url, options) {
  const res = await fetch(process.env.REACT_APP_URL + url, {
    method: options.method,
  });
  const json = await res.json();
  if (options.callback) options.callback(json);
}