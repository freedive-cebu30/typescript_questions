showSeason(3);
showSeason(6);
showSeason(9);
showSeason(12);
showSeason(13);


function showSeason(month: number): void {
  switch (month) {
    case 1:
    case 2:
    case 12:
      console.log('冬');
      break;
    case 3:
    case 4:
    case 5:
      console.log('春');
      break;
    case 6:
    case 7:
    case 8:
      console.log('夏');
      break;
    case 9:
    case 10:
    case 11:
      console.log('秋');
      break;
    default:
      console.log('季節不明');
  }  
}
