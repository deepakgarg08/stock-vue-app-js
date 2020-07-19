<template>

        <!-- NAVBAR WITH DROPDOWN -->
    <nav class="navbar navbar-expand-sm navbar-light bg-light mb-3">
        <div class="container">
            <a class="navbar-brand" href="#">Stock Trader</a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="#">Portfolio</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">Stocks</a>
                </li>
                <li class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown">Save & Load</a>
                    <div class="dropdown-menu">
                        <a href="#" class="dropdown-item">Save Data</a>
                        <a href="#" class="dropdown-item">Load Data</a>
                    </div>
                </li>
            </ul>
        </div>
    </nav>
</template>