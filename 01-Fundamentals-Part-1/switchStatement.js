const day = 'friday';

switch (day) {
    case 'monday':
        console.log("it's monday, do some coding");
        break;
    case 'tuesday':
        console.log("it's tuesday, do more coding");
        break;
    case 'wednesday':
        console.log("it's wednesday, do more and more coding");
        break;
    case 'thursday':
        console.log("it's thursday, enjoy");
        break;
    case 'friday':
    case 'saturday':
        console.log("go on vacation");
        break;
    case 'sunday':
        console.log("it's sunday, relax");
        break;
    default: console.log("invalid day.!");

}