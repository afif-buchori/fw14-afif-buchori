// Javascript-2
//JAWABAN SOAL NO 3 - Program Searching name (max output 3) ===============================
const names = [
    'Abigail', 'Alexandra', 'Alison',
    'Amanda', 'Angela', 'Bella',
    'Carol', 'Caroline', 'Carolyn',
    'Deirdre', 'Diana', 'Elizabeth',
    'Ella', 'Faith', 'Olivia', 'Penelope'
];

function searchName(input, limit, callback) {
    const filteredNames = names.filter((name) => {
        return name.toLowerCase().includes(input.toLowerCase());
    });
    const limitedNames = filteredNames.slice(0, limit);
    callback(limitedNames);
}
function printNames(names) {
console.log(names);
}

searchName('an', 3, printNames);

// JAWABAN NO 4 - Function validasi nilaiAwal < nilaiAkhir
function searchNilai(nilaiAwal, nilaiAkhir, dataArr) {
    if(dataArr.length < 5) {
        return 'Jumlah angka dalam Array harus lebih dari 5';
    }
    if(nilaiAwal > nilaiAkhir) {
        return 'Nilai akhir harus lebih besar dari nilai awal'
    }
    let result = dataArr.filter(nilai => nilai > nilaiAwal && nilai < nilaiAkhir);
    result.sort((a, b) => a - b);
    if(result.length > 0) {
        return result;
    }
    else {
        return 'Nilai tidak ditemukan';
    }
}
const dataArr = [2, 25, 4, 14, 17, 30, 8];
console.log(searchNilai(5, 20, dataArr));

// JAWABAN SOAL NO 5
let data = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
};
console.log(data);

// NO 5-A - Mengubah data menggunakan Spread operator
const newData = {
    name: 'Muchamad Afif Buchori',
    email: '4fifbuchori@gmail.com',
    hobby: ['Gamming', 'Hanging Out', 'Sleeping'],
};
const replaceData = {...data, ...newData};
console.log(replaceData);

// NO 5-B - Ambil data "street dan city"
const {street, city} = data.address;
console.log(`${street}, ${city}`);






