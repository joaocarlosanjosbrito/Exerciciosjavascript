function maior(){
    var numero1 = parseFloat(document.getElementById("num1").value);
    var numero2 = parseFloat(document.getElementById("num2").value);
    
    if (numero1 > numero2)
        alert(numero1 + " é maior do que " + numero2);
    else
        if(numero2 > numero1)
           alert(numero2 + " é maior do que " + numero1);
        else
           alert(numero1 + " é maior do que " + numero2);
   }

     
   function verificar(){
    var num = parseFloat(document.getElementById("numero").value);
    
    if (num > 0)
     alert(num + " numero Positivo");
    else
     if(num < 0)
      alert(num + " numero Negativo");
     else
      alert("Nem positivo nem negativo, nulo");
   }

   function verificar2(){
       var genero = document.getElementById('texto').value;

       if (genero == "F") 
          alert(genero + " Feminino");
      else if(genero == "M")
          alert(genero + "Masculino");
       else
          alert(genero + "Sexo não definido");
     }




     function verificar3(){
   //três variáveis nota1 e a nota2, nota3, que vão receber os dados digitados nos formulários de input.      
        var nota1 = parseFloat(document.getElementById("nota1").value);
        var nota2 = parseFloat(document.getElementById("nota2").value);
        var nota3 = parseFloat(document.getElementById("nota2").value);
   //RECEBE O VALOR DAS TRÊS NOTAS A CIMA SOMA + E DIVIDI /3 < POR 3
        var media = (nota1 + nota2 + nota3)/3 ;
   //SE FOR MAIOR OU IGUAL A 7 , APROVADO + NOTA , SE FOR 10 APROVADO.
        if(media >= 7)
         if(media==10)
          alert("Aprovado com distinção");
         else
          alert("Aprovado, nota "+media);
        else
         alert("Reprovado")
   
       }

       function verificar4() {
           var letra = document.getElementById("char").value;
           letra = letra.toLowerCase(); //<<ESSA FUNÇÃO PARA AS LETRAS PARA MINUSCULO
           //se for de A á U é vogal
           if(letra=='a' || letra=='e' || letra=='i' || letra=='o' || letra=='u')
           alert("Vogal");
           //o restante das outras letras ficam como consoantes
           else
            alert("Consoante");


           
       }
       function verificar5(){
        var num1 = parseFloat(document.getElementById("numero1").value);
        var num2 = parseFloat(document.getElementById("numero2").value);
        var num3 = parseFloat(document.getElementById("numero3").value);
   
        var maior = num1;
        var menor = num1;
   
        if(num2 > maior)
         maior = num2;
        if(num3 > maior)
         maior = num3;
   
        alert("Maior: "+maior);

        if(num2 < menor)
         menor = num2;
        if(num3 < menor)
         menor = num3;

        alert("Menor: "+menor)
       }