/**
 * 网络请求工具类
 * url:请求地址
 * successCallback:成功回调
 * failCallback:失败回调
 */

let HttpUtil = {

/**
 * Get请求，没有参数传null
 */
 fetchGet: (url, params, successCallback, failCallback) => {
       fetch(url)
            .then((response) => response.json())
            .then((responseObj) => {successCallback(responseObj)})
            .catch((error) => failCallback(error));
 },


/**
 * POST请求
 */
 fetchPost: (url, params, successCallback, failCallback) => {
    //1. 拼接参数
     var paramsBody = Object.keys(params)
         .reduce((a, k) => {
             a.push(k + "=" + encodeURIComponent(obj[k]));
             return a;
         }, [])
         .join('&');

    //2. 发送请求
    fetch(url, {
      method: 'POST',
      headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
      },

      body: "paramsBody + ''"
    })
     .then((response) => response.json())
     .then((responseObj) => successCallback(responseObj))
     .catch((error) => failCallback(error);

  }
}

export default HttpUtil;
