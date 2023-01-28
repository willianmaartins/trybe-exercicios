const angle1 = 130;
const angle2 = 50;
const angle3 = 100;

const validAngle = angle1 + angle2 + angle3;

const allAngle = angle1 > 0 && angle2 > 0 && angle3 > 0;

if(allAngle) {
    if(validAngle === 180) {
        console.log(true);
    } else {
        console.log(false);
    }
} else {
    console.log('Erro: ângulo inválido');
}
