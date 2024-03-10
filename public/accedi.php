<!DOCTYPE html>
<html>
    <body>
    <?php
error_reporting(E_ALL);
ini_set('display_errors', 1);
require_once('connessione.php');

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = $_POST['nome'];
    $sql = "SELECT * FROM giocatore WHERE nome = '$nome'";
    $sqlInsert = "INSERT INTO giocatore (nome) VALUES ('$nome')";

    $result = mysqli_query($connessione, $sql);

    if ($result) {
        $numeroRighe = mysqli_num_rows($result);

        if ($numeroRighe > 0) {
            // Utente trovato, esegui il reindirizzamento
            header('Location: ./preGame.html');
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

    </body>
</html>
