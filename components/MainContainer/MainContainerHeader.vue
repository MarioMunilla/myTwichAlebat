<template>
  <header class="header">
    <nav class="header__nav" aria-label="Main Navigation">
      <ul class="header__list">
        <li class="header__item header__left">
          <NuxtLink to="/">
            <img src="~/assets/miduTech.svg" alt="Logo" class="header__logo" />
          </NuxtLink>
          <NuxtLink to="/" class="header__brand">MIDUTCH</NuxtLink>
          <NuxtLink to="/">
            <img
              src="~/assets/verticalElipsis.svg"
              alt="Elipsis"
              class="header__elipsis"
            />
          </NuxtLink>
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
            <NuxtLink class="header__link" to="/login">Login</NuxtLink>
          </button>
          <button class="header__button header__button--signup">
            <NuxtLink class="header__link" to="/signup">Sign up</NuxtLink>
          </button>
          <img src="~/assets/profile.svg" alt="Profile" class="header__icon" />
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: $header-bg-color;
  color: $header-text-color;
  padding: $header-padding;
  display: flex;
  justify-content: center;
  margin: 0;
  $icon-invert-filter: invert(1);
  width: 100vw;

  &__nav {
    flex: 1;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list {
    display: flex;
    list-style: none;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
  }

  &__item {
    display: flex;
    align-items: center;
  }

  &__left {
    justify-content: flex-start;
    flex: 1;
  }

  &__right {
    justify-content: flex-end;
    flex: 1;
  }

  &__logo,
  &__elipsis,
  &__icon {
    width: 36px;
    height: 36px;
    margin: 0 10px;
  }

  &__search--logo,
  &__icon {
    filter: $icon-invert-filter;
  }

  &__link {
    color: $header-text-color;
    text-decoration: none;
  }

  &__button {
    background-color: transparent;
    border: 1px solid $header-text-color;
    border-radius: 5px;
    padding: 5px 15px;
    margin-left: 10px;
    cursor: pointer;
    transition: background-color 0.3s;

    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }

    &--signup {
      background-color: rgb(104, 104, 204);
      color: $header-bg-color;

      &:hover {
        background-color: rgba(255, 255, 255, 0.482);
      }
    }
  }

  &__brand {
    color: $header-text-color;
    margin: 0 10px;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
  }
}

.search {
  flex: 2;
  display: flex;
  align-items: center;
  background-color: $search-bg-color;
  border-radius: $search-border-radius;
  padding: 5px;
  width: 100%;

  &__input {
    border: none;
    background: none;
    color: $header-text-color;
    padding: 5px;
    flex-grow: 1;
    margin-right: 5px;
  }

  &__button {
    background: none;
    border: none;
    cursor: pointer;
  }

  &__search {
    width: 20px;
    height: 20px;
    filter: invert(1);
    background-color: red;

    &--logo {
      filter: invert(1);
    }
  }
}

@mixin responsive-header() {
  @media (max-width: 599px) {
    .header {
      background-color: $header-bg-color;
    }

    .header__nav {
      flex-direction: column;
    }

    .header__left,
    .search,
    .header__right {
      flex: none;
      width: 100%;
      justify-content: center;
      margin-bottom: 10px;
    }
  }

  @media (min-width: 600px) and (max-width: 1199px) {
    .header {
      background-color: $header-bg-color;
    }

    .header__nav {
      flex-direction: row;
    }

    .header__left {
      justify-content: flex-start;
    }

    .search {
      justify-content: center;
      width: 60%;
    }

    .header__right {
      justify-content: flex-end;
    }
  }

  @media (min-width: 1200px) {
    .header {
      background-color: $header-bg-color;
    }

    .header__nav {
      flex-direction: row;
    }

    .header__left {
      justify-content: flex-start;
    }

    .search {
      justify-content: center;
      flex-grow: 1;
    }

    .header__right {
      justify-content: flex-end;
    }
  }
}
</style>
