const nama = "hazel";
let usia = 1000

const biodata = "dokumen.getElemtnt by id"

function generateBiodata() {
    let generasi;

    if(usia >10 && usia<18 ) { 
         generasi = "generasi remaja";

    } else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";

    } else if (usia > 30 && usia < 90) {
        generasi = "generasi tua";

    } else if (usia > 2 && usia < 10 ) {
        generasi = "generasi anak anak";
    }
    else {
        generasi = "generasi alien ya brow?";
    }

     return console.log('generasi saya adalah', generasi);

}

console.log(nama);
console.log(usia);

generateBiodata();