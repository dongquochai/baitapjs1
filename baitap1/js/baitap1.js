/***
 *  Quy đổi Tiền tệ USD sang VNĐ
 *  Mô Hình Khối
 * 
 * Khối 1
 * Quy đổi tiền tệ USD sang tiền VNĐ
 * 
 * Khối 2
 * B1: Tạo biến , gán giá trị 
 * B2: quy đổi 1 USD = 23.500VNĐ
 * 
 * Khối 3
 * Giá tiền USD=1
 * giá tiền VNĐ=23.500
 */

//B1

var USD = 2;
var VNĐ = 23500;

//B2
var quydoi = USD * VNĐ ;

//B3 : mệnh giá đã đổi được 
console.log("Số tiền quy đổi sang tiền việt là : "+ quydoi + " nghìn đồng");
console.log(new Intl.NumberFormat('vn-VN', { maximumSignificantDigits: 3 }).format(quydoi));