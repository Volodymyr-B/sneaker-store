export const get = (url: string) => fetch(url).then((res) => res.json());

export const post = async <T, U>(
  url: string,
  { arg }: { arg: U }
): Promise<T> => {
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arg),
  });

  if (!response.ok) throw new Error(response.statusText);
  return response.json();
};
