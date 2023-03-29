<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Antonio Santos - Desenvolvedor Web e Designer Gráfico</title>
    <link rel="stylesheet" href="css/style.css">
    <script src="https://unpkg.com/boxicons@2.1.4/dist/boxicons.js"></script>
</head>
<body>
   <header>
        <?php include 'pgs/topo.php'; ?>
   </header>
   <main>
        <section>

            <?php
            if(@$_GET['a'] == ''){
                include 'pgs/apresenta.php';
            }
            if(@$_GET['a'] == 'portfolio'){
                include 'pgs/portfolio.php';
            }
            if(@$_GET['a'] == 'services'){
                include 'pgs/services.php';
            }
            if(@$_GET['a'] == 'contato'){
                include 'pgs/contato.php';
            }
              ?>
        </section>
       
   </main>
   <footer>
   <?php include 'pgs/footer.php'; ?>
   </footer>
    <script src="js/jQuery.js"></script>
    <script src="js/script.js"></script>
</body>
</html>
