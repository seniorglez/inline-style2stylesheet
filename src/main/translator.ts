export class Translator {

    public static translate(input: String): String {
        return this.commaToSemicolon(this.removeApostrophes(this.mayusToDashMinus(input))); //better function composition pls
    }

   private static mayusToDashMinus = (input: String): String => {
        return input.replace(/[A-Z]/g, (m) => `-${String.fromCharCode(m.charCodeAt(0) + 32)}`);
    }

    private static removeApostrophes = (input: String): String => {
        return input.replace(/'/g,'');
    }

    private static commaToSemicolon = (input: String): String => {
        return input.replace(/,/g,';');
    }

}