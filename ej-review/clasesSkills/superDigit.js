function superDigit(n, k) {
    
    function sumDigitos(n) {
      if (n < 10) {
        return n;
      }
      return n % 10 + sumDigitos(Math.floor(n / 10));
    }
  
   
    function ayudante(n) {
      if (n < 10) {
        return n;
      }
      return ayudante(sumDigitos(n));
    }
  
    
    return ayudante(sumDigitos(n) * k);
  }

console.log(superDigit(123, 2))