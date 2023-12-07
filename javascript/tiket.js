var app = angular.module('ticketing', []);
app.controller('ticketCtrl', function ($scope) {
    $scope.showFormPopup = false;
    $scope.ticketdetails = [{
        jenis: 'Orang',
        tanggal: $scope.date,
        harga: '25000',
        quantity: 0,
        image:'',
        snk: [
            { isi: 'Tiket berlaku hanya 1 kali sesuai tanggal kunjungan yang dipilih'},
            { isi: 'Tiket tidak dapat dikembalikan (non-refundable)'},
            { isi: 'Anak berusia 2 tahun ke atas atau dengan tinggi badan di atas 80cm dikenakan biaya tiket masuk'},
            { isi: 'Kendaraan pengunjung diparkirkan di area parkir yang telah disediakan'},
            { isi: 'Pihak manajemen tidak bertanggung jawab atas kesalahan pembeli pada saat proses reservasi online'}
        ]}, { 
        jenis: 'Mobil',
        tanggal: $scope.date,
        harga: '35000',
        quantity: 0,
        image:'',
        snk: [
            { isi: 'Tiket berlaku hanya 1 kali sesuai tanggal kunjungan yang dipilih'},
            { isi: 'Tiket tidak dapat dikembalikan (non-refundable)'},
            { isi: 'Belum termasuk dengan tiket pintu masuk (perorangan)'},
            { isi: 'Anak berusia 2 tahun ke atas atau dengan tinggi badan di atas 80cm dikenakan biaya tiket masuk'},
            { isi: 'Kendaraan pengunjung diparkirkan di area parkir yang telah disediakan'},
            { isi: 'Pihak manajemen tidak bertanggung jawab atas kesalahan pembeli pada saat proses reservasi online'}
        ]}, {
        jenis: 'Motor',
        tanggal: $scope.date,
        harga: '15000',
        quantity: 0,
        image:'',
        snk: [
            { isi: 'Tiket berlaku hanya 1 kali sesuai tanggal kunjungan yang dipilih'},
            { isi: 'Tiket tidak dapat dikembalikan (non-refundable)'},
            { isi: 'Belum termasuk dengan tiket pintu masuk (perorangan)'},
            { isi: 'Anak berusia 2 tahun ke atas atau dengan tinggi badan di atas 80cm dikenakan biaya tiket masuk'},
            { isi: 'Tidak berlaku untuk Motor Jenis Listrik'},
            { isi: 'Kendaraan pengunjung diparkirkan di area parkir yang telah disediakan'},
            { isi: 'Pihak manajemen tidak bertanggung jawab atas kesalahan pembeli pada saat proses reservasi online'}
        ]}, {
            jenis: 'Sepeda',
            tanggal: $scope.date,
            harga: '25000',
            quantity: 0,
            image:'',
            snk: [
            { isi: 'Tiket berlaku hanya 1 kali sesuai tanggal kunjungan yang dipilih'},
            { isi: 'Tiket tidak dapat dikembalikan (non-refundable)'},
            { isi: 'Belum termasuk dengan tiket pintu masuk (perorangan)'},
            { isi: 'Anak berusia 2 tahun ke atas atau dengan tinggi badan di atas 80cm dikenakan biaya tiket masuk'},
            { isi: 'Tidak berlaku untuk Sepeda Jenis Listrik'},
            { isi: 'Kendaraan pengunjung diparkirkan di area parkir yang telah disediakan'},
            { isi: 'Pihak manajemen tidak bertanggung jawab atas kesalahan pembeli pada saat proses reservasi online'}
        ]},{
            jenis: 'Orang + Sepeda',
            tanggal: $scope.date,
            harga: '35000',
            quantity: 0,
            image:'',
            snk: [
            { isi: 'Tiket berlaku hanya 1 kali sesuai tanggal kunjungan yang dipilih'},
            { isi: 'Tiket tidak dapat dikembalikan (non-refundable)'},
            { isi: 'Sudah termasuk dengan tiket pintu masuk (perorangan)'},
            { isi: 'Anak berusia 2 tahun ke atas atau dengan tinggi badan di atas 80cm dikenakan biaya tiket masuk'},
            { isi: 'Jadwal Masuk Khusus Sepeda: 06.00 - 08.30; 15.00 - 18.00'},
            { isi: 'Tidak berlaku untuk Sepeda Jenis Listrik'},
            { isi: 'Tiket ini bukan tiket penyewaan Sepeda'},
            { isi: 'Kendaraan pengunjung diparkirkan di area parkir yang telah disediakan'},
            { isi: 'Pihak manajemen tidak bertanggung jawab atas kesalahan pembeli pada saat proses reservasi online'}
        ]},{
            jenis: 'Bus/Truk',
            tanggal: $scope.date,
            harga: '60000',
            quantity: 0,
            image:'',
            snk: [
            { isi: 'Tiket berlaku hanya 1 kali sesuai tanggal kunjungan yang dipilih'},
            { isi: 'Tiket tidak dapat dikembalikan (non-refundable)'},
            { isi: 'Belum termasuk dengan tiket pintu masuk (perorangan)'},
            { isi: 'Anak berusia 2 tahun ke atas atau dengan tinggi badan di atas 80cm dikenakan biaya tiket masuk'},
            { isi: 'Kendaraan pengunjung diparkirkan di area parkir yang telah disediakan'},
            { isi: 'Pihak manajemen tidak bertanggung jawab atas kesalahan pembeli pada saat proses reservasi online'}
        ]}
    ];

    $scope.add = function (index) {
        $scope.ticketdetails[index].quantity++;
    };

    $scope.min = function (index) {
        if ($scope.ticketdetails[index].quantity > 0) {
            $scope.ticketdetails[index].quantity--;
        }
    };
    
    $scope.hitungTotal = function (ticketdetail) {
        return ticketdetail.harga * ticketdetail.quantity;
    };

    $scope.hitungKeseluruhan = function () {
        var grandTotal = 0;
        for (var i = 0; i < $scope.ticketdetails.length; i++) {
            grandTotal += $scope.hitungTotal($scope.ticketdetails[i]);
        }
        return grandTotal;
    };
    
    $scope.delete = function (index) {
        $scope.ticketdetails[index].quantity = 0;
    };
});