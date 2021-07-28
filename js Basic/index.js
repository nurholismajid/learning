let name = "olis";
console.log(name);

let fristname = "Nurholis", lastname = "Majid";
console.log(fristname  +  ""  + lastname); 

let angka = 1;

angka = 12 ;

console.log(angka);



// const jumlah = 10;

// jumlah = 50;

// console.log(jumlah);

// let nama = 'olis';
// let status = false;
// let nama = undefined;
// let nama = null;

let data = {
    name :"nurholis Majid",
    age: 20
}

console.log(data);
console.log(data.name);
console.log(data.age);

let makanan =  ["ayam", "mie instan", "susu"];

console.log(makanan[1]);

function nama(nama){
    return "nama saya adalah :"+nama;
}
console.log(nama("Nurholis Majid"));

function teriak(){
    return "Hello World!";
    }
    
    console.log(teriak());
    

function kalikan(nilai1,nilai2){
    var hasil = nilai1 * nilai2;
    return hasil;
}

var hasilkali = kalikan(2,24);
console.log(hasilkali);

function perkenalan(name, age , address, hoby){
   var kalimat = "Nama saya "+name+", umur saya "+age+" tahun, alamat saya di "+address+", dan saya punya hobby yaitu "+hoby+"!";
   return kalimat;
}

console.log(perkenalan("nurholis", 27, "tasikmalaya", "main game"));

var increment = 1;
while(increment <= 20) {
    if(increment%2==0){
    console.log(increment +"-I love coding");
}
    increment++; }

    var increment = 20;
    while(increment > 0) {
        if(increment%2==0){
        console.log(increment +"- I will become a mobile developer");
    }
        increment--; }
    


for (let i = 1; i <= 20; i++) {
    if(i%3==0){
    console.log(i +"- I Love Coding");
    }
    else if(i%2==0){
        console.log(i +"-  Berkualitas");
        }
    else{
        console.log(i +"-   Santai");
    }
}


    var tinggi= 4;
    for (baris = 0; baris <= tinggi ; baris++) {
 

    for (i = 1; i < 8; i++) {
    document.write("#"); }

    document.write("<br>"); }


    var tinggi= 8;
    for (baris = 0; baris <= tinggi ; baris++) {
 

    for (i = 1; i < 1 * baris; i++) {
    document.write("#"); }

    document.write("<br>"); }


    var tinggi= 9;
    for (baris = 0; baris <= tinggi ; baris++) {
     if(baris%2==0){
        document.write("");
     }else{
     document.write("<span>&nbsp;</span>");}

    for (i = 1; i < 5; i++) {
    document.write(" #"); }

    document.write("<br>"); }

    var word = 'JavaScript'; 
    var second = 'is'; 
    var third = 'awesome'; 
    var fourth = 'and'; 
    var fifth = 'I'; 
    var sixth = 'love'; 
    var seventh = 'it!';

    var kalimat = word + " " + second + " " + third + " " + fourth + " " + fifth  +  " " + sixth + " " + seventh;
    console.log(kalimat);


var sentence = "I am going to be React Native Developer";
var jadi = sentence.split(' ')
var exampleFirstWord = jadi[0];
var secondWord = jadi[1]; 
var thirdWord = jadi[2];  
var fourthWord = jadi[3];
var fifthWord = jadi[4]; 
var sixthWord = jadi[5];  
var seventhWord = jadi[6]; 
var eighthWord = jadi[7]; 

console.log('First Word: ' + exampleFirstWord); 
console.log('Second Word: ' + secondWord); 
console.log('Third Word: ' + thirdWord); 
console.log('Fourth Word: ' + fourthWord); 
console.log('Fifth Word: ' + fifthWord); 
console.log('Sixth Word: ' + sixthWord); 
console.log('Seventh Word: ' + seventhWord); 
console.log('Eighth Word: ' + eighthWord)



var sentence2 = 'wow JavaScript is so cool'; 

var exampleFirstWord2 = sentence2.substring(0, 3); 
var secondWord2 = sentence2.substring(4, 14); // do your own! 
var thirdWord2 = sentence2.substring(15, 17); // do your own! 
var fourthWord2 = sentence2.substring(18, 20); // do your own! 
var fifthWord2 = sentence2.substring(21, 25); // do your own! 

console.log('First Word: ' + exampleFirstWord2); 
console.log('Second Word: ' + secondWord2); 
console.log('Third Word: ' + thirdWord2); 
console.log('Fourth Word: ' + fourthWord2); 
console.log('Fifth Word: ' + fifthWord2);

