// JAVASCRIPT 2
// JAWABAN SOAL NO 1 =========================================================

// ==>> Var adalah keyword untuk mendeklarasikan variabel sejak versi pertama.
//      => Apabila penggunaan "Var" didalam block scope maka masih bisa digunakan pada global scope.

// ==>> Let adalah keyword untuk mendeklarasikan variabel mulai dari versi ES6.

// ==>> Const adalah keyword untuk mendeklarasikan variabel sekaligus menentukan nilainya, karena "Const" nilainya tidak bisa diubah.


// ==>>> Global Scope adalah lingkup variabel yang dapat diakses diseluruh kode Javascript dan biasanya dideklarasikan di luar fungsi. variabel global dapat diakses oleh semua fungsi.

// ==>>> Local Scope adalah lingkup variabel yang dideklarasikan didalam sebuah fungsi dan hanya dapat diakses didalam fungsi tersebut, sehingga tidak dapat diakses diluar fungsi.

// ==>>> Block Scope adalah lingkup variabel yang dideklarasikan didalam sebuah blok kode (ex: kondisi if atau loop) dan hanya dapat diakses didalam blok kode tersebut, kecuali deklarasinya menggunakan "var".



// JAWABAN SOAL NO 2 - METHOD (built in function) ======================================

// 1. String to Lower Case adalah method untuk mengubah sebuah string menjadi huruf kecil.
const str = '  HeLLo woRLd  ';
console.log('Nilai awal :', str)
console.log('LowerCase  :', str.toLowerCase());
// sifat : non-mutasi

// 2. String Trim adalah method untuk menghapus spasi di awal dan di akhir sebuah string.
console.log(str.trim());
// sifat : non-mutasi

// 3. String Char At adalah method untuk mengambil karakter pada indeks tertentu dari sebuah string
console.log('Char At :', str.charAt(10));
// sifat : non-mutasi

// 4. Array Filter adalah method untuk memfilter elemen-elemen dari array berdasarkan kondisi tertentu, dan akan mengembalikan array baru yang hanya memenuhi kondisi tersebut.
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
console.log('angka :', angka)
let newArrFilter = angka.filter(number => number % 2 === 0);
console.log('Filter Genap', newArrFilter);
// sifat : non-mutasi

// 5. Array Includes adalah method untuk mengecek apakah sebuah nilai tertentu terdapat pada sebuah array. Nilai yang di kembalikan berupa boolean (true / false) 
console.log('includes', angka.includes(5));
console.log('includes', angka.includes(11));
// sifat : non-mutasi

// 6. Array Find adalah method untuk mencari nilai yang cocok dengan nilai yang di tentukan, dan mengembalikan nilai tersebut. Jika tidak ditemukan maka akan mengembalikan nilai undifined.
const users = [
    { id: 1, name: 'alice', age: 23 },
    { id: 2, name: 'bob', age: 27 },
    { id: 3, name: 'charlie', age: 21 },
    { id: 4, name: 'david', age: 32 },
];
console.log(users);
const user = users.find((user) => user.name == 'charlie');
console.log(user);
// sifat: non-mutasi

// 7. Array Index Of adalah method untuk mencari indeks yang cocok dengan nilai yang di tentukan. Jika tidak ditemukan maka mengembalikan nilai -1.
const buah = ['apel', 'pisang', 'durian', 'jeruk'];
console.log(buah);
console.log('index =', buah.indexOf('durian'));
console.log('index =', buah.indexOf('kiwi')); // Output: -1
// sifat : non-mutasi

// 8. Array Pop adalah method untuk menghapus dan mengembalikan elemen terakhir dari sebuah array.
const lastFruit = buah.pop();
console.log('Nilai yg di hapus :', lastFruit);
console.log(buah);
// sifat : mutasi (krn menghapus nilai elemen terakhir)

// 9. Array Foreach adalah sebuah method untuk menjalankan fungsi pada setiap elemen dalam sebuah array, method ini dapat mempersingkan penulisan kode dari pada menggunakan looping for, while dan do while.
buah.forEach(fruit => console.log(`buah ${fruit}`));
//sifat: non-mutasi

// 10. Array slice adalah method untuk mengambil sebagian item dari sebuah array dan mengembalikan sebuah array baru. method ini memiliki 2 argumen untuk menentukan index dari array yang akan diambil dimana argumen pertama akan menentukan index yang akan mulai diambil, dan argumen kedua akan menentukan akhir dari index yang akan diambil (index dari argumen kedua ini nilainya tidak diambil).
console.log(buah.slice(1, 3));
// sifat: non-mutasi