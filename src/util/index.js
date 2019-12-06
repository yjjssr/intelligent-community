import CryptoJS from 'crypto-js'
const initKey = 'BBC5A7F4CC59C2B8'
const keySize = 128;
const fillKey = (key) => {
  const filledKey = Buffer.alloc(keySize / 8);
  const keys = Buffer.from(key);
  if (keys.length < filledKey.length) {
   filledKey.map((b, i) => filledKey[i] = keys[i]);
  }
 
  return filledKey;
 }
 export function encrypt(str){
  let key = CryptoJS.enc.Utf8.parse(initKey)
  let srcs = CryptoJS.enc.Utf8.parse(str)
  let encrypted = CryptoJS.AES.encrypt(srcs, key, { mode: CryptoJS.mode.ECB, padding: CryptoJS.pad.Pkcs7 })
  let base64Cipher = encrypted.ciphertext.toString(CryptoJS.enc.Base64) 
  return base64Cipher
}