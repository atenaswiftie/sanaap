export const numberToPersianWord=(num:number)=> {
    const persianNumbers = [
        "صفر", "یک", "دو", "سه", "چهار", 
        "پنج", "شش", "هفت", "هشت", "نه", 
        "ده", "یازده", "دوازده", "سیزده", 
        "چهارده", "پانزده", "شانزده", 
        "هفده", "هجده", "نوزده", "بیست"
    ];

    if (num < 0) {
        return "عدد خارج از محدوده است";
    }
    if (num > 20) {
        return num;
    }
    return persianNumbers[num];
}
