// function Human(ad,soyad, yas, cins) {
//     this.ad = ad;
//     this.soyad = soyad
//     this.yas = yas;
//     this.cins = cins;
//     this.melumat = function () {
//         console.log(`Ad:${this.ad},Soyad: ${this.soyad},Yas: ${this.yas},Cins : ${this.cins}`)
//     }
// }
// var insan1 =new Human ("John","Doe",32,"kisi");
// insan1.melumat(); // Ad:John,Soyad:Doe,Yas:32,Cins:kisi


// function Human(ad, soyad) {
//     this.ad = ad;
//     this.soyad = soyad;
    
//     this.getFullName = function() {
//         return this.soyad[0]+"."+this.ad;
//     }
// }
// var ad = prompt("Adınızı daxil edin:");
// var soyad = prompt("Soyadinizi daxil edin");
// var insan = new Human(ad, soyad);
// var tamAd = insan.getFullName();
// console.log(tamAd);


// function Employee(department,experienceYear,salary =0) {
//     this.department = department;
//     this.experienceYear = experienceYear;
//     this.salary = salary;  
// }
// let isci1 = prompt("department,experience year,salary daxil edin:");
// console.log(isci1);


// function Employee(department, experienceYear, salary = 0) {
//     this.department = department;
//     this.experienceYear = experienceYear;
//     this.salary = salary;
//     this.generateID = function() {
//         var departmentCode = this.department.substring(0, 2).toUpperCase();
//         var randomNum = Math.floor(Math.random() * 10000);
//         var id = departmentCode + randomNum.toString().padStart(4, '0');
//         return id;
//     }
// }
// let isci1 = prompt("department,experience year,salary daxil edin:");
// console.log(isci1);



