<template>
  <section class="recommended-channels">
    <h2 class="recommended-channels__title">RECOMMENDED CHANNELS</h2>
    <ul class="recommended-channels__list">
      <li class="channel-item">
        <!--   <img
            src="~/assets/avatar1.jpg"
            alt="Channel Avatar"
            class="channel-item__avatar"
          /> -->
        <div class="channel-item__info">
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
          <span class="channel-item__game">Just Chatting</span>
          <span class="channel-item__name">midudev</span>
        </div>
        <div class="channel-item__viewers">
          <span class="channel-item__dot channel-item__dot--online"></span>
          <span class="channel-item__count">7.2k</span>
        </div>
      </li>
    </ul>
  </section>
</template>

<style lang="scss" scoped>
.recommended-channels {
  background-color: #18181b;
  width: 15rem;
  height: calc(100vh - 3.6em);
  &__title {
    color: #efeff1;
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 16px;
  }

  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
  }
}

.channel-item {
  display: flex;
  align-items: center;
  padding: 6px 0;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &__avatar {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 10px;
  }

  &__info {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }

  &__name {
    color: #efeff1;
    font-size: 14px;
    font-weight: 500;
  }

  &__game {
    color: #adadb8;
    font-size: 13px;
  }

  &__viewers {
    display: flex;
    align-items: center;
    gap: 5px;
  }

  &__dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;

    &--online {
      background-color: #eb0400;
    }

    &--offline {
      background-color: #adadb8;
    }
  }

  &__count {
    color: #adadb8;
    font-size: 13px;
  }
}
</style>
