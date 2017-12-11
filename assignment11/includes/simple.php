<?php
/**
 * simple.php is a postback contact form application website
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

$toAddress = "anuslorah@hotmail.com";  //your email address
$toName = "Anu Kadarpik"; //your name
$website = "anu.kadarpik.com";  //your website here
#--------------END CONFIG AREA ------------------------#
$sendEmail = TRUE; //if true, will send an email, otherwise just show user data.
$dateFeedback = true; //if true will show date/time with reCAPTCHA error - style a div with class of dateFeedback
include_once 'config.php'; #site keys go inside your config.php file
include 'contact-lib/contact_include.php'; #complex unsightly code moved here
$response = null;
$reCaptcha = new ReCaptcha($secretKey);
if (isset($_POST["g-recaptcha-response"]))
{// if submitted check response
    $response = $reCaptcha->verifyResponse(
        $_SERVER["REMOTE_ADDR"],
        $_POST["g-recaptcha-response"]
    );
}
if ($response != null && $response->success)
    {#reCAPTCHA agrees data is valid (PROCESS FORM & SEND EMAIL)
        handle_POST($skipFields,$sendEmail,$toName,$fromAddress,$toAddress,$website,$fromDomain);             #Here we can enter the data sent into a database in a later version of this file
    ?>
    <!-- START HTML FEEDBACK -->
    <div class="contact-feedback">
        <h3>Thank you for contacting me. <br>
            I will respond via email within 48 hours.</h3>
        
    </div>    
    <!-- END HTML FEEDBACK -->        
    <?php
}else{#show form, either for first time, or if data not valid per reCAPTCHA 
    if($response != null && !$response->success)
    {
        $feedback = dateFeedback($dateFeedback);
        send_POSTtoJS($skipFields); #function for sending POST data to JS array to reload form elements
    }//end failure feedback
 
?>
	<!-- START HTML FORM -->
	<form name="contact" action="<?php echo basename($_SERVER['PHP_SELF']); ?>" onsubmit="return validate()" method="post" id="form"> 
        
	<div>
		<label for="name">
			Name:<br /><input type="text" name="Name"  placeholder="name" id="name"  tabindex="10" size="30" autofocus />
		</label>
	</div>
    <br>    
	<div>	
		<label for="email">
			Email:<br /><input type="email" name="Email" placeholder="email" id="email"  tabindex="20" size="30" />
		</label>
	</div>
    <br>
    <div>
        <label for="options">How did you find me?</label><br>
        <select name="How_did_you_find_me" tabindex="30">
            <option value="-1" selected>Choose:</option>
			<option value="word of mouth">word of mouth</option>
			<option value="LinkedIn">LinkedIn</option>
			<option value="GitHub">GitHub</option>
			<option value="FaceBook">FaceBook</option>
			<option value="Instagram">Instagram</option>
			<option value="Seach engine">Seach engine</option>
			<option value="Other">Other</option>
        </select>
    </div>        
    <div>	
        <br>
		<label for="comments">
			Comments:<br /><textarea name="Comments" cols="36" rows="4" tabindex="40"></textarea>
		</label>
	</div>	
    <br>
    <div>
        <label for="radiobutton">Do you like Seattle weather?</label><br>
        <input type=radio name="SeattleWeather" value="Yes">Yes<br>
        <input type=radio name="SeattleWeather" value="No">Not so much<br>
    </div>    
    <br>
    <div class="jumbotron">
      <div class="row justify-content-center">
        <div class="col-2">
          <div id="sky-image"></div>
          <div id="location"></div>
          <div id="weather-id"></div>
          <div>Temperature: <span id="temperature"></span> &deg<a href="#" id="toCelsius">C</a> | &deg<a href="#" id="toFahrenheit">F</a></div>
          <div>Wind speed: <span id="wind-speed"></span></div>
          <div id="humidity"></div>
        </div>
      </div>
    </div>
    <br>    
	<div><?=$feedback?></div>
    <div class="g-recaptcha" data-sitekey="<?=$siteKey;?>"></div> 
	<br>
    <div>
		<input type="submit" value="submit" />
	</div>
    </form>
	<!-- END HTML FORM -->
    <script src="javascript/form.js"></script>
    <script src="https://www.google.com/recaptcha/api.js?hl=en">
    </script>
<?php
}
?>