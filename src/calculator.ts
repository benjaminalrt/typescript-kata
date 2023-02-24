export default class MyCalculator {

  // Coder une methode add qui prend 2 nombres en paramètre et renvoie la somme des deux
  add(a : number, b : number) : number {
    return a + b;
  }

  // Coder une methode subtract qui prend 2 nombres en paramètre et renvoie la différence des deux
  subtract(a : number, b : number) : number {
    return a - b;
  }

  // Coder une methode multiply qui prend 2 nombres en paramètre et renvoie le produit des deux
  multiply(a : number, b : number) : number {
    return a * b;
  }

  // Coder une methode divide qui prend 2 nombres en paramètre et renvoie le quotient des deux
  divide(a : number, b : number) : number {
    return b === 0 ? 0 : (a / b);
  }

  // Coder une méthode power qui prend 2 nombres en paramètre et renvoie le premier élevé à la puissance de l'autre
  power(a : number, b : number) : number {
    return Math.pow(a,b);
  }

  // Coder une méthode squareRoot qui prend un nombre en paramètre et renvoie sa racine carrée
  squareRoot(a : number) : number {
    return a < 0 ? 0 : Math.sqrt(a);
  }

  // Coder une fonction fléchée qui renvoie true si le chiffre en paramètre est premier, false sinon
  isPrime = (a : number) : boolean => {
    if(Number.isInteger(a) && a > 1){

      if(a == 2){

        return true;

      } else {

        let isPrime = true;

        for (let i = 2; i < a - 1; i++) {

          if(Number.isInteger(this.divide(a,i))){
            isPrime = false;
            break;
          } 

        }

        return isPrime;
        
      }


    } else {
      return false;
    }
  }

}
