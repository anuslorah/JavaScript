<?php include 'config.php'?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- <link rel="shortcut icon" href="images/unicorn.png" /> put favicon here if you want one -->
        <meta charset="utf-8" />
        
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width" />
        
        <!-- titles for every page are set in /includes/config.php  -->
        <title><?= $title ?></title>

       <!-- jQuery -->
        <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.0/jquery.min.js"></script>
        <script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.11.4/jquery-ui.min.js"></script>

        <script src="javascript/script.js"></script>
        <script src="javascript/tabs.js"></script>
        <script src="javascript/style.js"></script>

        <link rel="stylesheet" href="http://code.jquery.com/ui/1.12.1/themes/base/jquery-ui.css" />
        <link rel="stylesheet" href="css/lightslider.css" />
        <link rel="stylesheet" href="css/main.css" />
    </head>

    <body>
        <div class="wrapper">
    <header>
    <h1><a class="pageID" href="index.php">page title</a></h1>
    <nav>
      <ul class="nav">
          <li><a href="index.php">home</a></li>
          <li><a href="slider.php">slider</a></li>
          <li class="button-dropdown">
              <a href="javascript:void(0)" class="dropdown-toggle">Dropdown 1       <span>▼</span>
              </a>
            <ul class="dropdown-menu">
              <li><a href="subtab1.php"><span>accordion</span></a></li>
             <li><a href="subtab2.php"><span>tabs</span></a></li>
            </ul>
          </li>
          <li><a href="contact.php">contact</a></li>
      </ul>    
    </nav>
    </header>        