<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <title>{{ config('app.name', 'Laravel') }}</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.gstatic.com">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    
    @vite(['resources/sass/app.scss', 'resources/js/app.js'])
</head>
<body>
    <div id="app">
    <div class="footer-nav-area" id="footerNav">
        <div class="container h-100 px-0">
            <div class="suha-footer-nav h-100 bg-dark text-white">
                <ul class="h-100 d-flex align-items-center justify-content-between ps-0 bg-warning">
                    <li class="active text-white"><a href="{{ url('/') }}"><i class="lni text-white lni-home"></i>Home</a></li>
                    <li class=""><a href="media"><i class="lni text-white lni-video"></i>Media BKK</a></li>
                    <li class=""><a href="jobs"><i class="lni text-white lni-briefcase"></i>Lowongan Kerja</a></li>
                    <li class=""><a href="bantuan"><i class="lni text-white lni-headphone-alt"></i>Bantuan</a></li>
                    <li class=""><a href="profile"><i class="lni text-white lni-user"></i>Profil</a></li>
                </ul>
            </div>
        </div>
    </div>

        <main class="py-4">
            @yield('content')
        </main>
    </div>
</body>
</html>
