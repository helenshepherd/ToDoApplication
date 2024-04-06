const BASEURL = process.env.NEXT_PUBLIC_BASEURL;

export const post = async (
  path: string,
  payload: { [key: string]: any },
  options?: any
) => {
  try {
    const response = await fetch(`${BASEURL}${path}`, {
      ...options,
      method: "POST",

      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    return await response.json();
  } catch (error) {
    throw error;
  }
};
