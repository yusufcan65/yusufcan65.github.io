var bilgi =
      {
        "ad" :"YUSUF",
        "soyad": "CAN",
        "dogumtarihi": "10.10.2000",
        "adres": "van/gürpınar",
        "telefon" :"05555555555",
        "e-mail": "can1221@gmail.com",
        "iş": "öğrenci"

      }

      var jsonVeri= json.stringfy(bilgi);
      var veri= json.parse(jsonVeri);
      document.getElementById("ad").innerHTML=veri.ad;
      document.getElementById("soyad").innerHTML=veri.soyad;
      document.getElementById("dogumtarihi").innerHTML=veri.dogumtarihi;
      document.getElementById("adres").innerHTML=veri.adres;
      document.getElementById("telefon").innerHTML=veri.telefon;
      document.getElementById("e-mail").innerHTML=veri.e-mail;
      document.getElementById("iş").innerHTML=veri.iş;

      