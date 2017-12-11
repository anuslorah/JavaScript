<?php
/**
 * config.php provides a place to store configuration info, 
 * such as your reCAPTCHA site keys
 *
 * @package nmCAPTCHA2
 * @author Bill & Sara Newman <williamnewman@gmail.com>
 * @version 1.01 2015/11/17
 * @link http://www.newmanix.com/
 * @license http://www.apache.org/licenses/LICENSE-2.0
 * @see contact_include.php 
 * @see recaptchalib.php
 * @see util.js 
 * @todo none
 */

/**Put your recaptcha keys here, look on 
* https://developers.google.com/recaptcha/docs/start 
* to learn how
*/
$siteKey = "";
$secretKey = "";

//this avoids date errors
date_default_timezone_set('America/Los_Angeles');

//this changes what is shown as title of the page

define('THIS_PAGE', basename($_SERVER['PHP_SELF']));

switch(THIS_PAGE){
	case 'index.php':
		$title = 'Home';
	break;
	
	case 'about.php':
		$title = 'About';
	break;
	
	case 'products.php':
		$title = 'Products';
	break;
    
    case 'contact.php':
		$title = 'Contact';
	break;
	
	default:
	   $title = THIS_PAGE;
}