console.log('First Word: ' + exampleFirstWord2 + ', with length: ' + exampleFirstWord2.length); 
console.log('Second Word: ' + secondWord2 + ', with length: ' + secondWord2.length ); 
console.log('Third Word: ' + thirdWord2 + ', with length: ' + thirdWord2.length); 
console.log('Fourth Word: ' + fourthWord2 + ', with length: ' + fourthWord2.length); 
console.log('Fifth Word: ' + fifthWord2 + ', with length: ' + fifthWord2.length); 


var nama1 = "nurholis";
var peran1 = "Werewolf";

if( nama1 == "" ){
    console.log("Nama harus diisi!");
}
else if( nama1 != "" && peran1 == "" ){
    console.log("Halo "+nama1+", Pilih peranmu untuk memulai game!");
}
else if( nama1 != "" && peran1 == "Penyihir" ){
    console.log("Selamat datang di Dunia Werewolf,"+nama1);
    console.log("Halo "+peran1+" "+nama1+", kamu dapat melihat siapa yang menjadi werewolf!");
}

else if( nama1 != "" && peran1 == "Guard" ){
    console.log("Selamat datang di Dunia Werewolf,"+nama1);
    console.log("Halo "+peran1+" "+nama1+",kamu akan membantu melindungi temanmu dari serangan werewolf.");
}
else if( nama1 != "" && peran1 == "Werewolf" ){
    console.log("Selamat datang di Dunia Werewolf,"+nama1);
    console.log("Halo "+peran1+" "+nama1+",Kamu akan memakan mangsa setiap malam!");
}


var hari = 21; 
var bulan = 1; 
var tahun = 1945;

switch (bulan) {
    case 1:
        var labelbulan = "Januari";
      break;
    case 2:
        var labelbulan = "Februari";
      break;
    case 3:
        var labelbulan = "Maret";
      break;
      case 4:
        var labelbulan = "April";
      break;
    case 5:
        var labelbulan = "Mei";
      break;
    case 6:
        var labelbulan = "Juni";
      break;
      case 7:
        var labelbulan = "Juli";
      break;
    case 8:
        var labelbulan = "Agustus";
      break;
    case 9:
        var labelbulan = "September";
      break;
      case 10:
        var labelbulan = "Oktober";
      break;
    case 11:
        var labelbulan = "November";
      break;
    case 12:
        var labelbulan = "Desember";
      break;
    default:
       
  }

  console.log(hari+ " "+labelbulan+" "+tahun);

  function range(awal, akhir){
    var array =[]
    for (i = awal; i <= akhir ; i++) {
        array.push(i);
    }

    return array;

  }

  console.log(range(10,20));


  function rangestep(awal, akhir, step){
    var array =[]
    for (i = awal; i <= akhir ; i+=step) {
        array.push(i);
    }

    return array;

  }

  console.log(rangestep(10,20,2));
  console.log(rangestep(10,20,2).sort(function(a, b){return b-a}));


  function rangestep(awal, akhir, step){
    var array =[]
    for (i = awal; i <= akhir ; i+=step) {
        array.push(i);
    }

    return array;

  }

  console.log(rangestep(10,20,2));
  console.log(rangestep(10,20,2).sort(function(a, b){return b-a}));


  function sum(awal, akhir, step){
    
    var array =[]
    if(step != undefined){
    for (i = awal; i <= akhir ; i+=step) {
        array.push(i);
   
    }
    }else{

        for (i = awal; i <= akhir ; i++) {
            array.push(i);
       
        }
    
    }
    return array;

  }

  console.log(sum(10,20).reduce(function(acc, val) { return acc + val; }, 0));


  var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(input) {
  var i = 0;
  let modifiedArr = input.map(function(element){
    var dataarray = [
      "Nomor ID: " + element[i,0],
      "Nama Lengkap: "+ element[i,1],
      "TTL: " + element[i,2],
      "HObi: " + element[i,3],
    ];
    i++;
    return dataarray;
  });
  return modifiedArr;
}

console.log(dataHandling(input));

function reverseString(str) {
  var newString = "";
  for (var i = str.length - 1; i >= 0; i--) {
      newString += str[i];
  }
  return newString;
}

console.log(reverseString('PadjadjaranLab'));


function arrayToObject(data){
  var i = 0;
  var now = new Date()
  var thisYear = now.getFullYear() // 2020 (tahun sekarang)
  
  let modifiedArr = data.map(function(element){
    var age = thisYear - element[i,3];
    var dataarray = { 
      "firstName": element[i,0],
      "lastName": element[i,1],
      "gender": element[i,2],
      "age": age 
    };
    i++;
    return dataarray;
  });
  return modifiedArr;
}

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ];

console.log(arrayToObject(people));

