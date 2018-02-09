	
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
		<div class="contact-toggle">
			<i class="fa fa-envelope"></i>&nbsp;&nbsp;
			Contact Us
		</div>
		<div class="contact-overlay"></div>
		<div class="contact-modal-wrapper">
			<div class="contact-modal">
				<div class="close"><i class="fa fa-times"></i></div>
				<h3>Contact NodeBB</h3>
				<p>I&apos;d like to speak to someone about...</p>
				<form>
					<div>
						<button type="button" data-type="support">A technical / support issue with NodeBB</button>
						<button type="button" data-type="sales">Pricing or other question about NodeBB hosting</button>
						<button type="button" data-type="custom">Custom development / Enterprise service inquiry</button>
						<button type="button" data-type="other">Other / Not sure</button>
						<input type="hidden" id="type" name="type" value="other" />
					</div>
					<fieldset>
						<div>
							<label for="name">Name</label>
							<input type="text" id="name" name="name" placeholder="Name" />
						</div>
						<div>
							<label for="email">Email</label>
							<input type="text" id="email" name="email" placeholder="Email" />
						</div>
						<div>
							<label for="message">Message</label>
							<textarea id="message" name="message" placeholder="I&apos;d like to ask about..."></textarea>
						</div>
						<button class="submit" type="button">submit</button>
					</fieldset>
					<div>
						<p>
							Thank you for your inquiry, a representative should be in contact shortly!
						</p>
						<button class="reset" type="button">send another message</button>
					</div>
					<div>
						<p>
							Unfortunately your message could not be sent. Please try again later or email us at
							<a href="mailto:support@nodebb.org">support@nodebb.org</a>. Thanks!
							<button class="reset" type="button">send another message</button>
						</p>
					</div>
				</form>
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
</body>
</html>
