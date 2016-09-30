<html>
<head>
	<title>Account Suspended</title>
	<link href='http://fonts.googleapis.com/css?family=Ubuntu:400,500,700' rel='stylesheet' type='text/css'>
	<style type="text/css">
	body {
		background: #00A9EA;
		color: white;
		font-family: 'Ubuntu', sans-serif;
		text-align: center;
		-webkit-transform-style: preserve-3d;
		-moz-transform-style: preserve-3d;
		transform-style: preserve-3d;
	}

	h1 {
		font-size: 250px;
		color: #fff;
		opacity: 0.5;
		margin: 10px;
		cursor: pointer;
		-moz-user-select: none;
		-khtml-user-select: none;
		-webkit-user-select: none;
	}

	p {
		font-size: 20px;
	}

	p strong {
		font-size: 28px;
	}

	.center {
		position: relative;
		top: 50%;
		-webkit-transform: translateY(50%);
		-ms-transform: translateY(50%);
		transform: translateY(50%);
	}

	@-webkit-keyframes bounce {
		0%, 20%, 53%, 80%, 100% {
			-webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
			transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
			-webkit-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
		}

		40%, 43% {
			-webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
			transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
			-webkit-transform: translate3d(0, -30px, 0);
			transform: translate3d(0, -30px, 0);
		}

		70% {
			-webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
			transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
			-webkit-transform: translate3d(0, -15px, 0);
			transform: translate3d(0, -15px, 0);
		}

		90% {
			-webkit-transform: translate3d(0,-4px,0);
			transform: translate3d(0,-4px,0);
		}
	}

	@keyframes bounce {
		0%, 20%, 53%, 80%, 100% {
			-webkit-transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
			transition-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
			-webkit-transform: translate3d(0,0,0);
			transform: translate3d(0,0,0);
		}

		40%, 43% {
			-webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
			transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
			-webkit-transform: translate3d(0, -30px, 0);
			transform: translate3d(0, -30px, 0);
		}

		70% {
			-webkit-transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
			transition-timing-function: cubic-bezier(0.755, 0.050, 0.855, 0.060);
			-webkit-transform: translate3d(0, -15px, 0);
			transform: translate3d(0, -15px, 0);
		}

		90% {
			-webkit-transform: translate3d(0,-4px,0);
			transform: translate3d(0,-4px,0);
		}
	}

	.bounce {
		-webkit-animation-name: bounce;
		animation-name: bounce;
		-webkit-transform-origin: center bottom;
		-ms-transform-origin: center bottom;
		transform-origin: center bottom;
	}

	.animated {
		-webkit-animation-duration: 1s;
		animation-duration: 1s;
		-webkit-animation-fill-mode: both;
		animation-fill-mode: both;
	}

	.animated.infinite {
		-webkit-animation-iteration-count: infinite;
		animation-iteration-count: infinite;
	}

	.animated.hinge {
		-webkit-animation-duration: 2s;
		animation-duration: 2s;
	}

	.hide {
		display: none;
	}
	</style>
	<script type="text/javascript">
	window.onload = function() {
		var count = 0,
			bounce = document.getElementById('click-me');
		bounce.onclick = function() {
			count++;
			bounce.className = '';
			setTimeout(function() {
				bounce.className = 'animated bounce';
			}, 50);

			if (count > 5) {
				document.getElementById('hide').className = '';
			}
		};
	}
	</script>
</head>
<body>
	<div class="wrapper">
		<div class="center">
			<h1 id="click-me" class="animated bounce">503</h1>
			<p>
				<strong>This forum is temporarily suspended.</strong> <br />
				If this is your forum, please contact a NodeBB representative immediately.
			</p>
			<p id="hide" class="hide">
				<small>Alright. You can stop clicking... it's not going to make the site come back sooner!</small>
			</p>
		</div>
	</div>
</body>
</html>
