const BASE_URL = "https://api.github.com";
const ACCEPT = "application/vnd.github.v3+json";

export default async (url = "", data = {}, type = "GET", method = "fetch") => {
  type = type.toUpperCase();
  url = BASE_URL + url;

  if (type == "GET") {
    let params = "";
    Object.keys(data).forEach(key => {
      params += key + "=" + data[key] + "&";
    });

    if (params !== "") {
      params = params.substr(0, params.lastIndexOf("&"));
      url += "?" + params;
    }
  }

  if (window.fetch && method === "fetch") {
    let requestConfig = {
      // credentials: "include",
      method: type,
      headers: {
        Accept: ACCEPT,
        "Content-Type": "application/json"
      },
      mode: "cors",
      cache: "force-cache"
    };

    if (type === "POST") {
      Object.defineProperty(requestConfig, "body", {
        value: JSON.stringify(data)
      });
    }

    try {
      const response = await fetch(url, requestConfig);
      const responseJson = await response.json();
      return responseJson;
    } catch (error) {
      throw new Error(error);
    }
  } else {
    return new Promise((resolve, reject) => {
      let requestObj;
      if (window.XMLHttpRequest) {
        requestObj = new XMLHttpRequest();
      } else {
        requestObj = new ActiveXObject();
      }

      let sendDada = "";
      if (type === "POST") {
        sendDada = JSON.stringify(data);
      }

      requestObj.open(type, url, true);
      requestObj.setRequestHeader("Accept", ACCEPT);
      requestObj.setRequestHeader("Content-Type", "application/json");
      requestObj.send(sendDada);

      requestObj.onreadystatechange = () => {
        if (requestObj.readyState === 4) {
          if (requestObj.state === 200) {
            let obj = requestObj.response;
            if (typeof obj !== "object") {
              obj = JSON.parse(obj);
            }
            resolve(obj);
          } else {
            reject(requestObj);
          }
        }
      };
    });
  }
};
