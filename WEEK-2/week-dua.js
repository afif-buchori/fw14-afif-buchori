// JAWABAN SOAL NO 2
const biodata = {
    name: 'Muchamad Afif Buchori',
    age: 30,
    hobbies: ['Gamming', 'Hanging out', 'Sleeping'],
    isMarried: true,
    schoolList: [
        {
            name: 'SMK Telkom Darul Ulum Jombang',
            yearIn: 2008,
            yearOut: 2011,
            major: 'Multimedia'
        },
        {
            name: 'Institut Teknologi Nasional Malang',
            yearIn: 2012,
            yearOut: 2018,
            major: 'Teknik Informatika - S1'
        }
    ],
    skills: [
        {
            skillName: 'HTML',
            level: 'advanced'
        },
        {
            skillName: 'CSS',
            level: 'advanced'
        },
        {
            skillName: 'PHP',
            level: 'beginner'
        }
    ],
    interestingInCoding : true
};

// JAWABAN SOAL NO 3
function rataRataGrade(bhsindo,bhsingg,mtk,ipa) {
    let rataRata;
    let grade;
    if( bhsindo !== null && bhsindo !== undefined &&
        bhsingg !== null && bhsingg !== undefined &&
        mtk !== null && mtk !== undefined &&
        ipa !== null && ipa !== undefined
        ) {
            if( bhsindo >= 0 && bhsindo <= 100 &&
                bhsingg >= 0 && bhsingg <= 100 &&
                mtk >= 0 && mtk <= 100 &&
                ipa >= 0 && ipa <= 100
                ) {
                    rataRata = (bhsindo + bhsingg + mtk + ipa) / 4;
                    if(rataRata >= 90) {
                        grade = 'A';
                    }
                    else if(rataRata >= 80) {
                        grade = 'B';
                    }
                    else if(rataRata >= 70) {
                grade = 'C';
            }
            else if(rataRata >= 60) {
                grade = 'D';
            }
            else {
                grade = 'E';
            }
        }
        else {
            alert('Nilai yang anda masukkan salah !');
        }
    }
    else {
        alert('Semua Nilai Harus Terisi !');
    }
    resultRataRata.innerHTML = 'Nilai rata-rata adalah ' + rataRata;
    return 'Grade ' + grade;
};

// JAWABAN SOAL NO 4
function deteksiPalindrome(textPalindrome) {
    let result;
    let text = [];
    if(textPalindrome.length > 2) {
        for(let x = textPalindrome.length - 1; x >= 0; x--) {
            text = text + textPalindrome[x];
        }
        descriptionPalindrome.innerHTML = 'Kata awal : ' + textPalindrome + ' menjadi : ' + text;
        if(text == textPalindrome) {
            result = 'Kata ini adalah Palindrome';
        }
        else {
            result = 'Kata ini bukan Palindrome';
        }
    }
    else {
        alert('kurang dari 2 huruf');
    }
    return result;
};

// JAWABAN SOAL NO 5
function rubahKonsonan(textKonsonan) {
    let text = [];
    if(typeof textKonsonan == 'string') {
        for(let x = 0; x < textKonsonan.length; x++) {
            if(textKonsonan[x] == 'a') {
                text = text + 'o';
            }
            else {
                text = text + textKonsonan[x];
            }
        }
        return text;
    }
    else {
        alert('Tipe Data Harus String !')
    }
};


// DOM NO 1 - Algoritma dan Flowchart
const resultA = document.getElementById('gambar-a');
const resultB = document.getElementById('gambar-b');
const soalNoSatuA = document.getElementById('satu-a');
const soalNoSatuB = document.getElementById('satu-b');
soalNoSatuA.addEventListener('click', function() {
    resultB.style.display = 'none';
    resultA.style.display = 'block';
});
soalNoSatuB.addEventListener('click', function() {
    resultA.style.display = 'none';
    resultB.style.display = 'block';
});

// DOM NO 2 - OBJECT dan ARRAY of OBJECT
const dataObject = document.getElementById('data-object');
const dataName = document.getElementById('name');
const dataAge = document.getElementById('age');
const dataHobbies = document.getElementById('hobby');
const dataMarried = document.getElementById('married');
const dataSchoolList = document.getElementById('school-list');
const dataSkills = document.getElementById('skills');
const dataCoding = document.getElementById('coding');
const soalNoDua = document.getElementById('object-biodata');
soalNoDua.addEventListener('click', function() {
    dataName.innerHTML = biodata.name;
    dataAge.innerHTML = biodata.age + ' years old';
    dataHobbies.innerHTML = biodata.hobbies.join(', ');
    dataMarried.innerHTML = biodata.isMarried;
    dataCoding.innerHTML = biodata.interestingInCoding;
    let newList = '';
    for(let x = 0; x < biodata.schoolList.length; x++) {
        // console.log(biodata.schoolList[x].name);
        // console.log(biodata.schoolList[x].yearIn);
        // console.log(biodata.schoolList[x].yearOut);
        // console.log(biodata.schoolList[x].major);
        newList = newList + '<li>' + '(' +
            biodata.schoolList[x].yearIn + ' - ' +
            biodata.schoolList[x].yearOut + ') ' +
            biodata.schoolList[x].name + ' => ' +
            biodata.schoolList[x].major + '</li>';
    }
    dataSchoolList.innerHTML = newList;
    let newList2 = '';
    for(let x = 0; x < biodata.skills.length; x ++) {
        newList2 = newList2 + '<li>' + biodata.skills[x].skillName +
            ' (' + biodata.skills[x].level + ')</li>'
    }
    dataSkills.innerHTML = newList2;
});

