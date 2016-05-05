	
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
								or <a class="pointer" onclick="javascript:$zopim.livechat.window.show();">Chat with Us</a>
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
								<a href="//blog.nodebb.org/">Blog</a>
							</p>
							<div class="address">
								Made in Canada with <i class="fa fa-heart"></i><br />
								Suite #619, 341 King Street East<br />
								Toronto, Ontario. M5A 1L1
							</div>
						</div>
					</div>
					<div class="container copyright-text">
						<p>
							<a title="NodeBB Facebook Page" href="https://www.facebook.com/NodeBB" class="btn btn-icon btn-rounded btn-facebook bg-empty m-sm">
							<i class="fa fa-facebook">
							</i>
							</a>
							<a title="NodeBB Twitter Page" href="https://www.twitter.com/NodeBB" class="btn btn-icon btn-rounded btn-twitter bg-empty m-sm">
							<i class="fa fa-twitter">
							</i>
							</a>
							<a title="Fork NodeBB on Github" href="https://www.github.com/NodeBB/NodeBB" class="btn btn-icon btn-rounded btn-gplus bg-empty m-sm">
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
		ga('create', 'UA-45914244-5', 'auto');
		ga('send', 'pageview');
	</script>
	
	<script>
		/**
		* Function that tracks a click on an outbound link in Analytics.
		* This function takes a valid URL string as an argument, and uses that URL string
		* as the event label. Setting the transport method to 'beacon' lets the hit be sent
		* using 'navigator.sendBeacon' in browser that support it.
		*/
		var trackOutboundLink = function(url) {
		   ga('send', 'event', 'outbound', 'click', url, {
		     'transport': 'beacon',
		     'hitCallback': function(){document.location = url;}
		   });
		}
	</script>
	<!-- End Google Analytics -->

	<!-- Clicky Analytics Code -->
	<script type="text/javascript">
	var clicky_site_ids = clicky_site_ids || [];
	clicky_site_ids.push(100870636);
	(function() {
		var s = document.createElement('script');
		s.type = 'text/javascript';
		s.async = true;
		s.src = '//static.getclicky.com/js';
		( document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0] ).appendChild( s );
	})();
	</script>
	<noscript><p><img alt="Clicky" width="1" height="1" src="//in.getclicky.com/100870636ns.gif" /></p></noscript>

	<!--Start of Zopim Live Chat Script-->
	<script type="text/javascript">
	window.$zopim||(function(d,s){var z=$zopim=function(c){z._.push(c)},$=z.s=
	d.createElement(s),e=d.getElementsByTagName(s)[0];z.set=function(o){z.set.
	_.push(o)};z._=[];z.set._=[];$.async=!0;$.setAttribute("charset","utf-8");
	$.src="//v2.zopim.com/?3tD283j1qO6OkTMlM0C9SQZkB3f494fg";z.t=+new Date;$.
	type="text/javascript";e.parentNode.insertBefore($,e)})(document,"script");
	</script>
	<!--End of Zopim Live Chat Script-->
</body>
</html>
