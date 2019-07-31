	
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
								or <a class="pointer" onclick="nodebb.contact.showModal()">Chat with Us</a>
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
								<a title="GDPR" href="/gdpr">GDPR</a>
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
								Toronto, Ontario. M5C 1G4
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
		<div class="contact-toggle">
			<i class="fa fa-comment"></i>&nbsp;&nbsp;
			Speak to a Specialist
		</div>
		<div class="contact-overlay"></div>
		<div class="contact-modal-wrapper">
			<div class="contact-modal">
				<div class="close"><i class="fa fa-times"></i></div>
				<!-- Embed Envoke Engagement -->
				<div id="nvkEmbed6dea37964c9030fa4335b16c72316d56" class="nvkEmbed"></div>
				<script async src="https://offers.nodebb.org/ext/embed/engagements/6dea37964c9030fa4335b16c72316d56.js"></script>
				<!-- End Embed Envoke Engagement -->
			</div>
		</div>

		<div class="header-contact-overlay"></div>
		<div class="header-contact-modal-wrapper">
			<div class="header-contact-modal">
				<div class="close"><i class="fa fa-times"></i></div>
				<!-- Embed Envoke Engagement -->
				<div id="nvkEmbed6dea37964c9030fa4335b16c72316d56" class="nvkEmbed"></div>
				<script async src="https://offers.nodebb.org/ext/embed/engagements/6dea37964c9030fa4335b16c72316d56.js"></script>
				<!-- End Embed Envoke Engagement -->
			</div>
		</div>
	</main>

	
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script type="text/javascript" src="{base_path}/assets/lib/main.js"></script>
	<script type="text/javascript" src="{base_path}/assets/lib/slideout.min.js"></script>
	<script type="text/javascript" src="{base_path}/assets/lib/bootbox.min.js"></script>
	<script type="text/javascript" src="{base_path}/assets/lib/contact.js"></script>
	<!-- IF dev -->
	<script src="//localhost:3001/livereload.js"></script>
	<!-- ENDIF dev -->
	
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
</body>
</html>
