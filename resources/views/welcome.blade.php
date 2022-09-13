<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <meta name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover, shrink-to-fit=no">
    <title>BKK MHC</title>
    <meta name="title" content="BKK BISA | Portal Lowongan Kerja">
    <meta name="description" content="BKKBISA merupakan platform penyedia informasi lowongan pekerjaan berbasis online">
    <meta name="keywords"
        content="lowongan kerja, loker, lowongan kerja terbaru, lowongan, lowongan kerja smk, lowongan kerja sma, lowongan kerja cikarang, bkk bisa, bkk, lowongan bkk, loker terbaru, loker cikarang, kerja, lowongan kerja bumn, kerja sampingan, info lowongan kerja terbaru">
    <meta name="author" content="PT TNR SOLUTION INDONESIA">
    <meta name="robots" content="index, follow" />
    <meta name="theme-color" content="#100DD1">
    <meta name="apple-mobile-web-app-capable" content="yes">
    <meta name="apple-mobile-web-app-status-bar-style" content="black">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://www.bkkbisa.com">
    <meta property="og:title" content="BKK BISA | Portal Lowongan Kerja">
    <meta property="og:description"
        content="BKKBISA merupakan platform penyedia informasi lowongan pekerjaan berbasis online">
    <meta property="og:image" content="{{asset('temp/assets/img/bg-img/slider-jobs.png')}}">
    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <link rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&amp;display=swap">

    <link rel="icon" href="{{asset('temp/assets/img/core-img/logomuthia.jpg')}}">

    <link rel="apple-touch-icon" href="{{asset('temp/assets/img/core-img/logo.png')}}">
    <link rel="apple-touch-icon" sizes="152x152" href="{{asset('temp/assets/img/core-img/logo.jpg')}}">
    <link rel="apple-touch-icon" sizes="167x167" href="{{asset('temp/assets/img/core-img/logo.jpg')}}">
    <link rel="apple-touch-icon" sizes="180x180" href="{{asset('temp/assets/img/core-img/logo.jpg')}}">

    <link rel="stylesheet" href="{{asset('temp/assets/css/bootstrap.min.css')}}">
    <link rel="stylesheet" href="{{asset('temp/assets/css/animate.css')}}">
    <link rel="stylesheet" href="{{asset('temp/assets/css/owl.carousel.min.css')}}">
    <link rel="stylesheet" href="{{asset('temp/assets/css/font-awesome.min.css')}}">
    <link rel="stylesheet" href="{{asset('temp/assets/css/default/lineicons.min.css')}}">


    <link rel="stylesheet" href="{{asset('temp/assets/style.css')}}">

    <script type="application/ld+json">
        {
            "@context": "http://schema.org/",
            "@type": "SoftwareApplication",
            "name": "BKKBISA",
            "applicationCategory": "Lifestyle",
            "operatingSystem": "ANDROID,IOS,MACOS",
            "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "ratingCount": "238463"
            }
        }
    </script>


    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-170110560-1"
        type="f38df2e318323cf63b981047-text/javascript"></script>

    <script src="{{asset('temp/assets/js/jquery.min.js')}}" type="f38df2e318323cf63b981047-text/javascript"></script>

</head>

