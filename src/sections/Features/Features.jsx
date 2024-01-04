import Card from "../../components/card";

function Features() {
    const feature1 = {
        imgSrc: "https://www.nizampide.com/wp-content/uploads/2018/07/adana-kebab%C4%B1-porsiyon-nizam-pide-s%C3%BCtla%C3%A7-istanbul-beyo%C4%9Flu-istiklal-caddesi-600x600.jpg",
        title: "Adana Kebap",
        text: "Türkiyenin damak çatlatan lezzeti ile adana kebap restourantımızın en gözde ürünlerindendir",
        button: "Sipariş Ver"
    }
    const feature2 = {
        imgSrc: "https://www.diyetkolik.com/site_media/media/2019/11/01/iskender-kebap.jpg",
        title: "İskender Kebap",
        text: "Ülkemizin Tereyağlı bol soslu lezzeti ile gerçekten damağı tadında kalcak lezzetlerinden birisi",
        button: "Sipariş Ver"
    }
    const feature3 = {
        imgSrc: "https://gidafoto.com/img/gallery-pide-pizza-lahmacun/highres/pde_01.JPG",
        title: "Pide-Lahmacun",
        text: "Dur diyemeyeceğiniz bir lezzetimiz Türk pizzası oaln pide lahmacun sadece tadına bakın ",
        button: "Sipariş Ver"
    }
    const feature4 = {
        imgSrc: "https://cdn.kisikates.com.tr/image-cache/cache/recipe_main_image_large/https---cdn.kisikates.com.tr/recipe-media/5f7d06b61e0d91e1ac10fce4ffe43af8fec2a539.jpeg",
        title: "Köpoğlu Mançısı",
        text:   "Patlıcan biber sarımsak ve yoğurt ile yapılan Ülkemzin en çok sevilen ve türketin mesesi ile ağzınıda mistik bir tat bırakacak",
        button: "Sipariş Ver"
    }
    const feature5 = {
        imgSrc: "https://www.unileverfoodsolutions.com.tr/dam/global-ufs/mcos/TURKEY/calcmenu/recipes/TR-recipes/2023/updates/acili-ezme/AciliEzme-1260x839.jpg",
        title: "Acılı Ezme",
        text:   "Kebapların lahmacunların hasılı etli yemekelrimizin vazgeçilöez lezeti Acılı Ezme",
        button: "Sipariş Ver"
    }
    const feature6 = {
        imgSrc: "https://media.byersoft.com//ecom/vendor/09/Image/2023_05/org/fistikli-kuru-baklava-gaziantep.png",
        title:  "Antep Baklava",
        text:   "Özel spesyal fıstıklı Antep Baklavamız Yedğinizde asla durulamayacak bir lezzet ",
        button: "Sipariş Ver"
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <Card imgSrc={feature1.imgSrc} title={feature1.title} text={feature1.text} button={feature1.button} />
                    <Card imgSrc={feature2.imgSrc} title={feature2.title} text={feature2.text} button={feature2.button} />
                    <Card imgSrc={feature3.imgSrc} title={feature3.title} text={feature3.text} button={feature3.button} />
                    <Card imgSrc={feature4.imgSrc} title={feature4.title} text={feature4.text} button={feature4.button} />
                    <Card imgSrc={feature5.imgSrc} title={feature5.title} text={feature5.text} button={feature5.button} />
                    <Card imgSrc={feature6.imgSrc} title={feature6.title} text={feature6.text} button={feature6.button} />

                </div>
            </div>
        </>
    )
}



export default Features;
