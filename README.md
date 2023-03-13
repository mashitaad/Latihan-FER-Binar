# Latihan Soal Chapter 4 Topic 2

## Perintal Soal
> Buatlah sebuah fungsi javascript untuk convert string jadi angka dalam format rupiah contoh : 
  input 100 menjadi Rp100
  input 1000 menjadi Rp1000
  input 1000000 menjadi Rp1000.000
  
## Penyelesaian

```ruby
function convertToRupiah(angka) {
  var rupiah = '';    
  var angkarev = angka.toString().split('').reverse().join('');
  for(var i = 0; i < angkarev.length; i++) {
    if(i%3 == 0) {
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
- Pada baris keempat, kita mulai melakukan looping dengan menggunakan for. Looping ini digunakan untuk menambahkan tanda titik setiap tiga digit. Dalam kondisi if, kita mengecek apakah i adalah kelipatan tiga dengan operator modulo %. Jika i mod 3 sama dengan nol, maka kita ambil tiga digit dari angkarev dimulai dari indeks i menggunakan method substr(), dan menambahkannya ke variabel rupiah dengan menambahkan tanda titik "." di belakangnya.
- Pada baris kelima, kita menyusun string hasil konversi dengan menambahkan awalan "Rp " dan membalikkan urutan string rupiah menjadi semula dengan method split('',rupiah.length-1).reverse().join('').
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
