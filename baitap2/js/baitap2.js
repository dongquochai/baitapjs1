/***
 *  Bài tập: tính chu vi hình chữ nhật 
 * 
 *  Mô Hình Khối 
 * Khối 1:
 *  Chiều dài hình chữ nhật : chieudai
 *  Chiều rộng hình chữ nhật : chieurong
 * Khối 2:
 *  B1: tạo biến và gán giá trị 
 *  B2: tính chu vi hình chữ nhật 
 *      Diện tích= chiều dài * chiều rộng 
 *      Chu vi = (chiều dài + chiều rộng) *2
 *  Khối 3:
 *  Chu vi hình chữ nhật (m)
 *  Diện tích hình chữ nhật (m2)
 */

    //B1
    var chieudai = 10;
    var chieurong = 5;

    //B2
    var dientich= (chieudai*chieurong) ;
    var chuvi = (chieudai+chieurong) *2 ;

    //B3
    console.log("diện tích hình chữ nhật là: "+dientich+"m" );
    console.log("chu vi hình chữ nhật là: "+chuvi+"m2");

        //End