<?include('../partials/geo-body-open.php');?>

<?
$parallaxH6 = "Layouts";
$parallaxH1 = "Your Portfolio";
$parallaxSubtitle = "Mansory Portfolio (4 Columns)";
include('../partials/geo-parallax.php');
?>

<div class="geo-portfolio-list geo-portfolio-list-mansory geo-portfolio-list-mansory-4-col">
	<div class="container">
		<div class="geo-content-area">

			<ul id="filters" class="geo-portfolio-filter">
				<li><a class="is-checked" data-filter="*">All</a></li>
				<li><a data-filter=".art">Art</a></li>
				<li><a data-filter=".business">Business</a></li>
				<li><a data-filter=".fashion">Fashion</a></li>
				<li><a data-filter=".photography">Photography</a></li>
			</ul>

			<div class="geo-portfolio-isotope clearfix">

				<article class="clearfix art " data-category="art">
					<img src="/img/portfolio-mansory-1.jpg" alt="portfolio" />
					<div class="fx-layout">
						<span>
							<i>
								<a href="#" class="geo-btn geo-btn-primary">Read More</a>
								<b>
									<h6>art</h6>
									<h5>Venice Art Pavilion</h5>
								</b>
							</i>
						</span>
					</div>
				</article>

				<article class="clearfix business " data-category="business">
					<img src="/img/portfolio-mansory-2.jpg" alt="portfolio" />
					<div class="fx-layout">
						<span>
							<i>
								<a href="#" class="geo-btn geo-btn-primary">Read More</a>
								<b>
									<h6>business</h6>
									<h5>Venice Art Pavilion</h5>
								</b>
							</i>
						</span>
					</div>
				</article>

				<article class="clearfix fashion art photography " data-category="fashion">
					<img src="/img/portfolio-mansory-3.jpg" alt="portfolio" />
					<div class="fx-layout">
						<span>
							<i>
								<a href="#" class="geo-btn geo-btn-primary">Read More</a>
								<b>
									<h6>fashion, art, photography</h6>
									<h5>Venice Art Pavilion</h5>
								</b>
							</i>
						</span>
					</div>
				</article>

				<article class="clearfix photography art " data-category="photography">
					<img src="/img/portfolio-mansory-4.jpg" alt="portfolio" />
					<div class="fx-layout">
						<span>
							<i>
								<a href="#" class="geo-btn geo-btn-primary">Read More</a>
								<b>
									<h6>photography, art</h6>
									<h5>Venice Art Pavilion</h5>
								</b>
							</i>
						</span>
					</div>
				</article>

				<article class="clearfix business photography " data-category="business">
					<img src="/img/portfolio-mansory-5.jpg" alt="portfolio" />
					<div class="fx-layout">
						<span>
							<i>
								<a href="#" class="geo-btn geo-btn-primary">Read More</a>
								<b>
									<h6>business, photography, art</h6>
									<h5>Venice Art Pavilion</h5>
								</b>
							</i>
						</span>
					</div>
				</article>

				<article class="clearfix art " data-category="art">
					<img src="/img/portfolio-mansory-6.jpg" alt="portfolio" />
					<div class="fx-layout">
						<span>
							<i>
								<a href="#" class="geo-btn geo-btn-primary">Read More</a>
								<b>
									<h6>art</h6>
									<h5>Venice Art Pavilion</h5>
								</b>
							</i>
						</span>
					</div>
				</article>

			</div>

			<div class="geo-portfolio-show-more clearfix">
				<a href="#" class="geo-btn geo-btn-primary geo-btn-lg">Show More</a>
			</div>

		</div>
	</div>
</div>

<?include('../partials/geo-body-close.php');?>
