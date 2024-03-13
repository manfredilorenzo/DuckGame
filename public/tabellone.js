document.addEventListener('DOMContentLoaded', function () {
    var canvas = document.getElementById('diceCanvas');
    var ctx = canvas.getContext('2d');

    function drawDiceFace(number) {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw dice border
      ctx.beginPath();
      ctx.rect(10, 10, 100, 100);
      ctx.lineWidth = 5;
      ctx.strokeStyle = '#000';
      ctx.stroke();
      ctx.closePath();

      // Draw dots based on the dice number
      ctx.fillStyle = '#000';

      switch (number) {
        case 1:
          drawDot(60, 60);
          break;
        case 2:
          drawDot(40, 40);
          drawDot(80, 80);
          break;
        case 3:
          drawDot(40, 40);
          drawDot(60, 60);
          drawDot(80, 80);
          break;
        case 4:
          drawDot(40, 40);
          drawDot(80, 40);
          drawDot(40, 80);
          drawDot(80, 80);
          break;
        case 5:
          drawDot(40, 40);
          drawDot(80, 40);
          drawDot(60, 60);
          drawDot(40, 80);
          drawDot(80, 80);
          break;
        case 6:
          drawDot(40, 35);
          drawDot(40, 60);
          drawDot(40, 85);
          drawDot(80, 35);
          drawDot(80, 60);
          drawDot(80, 85);

          break;
        default:
          break;
      }
    }

    function drawDot(x, y) {
      ctx.beginPath();
      ctx.arc(x, y, 8, 0, Math.PI * 2);
      ctx.fill();
      ctx.closePath();
    }

    const button = document.getElementById("dice");
    const pTiro = document.getElementById("pTiro");

    let status = 0;
    let intervalId;

    document.getElementById('dice').onclick = () => {
      // Disabilita il pulsante durante il lancio del dado
      document.getElementById('dice').disabled = true;

      // Resetta lo stato e il canvas
      status = 0;
      drawDiceFace(1); // Modifica il numero iniziale se necessario

      // Avvia l'intervallo
      intervalId = setInterval(function () {
        let num = Math.floor(Math.random() * 6) + 1; // Genera un numero casuale tra 1 e 6
        drawDiceFace(num);
        status++;

        // Condizione di uscita dopo 5 esecuzioni
        if (status === 5) {
          clearInterval(intervalId); // Interrompi l'intervallo
          // Dopo 5 volte, abilita nuovamente il pulsante
          document.getElementById('dice').disabled = false;
          pTiro.innerHTML ="numero uscito: " + num;

        }
      }, 180);
    };






  })