// DOM NO 3 - HITUNG RATA-RATA dan GRADE
const inputBhsindo = document.getElementById('bhsindo');
const inputBhsingg = document.getElementById('bhsingg');
const inputMtk = document.getElementById('mtk');
const inputIpa = document.getElementById('ipa');
const resultRataRata = document.getElementById('result-ratarata');
const resultGrade = document.getElementById('result-grade');
const soalNoTiga = document.getElementById('rata2-grade');
soalNoTiga.addEventListener('click', function() {
    const bhsindo = parseInt(inputBhsindo.value);
    const bhsingg = parseInt(inputBhsingg.value);
    const mtk = parseInt(inputMtk.value);
    const ipa = parseInt(inputIpa.value);
    resultGrade.innerHTML = rataRataGrade(bhsindo,bhsingg,mtk,ipa);
});
const resetTiga = document.getElementById('reset-3');
resetTiga.addEventListener('click', function() {
    resultRataRata.innerHTML = '';
    resultGrade.innerHTML = '';
});

// DOM NO 4 - DETEKSI PALINDROME
const inputKataPalindrome = document.getElementById('kata-palindrome');
const descriptionPalindrome = document.getElementById('description-palindrome');
const resultPalindrome = document.getElementById('result-palindrome');
const soalNoEmpat = document.getElementById('deteksi-palindrome');
soalNoEmpat.addEventListener('click', function() {
    const valueKataPalindrome = inputKataPalindrome.value;
    resultPalindrome.innerHTML = deteksiPalindrome(valueKataPalindrome);
});
const resetEmpat = document.getElementById('reset-4');
resetEmpat.addEventListener('click', function() {
    descriptionPalindrome.innerHTML = '';
    resultPalindrome.innerHTML = '';
});

// DOM NO 5 - RUBAH KONSONAN
const inputKataKonsonan = document.getElementById('kata-konsonan');
const resultKonsonan = document.getElementById('result-konsonan');
const SoalNoLima = document.getElementById('rubah-konsonan');
SoalNoLima.addEventListener('click', function() {
    const valueKataKonsonan = inputKataKonsonan.value;
    resultKonsonan.innerHTML = rubahKonsonan(valueKataKonsonan);
});
const resetLima = document.getElementById('reset-5');
resetLima.addEventListener('click', function() {
    resultKonsonan.innerHTML = '';
});

// DOM TAMPILAN TIAP JAWABAN
function resetContent() {
    jwbNoSatu.style.display = 'none';
    jwbNoDua.style.display = 'none';
    jwbNoTiga.style.display = 'none';
    jwbNoEmpat.style.display = 'none';
    jwbNoLima.style.display = 'none';
    btnNoSatu.className = '';
    btnNoDua.className = '';
    btnNoTiga.className = '';
    btnNoEmpat.className = '';
    btnNoLima.className = '';
}
const jwbNoSatu = document.getElementById('jwb-no-satu');
const jwbNoDua = document.getElementById('jwb-no-dua');
const jwbNoTiga = document.getElementById('jwb-no-tiga');
const jwbNoEmpat = document.getElementById('jwb-no-empat');
const jwbNoLima = document.getElementById('jwb-no-lima');
const btnNoSatu = document.getElementById('no-satu');
const btnNoDua = document.getElementById('no-dua');
const btnNoTiga = document.getElementById('no-tiga');
const btnNoEmpat = document.getElementById('no-empat');
const btnNoLima = document.getElementById('no-lima');
btnNoSatu.addEventListener('click', function() {
    resetContent();
    jwbNoSatu.style.display = 'block';
    btnNoSatu.className = 'active';
});
btnNoDua.addEventListener('click', function() {
    resetContent();
    jwbNoDua.style.display = 'block';
    btnNoDua.className = 'active';
});
btnNoTiga.addEventListener('click', function() {
    resetContent();
    jwbNoTiga.style.display = 'block';
    btnNoTiga.className = 'active';
});
btnNoEmpat.addEventListener('click', function() {
    resetContent();
    jwbNoEmpat.style.display = 'block';
    btnNoEmpat.className = 'active';
});
btnNoLima.addEventListener('click', function() {
    resetContent();
    jwbNoLima.style.display = 'block';
    btnNoLima.className = 'active';
});


// console.log(biodata);
// console.log(rataRataGrade(80,90,89,69));
// console.log(deteksiPalindrome('malam'));
// console.log(rubahKonsonan('jakarta'));