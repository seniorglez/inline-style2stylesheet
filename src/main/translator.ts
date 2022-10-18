export class Translator {

    public static translate(input: String): String {
        return this.removeSemicolons(this.mayusToDashMinus(input)); //better function composition pls
    }

   private static mayusToDashMinus = (input: String): String => {
        return input.replace(/[A-Z]/g, (m) => `-${String.fromCharCode(m.charCodeAt(0) + 32)}`);
    }

    private static removeSemicolons = (input: String): String => {
        return input.replace(/'/g,'');
    }
    
}