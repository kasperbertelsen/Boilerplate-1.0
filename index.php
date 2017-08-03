<!DOCTYPE html>
<html lang="pl">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>PHP Landing Page</title>

        <!-- build:css css/main.css -->
        <link rel="stylesheet" href="css/main.css">
        <!-- endbuild -->
    </head>
    <body>

        <header>
            <div class="container">
                <nav class="navbar">
                    <div class="brand">
                        <img src="http://placehold.it/150x50" alt="Brand">
                    </div>
                </nav>
            </div>
        </header>

        <main>
            <div class="container">
                <h1>Header one</h1>
                <div class="col-sm-4">
                    <div class="row">
                        <p>Dolor officiis blanditiis ipsum consequatur quibusdam impedit Beatae quia perferendis eos amet optio quod. Nam sequi beatae numquam expedita nemo. Esse perspiciatis laboriosam quos itaque nulla. Optio in ad quas vel reprehenderit! Amet neque molestias necessitatibus officiis dicta Numquam delectus vero natus itaque natus. Quaerat amet ratione assumenda voluptatem minima</p>
                    </div>
                    <?php include_once('modal.php') ?>
                </div>
                <div class="col-sm-4 col-sm-offset-4">
                    <?php include_once('form.php'); ?>
                </div>
            </div>
        </main>

        <section>
            <div class="container">
                <h2>Nagłówek 2</h2>
               <p>Ipsum atque adipisci explicabo placeat incidunt. Reiciendis fugit fugit exercitationem maiores animi quidem. Earum officia distinctio dolorem porro recusandae. Est reprehenderit numquam et consequuntur esse Aliquid asperiores voluptatibus sed reprehenderit sunt Hic porro officiis fugiat temporibus laborum? Nostrum minima est eos earum voluptatum dolorum Nulla alias esse asperiores harum tempora.</p>
            </div>
        </section>

        <section>
            <div class="container">
                <h2>Nagłówek 3</h2>
                <br>
                <div class="col-sm-3"><img src="http://placehold.it/150x150" alt="Client"></div>
                <div class="col-sm-3"><img src="http://placehold.it/150x150" alt="Client"></div>
                <div class="col-sm-3"><img src="http://placehold.it/150x150" alt="Client"></div>
                <div class="col-sm-3"><img src="http://placehold.it/150x150" alt="Client"></div>
            </div>
        </section>

        <footer>
            <hr/>
            <div class="container">
                Prawa autorskie
            </div>
        </footer>

        <!-- build:js scripts/vendors.js -->
        <script src="vendor/jquery-3.2.1.min.js"></script>
        <script src="vendor/bootstrap-3.37/javascripts/bootstrap.min.js"></script>
        <script src="vendor/jquery.c3r.tooltip.js"></script>
        <script src="vendor/jquery.c3r.validate.js"></script>
        <!-- endbuild -->
        <!-- build:js scripts/main.js -->
        <script src="js/main.js"></script>
        <!-- endbuild -->
    </body>
</html>
