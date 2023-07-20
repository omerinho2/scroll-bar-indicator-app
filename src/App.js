import React, { useState, useEffect } from 'react';
import './ScrollIndicator.css';
import './App.css';

function App() {

  const [scrollTop, setScrollTop] = useState(0);

  const onScroll = () => {
    const winScroll = document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight ;
    
    const scrolled = (winScroll / height) *100;

    setScrollTop(scrolled);

  }


  useEffect(()=>{
    window.addEventListener("scroll",onScroll);
  })


  return (
    <div className="App">
      <div className='progressMainWrapper'>
        <div className='progressMainStyle' style={{width : `${scrollTop}%`}}></div>
      </div>
      <h1>Roma İmparatorluğu</h1>
      <p>
      Roma İmparatorluğu, Roma Cumhuriyeti döneminde Augustus'un Cumhuriyeti tek başına yönetebilecek yetkiler alması ve Cumhuriyet döneminde kimseye verilmemiş haklara sahip olmasıyla oluşan Antik Roma devletidir.[1] Augustus, M.Ö. 2 yılına kadar Cumhuriyeti kendisinden sonra da tek bir kişinin yönetebilmesini sağlayacak anayasal reformlar gerçekleştirdi ve Roma İmparatorluğu tam anlamıyla oluşmuş oldu.

Uzun yıllar Akdeniz çevresinde hüküm süren imparatorluk, 375 yılındaki Kavimler Göçü'yle başlayan iç karışıklıklardan sonra 395 tarihinde doğu ve batı olmak üzere ikiye ayrıldı, kuruluşundan ikiye ayrılışına kadar süper güç olarak kaldı. İmparatorluğun batıdaki kısmı olan Batı Roma İmparatorluğu Kavimler Göçü'yle Avrupa'ya gelen Cermen kavimlerinin saldırıları sonucu 476 yılında yıkılmış, doğu kısmıysa varlığını Doğu Roma İmparatorluğu veya Bizans İmparatorluğu olarak 1453'te Osmanlı İmparatorluğu'nun yedinci Padişahı II. Mehmet'in İstanbul'u fethine kadar sürdürmüştür.

"Roma İmparatorluğu" ünlü Latince Imperium Romanum'un Türkçesidir. Bu deyişte imperium sözcüğü bir bölge, vilayet anlamında kullanılmaktadır. Roma İmparatorluğu Avrupa'nın Romalıların egemenliği altında kalan kısmı için kullanılan bir isimdi, denilebilir. Aslında Roma kent sınırlarının aşılması ve yayılma politikası imparatorluk döneminden çok önce başlamıştı. Roma İmparatorluğu en geniş olduğu dönemde yaklaşık 5.900.000 km² büyüklüğündeydi. Avrupa tarihinin "klasik antikite" dönemindeki en geniş imparatorluğuydu.

Augustus'un hükümdarlığından yüzyıllar önce Roma (Roma Krallığı ve Roma Cumhuriyeti) zaten İtalyan Yarımadası'nı aşmış, önemli rakiplerini yenilgiye uğratmıştı. Augustus'un reformları Roma Devleti'ni bir imparatorluğa çevirmiş, 3. yüzyılın sonlarındaki Diokletian reformuna kadar sistem büyük oranda değişmeden devam etmiştir. Diokletian reformu imparatorluğu tetrarşiye dönüştürmüştür. Her ne kadar Diokletian'ın sunduğu politik sistem kısa bir süre boyunca varlığını korusa da, imparatorluğun ikiye bölünmesine yol açmıştır. Bu da Roma'nın egemenliğinin iki yüzyıl boyunca daha Doğu ve Batı Roma İmparatorluğu olarak sürdürmesine olanak sağlamıştır.

Batı Roma İmparatorluğu'nun geleneksel çöküş tarihi 4 Eylül 476'dır. Yaklaşık bin yıl sonra, 1453'te, daha çok Bizans İmparatorluğu olarak anılan Doğu Roma İmparatorluğu Osmanlıların egemenliğine geçmiştir. Augustus'tan Batı Roma imparatorluğu'nun çöküşüne kadar Roma, Batı Avrasya'da egemen olmuş, nüfusun yarısını barındırmıştır.

Gelişimi
Geleneksel olarak tarihçiler, imparatorluğu Principatus ve Dominatus olarak iki döneme ayırırlar. Principatus Augustus'un iktidara gelmesinden Üçüncü Yüzyıl Krizi'ne kadarki dönemi, Dominatus ise Diocletianus'tan batı imparatorluğunun yıkılışına kadarki dönemi kapsar. Bu ayrıma göre Principate (Latince "birincil vatandaş anlamına gelen princeps kelimesinden gelir) döneminde mutlakıyetin gerçekleri resmî olarak cumhuriyetçi yapının ardında saklanırken Dominate (Latince "sahip" ya da "efendi" anlamına gelen dominus kelimesinden gelir) döneminde altın taçlar ve ihtişamlı imparatorluk törenleriyle açıkça gözler önüne serilmiştir. Daha yakın dönemlerde tarihçiler aradaki farkın daha ince olduğuna karar vermişlerdir. Bazı tarihi yapılar bin yıldan uzun süre devam ederek Doğu Roma dönemine kadar sürmüş ve emperyal ihtişamın görüntüsü imparatorluğun ilk günlerinden itibaren yaygın olmuştur.

Şehir devleti olarak ortaya çıkmış, Yunan şehir devletinden farklı olarak cumhuriyetçi örgütlenme ve yayılmacı bir politika izlemiştir. Bu politika bağlamında elde ettiği askeri zaferlerle geniş bir coğrafyaya yayılmış, kontrolü altına aldığı yerlerde idare kurmadan özerklik tanımıştır.

Siyasi yapı
Roma'ya göre cumhuriyet, bir araya gelmiş küçük bir soylu grubunun kralı tahttan indirmesiyle ortaya çıkmıştır. Bu cumhuriyetçi dönemde toplum iki gruba ayrılmıştır: patriciler (varlıklı olan kesim) ve plebler (halk). Bu iki gruptan biri olan patrciler siyasi boyutta yer alıp söz sahibi olabiliyorken pleblerin böyle bir hakkı bulunmamakta, plebler senatodan yer almamakta, kişinin senatoda yer alması için siyasi bir görevde çalışmış olması şartı aranmaktaydı.

Zamanla çıkan ayaklanmalar sonucunda plebler bir meclis oluşturarak yasa çıkarma hakkına sahip oldular. Bu meclis, halktaki farklı kesimleri temsili yüz kişiden oluşmaktaydı. Mecliste zengin toprak sahipleri ve orta hâlli çiftçilerin oranı daha yüksekken, zanaatkar ve yoksul olan sınıf daha düşük bir orana sahipti.

Diğerlerine oranla daha varlıklı olan plebler, yeni bir sınıf oluşturarak eski patrisyen ailelerle cumhuriyeti yönetmeye başladı. İlerleyen süreçte Augustus, cumhuriyet yönetemine son vererek imparatorluk yönetimini uygulamaya koydu. Bu süreçte soyluların ve seçilmişlerin katılımıyla oluşmuş danışma meclisi olan senatonun ön planda olduğu görülmektedir. Roma'nın hakimiyeti altına alınmış olan yerlere valiler, komutanlar atandı ve bu atamalar, senato tarafından gerçekleştirildi.

İlk imparator
Augustus çoğu tarihçi tarafından ilk imparator olarak kabul edilir. Augustus'un ilk imparator olarak kabul edilmesinin temel sebebi Cumhuriyet döneminde ilk kez gücü tek elde toplayan kişi olmasıdır. Augustus'un çıkarttığı yasalar, anayasal ve askeri reformların hepsi Roma meclisinde hiçbir redde veya tartışmaya maruz kalmadan kabul görüyordu. Ayrıca Augustus, Roma ordusunun liderlik gücünü elinde tutuyordu ve bu ordusal güç meclis üzerinde büyük bir baskı kuruyordu. Böylesine bir gücü tek elde toplama durumu Augustus öncesinde görülmediği için tarihçilerin geneli Augustus'u ilk imparator olarak kabul eder.

İlk imparatora giden süreç Jül Sezar'a kadar dayanır. Bir Dictator perpetuo, Bu Roma Cumhuriyeti'nde resmî bir pozisyon olan diktatörlüğün kural dışı bir biçimiydi. Yasalara göre normalde bir diktatörün yönetimi asla altı aydan fazla olmazdı. Bu yüzden Sezar tarafından oluşturulan diktatörlük biçimi Roma Cumhuriyeti'nin temel ilkeleri ile oldukça çelişiyordu. Ancak ne kadar kural dışı olursa olsun resmî olarak yetkileri bu cumhuriyet unvanına dayanıyordu ve dolayısıyla da kendisi bir cumhuriyet yetkilisi olarak kabul edilir. Aralarında birçoğu kendisi tarafından merhamet göstererek bağışlanmış eski düşmanlarının da bulunduğu bir dizi senatör Sezar'ın kendisini kral ilan edip bir monarşi kurmasından giderek endişe duymaya başlamışlardı. Bu yüzden Sezar'a suikast düzenlemek için bir komplo hazırlamışlar ve MÖ 44 yılının 15 Mart günü, Sezar suikaste uğradı ve suikastçilerin bıçak darbeleriyle öldürüldü.

Sezar'ın siyasi vârisi, ablasının torunu olan Octavianus, diktatör yetkilerine sınırsız sahip olmuş Jül Sezar'ın hatasından ders çıkarmış ve hiçbir zaman herkesin endişe ettiği diktatörlük unvanı için bir talepte bulunmayarak çok daha dikkatli bir biçimde iktidarını cumhuriyetçi yapıların ardında gizlemiştir. Bunun amacı cumhuriyetin onarıldığı hülyasını beslemekti. Octavianus kendisine Augustus (soylu, yükseltilmiş kişi) ve Princeps ("Roma Cumhuriyeti'nin birinci vatandaşı" ya da "Roma Senatosu'nun baş lideri" anlamında) gibi unvanlar edindi. Princeps devlete iyi hizmette bulunanlara verilen bir unvandı. Pompey de bu unvana sahipti.

Bunlara ilaveten Augustus'a meşe ve defne yaprağından yapılmış çelengi giyme hakkı da verilmişti. Bu unvanların ya da çelengin hiçbiri Augustus'a resmî olarak ilave güçler ya da otorite kazandırmıyordu. Resmî olarak kendisi yalnızca fazlasıyla değer verilen Roma vatandaşı bir konsüldü. Augustus, Marcus Aemilius Lepidus'un MÖ 13'te ölmesinin ardından Pontifex Maximus da oldu. Augustus bir dizi ilave, sıra dışı gücü çok fazla unvan talebinde bulunmadan elinde topladı.

Cumhuriyetten imparatorluğa: Augustus (MÖ 27 - MS 14)
Aktium Savaşı Marcus Antonius ve Kleopatra'nın yenilgisiyle sonuçlanmış ve her ikisi de savaşın ardından intihar etmişti. Octavianus, Kleopatra'nın oğlu ve eş-yönetici Caesarion'u öldürtmüştü. Ceasarion, muhtemelen Jül Sezar'ın tek oğluydu. Dolayısıyla Caesarion'u öldürerek Octavianus, Jül Sezar ile yakın kan bağı bulunan herhangi bir erkek rakip olasılığını da ortadan kaldırmış oldu. Roma'nın tek ve yegane yöneticisi olan Octavianus askerî, malî ve siyasi meselelerin tam kapsamlı bir onarımına girişti. Bu girişimler Roma dünyasını istikrara oturtmayı ve pasivize etmeyi, aynı zamanda da yeni rejimin kabul görmesini sağlamayı amaçlıyordu.

Octavianus'un Roma aleminin yöneticisi olmasının ardından Roma senatosu kendisine Augustus ismini verdi. Bu sırada ilk adı olarak imperator (Baş komutan) unvanını zaten kullanmaktaydı. Bu cumhuriyet döneminden beri kullanılan bir unvandı.

Sezar'ın evlatlık vârisi olan Augustus, Sezar adıyla çağrılmayı tercih etmişti. Sezar aile adının bir parçasıydı. Julio-Claudian yönetimi yaklaşık bir asır sürdü (MÖ 1. yüzyılın ortalarında Jül Sezar'ın iktidara gelmesinden 1. yüzyıl ortalarında imparator Nero'ya kadar). Flavius hanedanı döneminde ve Vespasianus ve oğulları Titus ve Domitianus'un hükümdarlığında Sezar kavramı fiiliyatta bir aile isminden resmî bir unvana dönüşmüştü. Çar, Kayzer ve Şah gibi bu unvanın türevleri bugüne kadar gelmiştir.

İç savaşlar yüzünden o güne kadar rastlanmamış sayılara ulaşan (50 civarında) Roma lejyonlarının sayısı 28'e düşürüldü. Özellikle içlerinde sadakatleri şüpheli olan bazı lejyonlar dağıtıldı. Bazıları Gemina (ikiz) unvanıyla birleştirildi.[2] Ayrıca Augustus görünüşte İtalya'da barışı muhafaza edebilmek için dokuz özel cohortes oluşturdu ve bunların en azından üçünü Roma'da konuşlandırdı. Bu cohortes sonradan Praetorian muhafızları olarak bilinen birimler haline geldi.

Octavianus otokrasi ve krallığın Romalıların yüzyıllardır tecrübe etmedikleri ve sakındıkları şeyler olduğunun farkındaydı. Octavianus bir tiran olarak görülmek istemiyordu ve anayasal cumhuriyet yanılgısını korumaya çalıştı. Roma Cumhuriyeti anayasasını hâlâ işlevselmiş gibi göstermeye çalıştı. Lucius Cornelius Sulla gibi geçmişteki Roma diktatörleri bile Roma'yı asla bir, iki seneden fazla olmamak üzere kısa süreliğine yönetmişti (Jül Sezar haricinde). MÖ 27'de Octavianus resmen tüm yetkilerini Roma senatosuna bırakmaya çalıştı. Dikkatlice kurgulanmış bir şekilde o sırada büyük bölümü kendi taraftarları olan senatörler bu teklifi reddettiler ve Roma cumhuriyeti ve halkının iyiliği için yetkileri elinde tutmaya devam etmesi için yalvardılar. Anlatılana göre Octavianus'un konsüllükten çekileceği önerisi Roma'daki plebler arasında isyanlara neden olmuştu. Senato ve Octavianus arasında "Birinci Uzlaşma" olarak bilinen bir anlaşma sağlandı. Bu anlaşma Augustus'u halkın otokratı olarak meşrulaştırdı ve bir tiran olarak görülmeyeceğini temin ederek Pax Romana olarak bilinen uzun dönemin başlangıcı oldu.
    
Octavianus eyaletlerin idaresini senatoyla paylaştı. Lejyonların büyük bölümünün konuşlandığı sınırlardaki huzursuzluk yaşanan eyaletler imparator tarafından seçilen imparatorluk legatusları tarafından yönetiliyordu. Bu eyaletler imparatorluk eyaletleri olarak sınıflandırılıyordu. Senato eyaletlerinin valileri ise senato tarafından seçiliyordu. Bu eyaletler genellikle huzurluydu. Afrika senato eyaletinde yalnızca bir lejyon vardı.

Augustus imparatorluk eyaletlerinden toplanan vergilerin kendisi tarafından seçilen ve yalnızca kendisine hesap veren kişilerin idaresindeki fiscusa gönderilmesini emretmişti. Senato eyaletlerinden toplanan vergilerin senatonun kontrolündeki aerariuma gönderilmesine devam edildi. Bu durum Augustus'u senatodan daha zengin hale getirdi. Lejyonerlerin maaşlarını daha rahat ödeyebilir hale gelen Augustus böylece askerlerin sürekli saadetini de sağlamış oldu. Bu durum son derece zengin olan ve aynı zamanda tüm imparatorluğun en önemli hububat tedarikçisi olan Mısır imparatorluk eyaleti ile garanti altına alınmıştı. Senatörlerin bu eyaleti ziyaret etmeleri bile yasaktı zira büyük ölçüde imparatora ait olduğu kabul ediliyordu.
  
Augustus MÖ 23 yılında konsüllükten feragat etti ancak consular imperium konumunu koruyarak "ikinci uzlaşma" olarak bilinen Augustus ve senato arasında ikinci bir anlaşmaya yol açtı. Augustus'a tribunate (tribunicia potestas) yetkileri verildi (unvanın kendisi değil yalnızca yetkileri). Bu yetkilere göre senato ve halkı kendi isteğiyle toplayabiliyor, meclis ya da senatonun eylemlerini veto edebiliyor, seçimlere başkanlık edebiliyor ve tüm toplantılarda ilk konuşma hakkına sahip oluyordu. Ayrıca Augustus'un tribunate yetkileri içinde censuraya ait güçler de vardı. Buna göre genel ahlâkı teftiş edebiliyor, yasaları halkın çıkarına olduğunu garanti altına almak için tetkik edebiliyor, nüfus sayımı yaptırabiliyor ve senatodaki üyelikleri belirleyebiliyordu. Roma tarihinde hiçbir tribunate bu güçlere sahip olmamıştı ve Roma sisteminde tribunate ve censuranın güçlerini tek bir konumda toplandığı görülmemişti. Augustus hiçbir zaman cansura görevine seçilmemişti. Censura yetkilerinin kendisine tribunate yetkilerinin bir parçası olarak mı yoksa kendi kendisine mi bu sorumlulukları üstlendiği hâlâ bir tartışma konusudur.

Tüm bunlara ilaveten Augustus Roma şehrinin yegane yetkilisi ilan edildi. Evvelce praefectusların kontrolünde olan şehirdeki tüm askerî güçler artık Augustus'un emrindeydi. Ayrıca tüm prokonsüllerin üzerinde iktidar yetkisi verildi. Bu yetkiyle Augustus herhangi bir eyalete müdahele etme ve herhangi bir valinin kararlarnı geçersiz kılma hakkını elde ediyordu. Yine bu yetkiyle Augustus görünürde tüm Roma ordusunun lideri olduğundan başarılı bir generale zafer bahşedebilecek tek birey olmuştu.
   
   
Bu reformlar Roma cumhuriyeti geleneğine göre alışılmadık şeylerdi. Ancak senato artık Sezar'ı öldürme cesaretini gösteren cumhuriyetçi patricilerden oluşmuyordu. Bu senatörlerin büyük bölümü iç savaşlarda ölmüştü ve senatodaki muhafazakâr cumhuriyetçilerin Cato ve Cicero gibi liderleri çoktan ölmüşlerdi. Octavianus senatoyu şüpheli unsurlardan temizlemiş ve kendi taraftarlarıyla doldurmuştu. Tüm bu işlemler sırasında senatonun ne kadar özgür olduğu ve perde arkasında ne tür anlaşmaların yapıldığı bilinmemektedir.

Tuna ve Elbe nehirleri boyunca imparatorluğun sınırlarını güvenlik altına almak amacıyla Octavianus İllirya, Moesia, Pannonia ve Germania'nın işgal edilmesini emretti. Başta her şey planlandığı gibi gittiyse de sonrası felaketle sonuçlandı. Ayaklanan İlliryalı kabileler bastırılmak zorunda kaldı ve Publius Quinctilius Varus komutasındaki üç lejyon pusuya düşürüldü ve 9 yılında Varus Savaşı'nda Arminius liderliğindeki Germen barbarlar tarafından yok edildiler. Tedbirli davranan Augustus Ren'in batısındaki tüm toprakları güvenlik altına aldı ve karşı baskınlarla kendini tatmin etti. Ren ve Tuna nehirleri Roma İmparatorluğu'nun kuzeydeki kalıcı sınırları haline geldi.
      
      
Julio-Claudian Hanedanı (14-68)
Ana madde: Julio-Claudian Hanedanı
Augustus'un kızı Julia'dan üç torunu vardı. Hiçbiri Augustus'un yerine geçebilecek kadar uzun yaşamadı. Dolayısıyla yerine karısı Livia'nın ilk evliliğinden olan üvey oğlu Tiberius geçti. Augustus Roma'nın en eski patrici ailesi olan Julius ailesinden geliyordu. Diğer tarafta Tiberius ise Julius ailesi kadar eski olmayan Claudius ailesinden geliyordu. Onların haleflerinin hepsi de Tiberius'un kardeşi Nero Claudius Drusus dolayısıyla Claudius ailesinden ve Augustus'un ilk evliliğinden olan kızı Yaşlı Julia (Caligula ve Nero) veya Augustus'un kızkardeşi Küçük Octavia (Claudius) vasıtasıyla Julius ailesindendi. Bu yüzden tarihçiler bu hanedandan "Julio-Claudian" adıyla bahseder.

Tiberius (14-37)
Ana madde: Tiberius
Tiberius'un yönetiminin ilk yılları huzurlu ve nispeten tehlikesizdi. Roma'nın tüm gücünü güvence altına aldı ve hazineyi zenginleştirdi. Ancak çok geçmeden Tiberius'un saltanatına paranoya ve iftira hâkim oldu. 19 yılında birçok kimse tarafından yeğeni Germanicus'un ölümünden sorumlu tutuldu. 23 yılında oğlu Drusus öldü. Tiberius giderek kendi içine çekildi. Bir dizi ihanet davası ve idam başlattı. İktidarını muhafız komutanı Lucius Aelius Sejanus'a bıraktı. Kendisi 26 yılında Capri adasındaki villasında yaşamak üzere emekli oldu. Yönetimi bıraktığı Sejanus iştahla zulmetmeye devam etti. Sejanus 31 yılında Tiberius'un yanında eş konsül olarak ve imparatorun yeğeni Livilla ile evlenerek gücünü pekiştirdi. Bu noktada kendi kazdığı çukura düştü. O güne kadar kendi çıkarına kullandığı imparatorun paranoyası kendi aleyhine döndü. Aynı yıl Sejanus birçok yakınıyla birlikte idam edildi. Zulüm 37 yılında Tiberius'un ölümüne kadar sürdü.

Caligula (37-41)
Ana madde: Caligula
Tiberius öldüğü sırada yerine geçebilecek kişilerin büyük bölümü gaddarca öldürülmüştü. Akla yatkın olan vâris (ve Tiberius'un kendi tercihi) küçük yeğeni Germanicus'un oğlu Gaius'tu (daha bilinen adıyla "Caligula" ya da "ufak papuçlar"). Caligula zulme son verip amcasının kayıtlarını yakarak iyi bir başlangıç yaptı. Ancak ne yazık ki çok geçmeden hastalığa yakalandı. 37'nin sonlarında Caligula aklî dengesizlikler göstermeye başladı. Modern yorumcular hastalığının aklî dengesizliğe, hipertiroidi ve hatta sinir krizine (belki de Caligula'nın konumundan ötürü) yolaçan ensefalit olduğunu düşünmektedirler. Sebebi ne olursa olsun o noktada hükümdarlığında bariz bir değişim olmuş ve hayatını ele alanların kendisinin deli olduğunu düşünmelerine neden olmuştur.

Caligula'nın hayatıyla ilgili bilinenlerin çoğu Suetonius'un Oniki Sezar'ın hayatları adlı çalışmasında anlattıklarıdır. Suetonius'a göre Caligula bir keresinde en sevdiği atı Incitatus'u Roma senatosuna atamaya kalkmıştı. Deniz tanrısı Neptün ile savaşmaları için askerlerine Britanya'yı işgal etmelerini emretmiş ama son dakikada fikrini değiştirip Fransa'nın kuzeyinde deniz kabuğu toplatmıştı. Kız kardeşleriyle ensest ilişkilere girdiğine inanılmaktadır. Heykelinin Kudüs'teki tapınağa dikilmesini emretmişti. Eğer arkadaşı kral Herod tarafından bu fikrinden vazgeçirilmemiş olsa şüphesiz bir isyana sebep olacaktı. İnsanları gizlice öldürtüp, sonra da sarayına davet ederdi. Gelmediklerinde ise şaka yollu intihar etmiş olabileceklerini söylerdi. 41 yılında Caligula muhafız komutanı Cassius Charea tarafından öldürüldü. İmparatorluk ailesinden göreve gelebilecek tek kişi amcası Tiberius Claudius Drusus Nero Germanicus'tu.

Claudius (41-54)
Ana madde: Claudius
Claudius uzun süre ailenin geri kalanı tarafında zayıf ve aptal biri olarak görülmüştü. Oysa ne amcası Tiberius gibi paranoyak, ne de yeğeni Caligula gibi deliydi. Bu yüzden de imparatorluğu makul bir dirayetle yönetebilme becerisine sahipti. Bürokrasiyi iyileştirmiş ve vatandaşlık ve senato tutanaklarını daha etkin hale getirmiştir. Ayrıca Büyük Britanya'nın işgaline ve kolonileştirilmesine devam etmiş (43) ve imparatorluğa doğuda yeni eyaletler katmıştır. Ostia'da Roma için kışlık bir liman inşa ettirmiş böylece kötü hava koşullarında imparatorluğun diğer kısımlarından hububatın gelmesi için bir yer sağlamıştır.

Kendi aile yaşantısında ise Claudius o kadar başarılı değildi. Karısı Messalina kendisini aldatıyordu. Claudius bunu öğrendiğinde Messalina'yı idam ettirdi ve yeğeni Genç Agrippina ile evlendi. Agrippina beraberindeki bir dizi azledilmişle birlikte Claudius'un üzerinde aşırı derecede bir nüfuz oluşturdular ve her ne kadar ölümüyle ilgili çelişkili anlatımlar olsa da Claudius'u 54 yılında karısının zehirlemiş olması kuvvetle muhtemeldir. Claudius'un ölümü Agrippina'nın kendi oğlu 17 yaşındaki Luciuc Domitius Nero'nun önünü açmış oldu.

Nero (54-68)
Ana madde: Nero
Nero 54 yılında 68'e kadar iktidarda kaldı. Hükümdarlığı sırasında dikkatini daha fazla diplomasi, ticaret ve imparatorluğun kültürel sermayesinin arttırılmasına verdi. Tiyatroların inşa edilmesi için emirler verdi ve spor oyunlarını destekledi. Hükümdarlığı sırasında Partlara karşı başarılı bir savaş yürütüldü ve barış antlaşması yapıldı (58-63), Briton isyanı bastırıldı (60-61) ve Yunanistan ile kültürel bağlar geliştirildi. Ancak Nero bir tiran ve 64 yılında "Roma yanarken lir çalan imparator" olarak hatırlanır. Askeri bir darbe sonucunda Nero gizlenmek durumunda kaldı. Anlatılanlara göre Roma senatosu tarafından idam edilmesi söz konusu olunca 68 yılında intihar etti. Son sözleri "İçimde nasıl bir sanatçı ölüyor" idi.

Dört İmparator Yılı
Ana madde: Dört İmparator Yılı
Nero'nun 68 yılında intihar etmek zorunda kalmasının ardından "dört imparator yılı" olarak bilinen kısa bir iç savaş (MÖ 31'de Antonius'un ölümünden beri yaşanan ilk iç savaş) yaşandı. 68'in Haziran ayı ile 69'un Aralık ayı arasında Roma Vespasianus'un Flavius Hanedanı’nın ilk hükümdarı olarak başa geçişine kadar Galba, Otho ve Vitellius'un iktidara gelip gitmelerine tanık oldu. İç savaş Roma İmparatorluğu tarihinde döngüsel siyasi huzursuzluğun simgesi olmuştur. İç savaş nedeniyle yaşanan askerî ve siyasi anarşinin Batavia'daki isyan gibi çok ciddi sonuçları olmuştur.

Flavius Hanedanı (69-96)
Ana madde: Flavius Hanedanı
Flavius Hanedanı kısa süreli bir hanedan olmakla birlikte düşkün duruma gelmiş bir imparatorluğa tekrar istikrar getirmişti. Özellikle daha merkeziyetçi yönetimlerinden ötürü bu hanedandan gelen üç imparator da eleştirilmişse de 3. yüzyıla kadar varlığını sürdürebilecek kadar istikrarlı bir imparatorluk için gerekli reformları yapmışlardı. Öte yandan askerî kökenleri senato daha da marjinalleşmesine ve birinci princeps ya da vatandaştan imperator ya da imparatora doğru katî bir yönelime neden olmuştur.

Vespasianus (69-79)
Vespasianus Roma İmparatorluğu'nun doğusunun büyük bölümünün yönetiminden sorumlu son derece başarılı bir Roma generaliydi. Kendisi Galba'nın imparator olma talebini desteklemiş, Galba'nın ardından da tahtın en büyük müsabığı haline gelmiştir. Otho'nun intihar etmesinin ardından Vespasianus Roma'nın kışlık hububat tedarikçisi Mısır'ı kontrolü altına almayı başararak rakibi Vitellius'u yenebileceği güçlü bir konuma gelmişti. 20 Aralık 69 günü Vespasianus'un taraftarları Roma'yı işgal ettiler. Vitellius kendi askerleri tarafından öldürüldü ve ertesi gün altmış yaşındaki Vespasianus Senato tarafından imparator olarak onaylandı.

Muhalif senatörleri kovdu. Aynı zamanda Nero'nun eylemleri ve takip eden yıllardaki krizler nedeniyle 200'e düşen senatör sayısını 1.000'e çıkardı. Yeni senatörlerin çoğu Romalı değil, daha ziyade İtalya ve batı eyaletlerindeki şehir merkezlerindendi.

Roma'yı Nero'nun aşırı harcamaları ve iç savaşlar yüzünden oluşan malî yükten kurtardı. Bunu yapmak için yalnızca vergileri artırmadı aynı zamanda yeni vergiler de koydu. Ayrıca censura yetkileriyle tüm şehirlerin ve eyaletlerin malî yapılarını dikkatlice inceleme fırsatı buldu. Bu eyalet ve şehirlerin çoğu bir asırdan fazla zaman öncesine dayanan bilgi ve yapılandırmalara göre vergi vermekteydi. Bu sağlam malî politikalar vasıtasıyla hazineyi kâra geçirmeyi başardı ve bayındırlık işlerine girişti. Amphitheatrum Flavium'un (Kolezyum) yapım emrini ilk Vespasianus vermişti. Ayrıca bir forum ve ortasında da bir Huzur tapınağı inşa ettirmişti. İlave olarak sanata hatırı sayılır miktarda sübvansiyon ayırdı.

Vespasianus görev süresince eyaletlerde de etkin bir imparatordu. Hispania'ya ayrıca önem vermiş ve üç yüz kasaba ve şehirde yaşayan insanlara imparatorluğun güvencesi olarak Latin hakları vermişti. Bu şekilde batı eyaletlerinde yeni bir şehirleşme dönemini teşvik etti. Senato'ya yaptığı ilavelerle senatoda eyaletlerin daha fazla nüfuz sahibi olmalarını sağladı ve bu sayede imparatorlukta birliği teşvik etti. İmparatorluğun sınırlarını da genişletti. Bu genişlemelerin çoğu Vespasianus'un başlıca hedeflerinden biri olan sınır savunmalarının güçlendirilmesi için yapılmıştı. 69 yılındaki kriz orduda düzensizliğe neden olmuştu. En belirgin sorunlardan biri eyalet lejyonlarının eyaletlerinin isteklerini temsil ediyor olması gerekenlere sadakatiydi. Bunun başlıca nedeni destek birliklerinin askere kaydoldukları memleketlerinde konuşlandırılmış olmasıydı. Vespasianus bu uygulamayı değiştirdi. Destek birliklerini imparatorluğun diğer bölgelerinden adamlarla karıştırdı ya da birlikleri başka bölgelere gönderdi. Ayrıca yeni bir askerî darbe ihtimalini iyicene azaltmak için lejyonları sınır boyunca dağıttı. Belki de en önemli askerî reformu İtalya dışında Galya ve Hispania'dan da, bu bölgelerin Romanizayonu ile paralel olarak lejyoner toplamasıydı.

Titus (79-81)
Vespasianus'un büyük oğlu Titus hükümdar olmak üzere hazırlanmıştı. Babasının yanında başarılı bir general olarak hizmet vermiş, doğunun güvenlik altına alınmasına yardımcı olmuş ve sonunda Suriye ve Yahudiye'deki Roma ordularının komutanı olarak o sırada devam etmekte olan Yahudi isyanını bastırmıştı. Bir süre babası ile birlikte konsül olarak görev yaparak tecrübe kazandı. Başa geçtiğinde Roma toplumunun saygın bulmadığı bazı ilişkileri yüzünden endişeye sebep olmuşsa da kısa sürede erdemli biri olduğunu ispat etmiş, tevekkülünün göstergesi olarak babası tarafından sürgüne gönderilen birçok kişiyi bile geri çağırmıştır.

Ancak kısa süreli saltanatına iki felaket, 79'da Pompeii'deki Vezüv yanardağının patlaması ve 80 yılında Roma'nın büyük bölümünü yerle bir eden yangın damgasını vurmuştur. Bu trajedilerin ardından yapılan yeniden inşa faaliyetlerindeki cömertliğiyle son derece popüler hale gelmiştir. Titus babasının zamanında başlanan büyük amfi tiyatro ile son derece gurur duyuyordu. 80 yılında henüz tamamlanmamış yapıda açılış törenleri düzenledi. 100 gün süren müsrif gösterilerde 100 gladyatör yer aldı. Titus 81 yılında 41 yaşında tahminen bir hastalık yüzünden öldü. Kardeşi Domitianus tarafından yerine geçmek için öldürüldüğü iddia edilmiş de bu iddianın pek bir dayanağı yoktur.

Domitianus (81-96)
Ana madde: Domitianus
Flaviusların otokratik yönetimlerinden ötürü hepsinin senato ile ilişkileri zayıftı ancak içlerinde yalnızca Domitianus ciddi sorunlarla karşılaşmıştı. Konsül ve censura olarak sürekli hâkimiyetinin daha evvelden bir örneği yoktu. Ayrıca genellikle bir imperator olarak tamamıyla askerî kıyafetler giyiyordu. Bu Principatus dönemi imparatorlarının gücünün dayanağının, princeps'ten gelen imparatorluk gücü olduğu fikrine tersti. Senatodaki itibarı bir yana Domitianus, Roma halkını Roma'daki tüm ev sahiplerine yardım yapılması, yeni tamamlanan Kolezyum'daki sıra dışı gösteriler ve babası ve ağabeyi döneminde başlanmış olan bayındırlık ilerinin devam ettirilmesi gibi çeşitli yollarla memnun etmişti. Ayrıca babası gibi malî işlere kafasının yattığı anlaşılmaktadır zira müsrifliğine rağmen haleflerine iyi durumda bir hazine bırakmıştı.

Ancak hükümdarlığının sonlarına Domitianus son derece paranoyak bir hale gelmiştir. Bu paranoyanın temelleri muhetemelen babasından gördüğü muamele ile bağlantılıydı. Geçmişte kendisine önemli sorumluluklar verilmişse de önemli konularda başkalarının gözetimi olmadan kendisine güvenilmemiştir. Germania valisi ve komutanı Antonius Saturnius'un 89 yılındaki isyanının ardından bu paranoya şiddetli ve hatta marazı seyirmelere dönüştü. Paranoyası yüzünden çok sayıda kişinin tutuklanmasına, idam edilmesine ve birçok mülke el konmasına (ki bu müsrifliğini açıklayabilir) yol açtı. Sonunda iş öyle bir noktaya geldi ki en yakın danışmanları ve aile üyeleri korku içinde yaşar hale geldi. 96 yılında senatodaki düşmanları, Stephanus (Julia Flavia'nın kâhyası), Praetor muhafızları ve imparatoriçe Domitia Longina tarafından düzenlenen bir suikastle öldürüldü.

Antoninler (96-180)
Sonraki yüzyıl "Beş İyi İmparator" dönemi olarak bilinir. Bu dönemde imparatorluk makamı barışçıl bir şekilde el değiştirmiştir. Bu dönemin imparatorları selefleri henüz hayattayken halef olarak evlat edinilmişlerdi. Haleflerin belirlenmesi seçilecek bireylerin meziyetlerine bağlı olsa da evlatlık sisteminin başarıyla devam etmesinin ardındaki esas nedenin sonuncu hariç bu dönemdeki imparatorların hiçbirinin doğal vârisinin olmaması gösterilmiştir.
      </p>
    </div>
  );
}

export default App;
