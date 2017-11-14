	
		<footer id="footer">
			<div class="bg-dark wrapper location">
				<div class="container text-center footer">
					<div class="clearfix container footer-text">
						<div class="pull-left w33">
							<i class="fa fa-microphone fa-3x mobile-hide">
							</i>
							<h3 class="mobile-hide">
								Press
							</h3>
							<p class="m-t">
								<a title="Press Email" href="mailto:media@nodebb.org">
									media@nodebb.org
								</a> | <a title="Press Room" href="/press">Press Room</a>
							</p>
							<p class="subtext">
								Please send any media relations inquiries to our press team.
							</p>
						</div>
						<div class="pull-left w33">
							<i class="fa fa-envelope-o fa-3x mobile-hide">
							</i>
							<h3 class="mobile-hide">
								Sales
							</h3>
							<p class="m-t m-b">
								<a title="Sales Email" href="mailto:sales@nodebb.org">
								sales@nodebb.org
								</a><br />
								or <a class="pointer" onclick="olark('api.box.expand')">Chat with Us</a>
							</p>
							<p class="subtext">
								Have a question? Send our sales team an email or reach out to us via chat.
								We are here 24/7 to answer any questions you may have regarding NodeBB.
							</p>
						</div>
						<div class="pull-left w33">
							<i class="fa fa-info fa-3x mobile-hide">
							</i>
							<h3 class="mobile-hide">
								Info
							</h3>
							<p class="h5 m-b inline text-left m-r">
								<a title="Terms of Service" href="/tos">Terms</a>
							</p>
							<p class="h5 m-b inline text-left m-r">
								<a title="Privacy Policy" href="/privacy">Privacy</a>
							</p>
							<p class="h5 m-b inline text-left m-r">
								<a title="DMCA" href="/dmca">DMCA</a>
							</p>
							<p class="h5 m-b inline text-left m-r">
								<a href="//blog.nodebb.org/" data-outboundTrack="//blog.nodebb.org">Blog</a>
							</p>
							<div class="address">
								Made in Canada with <i class="fa fa-heart"></i><br />
								Suite #200, 95 King Street East<br />
								Toronto, Ontario. M5C 1G3
							</div>
						</div>
					</div>
					<div class="container copyright-text">
						<p>
							<a title="NodeBB Facebook Page" href="https://www.facebook.com/NodeBB" data-outboundTrack="https://www.facebook.com/NodeBB" class="btn btn-icon btn-rounded btn-facebook bg-empty m-sm">
							<i class="fa fa-facebook">
							</i>
							</a>
							<a title="NodeBB Twitter Page" href="https://www.twitter.com/NodeBB" data-outboundTrack="https://www.twitter.com/NodeBB" class="btn btn-icon btn-rounded btn-twitter bg-empty m-sm">
							<i class="fa fa-twitter">
							</i>
							</a>
							<a title="Fork NodeBB on Github" href="https://www.github.com/NodeBB/NodeBB" data-outboundTrack="https://www.github.com/NodeBB/NodeBB" class="btn btn-icon btn-rounded btn-gplus bg-empty m-sm">
							<i class="fa fa-github-alt">
							</i>
							</a>
						</p>
						<p>
							<span class="copyright">
							Made in Canada.
							</span>
						</p>
					</div>
				</div>
				<div class="location-overlay"></div>
			</div>
		</footer>
	</main>

	
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript" src="{base_path}/assets/lib/main.js"></script>
	<script type="text/javascript" src="{base_path}/assets/lib/slideout.min.js"></script>
	<!-- IF dev -->
	<script src="//localhost:3001/livereload.js"></script>
	<!-- ENDIF dev -->

	<!-- Google Analytics -->
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-45914244-2', 'auto');
		ga('create', 'UA-45914244-5', 'auto', 'ComboTracker');
		ga('send', 'pageview');
		ga('ComboTracker.send', 'pageview');
	</script>
	
	<script>
		/**
		* Function that tracks a click on an outbound link in Analytics.
		* This function takes a valid URL string as an argument, and uses that URL string
		* as the event label. Setting the transport method to 'beacon' lets the hit be sent
		* using 'navigator.sendBeacon' in browser that support it.
		*/
		
		$(document).ready(function() {
			if (!ga || !ga.loaded) {
				return;
			}

			$('[data-outboundTrack]').on('click', function() {
				var url = $(this).attr('data-outboundTrack');
				
				ga('send', 'event', 'outbound', 'click', url, {
					'transport': 'beacon',
					'hitCallback': function(){document.location = url;}
				});

				return false;
			});
		});
	</script>
	<!-- End Google Analytics -->

	<script data-cfasync="false" type='text/javascript'>/*<![CDATA[*/window.olark||(function(c){var f=window,d=document,l=f.location.protocol=="https:"?"https:":"http:",z=c.name,r="load";var nt=function(){
	f[z]=function(){
	(a.s=a.s||[]).push(arguments)};var a=f[z]._={
	},q=c.methods.length;while(q--){(function(n){f[z][n]=function(){
	f[z]("call",n,arguments)}})(c.methods[q])}a.l=c.loader;a.i=nt;a.p={
	0:+new Date};a.P=function(u){
	a.p[u]=new Date-a.p[0]};function s(){
	a.P(r);f[z](r)}f.addEventListener?f.addEventListener(r,s,false):f.attachEvent("on"+r,s);var ld=function(){function p(hd){
	hd="head";return["<",hd,"></",hd,"><",i,' onl' + 'oad="var d=',g,";d.getElementsByTagName('head')[0].",j,"(d.",h,"('script')).",k,"='",l,"//",a.l,"'",'"',"></",i,">"].join("")}var i="body",m=d[i];if(!m){
	return setTimeout(ld,100)}a.P(1);var j="appendChild",h="createElement",k="src",n=d[h]("div"),v=n[j](d[h](z)),b=d[h]("iframe"),g="document",e="domain",o;n.style.display="none";m.insertBefore(n,m.firstChild).id=z;b.frameBorder="0";b.id=z+"-loader";if(/MSIE[ ]+6/.test(navigator.userAgent)){
	b.src="javascript:false"}b.allowTransparency="true";v[j](b);try{
	b.contentWindow[g].open()}catch(w){
	c[e]=d[e];o="javascript:var d="+g+".open();d.domain='"+d.domain+"';";b[k]=o+"void(0);"}try{
	var t=b.contentWindow[g];t.write(p());t.close()}catch(x){
	b[k]=o+'d.write("'+p().replace(/"/g,String.fromCharCode(92)+'"')+'");d.close();'}a.P(2)};ld()};nt()})({
	loader: "static.olark.com/jsclient/loader0.js",name:"olark",methods:["configure","extend","declare","identify"]});
	/* custom configuration goes here (www.olark.com/documentation) */
	olark.identify('7202-831-10-7053');/*]]>*/</script><noscript><a href="https://www.olark.com/site/7202-831-10-7053/contact" title="Contact us" target="_blank">Questions? Feedback?</a> powered by <a href="http://www.olark.com?welcome" title="Olark live chat software">Olark live chat software</a></noscript>
</body>
</html>
