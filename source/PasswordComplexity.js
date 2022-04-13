const PasswordComplexityValues = {
    WEAK: 'weak',
    GOOD: 'good',
    EXCELLENT: 'excellent',
}

//const calculateComplexity = password => 'Good Luck!'


const calculateComplexity = (password) =>{
    let res = false;
    let a = false;
    let b =  false;
    let c = false;
    let v_letras = 0;
    let v_num = 0;


    // - a) Regla de mínimo de caracteres (ejemplo: Longitud mínima 8 caracteres).
    // - b) Regla de que contenga (al menos) 2 números siempre y cuando también contenga letras.
    // - c) Implementar una función que:
    //   - Si cumple con las 2 reglas → es Excelente
    //   - Si cumple con sólo 1 → es Buena
    //   - Si no cumple con ninguna → es Débil

    if(password.length >= 8)
       a = true;

    
       //console.log('antes for')

    for (let i = 0; i <= password.length; i ++)
    {
        //console.log(password[i])

        if(isNaN(password[i])){
           // console.log('dentro del if')
            v_letras = v_letras +1;
        }           
        else
            v_num = v_num +1;
    }

    if( (v_num > 1 && v_letras != 0) && a)
        b = true;



    // Si cumple con sólo 1 → es Buena
    if (a && b){
        return PasswordComplexityValues.EXCELLENT;
    }else{
        if(a || b)
            return PasswordComplexityValues.GOOD;
        else
            return PasswordComplexityValues.WEAK;
    }      
} 

module.exports = { calculateComplexity, PasswordComplexityValues }