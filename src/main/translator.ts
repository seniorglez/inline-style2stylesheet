export class Translator {

    public static translate(input: String): string {
        return input.replace(/[A-Z]/g, (m) => `-${String.fromCharCode(m.charCodeAt(0) + 32)}`);
    }

}