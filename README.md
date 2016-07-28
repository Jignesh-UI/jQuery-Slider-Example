# jQuery-Slider-Example
<h3>Content Slider with Thumbnail</h3>
<ol>
  <li><strong>Introduction</strong>
    <p>A jQuery slider is light weight, it  is compatible with all browsers. You can navigate content with thumbnail image  control in horizontal and it is fully customizable. </p>
  </li>
  <li><strong>Installation</strong>
    <p>You require to download below  mention files to your project. </p>
    <ul>
      <li><strong>CSS:</strong> slider.css</li>
      <li><strong>JS:</strong> jQuery plug-in file (Download from attached  Bunch or you can download from jQuery Site) </li>
      <ul>
        <li>Plugin file Developer edition: <strong>sliderJs.js</strong></li>
        <li>Plugin file minify edition: <strong>sliderJs.min.js</strong></li>
      </ul>
      <li><strong>JavaScript Code:</strong>
        <p>$(&quot;.slider&quot;).accordionSlider({<br />
          duration: 500, //  Provide a duration for move a slide.<br />
          startSlide: 1 // Provide a slide start index.<br />
          });</p>
      </li>
      <li><strong>HTML Code:</strong>
        <p>You should follow following pattern</p>
        <pre>
&lt;div class="slider"&gt; &lt;!-- This is your Slider Wrapper --&gt;

  &lt;div class="sliderMover"&gt; &lt;!-- This DIV Requires to move your Slides --&gt;


    &lt;div class="sliderBox"&gt;  &lt;!-- This is your First Slider Container --&gt;
	  &lt;img src="images/img1.jpg" alt="" class="sliderThumb" /&gt; &lt;!-- This is your Slider Thumbnail --&gt;
      &lt;div class="sliderContent"&gt; &lt;!-- This is your Slider Content Container --&gt;
        &lt;h2&gt;Title&lt;/h2&gt; &lt;!-- This is your Slider Title --&gt;
        &lt;p&gt;Title 1 Description&lt;/p&gt; &lt;!-- This is your Slider Content --&gt;
      &lt;/div&gt;
      &lt;div class="clear"&gt;&lt;/div&gt; &lt;!-- Clears the floating point --&gt;
    &lt;/div&gt;

    &lt;div class="sliderBox"&gt; &lt;!-- This is your Second Slider Container --&gt; 
	  &lt;img src="images/img2.jpg" alt="" class="sliderThumb" /&gt;
      &lt;div class="sliderContent"&gt;
        &lt;h2&gt;Title 2&lt;/h2&gt;
        &lt;p&gt;Title 2 Description &lt;/p&gt;
      &lt;/div&gt;
      &lt;div class="clear"&gt;&lt;/div&gt;
    &lt;/div&gt;


  &lt;/div&gt;

&lt;/div&gt;
</pre>
        <p><strong>Note:</strong> Next/Previous link will be taken care from <strong>sliderJs/sliderJs.min.js, </strong>you can change the thumbnail of sprite image. </p>
      </li>
    </ul>
  </li>
<li><strong>Options:</strong>
  <ul>
    <li><strong>sliderWidth:</strong>// Sets the Slides Width (Default=500, Note:  Please make sure that you have also change the width from CSS file as well.)</li>
    <li><strong>startSlide:</strong> // Sets the Starting slide (Default starts  from first)</li>
    <li><strong>duration:</strong> // Sets the Slide animate timing. (default is  500)</li>
    <li><strong>leftMove:</strong> // Create a Left moving thumbnail link.</li>
    <li><strong>rightMove:</strong> // Create a right moving thumbnail link.</li>
  </ul>
 </li>
</ol>

Download and Copy the HTML content to play with jQuery slider plug-in.
