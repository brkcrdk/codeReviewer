/**
 * Task listesi için isimlendirme şu şekilde olacak.
 * ÖRN: 06.06 - 10.06 2022 Code review listesi
 * @returns
 */
const listNameBuilder = () => {
  const startingDate = new Date();

  const endDate = new Date();
  endDate.setDate(startingDate.getDate() + 4);
  const formattedEndDate = endDate.toLocaleDateString('tr-TR');

  // localeDateString oluşturduğu format örneği=> 06/11
  // replace methodu ile aradaki slash'i nokta ile değiştiriyorum

  const formattedStartingDate = startingDate
    .toLocaleDateString('tr-TR', {
      day: '2-digit',
      month: '2-digit'
    })
    .replace('/', '.');

  return `${formattedStartingDate} - ${formattedEndDate} Code Review Listesi`;
};

export default listNameBuilder;
