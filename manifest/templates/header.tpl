<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no">
	<meta name="description" content="NodeBB Forum Software - A better community platform for the modern web. NodeBB is a next generation forum software that's free and easy to use.">
	<meta name="author" content="NodeBB Inc.">
	<meta name="keywords" content="nodebb, node.js, forum, discussion, community, software, hosting">
	<meta name="google-site-verification" content="2othPo2oChJxLcKtwqWHzDF-JVJJNbzE-hgNTHGhVRo" />
	<title>{title}</title>

	<!-- Google Analytics & Optimize -->
	<style>.async-hide { opacity: 0 !important} </style>
	<script>(function(a,s,y,n,c,h,i,d,e){s.className+=' '+y;h.start=1*new Date;
	h.end=i=function(){s.className=s.className.replace(RegExp(' ?'+y),'')};
	(a[n]=a[n]||[]).hide=h;setTimeout(function(){i();h.end=null},c);h.timeout=c;
	})(window,document.documentElement,'async-hide','dataLayer',4000,
	{'GTM-THQV92X':true});</script>
	<script>
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', 'UA-45914244-2', 'auto');
		ga('create', 'UA-45914244-5', 'auto', 'ComboTracker');
		ga('require', 'GTM-THQV92X');
		ga('send', 'pageview');
		ga('ComboTracker.send', 'pageview');
	</script>
	<!-- End Google Analytics & Optimize -->

	<!-- Envoke Tracking -->
	<script type="text/javascript">
		(function () {
			var n = document.createElement('script'); n.type = 'text/javascript'; n.async = true;
			n.src = document.location.protocol + '//files.envoke.com/web_files/3821/scripts/nvk.js';
			var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(n, s);
		})();
	</script>
	<!-- End Envoke Tracking -->

	<meta property="fb:page_id" content="207121219437299" />

	<!-- IF loadOriginalCSS -->
	<link rel="stylesheet" type="text/css" href="{base_path}/assets/l.css">
	<link rel="stylesheet" type="text/css" href="{base_path}/assets/m.css">
	<link rel="stylesheet" type="text/css" href="{base_path}/assets/n.css">
	<!-- ENDIF loadOriginalCSS -->

	<link rel="stylesheet" type="text/css" href="{base_path}/bin/style.css">
	<link rel="stylesheet" type="text/css" href="{base_path}/assets/normalize.css">
	<link rel="stylesheet" type="text/css" href="{base_path}/assets/icons.css">

	<link href="https://fonts.googleapis.com/css?family=Lato:300,400,600,700,900|Shadows+Into+Light+Two" rel="stylesheet" type="text/css">
	<link href="https://fonts.googleapis.com/css?family=Roboto" rel="stylesheet">
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css">

	<link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png">
	<link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png">
	<link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png">
	<link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png">
	<link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png">
	<link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png">
	<link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png">
	<link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png">
	<link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png">
	<link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png">
	<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
	<link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png">
	<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
	<link rel="manifest" href="/manifest.json">
	<meta name="msapplication-TileColor" content="#ffffff">
	<meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
	<meta name="theme-color" content="#ffffff">
</head>
<body class="{path}">
	<nav id="menu" class="mobile-only">
		<section class="menu-section">
			<h3 class="menu-section-title">Navigation</h3>
			<ul class="menu-section-list" id="navigation-menu-mobile"></ul>
		</section>

		<section class="menu-section">
			<h3 class="menu-section-title">Product</h3>
			<ul class="menu-section-list" id="product-menu-mobile">
				
			</ul>
		</section>
	</nav>

	<main id="panel">
		<header id="header">
			<div class="container-fluid clearfix">
				<div class="pull-left">
					<button id="mobile-menu">
						<div class="bar"></div>
						<div class="bar"></div>
						<div class="bar"></div>
					</button>
					<a title="NodeBB - Modern Forum Software" href="/"><div class="logo"></div></a>
				</div>
				<div class="pull-right clearfix">
					<ul class="menu mobile-hide" id="navigation-menu">
						<li class="mobile-hide">
							<a title="NodeBB - Modern Forum Software" href="/">Home</a>
						</li>
						<li>
							<a title="NodeBB Plans and Pricing" href="/pricing" title="Plans &amp; Pricing">Pricing</a>
						</li>
						<li>
							<a title="NodeBB Community Forum" class="demo-link" target="_blank" href="//community.nodebb.org/" title="Community" data-outboundTrack="//community.nodebb.org/">Community</a>
						</li>
						<li>
							<a title="NodeBB Blog" target="_blank" href="//blog.nodebb.org/" title="Blog" data-outboundTrack="//blog.nodebb.org/">Blog</a>
						</li>
						<li>
							<a class="header-contact-toggle" title="Contact Us" href="#" title="Contact Us">Contact</a>
						</li>
						<li>
							<a title="Sign in to manage your NodeBB forums" href="//manage.nodebb.org" data-outboundTrack="//manage.nodebb.org">Sign in</a>
						</li>
						<li>
							<a class="sign-up" title="Sign up to create a NodeBB community forum" href="//manage.nodebb.org/register" data-outboundTrack="//manage.nodebb.org/register"><strong>Start Free Trial</strong></a>
						</li>
					</ul>
				</div>
			</div>

			<nav class="product-menu-container">
				<ul class="navigation mobile-hide" id="product-menu">
					<li class="first"><a title="Grow your community with NodeBB" href="/">
						<strong>Grow Your Community</strong> <span class="mobile-only">&nbsp;<i class="fa fa-angle-right"></i></span><br />
						<small>Drive user engagement with NodeBB</small>
					</a></li>
					<li class="second"><a title="NodeBB - Modern features with a mobile responsive design" href="/product/modern-design">
						<strong>Modern Design</strong> <span class="mobile-only">&nbsp;<i class="fa fa-angle-right"></i></span><br />
						<small>Mobile-first and real-time interactions </small>
					</a></li>
					<li class="third"><a title="Check out NodeBB's state of the art Control Panel" href="/product/control-panel">
						<strong>Control Everything</strong> <span class="mobile-only">&nbsp;<i class="fa fa-angle-right"></i></span><br />
						<small>With a powerful yet intuitive admin panel</small>
					</a></li>
					<li class="fourth"><a title="NodeBB integrations with 3rd party software" href="/product/integrations">
						<strong>Cloud Integrations</strong> <span class="mobile-only">&nbsp;<i class="fa fa-angle-right"></i></span><br />
						<small>Slack, Pushbullet, Mailchimp, and more</small>
					</a></li>
					<li class="fifth"><a title="Extend NodeBB with plugins, addons, and themes" href="/product/extensibility">
						<strong>Extensibility</strong> <span class="mobile-only">&nbsp;<i class="fa fa-angle-right"></i></span><br />
						<small>One-click install plugins and themes</small>
					</a></li>
				</ul>
			</nav>
		</header>

		
