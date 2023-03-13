# Latihan Soal Chapter 4 Topic 2

## Perintal Soal
>1. Buatlah sebuah fungsi javascript untuk convert string jadi angka dalam format rupiah contoh :<br>
 input 100 menjadi Rp100 <br>
 input 1000 menjadi Rp1000 <br>
 input 1000000 menjadi Rp1000.000 <br>
  
## Penyelesaian

```ruby
function convertToRupiah(angka) {
  var rupiah = '';    
  var angkarev = angka.toString().split('').reverse().join('');
  for(var i = 0; i < angkarev.length; i++) {
    if(i % 3 == 0) {
      rupiah += angkarev.substr(i,3)+'.';
    }
  }
  var hasil = 'Rp '+rupiah.split('',rupiah.length-1).reverse().join('');
  return hasil;
}
```
- Kita mendefinisikan fungsi `function convertToRupiah(angka)` yang menerima satu parameter bernama angka, yaitu angka yang akan dikonversi ke format rupiah.
- Lalu, kita mendefinisikan variabel rupiah yang awalnya kosong `var rupiah = ''` dan akan digunakan untuk menyimpan hasil konversi.
- Selanjutnya, kita mengubah nilai angka menjadi string dengan method toString(), lalu membalik string tersebut dengan method split('').reverse().join(''). Hasil dari operasi ini kita simpan dalam variabel angkarev. `var angkarev = angka.toString().split('').reverse().join('')`
- Pada baris keempat, kita mulai melakukan looping dengan menggunakan for `for(var i = 0; i < angkarev.length; i++)`. Looping ini digunakan untuk menambahkan tanda titik setiap tiga digit. Dalam kondisi if, kita mengecek apakah i adalah kelipatan tiga dengan operator modulo %. Jika i mod 3 sama dengan nol `if(i % 3 == 0)`, maka kita ambil tiga digit dari angkarev dimulai dari indeks i menggunakan method substr(), dan menambahkannya ke variabel rupiah dengan menambahkan tanda titik "." di belakangnya `rupiah += angkarev.substr(i,3)+'.'`.
- Lalu, kita menyusun string hasil konversi `var hasil` dengan menambahkan awalan "Rp " dan membalikkan urutan string rupiah menjadi semula dengan method `split('',rupiah.length-1).reverse().join('')`.
- Pada baris terakhir, `return hasil` digunakan untuk mengembalikan hasil konversi yang disimpan dalam variabel hasil.

## Contoh Penggunaannya
```ruby
console.log(convertToRupiah('100')); // Rp100
console.log(convertToRupiah('1000000')); // Rp1.000.000
```
- Cara kerja fungsi ini adalah dengan mengambil angka sebagai parameter masukan dan mengonversinya menjadi string. 
- Kemudian string tersebut diubah menjadi array, kemudian dibalikkan dengan metode reverse() sehingga digit paling belakang menjadi digit paling depan. 
- Setelah itu, dilakukan pengulangan untuk menambahkan tanda titik (.) setiap tiga digit. 
- Terakhir, string hasilnya dibalikkan lagi dan ditambahkan awalan "Rp ".

## Perintah Soal
>2. Buatlah fungsi async await fetch ditto lalu ketika berhasil , print move-nya dan panggil fungsi fetch dengan ada hasil console log "Ditto move : transform"<br> optional : tampilin statsnya

## Penyelesaian
```ruby
async function getPokemon() {
  try {
    const response = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await response.json();
    const moves = data.moves.map((move) => move.move.name);
    console.log(`Ditto moves: ${moves.join(', ')}`);
    console.log(`Ditto move: ${moves[0]}`);
    console.log(`Ditto stats:`);
    data.stats.forEach((stat) => {
      console.log(`${stat.stat.name}: ${stat.base_stat}`);
    });
  } catch (error) {
    console.error(error);
  }
}

getPokemon();
```

- Pertama, kita mendefinisikan sebuah fungsi bernama getPokemon() yang merupakan fungsi async.
- Di dalam fungsi getPokemon(), kita menggunakan statement try-catch untuk menangani error yang mungkin terjadi pada saat melakukan fetch.
- Pada baris ketiga, kita melakukan fetch data dari API menggunakan await fetch('https://pokeapi.co/api/v2/pokemon/ditto'), dan menyimpan hasil responsenya pada variabel response.
- Pada baris keempat, kita mengubah responsenya menjadi JSON menggunakan await response.json(), dan menyimpan hasilnya pada variabel data.
- Pada baris kelima, kita menggunakan method map() pada array data.moves untuk mendapatkan daftar nama moves dari Pokemon Ditto, dan menyimpannya pada variabel moves.
- Pada baris keenam, kita mencetak daftar moves dengan menggunakan console.log(), dan menggabungkan nama moves menggunakan method join().
- Pada baris ketujuh, kita mencetak move pertama dari Ditto menggunakan console.log() dan mengakses elemen pertama dari array moves.
- Pada baris kedelapan, kita mencetak statistik dari Ditto menggunakan console.log() dan mengakses array data.stats.
- Pada baris kesembilan, kita menggunakan method forEach() pada array data.stats untuk mencetak setiap statistik dan nilai basenya.
- Jika terjadi error selama fetch, kita menangani error tersebut di dalam blok catch, dan mencetak errornya menggunakan console.error().
- Terakhir, kita memanggil fungsi getPokemon() untuk menjalankan fetch data dan mencetak hasilnya pada console.





