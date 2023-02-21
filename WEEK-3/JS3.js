// JAVASCRIPT 3
// JAWABAN NO 1
// Synchronous adalah sebuah perintah yang eksekusinya dijalankan secara berurutan, dimana perintah pertama dijalankan hingga selesai dan setelah itu menjalankan perintah selanjutnya.

// Asynchronous adalah sebuah perintah yang eksekusinyna dijalankan secara pararel, dimana perintah pertama dijalankan dan langsung menjalankan perintah berikutnya meskipun perintah pertama prosesnya belum selesai.

// JAWABAN NO 2
const cekHariKerja = (day) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const dataDay = ['senin', 'selasa', 'rabu', 'kamis', 'jumat'];
            let cek = dataDay.find((item) => {
                return item === day;
            });
            if(cek) {
                resolve(cek);
            }
            else {
                reject(new Error('Hari ini bukan hari kerja'));
            }
        }, 3080);
    });
};
// NO 2-A - Then catch
const thenCekHari = (day) => {
    cekHariKerja(day)
        .then((result) => {
            console.log(result, 'adalah hari kerja');
        }).catch((error) => {
            console.log(day, error.message);
        });
};
// Penggunaan Then catch, dimana then digunakan untuk menangani hasil resolve dari promise, dan catch digunakan untuk menangani reject yang berupa error.

// NO 2-B - Try catch
const tryCekHari = async (day) => {
    try {
        const result = await cekHariKerja(day);
        console.log(result, 'adalah hari kerja');
    }
    catch (error) {
        console.log(day, error.message);
    }
};
//Penggunaan Try catch dengan fitur Async-await, dimana Try digunakan untuk menangani promise yang berpotensi menimbulkan kesalahan, dan catch digunakan untuk menangani reject yang berupa error. karena try berupa asynchronous maka async-await dibutuhkan agar seolah-olah menjadi syncronous.
thenCekHari('senin');
tryCekHari('sabtu');


// JAWABAN NO 3 - Callback function menampilkan semua bulan
const getMonth = (callback) => {
    setTimeout(() => {
        let error = false;
        let month = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];
        if(!error) {
            callback(null, month);
        } else {
            callback(new Error('Sorry Data Not Found'), []);
        }
    }, 4000);
};
const showMonth = (error, data) => {
    if (!error) {
        const monthList = data.map(month => {
        return month;
        });
        console.log(monthList);
    } else {
        console.log(error.message);
    }
};
getMonth(showMonth);

// JAWABAN NO 4 - Program Bebas menggunakan Promise
// 4-A
const getTaskList = (week) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const taskList = [{week: 1, task: 'html dan css'}, {week: 2, task: 'Javascript Dasar'}, {week: 3, task: 'JS-2 dan JS-3'}];
            let cek = taskList.find(taskList => taskList.week == week);
            if(cek) {
                resolve(cek);
            }
            else {
                reject(new Error('Tugas tidak ada'));
            }
        }, 5000);
    })
};
getTaskList()
    .then((cek) => console.log(cek))
    .catch((error) => console.log(error.message));

getTaskList(3);


// 4-B
const member = ['muchamad', 'buchori'];
const addMember = (input) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log('Member awal', member);
            if(member.includes(input) === false){
                member.push(input);
                resolve(member);
            } else {
                reject(new Error('Nama sudah terdaftar'));
            }
        }, 5000);
    })
};
const runAddMember = async (input) => {
    try {
        const result = await addMember(input);
        console.log('Berhasil tambah :', result);
    }
    catch (error) {
        console.log('Gagal tambah', error.message);
    }
}
runAddMember('afif');


// JAWABAN NO 5 - Fetch dari REST API untuk menampilkan nama
fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
//   .then(data => console.log(data))
  .then((data) => {
    setTimeout(() => {
        data.forEach(user => {
            console.log(user.name);
        });
    }, 6000);
  })
  .catch(() => console.log('Data Not Found'));
