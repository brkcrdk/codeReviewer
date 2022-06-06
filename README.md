### codeReviewer Nedir ve Ne yapar?

<b>Nedir:</b> codeReviewer benim code review sürecinde clickupda manual olarak oluşturduğum formatı, kod yardımıyla otomatik olarak oluşturmama yardımcı olur.

<b>Ne yapar: </b> 

- Virgül ile ayırdığım kişi isimlerini alır ve onları karışık bir liste haline getirir.
- Bu listedeki kişileri code reviewda bir haftalığına çalışmak üzere eşleştirir.
- Prompt yardımıyla, oluşturulmuş listeyi onaya sunar. Eğer onay almazsa tekrardan bir liste oluşturur. Bu süreç onay alınana kadar devam eder.
- Onay alındıktan sonra verilen dosya altında istenilen formata göre liste oluşturur.
- Bu listenin içinde eşleştirilmiş olan kişilere tasklar oluşturur.
- Listenin açıklama kısımlarına code review süreci hakkında açıklamalar ekler.
- Listedeki kişilere bildirim gönderir.


##### Yapılacak İşler
 
* [x] <s>Takım listesini env dosyasından al</s>
* [x] <s>Eğer oluşturulan listeye göre devam edilmek istenirse kişi bilgilerini apiden çek. Bu şekilde backende sürekli istek atılmaz.</s>
* [x] <s>Liste eklenecek klasör idsini env dosyasına ekle.</s>
* [x] <s>Listeye task eklemeyi test et.</s>
* [x] <s>Listeye verilecek isimde görüntülenecek tarih aralığı formatını oluştur. Beklenen format şu şekilde: `04.06 - 09.06.2022 Code Review Listesi`</s>
* [x] <s>Listenin açıklama kısmını ekle.</s>
* [x] <s>Eklenince, tarih aralığına göre liste adını oluştur.</s>
* [x] O listeye oluşturulan task listesine göre taskları oluştur.
* [x] O taska kişileri assign et.
* [ ] GELİŞTİRME: Geçen haftanın listesini çekip; onunla karşılaştırma yaparak listeyi geçen haftadan farklı yapmayı deneyebiliiriz
* [ ] GELİŞTİRME: Readme bölümünün, ingilizce olarak güncellenmeli.
* [ ] GELİŞTİRME: Testlerin yazılması.

