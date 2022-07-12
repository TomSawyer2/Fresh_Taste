export const baseURL = "https://cdn.tomsawyer2.xyz/api";

export const fetchData = async (
  url: string,
  method: "GET" | "POST",
  body?: any
) => {
  const res = await fetch(`${baseURL}${url}`, {
    method,
    body: JSON.stringify(body),
  });
  const data = await res.json();
  if (data.status === 0) {
    return data.data;
  } else {
    throw new Error(data.msg);
  }
};
