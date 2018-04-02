---
layout: page
title: Contact
permalink: /contact/
order: 3
---

```html
<section class="pv3">
  <h2 class="f2 lh-title fw1 ma0 mb3 tc">Get in touch</h2>
  <div class="flex-ns">
    <div class="w-50-ns w-100" style="margin: auto;">
      <div class="">
        <div id="map1" class="h5 w-100"></div>
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
    <div class="w-50-ns w-100" style="margin: auto;">
      <div class="">
        <div id="map2" class="h5 w-100"></div>
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
