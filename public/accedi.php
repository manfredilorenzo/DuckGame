<?php
require_once('connessione.php');
echo "Ciao";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    echo "ciao";
    $nome = $_POST['Nome'];
    $sql = "SELECT * FROM giocatore WHERE nome = '$nome'";
    $sqlInsert = "INSERT INTO giocatore (nome) VALUES ('$nome')";
    $result = mysqli_query($connessione, $sql);
    var_dump($result);

    if ($result) {
        $numeroRighe = mysqli_num_rows($result);
        echo $numeroRighe;
        if ($numeroRighe > 0) {
            // Utente trovato, esegui il reindirizzamento
            header('location: ./preGame.html');
            exit();  // Assicurati di terminare lo script qui
        } else {
            // Utente non trovato, esegui l'inserimento
            if (mysqli_query($connessione, $sqlInsert)) {
                echo "Inserito";
            } else {
                echo "Errore nell'inserimento: " . mysqli_error($connessione);
            }
        }
    } else {
        echo "Errore nell'esecuzione della query: " . mysqli_error($connessione);
    }
}
?>
