export default class UTF8 {
    public getBytes(stringValue: string): Array<number> {
        const bytes = [];

        for (let i = 0; i < stringValue.length; i++) {
            bytes.push(stringValue.charCodeAt(i));
        }

        return bytes;
    }

    public getString(utfText: string): string {
        let result = '';

        for (let i = 0; i < utfText.length; i++) {
            result += String.fromCharCode(parseInt(utfText[i], 10));
        }

        return result;
    }
}
