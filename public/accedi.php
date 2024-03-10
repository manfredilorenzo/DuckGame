<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];

    $sql = "SELECT * FROM giocatore WHERE nome = '$nome'";

    if (mysqli_query($connessione, $sql)) {
        // Utente trovato, esegui il reindirizzamento
        header('Location: /public/preGame.html');
        exit();  // Assicurati di terminare lo script qui
    } else {
        echo "Errore nell'esecuzione della query: " . mysqli_error($connessione);
    }
}
?>
