// Feb 2023

class Result {

    /*
     * Complete the 'caesarCipher' function below.
     *
     * The function is expected to return a STRING.
     * The function accepts following parameters:
     *  1. STRING s
     *  2. INTEGER k
     */

    public static String caesarCipher(String msg, int k) {
        String alphabet = "abcdefghijklmnopqrstuvwxyz";
        String encrypted = "";
        
        for(int i = 0 ; i < msg.length();i++){
            
            String newLetter = msg.charAt(i) + "";
            boolean isUpperCase = newLetter.toLowerCase() != newLetter;
            newLetter = newLetter.toLowerCase();
            
            if(alphabet.contains(newLetter)){
                
                int newIndex = alphabet.indexOf(newLetter) + k;
                
                if( newIndex >= alphabet.length()) {
                    double spins = Math.floor(newIndex / alphabet.length());
                    newIndex -= spins * alphabet.length();
                }
                
                newLetter = alphabet.charAt(newIndex)+"";
            }
            
            encrypted += isUpperCase ? newLetter.toUpperCase() : newLetter;
        }
        
        return encrypted;
    }

}