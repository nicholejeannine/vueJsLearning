<?php 
ini_set('display_errors', 1);
ini_set('include_path', get_include_path() . PATH_SEPARATOR . __DIR__);
?>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.css" crossorigin="anonymous">
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/vue/dist/vue.js"></script>

</head>

<body>
<div id="app" class="container">
<?//php include "views/modal.html";?>
<?//php include "views/tabs.html";?>
<?php //include "views/customEventsCoupon.html";?>
<?php //include "views/eventDispatcher.html";?>
<?php //include "views/namedSlots.html";?>
<?php //include "views/inlineTemplates.html";?>
<?php include "views/objectOrientedForms.html";?>

</div>

<!-- <script src="modal.js"></script> -->
<!-- <script src="js/tabs.js"></script> -->
<!-- <script src="js/eventDispatcher.js"></script> -->
<!-- <script src="js/namedSlots.js"></script> -->
<!-- <script src="js/inlineTemplates.js"></script> -->
<script src="js/objectOrientedForms.js"></script>
</body>

</html>