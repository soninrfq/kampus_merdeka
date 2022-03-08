class Gempa {
    constructor(lokasi, skala) {
        this.lokasi = lokasi;
        this.skala = skala;
    }

    dampak(){
        let gempa;
        if(this.skala > 0 && this.skala <= 2) gempa = "Dampak tidak terasa";
        else if(this.skala > 2 && this.skala <= 4) gempa = "Bangunan retak";
        else if(this.skala > 4 && this.skala <= 6) gempa = "Bangunan roboh";
        else if(this.skala > 6) gempa = "Bangunan roboh dan berpotensi tsunami";
        else gempa = "Tidak terjadi gempa";

        document.write(`
            <tbody><tr>
                <td>${this.lokasi}</td>
                <td>${this.skala}</td>
                <td>${gempa}</td> 
            </tr></tbody>
        `);
    }
}

let g1 = new Gempa('Hawaii Region, Hawaii', 3.2, this.gempa);
let g2 = new Gempa('Walker, California', 1.3, this.gempa);
let g3 = new Gempa('Itoman, Japan', 4.5, this.gempa);
let g4 = new Gempa('Kermadec Islands, New Zealand', 6.6, this.gempa);
let g5 = new Gempa('Singaparna, Indonesia', 4.9, this.gempa);
let g6 = new Gempa('Sand Point, Alaska', 3.2, this.gempa);
let g7 = new Gempa('Bukittinggi, Indonesia', 6.2, this.gempa);
let g8 = new Gempa('Adak, Alaska', 4, this.gempa);
let g9 = new Gempa('Jereme, Haiti', 4.6, this.gempa);
let g10 = new Gempa('Tolsona, Alaska', 1.9, this.gempa);

g1.dampak();
g2.dampak();
g3.dampak();
g4.dampak();
g5.dampak();
g6.dampak();
g7.dampak();
g8.dampak();
g9.dampak();
g10.dampak();