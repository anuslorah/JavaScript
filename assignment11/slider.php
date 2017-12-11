<?php include "includes/header.php"?>
<ul id="lightSlider" class="lightslider">
        <li>
            <h3>first slide</h3>
            <p><img src="images/images_small/placeimg1_300_300_tech.jpg"></p>
        </li>
        <li>
            <h3>second slide</h3>
            <p><img src="images/images_small/placeimg2_300_300_tech.jpg"></p>
        </li>
        <li>
            <h3>third slide</h3>
            <p><img src="images/images_small/placeimg3_300_300_tech.jpg"></p>
        </li>
        <li>
            <h3>fourth slide</h3>
            <p><img src="images/images_small/placeimg4_300_300_tech.jpg"></p>
        </li>
        <li>
            <h3>fifth slide</h3>
            <p><img src="images/images_small/placeimg5_300_300_tech.jpg"></p>
        </li> 
    </ul>
    <script src="javascript/lightslider.js">
    </script>
    <script>
        $(document).ready(function() {
            $('#lightSlider').lightSlider({
                gallery: true,
                item: 1,
                loop:true,
                slideMargin: 0,
                thumbItem: 5
            });
        });
    </script>
        
<?php include "includes/footer.php"?>   