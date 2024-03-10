<?php

$servername = "casaponissa.ddns.net";
$username = "manfredi";
$password = "manfredi";
$dbname = "manfredi";

// Connessione al database
$conn = mysqli_connect($servername, $username, $password, $dbname);

// Verifica la connessione
if (!$conn) {
    die("Connessione al database fallita: " . mysqli_connect_error());
}

echo "Connessione al database riuscita";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['nome']) && isset($_POST['password'])) {
        $nome = $_POST['nome'];
        $password = $_POST['password'];
    }
}

$id = 2;
$numeroCasella = 1;
$idTavolo = 1;
$nome = "notGbaa";
$puntiClassifica = 25;

$sql = "INSERT INTO giocatore (id ,numeroCasella, idTavolo, nome, puntiClassifica) 
        VALUES ($id, $numeroCasella, $idTavolo, '$nome', $puntiClassifica)";


if (mysqli_query($conn, $sql)) {
    echo "Inserimento riuscito";
} else {
    echo "Errore nell'inserimento: " . mysqli_error($conn);
}

// Chiudi la connessione
mysqli_close($conn);
?>

