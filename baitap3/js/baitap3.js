/***
 *  Bài tập : Tính tổng 2 ký số 
 *  Mô Hình khối 
 * Khối 1 : input
 *  number (Số có 2 chữ số )
 * khối 2 : content
 *  B1: tạo biến , gán giá trị 
 *    hc ( hàng chục )
 *    dv ( hàng đơn vị)
 *  B2: 
 *  -lấy số  trong phép chia number/10
 *     hc = Math.floor(number/10)
 *  
 *  -Lấy phần dư hàng đơn vị number%10
 *      dv = number%10
 * Khối 3 : output
 *  Tổng 2 chữ số của number
 * 
 *  96 ==> 9 + 6 = 15
 *   
 *  
 */

    //b1: 
    var number= 96 ;

    //b2
    var hc = Math.floor(number/10) ;
    var dv = number%10

    //b3
    var tong = hc + dv ;
    console.log("tổng của 2 chữ số là: "+tong);