<body>

    <div class="toast pwa-install-alert shadow bg-info" role="alert" aria-live="assertive" aria-atomic="true"
        data-bs-delay="2000" data-bs-autohide="true">
        <a href="auth/registration">
            <div class="toast-body">
                <div class="content d-flex align-items-center">
                    <p class="mb-0 text-white"><b>Daftar</b> sekarang dan segera dapatkan pekerjaan</p>
                    <button class="btn-close ms-auto text-white" type="button" data-bs-dismiss="toast"
                        aria-label="Close"></button>
                </div>
            </div>
        </a>
    </div>

    <div class="header-area" id="headerArea">
        <div class="container h-100 d-flex align-items-center justify-content-between">

            <div class="logo-wrapper"><a href="" class="text-warning"><img src="http://2.bp.blogspot.com/-OCnppx_McYc/UU0Yy3CsUfI/AAAAAAAAADQ/-NEjmjoQ4uQ/s1600/smk+muthia+harapan.jpg" style="height:40px;" alt="">&nbsp;<b>BKK SMK MUTHIA</b></div>
 <!-- Authentication Links -->
                        @guest
 <a href="{{ route('login') }}">
                <div class="text-dark btn-outline-warning btn" id="suhaNavbarToggler">
                    <span></span><span>Login</span><span></span>
                </div>
            </a>
            <a href="{{ route('register') }}">
                <div class=" text-dark btn-outline-warning btn" id="suhaNavbarToggler">
                    <span></span><span>Register</span><span></span>
                </div>
            </a>
                        @else
 <a class="btn btn-outline-warning" href="{{ route('logout') }}"
                                       onclick="event.preventDefault();
                                                     document.getElementById('logout-form').submit();">
                                        {{ __('Logout') }}
                                    </a>

                                    <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                        @csrf
                                    </form>
                      
    </button>
    @endguest
           


        </div>
    </div>

    <div class="page-content-wrapper" style="margin-bottom: 70px !important">
        <div class="container">
            <div class="pt-3">

                <div class="hero-slides owl-carousel">

                    <div class="single-hero-slide" style="background-image: url({{asset('temp/assets/img/bg-img/slider-jobs.png')}})">
                        <div class="slide-content h-100 d-flex align-items-center">
                            <div class="slide-text">
                                <a class="btn btn-sm text-white"
                                    style="margin-top: 100px; background-color: #5644FF; !important"
                                    href="auth/registration" data-animation="fadeInUp" data-delay="100ms"
                                    data-wow-duration="800ms">DAFTAR SEKARANG</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="product-catagories-wrapper py-3">
            <div class="container">
                <div class="section-heading">
                    <h6>Kategori</h6>
                </div>
                <div class="product-catagory-wrap">
                    <div class="row g-3">

                        <div class="col-4">
                            <div class="card catagory-card">
                                <div class="card-body"><a class="text-danger" href="email"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
                                            <path
                                                d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383l-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z" />
                                        </svg><span><br>Random Email</span></a></div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="card catagory-card">
                                <div class="card-body"><a href="buatcv"><svg xmlns="http://www.w3.org/2000/svg"
                                            width="28" height="28" fill="currentColor"
                                            class="bi bi-file-earmark-person-fill" viewBox="0 0 16 16">
                                            <path
                                                d="M9.293 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.707A1 1 0 0 0 13.707 4L10 .293A1 1 0 0 0 9.293 0zM9.5 3.5v-2l3 3h-2a1 1 0 0 1-1-1zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm2 5.755V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-.245S4 12 8 12s5 1.755 5 1.755z" />
                                        </svg><span><br>Buat CV</span></a></div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="card catagory-card">
                                <div class="card-body"><a class="text-info" href="pelatihan"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            fill="currentColor" class="bi bi-person-video2" viewBox="0 0 16 16">
                                            <path d="M10 9.05a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
                                            <path
                                                d="M2 1a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H2ZM1 3a1 1 0 0 1 1-1h2v2H1V3Zm4 10V2h9a1 1 0 0 1 1 1v9c0 .285-.12.543-.31.725C14.15 11.494 12.822 10 10 10c-3.037 0-4.345 1.73-4.798 3H5Zm-4-2h3v2H2a1 1 0 0 1-1-1v-1Zm3-1H1V8h3v2Zm0-3H1V5h3v2Z" />
                                        </svg><span><br>Pelatihan</span></a></div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="card catagory-card">
                                <div class="card-body"><a class="text-success" href="tesonline/menu"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            fill="currentColor" class="bi bi-clipboard-check" viewBox="0 0 16 16">
                                            <path fill-rule="evenodd"
                                                d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z" />
                                            <path
                                                d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z" />
                                            <path
                                                d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z" />
                                        </svg><span><br>Tes Online</span></a></div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="card catagory-card">
                                <div class="card-body"><a class="text-danger" href="beasiswa"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            fill="currentColor" class="bi bi-mortarboard" viewBox="0 0 16 16">
                                            <path
                                                d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917l-7.5-3.5ZM8 8.46 1.758 5.965 8 3.052l6.242 2.913L8 8.46Z" />
                                            <path
                                                d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466 4.176 9.032Zm-.068 1.873.22-.748 3.496 1.311a.5.5 0 0 0 .352 0l3.496-1.311.22.748L8 12.46l-3.892-1.556Z" />
                                        </svg><span><br>Beasiswa</span></a></div>
                            </div>
                        </div>

                        <div class="col-4">
                            <div class="card catagory-card">
                                <div class="card-body"><a class="text-warning"
                                        href="tg://resolve?domain=channelbkkbisa"><svg
                                            xmlns="http://www.w3.org/2000/svg" width="28" height="28"
                                            fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                                            <path
                                                d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" />
                                        </svg><span><br>Grup</span></a></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="weekly-best-seller-area py-3">
            <div class="container">
                <div class="section-heading d-flex align-items-center justify-content-between">
                    <h6>Lowongan Kerja Terbaru</h6><a class="btn btn-success btn-sm" href="jobs">Lihat Semua</a>
                </div>
                <div class="row g-3">
                @foreach($job as $jobRow)
                    <div class="col-12 col-md-6">
                        <div class="card weekly-product-card">
                            <a href="jobs/bkk/2684/yQxNDKiem0/1">
                                <div class="card-body d-flex align-items-center">
                                    <div class="product-thumbnail-side" class="product-thumbnail d-block"><img
                                            style="height: 80px; width: 80px;"
                                            src="{{asset('work.png')}}"                        "
                                            alt="icon_job">
                                    </div>
                                    <div class="product-description" class="product-title d-block">
                                        <h6>{{$jobRow->pekerjaan}}</h6>
                                        <p class="sale-price" style="font-size: 11px"><i class="lni lni-home "></i>{{ $jobRow->tempat }}</p>
                                        <p class="sale-price" style="font-size: 11px"><i
                                                class="lni lni-graduation"></i>{{ $jobRow->tingkat }}</p>
                                        <p class="sale-price" style="font-size: 11px"><i
                                                class="lni lni-map-marker"></i>{{ $jobRow->alamat }}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                @endforeach
                </div>
            </div>
        </div>

        <div class="weekly-best-seller-area py-3 mb-3">
            <div class="container">
                <div class="section-heading d-flex align-items-center justify-content-between">
                    <h6>Lowongan Kerja Trending</h6><a class="btn btn-success btn-sm" href="jobs/jobs_trending">Lihat
                        Semua</a>
                </div>
                <div class="row g-3">
                @foreach($job as $jobRow)
                    <div class="col-12 col-md-6">
                        <div class="card weekly-product-card">
                            <a href="jobs/bkk/2684/yQxNDKiem0/1">
                                <div class="card-body d-flex align-items-center">
                                    <div class="product-thumbnail-side" class="product-thumbnail d-block"><img
                                            style="height: 80px; width: 80px;"
                                            src="{{asset('work.png')}}"                        "
                                            alt="icon_job">
                                    </div>
                                    <div class="product-description" class="product-title d-block">
                                        <h6>{{$jobRow->pekerjaan}}</h6>
                                        <p class="sale-price" style="font-size: 11px"><i class="lni lni-home "></i>{{ $jobRow->tempat }}</p>
                                        <p class="sale-price" style="font-size: 11px"><i
                                                class="lni lni-graduation"></i>{{ $jobRow->tingkat }}</p>
                                        <p class="sale-price" style="font-size: 11px"><i
                                                class="lni lni-map-marker"></i>{{ $jobRow->alamat }}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                @endforeach
                </div>
            </div>
        </div>
        <div class="flash-sale-wrapper mb-3">
            <div class="container">
                <div class="section-heading d-flex align-items-center justify-content-between">
                    <h6 class="me-1 d-flex align-items-center">Produk CV</h6><a class="btn btn-success btn-sm"
                        href="buatcv">Lihat Semua</a>
                </div>

                <div class="flash-sale-slide owl-carousel">

                    <div class="card flash-sale-card">
                        <div class="card-body"><a href="buatcv/detail/10"><img
                                    src="{{asset('temp/assets/img/product/CV10.png')}}" alt=""><span
                                    class="product-title">CV 10 + Surat Lamaran</span>
                                <p class="sale-price" style="font-size: 12px">
                                    Rp. 35.000
                                    <span class="real-price" style="font-size: 11px">50.000</span>
                                </p><span class="progress-title">3124 Terjual</span>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 3124%"
                                        aria-valuenow="3124" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                    </div>
                    <div class="card flash-sale-card">
                        <div class="card-body"><a href="buatcv/detail/9"><img
                                    src="{{asset('temp/assets/img/product/CV09.png')}}" alt=""><span
                                    class="product-title">CV 09 + Surat Lamaran</span>
                                <p class="sale-price" style="font-size: 12px">
                                    Rp. 35.000
                                    <span class="real-price" style="font-size: 11px">50.000</span>
                                </p><span class="progress-title">2875 Terjual</span>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 2875%"
                                        aria-valuenow="2875" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                    </div>
                    <div class="card flash-sale-card">
                        <div class="card-body"><a href="buatcv/detail/4"><img
                                    src="{{asset('temp/assets/img/product/CV04.png')}}" alt=""><span
                                    class="product-title">CV 04</span>
                                <p class="sale-price" style="font-size: 12px">
                                    Rp. 25.000
                                    <span class="real-price" style="font-size: 11px">35.000</span>
                                </p><span class="progress-title">1781 Terjual</span>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 1781%"
                                        aria-valuenow="1781" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                    </div>
                    <div class="card flash-sale-card">
                        <div class="card-body"><a href="buatcv/detail/7"><img
                                    src="{{asset('temp/assets/img/product/CV07.png')}}" alt=""><span
                                    class="product-title">CV 07</span>
                                <p class="sale-price" style="font-size: 12px">
                                    Rp. 25.000
                                    <span class="real-price" style="font-size: 11px">35.000</span>
                                </p><span class="progress-title">1742 Terjual</span>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 1742%"
                                        aria-valuenow="1742" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                    </div>
                    <div class="card flash-sale-card">
                        <div class="card-body"><a href="buatcv/detail/5"><img
                                    src="{{asset('temp/assets/img/product/CV05.png')}}" alt=""><span
                                    class="product-title">CV 05</span>
                                <p class="sale-price" style="font-size: 12px">
                                    Rp. 25.000
                                    <span class="real-price" style="font-size: 11px">35.000</span>
                                </p><span class="progress-title">1655 Terjual</span>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 1655%"
                                        aria-valuenow="1655" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                    </div>
                    <div class="card flash-sale-card">
                        <div class="card-body"><a href="buatcv/detail/8"><img
                                    src="{{asset('temp/assets/img/product/CV08.png')}}" alt=""><span
                                    class="product-title">CV 08</span>
                                <p class="sale-price" style="font-size: 12px">
                                    Rp. 25.000
                                    <span class="real-price" style="font-size: 11px">35.000</span>
                                </p><span class="progress-title">1611 Terjual</span>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 1611%"
                                        aria-valuenow="1611" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                    </div>
                    <div class="card flash-sale-card">
                        <div class="card-body"><a href="buatcv/detail/2"><img
                                    src="{{asset('temp/assets/img/product/CV02.png')}}" alt=""><span
                                    class="product-title">CV 02</span>
                                <p class="sale-price" style="font-size: 12px">
                                    Rp. 25.000
                                    <span class="real-price" style="font-size: 11px">35.000</span>
                                </p><span class="progress-title">1439 Terjual</span>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 1439%"
                                        aria-valuenow="1439" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                    </div>
                    <div class="card flash-sale-card">
                        <div class="card-body"><a href="buatcv/detail/6"><img
                                    src="{{asset('temp/assets/img/product/CV06.png')}}" alt=""><span
                                    class="product-title">CV 06</span>
                                <p class="sale-price" style="font-size: 12px">
                                    Rp. 25.000
                                    <span class="real-price" style="font-size: 11px">35.000</span>
                                </p><span class="progress-title">1252 Terjual</span>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 1252%"
                                        aria-valuenow="1252" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                    </div>
                    <div class="card flash-sale-card">
                        <div class="card-body"><a href="buatcv/detail/1"><img
                                    src="{{asset('temp/assets/img/product/CV01.png')}}" alt=""><span
                                    class="product-title">CV 01</span>
                                <p class="sale-price" style="font-size: 12px">
                                    Rp. 25.000
                                    <span class="real-price" style="font-size: 11px">35.000</span>
                                </p><span class="progress-title">1251 Terjual</span>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 1251%"
                                        aria-valuenow="1251" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                    </div>
                    <div class="card flash-sale-card">
                        <div class="card-body"><a href="buatcv/detail/3"><img
                                    src="{{asset('temp/assets/img/product/CV03.png')}}" alt=""><span
                                    class="product-title">CV 03</span>
                                <p class="sale-price" style="font-size: 12px">
                                    Rp. 25.000
                                    <span class="real-price" style="font-size: 11px">35.000</span>
                                </p><span class="progress-title">1228 Terjual</span>

                                <div class="progress">
                                    <div class="progress-bar" role="progressbar" style="width: 1228%"
                                        aria-valuenow="1228" aria-valuemin="0" aria-valuemax="100"></div>
                                </div>
                            </a></div>
                    </div>

                </div>
            </div>
            <div class="container">


            </div>
        </div>
        <div class="blog-wrapper py-3">
            <div class="container">
                <div class="section-heading d-flex align-items-center justify-content-between">
                    <h6 class="me-1 d-flex align-items-center">
                        Pelatihan Terbaru
                    </h6><a class="btn btn-success btn-sm" href="pelatihan">Lihat Semua</a>
                </div>
            </div>
        </div>

        <div class="flash-sale-wrapper">
            <div class="container">
                <div class="section-heading d-flex align-items-center justify-content-between"
                    style="margin-bottom: -65px">
                    <h6 class="me-1 d-flex align-items-center">Media Terbaru</h6><a class="btn btn-success btn-sm"
                        href="media">Lihat Semua</a>
                </div>
            </div>

            <div class="page-content-wrapper">

                <div class="pt-3 mt">
                    <div class="container">
                        <div class="row" style="margin-top: 20px">
                            <div class="col-12 mb-2">
                                <div class="card top-product-card">
                                    <div class="card-body">
                                        <a class="product-thumbnail d-block" href="media/play/RzXEPdit2C">
                            
                                        <a style="font-size: 12px;"><svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-play-btn"
                                                viewBox="0 0 16 16">
                                                <path
                                                    d="M6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z" />
                                                <path
                                                    d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm15 0a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4z" />
                                            </svg>
                                            1456 x ditonton <svg xmlns="http://www.w3.org/2000/svg" width="16"
                                                height="16" fill="currentColor" class="bi bi-dot" viewBox="0 0 16 16">
                                                <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                            </svg> <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12"
                                                fill="currentColor" class="bi bi-calendar3" viewBox="0 0 16 16">
                                                <path
                                                    d="M14 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zM1 3.857C1 3.384 1.448 3 2 3h12c.552 0 1 .384 1 .857v10.286c0 .473-.448.857-1 .857H2c-.552 0-1-.384-1-.857V3.857z" />
                                                <path
                                                    d="M6.5 7a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-9 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm3 0a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
                                            </svg> 2 bulan yang lalu</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="cta-area" style="margin-top: -50px;">
            <div class="container">
                <div class="cta-text p-3 p-lg-5 mb-3" style="background-image: url({{asset('temp/assets/img/aktivasi.png')}})">
                    <h4>Diskon 20% Aktivasi Akun</h4>
                    <p>Aktifkan akun anda dan segera dapatkan pekerjaan</p><a class="btn btn-warning text-white"
                        href="profile/upgrade">Aktifkan Sekarang</a>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="card discount-coupon-card border-0">
                <div class="card-body">
                    <div class="coupon-text-wrap align-items-center">
                        <h4 style="color: white;">Mitra BKKBISA</h4>
                        <p style="color: white;">Gabung Program Mitra BKKBISA Sekarang!<br> Daftar Gratis, Penghasilan
                            Fantastis!</p><a style="color: white;" class="btn btn-primary" href="afiliasi">Gabung
                            Sekarang</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="featured-products-wrapper py-3">
            <div class="container">
                <div class="row g-3">

                    <div class="col-6 col-md-4 col-lg-3">
                        <div class="card featured-product-card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="product-description"><a class="product-title d-block"
                                                href="#">Lowongan</a>
                                            <p class="sale-price">2,630</p>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <i style="font-size: 25px" class="lni lni-briefcase mt-2 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <div class="card featured-product-card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="product-description"><a class="product-title d-block"
                                                href="#">Pengguna</a>
                                            <p class="sale-price">278,823</p>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <i style="font-size: 25px" class="lni lni-users mt-2 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <div class="card featured-product-card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="product-description"><a class="product-title d-block"
                                                href="#">Bekerja</a>
                                            <p class="sale-price">7,876</p>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <i style="font-size: 25px" class="lni lni-handshake mt-2 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-6 col-md-4 col-lg-3">
                        <div class="card featured-product-card">
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-8">
                                        <div class="product-description"><a class="product-title d-block" href="#">BKK
                                            </a>
                                            <p class="sale-price">64</p>
                                        </div>
                                    </div>
                                    <div class="col-4">
                                        <i style="font-size: 25px" class="lni lni-apartment mt-2 text-primary"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="page-content-wrapper" style="margin-top: -20px">

            <div class="pt-3 mt">
                <div class="container">
                    <div class="row">
                        <div class="col-12 mb-2">
                            <div class="card top-product-card">
                                <div class="card-body">
                                    <h5 style="text-align: center;">Download Aplikasi BKKBISA</h5>
                                    <p style="text-align: center;" style="font-family: 'Open Sans';"
                                        style="font-size: 13px">Portal lowongan kerja yang memberikan kemudahan
                                        mendapatkan pekerjaan dengan cepat</p>
                                    <div class="row g-3">
                                        <div class="col-6">
                                            <div>
                                                <div><a href="https://bkkbisa.id/apps"><img class="mb-2"
                                                            src="{{asset('temp/assets/img/btn-google-play.png')}}"
                                                            style="width: 100%" style="height: 30px" alt=""></a></div>
                                            </div>
                                        </div>

                                        <div class="col-6">
                                            <div>
                                                <div><a href="#"><img class="mb-2"
                                                            src="{{asset('temp/assets/img/btn-app-store.png')}}"
                                                            style="width: 100%" style="height: 30px" alt=""></a></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row g-3"
                                    style="padding-left: 50px; padding-right: 50px; margin-bottom: 10px">
                                    <div class="col-3">
                                        <div>
                                            <div><a
                                                    href="https://api.whatsapp.com/send?phone=628111366110&text=%2AHallo%20BKKBISA%2A%0D%0A%0D%0ASaya%20butuh%20bantuan%20%0D%0A%0D%0A%0D%0A%0D%0ATerimkaish"><img
                                                        class="mb-2" src="{{asset('temp/assets/img/icons/whatsapp.svg')}}"
                                                        style="width: 80%" style="height: 40px" alt=""></a></div>
                                        </div>
                                    </div>

                                    <div class="col-3">
                                        <div>
                                            <div><a href="https://www.instagram.com/bkkbisa/"><img class="mb-2"
                                                        src="{{asset('temp/assets/img/icons/instagram.svg')}}"
                                                        style="width: 80%" style="height: 40px" alt=""></a></div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div>
                                            <div><a href="tg://resolve?domain=channelbkkbisa"><img class="mb-2"
                                                        src="{{asset('temp/assets/img/icons/telegram.svg')}}"
                                                        style="width: 80%" style="height: 40px" alt=""></a></div>
                                        </div>
                                    </div>
                                    <div class="col-3">
                                        <div>
                                            <div><a href="https://m.me/bkkbisadotcom/"><img class="mb-2"
                                                        src="{{asset('temp/assets/img/icons/facebook2.png')}}"
                                                        style="width: 80%" style="height: 40px" alt=""></a></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>

    <div class="internet-connection-status" id="internetStatus"></div>

    <div class="footer-nav-area" id="footerNav">
        <div class="container h-100 px-0">
            <div class="suha-footer-nav h-100 bg-dark text-white">
                <ul class="h-100 d-flex align-items-center justify-content-between ps-0 bg-warning">
                    <li class="active text-white"><a href="{{ url('/') }}"><i class="lni text-white lni-home"></i>Home</a></li>
                    <li class=""><a href="media"><i class="lni text-white lni-video"></i>Media BKK</a></li>
                    <li class=""><a href="{{url('jobs')}}"><i class="lni text-white lni-briefcase"></i>Lowongan Kerja</a></li>
                    <li class=""><a href="bantuan"><i class="lni text-white lni-headphone-alt"></i>Bantuan</a></li>
                    <li class=""><a href="{{url('profil')}}"><i class="lni text-white lni-user"></i>Profil</a></li>
                </ul>
            </div>
        </div>
    </div>

    <script src="{{asset('temp/assets/js/bootstrap.bundle.min.js')}}"
        type="f38df2e318323cf63b981047-text/javascript"></script>
    <script src="{{asset('temp/assets/js/owl.carousel.min.js')}}"
        type="f38df2e318323cf63b981047-text/javascript"></script>
    <script src="{{asset('temp/assets/js/default/dark-mode-switch.js')}}"
        type="f38df2e318323cf63b981047-text/javascript"></script>
    <script src="{{asset('temp/assets/js/default/no-internet.js')}}"
        type="f38df2e318323cf63b981047-text/javascript"></script>
    <script src="{{asset('temp/assets/js/default/active.js')}}"
        type="f38df2e318323cf63b981047-text/javascript"></script>
    <script src="{{asset('temp/assets/js/pwa.js')}}" type="f38df2e318323cf63b981047-text/javascript"></script>


    <script type="f38df2e318323cf63b981047-text/javascript">
        function ajaxcsrf() {
            var csrfname = 'csrf_test_name';
            var csrfhash = '067eda4fe83aae8b3fe806d68901d2f2';
            var csrf = {};
            csrf[csrfname] = csrfhash;
            $.ajaxSetup({
                "data": csrf
            });
        }

        function reload_ajax() {
            table.ajax.reload(null, false);
        }
    </script>

    <script type="f38df2e318323cf63b981047-text/javascript">
        window.OneSignal = window.OneSignal || [];
        OneSignal.push(function() {
            OneSignal.init({
                appId: "bb02f87d-5d4a-40af-8012-dfd3a7070749",
            });
        });
    </script>
    <script src="{{asset('temp/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js')}}"
        data-cf-settings="f38df2e318323cf63b981047-|49" defer=""></script>
    <script defer
        src="https://static.cloudflareinsights.com/beacon.min.js/v652eace1692a40cfa3763df669d7439c1639079717194"
        integrity="sha512-Gi7xpJR8tSkrpF7aordPZQlW2DLtzUlZcumS8dMQjwDHEnw9I7ZLyiOj/6tZStRBGtGgN6ceN6cMH8z7etPGlw=="
        data-cf-beacon='{"rayId":"748fe39769c39f7f","token":"bd8710f47c01489bae7acee94ce4f2ce","version":"2022.8.1","si":100}'
        crossorigin="anonymous"></script>
</body>

</html>