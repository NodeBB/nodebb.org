<div class="contact-modal-wrapper">
	<div class="contact-modal">
	<div class="contact-header">
<h3>Speak to a specialist</h3>
<p>I'd like to get help with...</p>
	</div>
		<form>
			<div>
				<button type="button" data-type="support">A technical/support issue with NodeBB</button>
				<button type="button" data-type="sales">NodeBB Instant Hosting including startup/nonprofit pricing</button>
				<button type="button" data-type="custom">Custom design, development, or custom pricing</button>
				<button type="button" data-type="other">Other, not sure</button>
				<input type="hidden" id="type" name="type" value="other" />
			</div>
			<fieldset>
				<div>
					<label for="name">Name</label>
					<input type="text" id="name" name="name" placeholder="Enter your name" />
				</div>
				<div>
					<label for="email">Email</label>
					<input type="email" id="email" name="email" placeholder="Enter your email address" />
				</div>
				<div>
					<label for="message">Message</label>
					<textarea id="message" name="message" placeholder="I&apos;d like to ask about..."></textarea>
				</div>
				<button class="submit" type="button">Send</button>
			</fieldset>
			<div>
				<p>
					Thank you for your inquiry, a representative should be in contact shortly!
				</p>
				<button class="reset" type="button" data-clear="1">Send another message</button>
			</div>
			<div>
				<p></p>
				<button class="reset" type="button">Try again</button>
			</div>
		</form>
	</div>
</div>


<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
	<script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
<!-- <script type="text/javascript" src="{base_path}/assets/lib/bootbox.min.js"></script> -->
<script type="text/javascript" src="{base_path}/assets/lib/contact.js"></script>
<!-- IF dev -->
<script src="//localhost:3001/livereload.js"></script>
<!-- ENDIF dev -->
</body>

</html>