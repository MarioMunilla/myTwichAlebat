<script></script>

<template>
  <header class="header">
    <nav class="header__nav" aria-label="Main Navigation">
      <ul class="header__list">
        <li class="header__item header__left">
          <img src="~/assets/miduTech.svg" alt="Logo" class="header__logo" />MIDUTCH
          <img src="~/assets/verticalElipsis.svg" alt="Elipsis" class="header__elipsis" />
        </li>

        <li class="header__item search">
          <input type="text" class="search__input" placeholder="Search" />
          <button class="search__button">
            <img src="~/assets/search.svg" alt="Search" class="header__search--logo" />
          </button>
        </li>

        <li class="header__item header__right">
          <img src="~/assets/crown.svg" alt="Corona" class="header__icon" />
          <button class="header__button">
            <a href="#" class="header__link">Login</a>
          </button>
          <button class="header__button header__button--signup">
            <a href="#" class="header__link">Sign up</a>
          </button>
          <img src="~/assets/profile.svg" alt="Profile" class="header__icon" />
        </li>
      </ul>
    </nav>
  </header>
</template>
