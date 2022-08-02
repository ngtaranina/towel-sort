module.exports = function towelSort (matrix) {
  if(typeof matrix == "undefined"){
    return [];
  }
  else {
  const H = matrix.length; // высота матрицы
  const resultMatrix = []; // полученная матрица
  const L = []; // массив из длин строк матрицы
  let S = 0; // сумма длинн уже пройденныхстрок
   
          let i = 0;
            while (i < H) {
            let k = 0;
            L [i]= matrix[i].length;
            if (i % 2  == 0) { // проверяем на четность
                if (i == 0 ) {
                    while (k < L[i]) {
                        resultMatrix[k] = matrix[i][k];
                        console.log(`resultMatrix ${k} : ${resultMatrix[k]}` );
                        k++;
                    }
                }
                else {
                    while (k < L[i]) {
                        resultMatrix[ (S + k )] = matrix[i][k];
                        console.log(`resultMatrix ${(S + k )} : ${resultMatrix[(S + k )]}` );
                        k++;
                    }
                }
                S = S + L[i];
            } 
            else {  //для нечетных строк делаем развертку в обратном порядке
                while (k < L[i]) {
                    resultMatrix[( S +  k )] = matrix[i][ L[i] - 1 - k ];;
                    console.log(`resultMatrix ${( S + k )} : ${resultMatrix[( i + k )]}` );
                    k++;
                }
                S = S + L[i]; 
              
            }
            i++; 
        }
    return resultMatrix;
  }
}