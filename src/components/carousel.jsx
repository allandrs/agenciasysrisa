import React from 'react'

export function Carousel()  {
    const main_slider = $("#main-slider");
main_slider.owlCarousel({
	rtl: false,
	loop: true,
	nav: false,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: false,
	responsive: {
		0: {
			items: 1
		}
	}
});

const slider_thumb = $("#slider-thumb");
slider_thumb.owlCarousel({
	rtl: false,
	loop: true,
	margin: 12,
	nav: false,
	dots: false,
	autoplay: true,
	autoplayTimeout: 3000,
	autoplayHoverPause: false,
	responsive: {
		0: {
			items: 2
		}
	}
});

// Custom Navigation Events
$(".customNextBtn").click(function () {
	main_slider.trigger("next.owl.carousel");
});
$(".customPrevBtn").click(function () {
	main_slider.trigger("prev.owl.carousel");
});

$(".customNextBtn").click(function () {
	slider_thumb.trigger("next.owl.carousel");
});
$(".customPrevBtn").click(function () {
	slider_thumb.trigger("prev.owl.carousel");
});
    
    return (
        <section>
	    <div id="main-slider" className="owl-carousel owl-theme relative">
		<div className="relative w-full bg-[url('https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg')] bg-no-repeat bg-cover bg-center">
			<div className="bg-overlay grid grid-cols-1 lg:grid-cols-2 py-20 md:py-28 lg:py-32 xl:py-56 px-3 md:px-4 lg:px-8">
				{/* <!-- Content --> */}
				<div className="flex flex-col gap-5 md:gap-8">
					<div className="flex flex-col gap-4">
						<h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">Mukunda - Shotru - Trailer</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<div className="flex gap-3">
							<p>1h : 56min</p>
							<p><strong className="font-bold">Genres:</strong> <span>Action</span></p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-3 md:gap-4">
						<a href="single-video.html" className="btn btn-secondary">Watch Now <i className="pl-2 fa-solid fa-play"></i></a>
						<button className="btn btn-primary">Add To List <i className="pl-2 fa-solid fa-plus"></i></button>
						<button className="outline-icon w-10 h-10 border border-acent rounded-full flex items-center justify-center">
							<i className="fa-solid fa-share-nodes"></i>
						</button>
					</div>
				</div>
				{/* <!-- End Content --> */}
			</div>
		</div>
		<div className="relative w-full bg-[url('https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg')] bg-no-repeat bg-cover bg-center">
			<div className="bg-overlay grid grid-cols-1 lg:grid-cols-2 py-20 md:py-28 lg:py-32 xl:py-56 px-3 md:px-4 lg:px-8">
				<div className="flex flex-col gap-5 md:gap-8">
					<div className="flex flex-col gap-4">
						<h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">Mukunda - Shotru - Trailer</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<div className="flex gap-3">
							<p>1h : 56min</p>
							<p><strong className="font-bold">Genres:</strong> <span>Action</span></p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-3 md:gap-4">
						<a href="single-video.html" className="btn btn-secondary">Watch Now <i className="pl-2 fa-solid fa-play"></i></a>
						<button className="btn btn-primary">Add To List <i className="pl-2 fa-solid fa-plus"></i></button>
						<button className="outline-icon w-10 h-10 border border-acent rounded-full flex items-center justify-center">
							<i className="fa-solid fa-share-nodes"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
		<div className="relative w-full bg-[url('https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg')] bg-no-repeat bg-cover bg-center">
			<div className="bg-overlay grid grid-cols-1 lg:grid-cols-2 py-20 md:py-28 lg:py-32 xl:py-56 px-3 md:px-4 lg:px-8 ">
				<div className="flex flex-col gap-5 md:gap-8">
					<div className="flex flex-col gap-4">
						<h2 className="text-xl md:text-3xl lg:text-4xl font-semibold">Mukunda - Shotru - Trailer</h2>
						<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
						<div className="flex gap-3">
							<p>1h : 56min</p>
							<p><strong className="font-bold">Genres:</strong> <span>Action</span></p>
						</div>
					</div>
					<div className="flex flex-row items-center gap-3 md:gap-4">
						<a href="single-video.html" className="btn btn-secondary">Watch Now <i className="pl-2 fa-solid fa-play"></i></a>
						<button className="btn btn-primary">Add To List <i className="pl-2 fa-solid fa-plus"></i></button>
						<button className="outline-icon w-10 h-10 border border-acent rounded-full flex items-center justify-center">
							<i className="fa-solid fa-share-nodes"></i>
						</button>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div className="hidden lg:block absolute top-[25%] -right-8 bg-slate-700 py-5 pl-5 rounded-xl z-[1] w-[450px]">
		<div id="slider-thumb" className="owl-carousel owl-theme">
			<div className="item">
				<img src="https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_1280.jpg" className="w-64 h-72 object-cover rounded-xl" />
			</div>
			<div className="item">
				<img src="https://cdn.pixabay.com/photo/2013/10/02/23/03/mountains-190055_1280.jpg" className="w-64 h-72 object-cover rounded-xl" />
			</div>
			<div className="item">
				<img src="https://cdn.pixabay.com/photo/2016/08/11/23/48/mountains-1587287_1280.jpg" className="w-64 h-72 object-cover rounded-xl" />
			</div>
		</div>
		{/* <!-- Slider Nav --> */}
		<div className="flex flex-row gap-3 pt-4">
			<button type="button" role="presentation" className="customPrevBtn py-1 px-2 rounded-sm bg-primary text-white hover:bg-acent"><i className="fa-solid fa-chevron-left"></i></button>
			<button type="button" role="presentation" className="customNextBtn py-1 px-2 rounded-sm bg-primary text-white hover:bg-acent"><i className="fa-solid fa-chevron-right"></i></button>
		</div>
		{/* <!-- End Slider Nav --> */}
	</div>
</section>
    )
}