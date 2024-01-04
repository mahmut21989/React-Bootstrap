/* eslint-disable no-undef */
/* eslint-disable react/no-unescaped-entities */
import styles from "./Hero.module.scss";

export function Hero() {
  const forward = () => {
    // Butona tıklandığında yapılacak işlemler
    window.open("https://www.hurriyet.com.tr/lezizz/galeri-lezzet-avcilarina-ozel-erzurumun-en-iyi-10-cag-kebapcisi-36921052", "_blank");
  };

  return (
    <>
      <div className="container text-center mt-5">
        <div className="row">
          <div className="col">
            <h1 className="">P-T RESTORAN HOŞ GELDİNİZ</h1>
            <img src="../../../public/img/cağ.webp" className="mt-5"></img>
            <p className={styles.paragraf + " mt-4"}>Türkiye'nin en güzel şehirlerinden biri olan Erzurum, Doğu Anadolu
              Bölgesi'nde yer alıyor. Tarihi İpek Yolu'nun Erzurum'dan geçmesi,
              şehrin farklı kültürlerden izler taşımasına olanak sağlamış. Hem
              tarihi yapıları, hem de doğal güzellikleri ile tanınan Erzurum,
              aynı zamanda kış turizminde binlerce turiste ev sahipliği yapıyor.
              Türkiye'nin en yüksek dağlarından biri olan Palandöken Dağı, kış
              sporlarının yapılmasını sağlarken, şehrin turizmini de canlandırıyor.
              Yöresel lezzetlerin ön plana çıktığı Erzurum mutfağında, ilk akla gelen
              cağ kebabı olsa da, kete, ayran aşı, şalgam suyu, kadayıf dolması gibi
              lezzetler mutlaka denenmesi gerekenler arasında. ''Peki, bu lezzetleri
              nerede yiyebiliriz?'' derseniz, sizler için farklı önerilerimiz var.
            </p>
            <button type="button" className="btn btn-primary" onClick={forward}>Detaylar</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
