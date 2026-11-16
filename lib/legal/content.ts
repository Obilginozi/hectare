import type { LegalPage } from "@/lib/legal/types";
import { company } from "@/lib/content";

const seller = {
  name: "Hectare AŞ · Hectare Foreign Trade",
  address: `${company.street}, ${company.locality} / ${company.region}`,
  email: company.email,
  phone: company.phoneDisplay,
  site: "https://www.hectare.com.tr",
};

export const legalPages: LegalPage[] = [
  {
    slug: "iptal-ve-iade",
    title: {
      tr: "İptal ve İade Koşulları",
      en: "Cancellation and Refund Conditions",
    },
    intro: {
      tr: "Tüketici hakları, cayma hakkı ile iptal ve iade koşulları aşağıda yer almaktadır.",
      en: "Consumer rights, the right of withdrawal, and cancellation and refund conditions are set out below.",
    },
    blocks: {
      tr: [
        { type: "h", text: "Genel" },
        {
          type: "ul",
          items: [
            "Web sitesi üzerinden elektronik ortamda sipariş verdiğiniz takdirde, size sunulan ön bilgilendirme formunu ve mesafeli satış sözleşmesini kabul etmiş sayılırsınız.",
            "Alıcılar, satın aldıkları ürünün satış ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmeler Yönetmeliği (RG:27.11.2014/29188) hükümleri ile yürürlükteki diğer yasalara tabidir.",
            "Ürün sevkiyat masrafı olan kargo ücretleri alıcılar tarafından ödenir.",
            "Satın alınan her bir ürün, 30 günlük yasal süreyi aşmamak kaydıyla alıcının gösterdiği adresteki kişi ve/veya kuruluşa teslim edilir. Bu süre içinde ürün teslim edilmezse alıcılar sözleşmeyi sona erdirebilir.",
            "Satın alınan ürün, eksiksiz ve siparişte belirtilen niteliklere uygun ve varsa garanti belgesi, kullanım kılavuzu gibi belgelerle teslim edilmek zorundadır.",
            "Satın alınan ürünün satılmasının imkânsızlaşması durumunda satıcı, bu durumu öğrendiğinden itibaren 3 gün içinde yazılı olarak alıcıya bildirir. 14 gün içinde toplam bedel alıcıya iade edilir.",
          ],
        },
        { type: "h", text: "Ürün bedeli ödenmezse" },
        {
          type: "p",
          text: "Alıcı, satın aldığı ürün bedelini ödemez veya banka kayıtlarında iptal ederse, satıcının ürünü teslim yükümlülüğü sona erer.",
        },
        { type: "h", text: "Kredi kartının yetkisiz kullanımı" },
        {
          type: "p",
          text: "Ürün teslim edildikten sonra, alıcının ödeme yaptığı kredi kartının yetkisiz kişiler tarafından haksız kullanıldığı tespit edilirse ve ürün bedeli ilgili banka veya finans kuruluşu tarafından satıcıya ödenmezse, alıcı sözleşme konusu ürünü 3 gün içinde, nakliye gideri satıcıya ait olacak şekilde satıcıya iade etmek zorundadır.",
        },
        { type: "h", text: "Mücbir sebeplerle teslimat gecikmesi" },
        {
          type: "p",
          text: "Satıcının öngöremeyeceği mücbir sebepler oluşursa ve ürün süresinde teslim edilemezse durum alıcıya bildirilir. Alıcı siparişin iptalini, ürünün benzeri ile değiştirilmesini veya engel ortadan kalkana dek teslimatın ertelenmesini talep edebilir. İptalde nakit ödemeler 14 gün içinde iade edilir; kredi kartı ödemelerinde bedel 14 gün içinde bankaya iade edilir. Bankanın alıcı hesabına yansıtması 2–3 haftayı bulabilir.",
        },
        { type: "h", text: "Ürünü kontrol etme yükümlülüğü" },
        {
          type: "p",
          text: "Alıcı, mal veya hizmeti teslim almadan önce muayene eder; ezik, kırık, ambalajı yırtılmış vb. hasarlı ve ayıplı ürünü kargo şirketinden teslim almaz. Teslim alınan ürünün hasarsız ve sağlam olduğu kabul edilir. Cayma hakkı kullanılacaksa ürün kullanılmamalıdır. Ürünle birlikte fatura da iade edilmelidir.",
        },
        { type: "h", text: "Cayma hakkı" },
        {
          type: "p",
          text: "Alıcı; ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa teslim tarihinden itibaren 14 gün içinde, satıcıya bildirmek şartıyla hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve gerekçe göstermeksizin malı reddederek sözleşmeden cayabilir. Hizmet sözleşmelerinde bu süre sözleşmenin imzalandığı tarihten başlar. Cayma hakkı süresi sona ermeden önce tüketicinin onayı ile ifasına başlanan hizmetlerde cayma hakkı kullanılamaz. Cayma hakkından kaynaklanan masraflar satıcıya aittir.",
        },
        {
          type: "p",
          text: `Cayma bildirimi için: ${seller.name}, ${seller.address}, ${seller.email}, ${seller.phone}. Bildirim iadeli taahhütlü posta, faks veya e-posta ile yapılır; ürün “Cayma hakkı kullanılamayacak ürünler” hükümleri çerçevesinde kullanılmamış olmalıdır.`,
        },
        { type: "h", text: "İade koşulları" },
        {
          type: "ul",
          items: [
            "İade edilecek ürünün faturası (kurumsal faturalarda iade faturası zorunludur), iade formu, kutu, ambalaj ve varsa standart aksesuarlar eksiksiz ve hasarsız teslim edilir.",
            "Satıcı, cayma bildiriminin ulaşmasından itibaren en geç 10 gün içinde toplam bedeli ve alıcıyı borç altına sokan belgeleri iade eder; 20 gün içinde malı geri alır.",
            "Alıcının kusurundan kaynaklanan değer azalması veya iade imkânsızlığında alıcı kusuru oranında zararları tazmin eder. Cayma süresi içinde usulüne uygun kullanımdan doğan değişikliklerden alıcı sorumlu değildir.",
          ],
        },
        { type: "h", text: "Cayma hakkı kullanılamayacak ürünler" },
        {
          type: "p",
          text: "Alıcının isteği veya açıkça kişisel ihtiyaçları doğrultusunda hazırlanan ve geri gönderilmeye elverişli olmayan ürünler; tek kullanımlık ürünler; çabuk bozulma tehlikesi olan mallar; ambalajı açıldığında sağlık ve hijyen açısından iadesi uygun olmayan ürünler; teslimden sonra başka ürünlerle karışan ve ayrıştırılması mümkün olmayan ürünler; elektronik ortamda anında ifa edilen hizmetler veya gayrimaddi mallar ile ambalajı açılmış ses/görüntü kayıtları, kitap, dijital içerik, yazılım ve benzeri ürünlerde yönetmelik gereği cayma hakkı kullanılamaz.",
        },
        { type: "h", text: "Ödeme ve teslimat" },
        {
          type: "p",
          text: "Ödeme, banka havalesi/EFT veya kredi kartı ile yapılabilir. Online kredi kartı ödemelerinde sipariş sonunda tutar çekilir. Temerrüt halinde alıcı, kart sahibi banka ile arasındaki sözleşme çerçevesinde sorumlu olur.",
        },
      ],
      en: [
        { type: "h", text: "General" },
        {
          type: "ul",
          items: [
            "By placing an electronic order through the website, you are deemed to have accepted the pre-information form and the distance sales agreement.",
            "Buyers are subject to Law No. 6502 on the Protection of Consumers, the Distance Contracts Regulation and other applicable laws.",
            "Shipping costs are paid by the buyer.",
            "Each purchased product is delivered within the statutory period of no more than 30 days to the person or organisation at the address given by the buyer. If delivery does not take place within this period, the buyer may terminate the contract.",
            "The product must be delivered complete, in accordance with the order, and with any warranty certificate and user manual where applicable.",
            "If sale of the product becomes impossible, the seller notifies the buyer in writing within 3 days of learning of the situation and refunds the total price within 14 days.",
          ],
        },
        { type: "h", text: "Right of withdrawal" },
        {
          type: "p",
          text: `The buyer may withdraw from the contract within 14 days of delivery without giving any reason, by notifying the seller. Contact: ${seller.name}, ${seller.address}, ${seller.email}, ${seller.phone}. Costs arising from withdrawal are borne by the seller.`,
        },
        { type: "h", text: "Returns" },
        {
          type: "p",
          text: "Within 10 days of receiving the withdrawal notice the seller refunds the total price; within 20 days the seller takes the goods back. The invoice, return form, packaging and standard accessories must be returned complete and undamaged.",
        },
      ],
    },
  },
  {
    slug: "mesafeli-satis",
    title: {
      tr: "Mesafeli Satış Sözleşmesi",
      en: "Distance Sales Agreement",
    },
    intro: {
      tr: "Bu sözleşme, alıcı ile satıcı arasında 6502 sayılı Kanun ve Mesafeli Sözleşmeler Yönetmeliği kapsamında hak ve yükümlülükleri düzenler.",
      en: "This agreement sets out the rights and obligations of buyer and seller under Law No. 6502 and the Distance Contracts Regulation.",
    },
    blocks: {
      tr: [
        { type: "h", text: "1. Taraflar" },
        {
          type: "p",
          text: `Satıcı: ${seller.name}. Adres: ${seller.address}. Telefon: ${seller.phone}. E-posta: ${seller.email}. Alıcı: Sipariş sırasında bildirilen ad, soyad ve adres bilgileri.`,
        },
        {
          type: "p",
          text: "Alıcı, siparişi onayladığında ürün bedeli ile varsa kargo, vergi ve diğer ek ücretleri ödeme yükümlülüğü altına girdiğini ve bu konuda bilgilendirildiğini kabul eder.",
        },
        { type: "h", text: "2. Tanımlar" },
        {
          type: "p",
          text: "Kanun: 6502 sayılı Tüketicinin Korunması Hakkında Kanun. Yönetmelik: Mesafeli Sözleşmeler Yönetmeliği (RG:27.11.2014/29188). Satıcı: Ticari veya mesleki faaliyetleri kapsamında tüketiciye mal sunan şirket. Alıcı: Mal veya hizmeti ticari veya mesleki olmayan amaçlarla edinen gerçek ya da tüzel kişi. Site: Satıcıya ait internet sitesi. Mal: Alışverişe konu taşınır eşya ve elektronik ortamda kullanılmak üzere hazırlanan gayrimaddi mallar.",
        },
        { type: "h", text: "3. Konu" },
        {
          type: "p",
          text: "Sözleşme, alıcının site üzerinden elektronik ortamda sipariş verdiği ürünün satışı ve teslimi ile ilgili tarafların hak ve yükümlülüklerini düzenler. Sitede ilan edilen fiyatlar satış fiyatıdır; güncellenene veya değiştirilene kadar geçerlidir. Süreli fiyatlar belirtilen süre sonuna kadar geçerlidir.",
        },
        { type: "h", text: "4. Satıcı bilgileri" },
        {
          type: "p",
          text: `${seller.name}. ${seller.address}. ${seller.phone}. ${seller.email}.`,
        },
        { type: "h", text: "5. Genel hükümler" },
        {
          type: "ul",
          items: [
            "Alıcı, ürünün temel nitelikleri, satış fiyatı, ödeme şekli ve teslimata ilişkin ön bilgileri okuyup elektronik ortamda teyit ettiğini kabul eder.",
            "Her ürün, 30 günlük yasal süreyi aşmamak kaydıyla ön bilgilerde belirtilen süre içinde teslim edilir; aksi halde alıcının sözleşmeyi feshetme hakkı saklıdır.",
            "Satıcı ürünü eksiksiz, siparişte belirtilen niteliklere uygun ve ilgili belgelerle teslim etmeyi taahhüt eder.",
            "Sipariş konusu ürünün ifasının imkânsızlaşması halinde satıcı 3 gün içinde yazılı bildirir ve 14 gün içinde bedeli iade eder.",
            "Ürün bedelinin ödenmemesi veya banka kaydında iptali halinde satıcının teslim yükümlülüğü sona erer.",
            "Kredi kartının yetkisiz kullanımında alıcı ürünü 3 gün içinde, nakliye satıcıya ait olmak üzere iade eder.",
            "Mücbir sebep halinde satıcı durumu bildirir; alıcı iptal, emsal ürün veya erteleme talep edebilir.",
            "Alıcı teslim öncesi ürünü muayene eder; hasarlı ürünü teslim almaz. Cayma kullanılacaksa ürün kullanılmaz; fatura iade edilir.",
            "Alıcı siteyi kamu düzenine, genel ahlaka ve yasalara aykırı biçimde kullanamaz.",
          ],
        },
        { type: "h", text: "6. Cayma hakkı" },
        {
          type: "p",
          text: "Mal satışında teslimden itibaren 14 gün, hizmette sözleşme tarihinden itibaren 14 gün içinde cayma hakkı kullanılabilir. Bildirim yazılı yapılır. İade için fatura, iade formu ve ürün eksiksiz/hasarsız teslim edilir. Satıcı bildirimin ulaşmasından itibaren 10 gün içinde bedeli iade eder, 20 gün içinde malı alır.",
        },
        { type: "h", text: "7. Yetkili mahkeme" },
        {
          type: "p",
          text: "Uyuşmazlıklarda, kanunda belirtilen parasal sınırlar dâhilinde tüketicinin yerleşim yerindeki veya işlemin yapıldığı yerdeki tüketici hakem heyeti veya tüketici mahkemesi yetkilidir.",
        },
        { type: "h", text: "8. Yürürlük" },
        {
          type: "p",
          text: "Alıcı, site üzerinden verdiği siparişe ait ödemeyi gerçekleştirdiğinde bu sözleşmenin tüm şartlarını kabul etmiş sayılır.",
        },
      ],
      en: [
        { type: "h", text: "1. Parties" },
        {
          type: "p",
          text: `Seller: ${seller.name}. Address: ${seller.address}. Phone: ${seller.phone}. Email: ${seller.email}. Buyer: the name and address stated in the order.`,
        },
        { type: "h", text: "2. Subject" },
        {
          type: "p",
          text: "This agreement governs the sale and delivery of products ordered electronically on the seller’s website under Law No. 6502 and the Distance Contracts Regulation.",
        },
        { type: "h", text: "3. Main terms" },
        {
          type: "ul",
          items: [
            "Delivery takes place within no more than 30 days.",
            "If performance becomes impossible, the seller notifies the buyer within 3 days and refunds within 14 days.",
            "The buyer may withdraw within 14 days of delivery for goods sales.",
            "After withdrawal notice, the seller refunds within 10 days and takes back the goods within 20 days.",
          ],
        },
        { type: "h", text: "4. Disputes" },
        {
          type: "p",
          text: "Consumer arbitration committees or consumer courts at the buyer’s place of residence or the place of the transaction are competent within the monetary limits set by law.",
        },
      ],
    },
  },
  {
    slug: "gizlilik-politikasi",
    title: {
      tr: "Gizlilik Politikası",
      en: "Privacy Policy",
    },
    intro: {
      tr: "Bu gizlilik ve güvenlik politikası, Hectare Foreign Trade’e ait internet sitesinin kullanımı sırasında kişisel verilerin nasıl işlendiğini açıklar.",
      en: "This privacy and security policy explains how personal data is processed when using the Hectare Foreign Trade website.",
    },
    blocks: {
      tr: [
        {
          type: "p",
          text: `${seller.site} adresinde yer alan hizmetler ${seller.name} firmasına aittir ve firmamız tarafından işletilir.`,
        },
        { type: "h", text: "Toplanan bilgiler" },
        {
          type: "p",
          text: "İletişim, talep veya site üzerindeki formlar aracılığıyla ad-soyad, firma bilgileri, telefon, adres ve e-posta gibi kişisel bilgiler işin doğası gereği toplanabilir. Bu sitede iletişim öncelikle telefon, e-posta ve WhatsApp üzerinden kurulur; sitede form bulunmuyorsa mesaj saklanmaz.",
        },
        { type: "h", text: "Kullanım amaçları" },
        {
          type: "p",
          text: "Toplanan bilgiler; taleplerinize yanıt vermek, ürün ve tedarik süreçlerini yürütmek, onayınız halinde kampanya ve ürün bilgilendirmesi yapmak, hizmet kalitesini geliştirmek ve yasal yükümlülükleri yerine getirmek amacıyla kullanılır. Bu amaçlar dışında üçüncü kişilere açıklanmaz.",
        },
        { type: "h", text: "IP ve teknik kayıtlar" },
        {
          type: "p",
          text: "Sistem sorunlarının tanımlanması ve hizmete ilişkin uyuşmazlıkların çözümü için IP adresi kaydedilebilir. Bu bilgiler genel tanımlama ve istatistiksel değerlendirme amacıyla da kullanılabilir.",
        },
        { type: "h", text: "Gizlilik taahhüdü" },
        {
          type: "p",
          text: "Firmamız gizli bilgileri özel ve gizli tutmayı, yetkisiz kullanımını ve üçüncü kişilere ifşasını önlemek için gerekli tedbirleri almayı taahhüt eder.",
        },
        { type: "h", text: "Ödeme güvenliği" },
        {
          type: "p",
          text: "Online ödeme süreçlerinde kredi kartı bilgileri sistemimizde saklanmaz. Kart bilgileri güvenli protokoller ile ilgili bankaya iletilir. Mail-order yöntemiyle iletilen kart bilgileri olası itiraz süreçleri için sınırlı süre tutulup ardından imha edilir.",
        },
        { type: "h", text: "Üçüncü taraf siteler" },
        {
          type: "p",
          text: "Sitemiz başka sitelere bağlantı verebilir. Bu sitelerin gizlilik uygulamalarından firmamız sorumlu değildir.",
        },
        { type: "h", text: "İstisnai açıklama halleri" },
        {
          type: "ul",
          items: [
            "Yürürlükteki hukuk kurallarının getirdiği zorunluluklar",
            "Sözleşme gereklerinin yerine getirilmesi",
            "Yetkili idari veya adli makamların usulüne uygun talepleri",
            "Kullanıcıların hak veya güvenliğini korumak için gerekli haller",
          ],
        },
        { type: "h", text: "E-posta güvenliği" },
        {
          type: "p",
          text: "E-posta ile kredi kartı numarası veya şifrelerinizi paylaşmayınız. E-posta içeriği üçüncü kişilerce görülebilir.",
        },
        { type: "h", text: "Çerezler" },
        {
          type: "p",
          text: "Site kullanımı hakkında teknik iletişim dosyaları (çerezler) kullanılabilir. Ayrıntılar için Çerez Politikası sayfasına bakınız.",
        },
        { type: "h", text: "Değişiklikler ve iletişim" },
        {
          type: "p",
          text: `Bu politika güncellenebilir; yayınlandığı tarihte yürürlüğe girer. Sorularınız için ${seller.email} adresine yazabilir veya ${seller.phone} numarasını arayabilirsiniz. ${seller.address}.`,
        },
      ],
      en: [
        {
          type: "p",
          text: `The services at ${seller.site} belong to ${seller.name} and are operated by our company.`,
        },
        { type: "h", text: "Information collected" },
        {
          type: "p",
          text: "Personal data such as name, company details, phone, address and email may be collected through contact or request channels. On this site, contact is primarily by phone, email and WhatsApp.",
        },
        { type: "h", text: "Purposes" },
        {
          type: "p",
          text: "Data is used to respond to requests, run supply processes, send product information where consented, improve service quality and meet legal obligations. It is not disclosed to third parties outside these purposes.",
        },
        { type: "h", text: "Security and exceptions" },
        {
          type: "p",
          text: "We take measures to keep confidential information secure. Disclosure may occur where required by law, to perform contracts, upon lawful authority request, or to protect rights and safety.",
        },
        { type: "h", text: "Contact" },
        {
          type: "p",
          text: `${seller.email} · ${seller.phone} · ${seller.address}`,
        },
      ],
    },
  },
  {
    slug: "kisisel-verilerin-korunmasi",
    title: {
      tr: "Kişisel Verilerin Korunması",
      en: "Protection of Personal Data",
    },
    intro: {
      tr: "Hectare Foreign Trade olarak kişisel verilerinizin 6698 sayılı Kişisel Verilerin Korunması Kanunu’na uygun işlenmesi ve muhafazasına önem veriyoruz.",
      en: "As Hectare Foreign Trade we attach importance to processing and safeguarding your personal data in accordance with Law No. 6698.",
    },
    blocks: {
      tr: [
        {
          type: "p",
          text: "Müşterilerimizi; kişisel verilerin toplanması, işlenmesi ve aktarılması amaçları ile yöntemleri ve Kanun’dan kaynaklanan hakları hakkında bilgilendirmek isteriz.",
        },
        { type: "h", text: "1. Toplama yöntemleri" },
        {
          type: "p",
          text: "Veri sorumlusu sıfatıyla; markalarımızın hizmetlerinden yararlanabilmeniz, onayınız halinde kampanyalar hakkında bilgilendirme, öneri ve şikayetlerin kaydı, daha iyi hizmet standartları ve ticari/iş stratejilerinin belirlenmesi amaçlarıyla kişisel verilerinizi sözlü, yazılı veya elektronik yöntemlerle; internet sitesi, sosyal medya, mobil uygulamalar ve benzeri kanallar üzerinden toplayabiliriz.",
        },
        { type: "h", text: "2. İşleme ve amaçlar" },
        {
          type: "p",
          text: "Çağrı merkezi, yazılı iletişim, sosyal medya, mobil ve diğer kanallar üzerinden onayınız dâhilinde elde edilen kişisel ve/veya özel nitelikli kişisel verileriniz; tamamen veya kısmen elde edilebilir, kaydedilebilir, saklanabilir, güncellenebilir, sınıflandırılabilir, amaç için gerekli süre boyunca muhafaza edilebilir ve kanuni veya hizmete bağlı gerekliliklerde yurt içinde/yurt dışında ilgili üçüncü kişilerle paylaşılabilir.",
        },
        { type: "h", text: "3. Aktarım" },
        {
          type: "p",
          text: "Kişisel verileriniz; açık rızanıza veya Kanun’daki güvenlik ve gizlilik esaslarına uygun olarak, faaliyetlerin yürütülmesi, iş ilişkilerinin sağlanması, hizmet ve fırsat sunulması ve hizmet kalitesinin artırılması amacıyla grup şirketleri, iş ortakları, tedarikçiler, denetim şirketleri ve yetkili kamu kurumlarıyla paylaşılabilecektir.",
        },
        { type: "h", text: "4. Kanun’un 11. maddesindeki haklarınız" },
        {
          type: "ul",
          items: [
            "Kişisel verilerinizin işlenip işlenmediğini ve hangi verilerin işlendiğini öğrenme",
            "İşleme amaçlarına ilişkin bilgi alma",
            "Yurt içinde veya yurt dışında aktarılan üçüncü kişileri bilme",
            "Eksik veya yanlış işlenmiş verilerin düzeltilmesini isteme",
            "Kanun’a uygun olarak silinmesini veya yok edilmesini isteme",
            "Düzeltme, silme veya yok etme işlemlerinin aktarıldığı üçüncü kişilere bildirilmesini isteme",
            "Otomatik sistemlerle analiz sonucu aleyhinize bir sonuca itiraz etme",
            "Kişisel verilerinizin birer kopyasını alma",
          ],
        },
        { type: "h", text: "Gizlilik ve güvenlik" },
        {
          type: "p",
          text: "Toplanan bilgiler kampanya, hizmet iyileştirme ve iletişim süreçlerinde kullanılır; habersizce üçüncü şahıslara satılmaz veya faaliyet dışı ticari amaçla kullanılmaz. Resmi makamların usulüne uygun talepleri saklıdır. Ödeme sayfalarında kredi kartı bilgileri firmamız sunucularında tutulmaz.",
        },
        { type: "h", text: "İletişim" },
        {
          type: "p",
          text: `Ünvan: ${seller.name}. Adres: ${seller.address}. Telefon: ${seller.phone}. E-posta: ${seller.email}.`,
        },
      ],
      en: [
        {
          type: "p",
          text: "We inform customers about the purposes and methods of collecting, processing and transferring personal data, and about rights arising from the Law.",
        },
        { type: "h", text: "1. Collection" },
        {
          type: "p",
          text: "As data controller we may collect personal data verbally, in writing or electronically through the website, social media and similar channels to provide services, record requests and complaints, improve standards and, where consented, share campaign information.",
        },
        { type: "h", text: "2. Your rights under Article 11" },
        {
          type: "ul",
          items: [
            "Learn whether your data is processed and which data is processed",
            "Receive information on processing purposes",
            "Learn third parties to whom data is transferred",
            "Request correction of incomplete or inaccurate data",
            "Request deletion or destruction in accordance with the Law",
            "Request that third parties be informed of correction, deletion or destruction",
            "Object to adverse outcomes of exclusively automated analysis",
            "Obtain a copy of your personal data",
          ],
        },
        { type: "h", text: "Contact" },
        {
          type: "p",
          text: `${seller.name}. ${seller.address}. ${seller.phone}. ${seller.email}.`,
        },
      ],
    },
  },
  {
    slug: "uyelik-ve-kullanim",
    title: {
      tr: "Üyelik ve Kullanım Sözleşmesi",
      en: "Membership and Terms of Use",
    },
    intro: {
      tr: "Lütfen sitemizi kullanmadan önce bu kullanım şartlarını dikkatlice okuyunuz.",
      en: "Please read these terms of use carefully before using our site.",
    },
    blocks: {
      tr: [
        {
          type: "p",
          text: `${seller.site} adresindeki site ${seller.name} firmasına aittir. Siteyi kullanan kişiler aşağıdaki şartları kabul etmiş sayılır. Kullanıcı, 18 yaş üzerinde olduğunu, sözleşmeyi okuduğunu ve şartlarla bağlı olduğunu kabul eder.`,
        },
        { type: "h", text: "1. Sorumluluklar" },
        {
          type: "ul",
          items: [
            "Firma, fiyatlar ile sunulan ürün ve hizmetler üzerinde değişiklik yapma hakkını saklı tutar.",
            "Kullanıcı, siteye tersine mühendislik uygulamayacağını ve kaynak koduna ulaşmaya çalışmayacağını kabul eder.",
            "Eksik veya yanlış bilgi nedeniyle doğacak zararlardan kullanıcı sorumludur; sözleşme ihlalinde üyelik sona erdirilebilir.",
            "Site iyileştirme ve yasal gereklilikler kapsamında IP adresi, erişim tarihi/saati ve ziyaret edilen sayfalar gibi teknik bilgiler toplanabilir.",
            "Kullanıcı, genel ahlaka, kanuna ve üçüncü kişilerin haklarına aykırı içerik üretemez; aksi halde hesap askıya alınabilir veya sona erdirilebilir.",
          ],
        },
        { type: "h", text: "2. Fikri mülkiyet" },
        {
          type: "p",
          text: "Sitedeki unvan, marka, logo, tasarım, bilgi ve yöntemler firmaya veya ilgili hak sahibine aittir. Siteyi ziyaret etmek bu haklar üzerinde hak vermez. İçerik izinsiz çoğaltılamaz, yayınlanamaz veya başka bir sitede kullanılamaz.",
        },
        { type: "h", text: "3. Gizli bilgiler" },
        {
          type: "p",
          text: "Firma, kullanıcıların ilettiği ad-soyad, adres, telefon ve e-posta gibi kişisel bilgileri üçüncü kişilere açıklamaz. Pazarlama iletişimi için verilen onay, gerekçe gösterilmeksizin iptal edilebilir; iptal 3 iş günü içinde işleme alınır. Resmi makamların usulüne uygun talepleri saklıdır.",
        },
        { type: "h", text: "4. Kayıt ve güvenlik" },
        {
          type: "p",
          text: "Kullanıcı doğru, eksiksiz ve güncel bilgi vermek zorundadır. Şifre ve hesap güvenliğinden kullanıcı sorumludur.",
        },
        { type: "h", text: "5. Mücbir sebep" },
        {
          type: "p",
          text: "Tabii afet, yangın, savaş, salgın, altyapı/internet arızası, elektrik kesintisi gibi tarafların kontrolü dışındaki hallerde yükümlülükler askıya alınır.",
        },
        { type: "h", text: "6. Değişiklikler ve uyuşmazlık" },
        {
          type: "p",
          text: "Firma hizmetleri ve sözleşme şartlarını değiştirebilir; değişiklikler yayımlandığı tarihte yürürlüğe girer. Uyuşmazlıklarda İstanbul (Merkez) mahkemeleri ve icra daireleri yetkilidir. Tarafların bilgisayar ve kayıtları HMK uyarınca delil kabul edilebilir.",
        },
      ],
      en: [
        {
          type: "p",
          text: `The site at ${seller.site} belongs to ${seller.name}. By using the site you accept these terms and confirm that you are over 18.`,
        },
        { type: "h", text: "1. Responsibilities" },
        {
          type: "ul",
          items: [
            "The company may change prices, products and services.",
            "Users must not reverse-engineer the site or attempt to obtain source code.",
            "Users are responsible for inaccurate information provided.",
            "Technical data such as IP address and visited pages may be collected.",
            "Unlawful or harmful content is prohibited.",
          ],
        },
        { type: "h", text: "2. Intellectual property" },
        {
          type: "p",
          text: "All trademarks, logos, designs and content on the site are protected. Visiting the site does not grant any rights over them.",
        },
        { type: "h", text: "3. Disputes" },
        {
          type: "p",
          text: "Istanbul (Central) courts and enforcement offices have jurisdiction over disputes arising from this agreement.",
        },
      ],
    },
  },
  {
    slug: "cerez-politikasi",
    title: {
      tr: "Çerez Politikası",
      en: "Cookie Policy",
    },
    intro: {
      tr: "Sizleri web sitemizde kullanılan çerez türleri, kullanım amaçları ve çerezlerin yönetimi hakkında bilgilendirmek isteriz.",
      en: "This page explains the types of cookies used on our website, their purposes and how you can manage them.",
    },
    blocks: {
      tr: [
        {
          type: "p",
          text: "Web sitemizi kişisel bilgi vermeden ziyaret edebilir, ürün ve hizmetlerimiz hakkında bilgi alabilirsiniz. Ziyaretlerde site kullanımına ilişkin bilgiler çerezler aracılığıyla toplanabilir.",
        },
        { type: "h", text: "Çerez nedir?" },
        {
          type: "p",
          text: "Çerez, bir siteyi ziyaret ettiğinizde tarayıcınız aracılığıyla bilgisayarınıza veya mobil cihazınıza kaydedilen küçük bir metin dosyasıdır. Sitelerin daha verimli çalışmasına ve tercihlerinizin hatırlanmasına yardımcı olur.",
        },
        { type: "h", text: "Çerez türleri ve amaçları" },
        {
          type: "p",
          text: "Geçerlilik sürelerine göre geçici (oturum) çerezler ve kalıcı çerezler bulunur. Geçici çerezler tarayıcı kapanınca silinir; kalıcı çerezler belirlenen süre boyunca cihazda kalabilir. Çerezler siteyi kolay kullanmak, ihtiyaçlara göre ayarlamak, performansı artırmak ve istatistiksel bilgi toplamak için kullanılabilir.",
        },
        { type: "h", text: "Çerezler nasıl toplanır?" },
        {
          type: "p",
          text: "Veriler, tarayıcıya eriştiğiniz cihazlar aracılığıyla toplanır ve cihaza özeldir. İstendiğinde kullanıcı tarafından silinebilir veya erişim kapatılabilir.",
        },
        { type: "h", text: "Gizlilik" },
        {
          type: "p",
          text: "Gizliliğiniz bizim için önemlidir. Kişisel verilerin korunmasına ilişkin aydınlatma metnine Kişisel Verilerin Korunması sayfasından ulaşabilirsiniz.",
        },
        { type: "h", text: "Çerezleri nasıl kontrol edebilirsiniz?" },
        {
          type: "ul",
          items: [
            "Kaydedilmiş çerezleri görüntüleyebilir ve silebilirsiniz",
            "Üçüncü taraf çerezlerini engelleyebilirsiniz",
            "Belirli sitelerden çerezleri engelleyebilirsiniz",
            "Tüm çerezleri engelleyebilirsiniz",
            "Tarayıcı kapanınca tüm çerezleri silmeyi seçebilirsiniz",
          ],
        },
        {
          type: "p",
          text: "Örnek: Google Chrome → Ayarlar → Gizlilik ve güvenlik → Üçüncü taraf çerezleri. Internet Explorer → İnternet Seçenekleri → Gizlilik. Çerezleri tamamen engellerseniz site bazı özelliklerini düzgün çalıştıramayabilir.",
        },
        { type: "h", text: "Mobil cihazlar" },
        {
          type: "p",
          text: "Apple: Ayarlar → Safari → Geçmişi ve Web Sitesi Verilerini Sil veya Tüm Çerezleri Engelle. Android: Chrome → Ayarlar → Gizlilik → Tarama verilerini temizle / Site ayarları → Çerezler.",
        },
        { type: "h", text: "İletişim" },
        {
          type: "p",
          text: `${seller.name}. ${seller.address}. ${seller.phone}. ${seller.email}.`,
        },
      ],
      en: [
        {
          type: "p",
          text: "You may visit our website without providing personal information. Information about site use may be collected through cookies.",
        },
        { type: "h", text: "What is a cookie?" },
        {
          type: "p",
          text: "A cookie is a small text file stored on your computer or mobile device by your browser when you visit a site. Cookies help the site work more efficiently and remember preferences.",
        },
        { type: "h", text: "Types and purposes" },
        {
          type: "p",
          text: "Session cookies are deleted when the browser closes; persistent cookies may remain for a set period. Cookies may be used for usability, personalisation, performance and statistics.",
        },
        { type: "h", text: "How to control cookies" },
        {
          type: "ul",
          items: [
            "View and delete saved cookies",
            "Block third-party cookies",
            "Block cookies from specific sites",
            "Block all cookies",
            "Delete all cookies when the browser closes",
          ],
        },
        {
          type: "p",
          text: "If you block cookies entirely, some features of the site may not work properly.",
        },
        { type: "h", text: "Contact" },
        {
          type: "p",
          text: `${seller.name}. ${seller.address}. ${seller.phone}. ${seller.email}.`,
        },
      ],
    },
  },
];
