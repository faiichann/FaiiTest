const secondHand = document.querySelector('.second-hand'); //รับค่าการแสดงผลเข็มวินาที
const minsHand = document.querySelector('.min-hand'); //รับค่าการแสดงผลเข็มนาที
const hourHand = document.querySelector('.hour-hand'); //รับค่าการแสดงผลเข็มชั่วโมง

 function setTime(hour,mins) {
  const now = new Date(); //กำหนดตัวแปรเรียกเวลาปัจจุบัน

  const seconds = now.getSeconds(); //กำหนดตัวแปรวินาทีที่รับค่ามาจากตัวแปรเวลาปัจจุบัน
  const secondsDegrees = ((seconds / 60) * 360) + 90; //นำค่าวินาทีที่ได้มาแปลงเป็นองศาโดยมาหาร 60 และคูณ 360เพื่อให้ได้องศามา
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`; //ส่งค่าองศาวินาทีที่ได้ไปที่สไตล์

  const minsDegrees = ((mins / 60) * 360) + ((seconds/60)*6) + 90; //นำค่านาทีที่รับมาจากพารามิเตอร์มาแปลงเป็นองศาโดยมาหาร 60 และคูณ 360เพื่อให้ได้องศา
  minsHand.style.transform = `rotate(${minsDegrees}deg)`; //ส่งค่าองศานาทีที่ได้ไปที่สไตล์

  const hourDegrees = ((hour / 12) * 360) + ((mins/60)*30) + 90; //นำค่าชั่วโมงที่รับมาจากพารามิเตอร์มาแปลงเป็นองศาโดยมาหาร 12 และคูณ 360เพื่อให้ได้องศา
  hourHand.style.transform = `rotate(${hourDegrees}deg)`; //ส่งค่าองศาชั่วโมงที่ได้ไปที่สไตล์

}

setInterval(setTime, 1000); //ทำงานต่อเนื่องทุกๆ 1 วิ

setTime(7,08); // เรียกใช้งานฟังก์ชันรับค่า ชั่วโมง และนาที 