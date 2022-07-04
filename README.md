### What is codeReview and what it does?

<b>What is codeReivewer:</b> codeReviewer is a helper tool that helps me to create code review tasks inside of ClickUp automatically i used to make it manually before.

<b>What it does: </b> 

- Takes comma seperated names and creates a shuffled list.
- Matches these persons to be used for code review process.
- With help of prompt it asks for approval of the list. If list not get approved it asks again until list gets approvel. After that it continues the process. 
- After getting the approvel, it creates the list under the given ClickUp folder.
- Creates task for matched persons inside newly created list.
- Adds description about code review process under tasks.
- Sends notifications to the matched people after creating tasks.

##### Yapılacak İşler
 
* [x] <s>Takım listesini env dosyasından al</s>
* [x] <s>Eğer oluşturulan listeye göre devam edilmek istenirse kişi bilgilerini apiden çek. Bu şekilde backende sürekli istek atılmaz.</s>
* [x] <s>Liste eklenecek klasör idsini env dosyasına ekle.</s>
* [x] <s>Listeye task eklemeyi test et.</s>
* [x] <s>Listeye verilecek isimde görüntülenecek tarih aralığı formatını oluştur. Beklenen format şu şekilde: `04.06 - 09.06.2022 Code Review Listesi`</s>
* [x] <s>Listenin açıklama kısmını ekle.</s>
* [x] <s>Eklenince, tarih aralığına göre liste adını oluştur.</s>
* [x] <s>O listeye oluşturulan task listesine göre taskları oluştur.</s>
* [x] <s>O taska kişileri assign et.</s>
* [x] <s> Readme bölümünün, ingilizce olarak güncellenmeli.</s>
* [x] <s>Geçen haftanın listesini çekip; onunla karşılaştırma yaparak listeyi geçen haftadan farklı yapmayı deneyebiliiriz.</s>
* [x] <s>Yeni akışı uygulanacak.</s>
* [x] <s>Akış yenilendiği için gereksiz olacak, prompt functionlarını ve onunla alakalı utilsleri temizle</s>
 

