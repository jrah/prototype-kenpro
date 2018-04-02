---
layout: page
title: Contact
permalink: /contact/
order: 3
---

```html

<h2 class="f2 lh-title fw1 ma0 mb3 tc">Get in touch</h2>

<section class="pv3">
  <div class="flex-ns">
    <div class="w-50-ns w-100">
      <div class="">
        <div id="map1" class="w-100" style="height: 20rem;"></div>
      </div>
    </div>
    <div class="w-50-ns w-100 pa3 flex items-center">
      <address class="fs-normal">
      <span class="fw8 f4">Kenpro JDA<br>London Office</span><br>
       +49 40 432 91 222<br>
       hello@greatsimple.com<br>
       Lipmannstrasse 79, 22769,  Hamburg Germany
      </address>
    </div>
  </div>
</section>

<section class="pv3">
  <div class="flex-ns">
    <div class="w-50-ns w-100">
      <div class="">
        <div id="map2" class="h5 w-100" style="height: 20rem;"></div>
      </div>
    </div>
    <div class="w-50-ns w-100 pa3 flex items-center">
      <address class="fs-normal">
      <span class="fw8 f4">Kenpro JDA<br>London Office</span><br>
       +49 40 432 91 222<br>
       hello@greatsimple.com<br>
       Lipmannstrasse 79, 22769,  Hamburg Germany
      </address>
    </div>
  </div>
</section>

<section class="bg-near-black pv5">
  <div class="tc mw6 auto center">
    <h2 class="f2 lh-title fw1 ma0 mb3 white">Let’s start the conversation</h2>
    <p class="ma0 mb3 white">lorem ipsum, quia dolor sit amet consectetur
adipisci[ng] velit, sed quia non-numquam.</p>
<a href="#" class="inline-flex items-center f6 link ph3 pv3 mv3 dib white bg-red br-pill"><span>Contact Us</span> <svg class="ml5" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" x="0px" y="0px" viewBox="0 0 260 260" style="enable-background:new 0 0 260 260;" xml:space="preserve" transform="rotate(90 0 0)" height="20" width="20"><path fill="#ffffff" d=" M5,128.6c0,69,56,125,125,125s125-56,125-125s-56-125-125-125S5,59.5,5,128.6z M142.2,98.9l46.4,46.3c2,2,2.9,4.5,2.9,7.1  c0,2.6-1,5.1-2.9,7.1c-3.9,3.9-10.2,3.9-14.1,0L128,113.1l-46.4,46.3c-3.9,3.9-10.2,3.9-14.1,0c-3.9-3.9-3.9-10.2,0-14.1L128,84.8  L142.2,98.9z"></path></svg></a>
  </div>
</section>


<script>
function initMap() {
  const latLng1 = {lat: -33.8568, lng: 151.2153};
  const latLng2 = {lat: -33.8568, lng: 151.2153};
  const map1 = new google.maps.Map(document.getElementById('map1'), {
    zoom: 14,
    center: latLng1,
    mapTypeControl: true
  });
  const map2 = new google.maps.Map(document.getElementById('map2'), {
    zoom: 14,
    center: latLng2
  });
  const marker1 = new google.maps.Marker({
    position: map1,
    map: map1
  });
  const marker2 = new google.maps.Marker({
    position: map2,
    map: map2
  });
    }
  </script>
  <script async defer
  src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDTlJ1i_YeRU6QraxHkCGFMvoL5CTgF0Xk&callback=initMap">
  </script>
