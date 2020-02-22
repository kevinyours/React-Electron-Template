import UTF8 from './utf8';
import { createDecipheriv } from 'crypto';

export default function Decrypt({ data, key }: { data: string; key: string }): string | boolean {
    const byteStringKey = new UTF8().getBytes(key);
    const byteKey = new Buffer(byteStringKey);
    const iv = Buffer.alloc(16, 0);

    // aes-128-cbc 알고리즘
    const decipher = createDecipheriv('aes-128-cbc', byteKey, iv);
    // padding 기준을 C# PKCS7 과 맞추기 위해 false = 0 설정
    decipher.setAutoPadding(false);
    // base64 인코딩된 데이터를 바이너리로 변경
    const encrypted = new Buffer(data, 'base64').toString('binary');

    try {
        let result = decipher.update(encrypted, 'binary', 'utf8');
        result += decipher.final('utf8');

        return result;
    } catch (err) {
        console.trace(err);

        return false;
    }
}
