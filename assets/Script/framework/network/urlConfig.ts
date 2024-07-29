/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2024-06-05 14:27:44
 * @LastEditors: bruceluthor 761326283@qq.com
 * @LastEditTime: 2024-07-16 15:16:04
 * @FilePath: /yc_mj-master/assets/scripts/manager/UrlConfig.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const httpUrl = {
  online: "http://1.94.54.245:8080/",
  test: "http://124.71.136.97:8080/",
  local: "http://192.168.31.254:8080/",
  local1: "http://192.168.31.199:8080/",
}
const socketUrl = {
  online: "ws://1.94.54.245:10100/websocket",
  test: "ws://124.71.136.97:10100/websocket",
  local: "ws://192.168.31.254:10100/websocket",
  local1: "ws://192.168.31.199:10100/websocket",
}

export module UrlConfig {
  export function getSocketUrl() {
    const phone = localStorage.getItem("phone")
    const token = localStorage.getItem("token")
    return `${socketUrl}?token=${token}&name=${phone}`
  }

  export function getHttpUrl() {
    return httpUrl.online
  }
}
